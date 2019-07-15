const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 6000;
const path = require('path');
const mockRouter = require('./mock');
const proxy = require('http-proxy-middleware');
const superagent = require('superagent')
const graphUtil = require('./graph/graphUtil')
const router = express.Router()
//行内
// const API_ADDRESS = 'http://10.25.95.51:18091';
//行外
const API_ADDRESS = 'http://192.168.1.70:8091';

app.use(cookieParser());


var api = API_ADDRESS + '/crm-jj/api/search/gdb/standardAtlasExpand';

var typeMap = {
  'stockRight': 'HOLD_SHARES', // 图谱顺序 1
  'executive': 'OFFICER', // 2
  'invest': 'INVEST', // 3
  'credit': "CREDIT", // 4
  'guarantee': 'GUARANTEEE', // 5·
  'transfer': 'TRANSFER', // 6
  'borrowing': 'BANK_LOAN', // 7
  'concert': 'CONCERT', // 8
  'actual_controller': 'ACTUAL_CONTROLLER', // 9
  'upAndDown': 'UP_DOWN_STREAM', // 10
  'faction': 'CLIQUE', // 11
  'exceptionGuarantee': 'EXCEPTION_GURANTEEE', // 12
  'beneficiary': 'BENEFICIARY' // 13
}

/** 从后端拿数据 */
app.use('/crm-jj/api/relation_graph/*', function (req, res, next) {
  console.log('req.query :', req.query);
  req.query.name = req.query.name.toLocaleUpperCase();
  var type = req.params[0]
  var sa = superagent.post(api).set('Cookie', 'JSESSIONID=' + req.cookies['JSESSIONID']);
  sa.send({
    "atlasType": typeMap[type],
    "graph": "cims",
    "vertexId": 'Company/' + req.query.name
  })
  sa.then(function (data) {
    if (!data.ok || !data.body.success || !data.body.payload) {
      res.json({
        success: false,
        msg: '图谱服务器异常',
        data: {}
      })
    } else {
      req.local = data.body.payload
      next();
    }
  })
})

/** 通用引力图结构转换，属性设置 */
app.use([
  '/crm-jj/api/relation_graph/credit',
  '/crm-jj/api/relation_graph/borrowing',
  '/crm-jj/api/relation_graph/guarantee',
  '/crm-jj/api/relation_graph/upAndDown',
  '/crm-jj/api/relation_graph/faction',
  '/crm-jj/api/relation_graph/exceptionGuarantee',
  '/crm-jj/api/relation_graph/beneficiary',
  '/crm-jj/api/relation_graph/composite'
], function (req, res, next) {
  try {
    req.local = req.local.data && graphUtil.parseNetwork(req.local.data)
    next()
  } catch (e) {
    console.log('力图:',e);
  }
})

app.use(['/crm-jj/api/relation_graph/stockRight'], function (req, res, next) {
  try {
    req.local = req.local.treeData
    graphUtil.traversalTree(req.local, function (data, prev) {
      graphUtil.setStructureProp(data, prev)
    })
    next()
  } catch (e) {
    console.log('stockRight :',e);
  }
})

//树图
router.use(['/crm-jj/api/relation_graph/:type'], function (req, res, next) {
  var treeList = ['executive','invest','transfer','actual_controller', 'concert']
  if (treeList.indexOf(req.params.type) > -1) {
    try {
      req.local = req.local.treeData
      req.local && graphUtil.traversalTree(req.local, function (data, prev) {
        data.vertex["name"] = data.vertex.name || data.vertex.cn_name;
        graphUtil.setTreeProp(data, prev)
      })
      req.local && graphUtil.merge(req.local)
      console.log('req.local: ', req.local)
    } catch (e) {
      console.log('树图 :',e);
    }
  }
  next()
})


/** 最终出口，发送处理结果 */
app.use('/crm-jj/api/relation_graph/:type', function (req, res, next) {
  res.send({
    success: true,
    msg: 'ok',
    data: req.local
  })
})

app.use('/crm-jj/api', proxy({
  target: API_ADDRESS, // target host
  changeOrigin: true,               // needed for virtual hosted sites
  ws: true,                         // proxy websockets
}));


app.use('/', mockRouter);



if(process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '../build', 'index.html'));
    });
}



app.listen(port, () => console.log(`Listening on port ${port}`));

// NODE_ENV=production node server/index.js
