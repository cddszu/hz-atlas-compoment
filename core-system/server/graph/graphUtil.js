function parseTree (data) {
  traversalTree(data, function (data) {
    if (!data) {
      return
    }
    data.name = data.vertex.name || data.vertex._label
    data.properties = data.vertex
    delete data.vertex
  })

  return data
}

function traversalTree (data, cb, prev) { // 树型结构深度遍历
  cb && cb(data, prev)

  if (data && data.children) {
    data.children.forEach(function (c) {
      traversalTree(c, cb, data)
    })
  }
}

function traversalEdges (data) { // 边 遍历实体出 实体名称(网图)
  data.edges.map(function(el){
    el.fromkey = el._from.split('/')[1]
    el.tokey = el._to.split('/')[1]
    data.vertices.forEach(function (e) {
      if(e.object_key === el.fromkey || e._key === el.fromkey){
        el.fromName = e.cn_name || e.name || '未知'
      }
      if(e.object_key === el.tokey || e._key === el.tokey){
        el.toName = e.cn_name || e.name || '未知'
      }
    })
    return el
  })
}

function traversalDataEdges (data) { // 找出网图不存在实体的边，然后删掉
  data.edges = data.edges.filter(function(cur, i){
    var flagFrom = false, flagTo = false
    var index = data.vertexes.findIndex(function(el, i){
      if(cur._from === el._id){
        flagFrom = true
      }
      if(cur._to === el._id){
        flagTo = true
      }
      return flagFrom && flagTo
    })
    return index > -1
  })
  return data
}

var getChildrenByLayer = function (data, layer) {
  if (!data || !data.children || layer < 1) return []

  var queue = [data]
  var res = []
  while (layer-- > 0) {
    while (queue.length) {
      var child = queue.shift()
      res = res.concat(child.children || [])
    }
    queue = res
    res = []
  }
  return queue
}

function parseNetwork (data) {  // 网状图
  var graph = {
    vertexes: data.vertices || data.vertexes,
    edges: data.edges
  }
  /** 每条边都需要有 _id */
  graph.edges.forEach(function (e) {
    e._id = e._id || e._schema + '/' + e._from.split('/')[1]
    e.label = e._label || ''
  })

  graph.vertexes.forEach(function (e) {
    e["name"] = e.name || e.cn_name;
  })

  /** 边、点去重 */
  unique(graph.edges, '_id')
  unique(graph.vertexes, '_id')

  return graph
}

function unique (data, key) {
  var keys = {}
  for (var i = 0; i < data.length; i++) {
    var d = data[i]
    if (keys[d[key]]) {
      data.splice(i, 1)
      i--
    } else {
      keys[d[key]] = true
    }
  }
}

function setStructureProp (data, prev) { // 股权结构字段
  if (!data || !data.vertex) {
    return
  }
  data.properties = data.vertex
  data.name = data.properties.name || data.properties._label
  delete data.vertex

  var id = data.properties._id
  prev = prev || { edges: [] }
  data.relation = prev.edges.filter(function (e) {
    return [e._from, e._to].indexOf(id) > -1
  })
  data.value = data.relation[0] && data.relation[0]._label
}

function filterTreeByDirection (data, direction) { // 结构图方向过滤
  var children = data.children || []
  var curId = data.properties._id
  for (var i = 0; i < children.length; i++) {
    var childEdge = children[i].relation[0] || {}
    if (childEdge[direction] !== curId) {
      children.splice(i, 1)
      i--
    }
  }
}
function setTreeProp (data, prev) { // 设置树型字段
  if (!data || !data.vertex) {
    return
  }
  data.properties = data.vertex
  data.name = data.properties.name || data.properties._label
  delete data.vertex

  var id = data.properties._id
  prev = prev || { edges: [], allEdges: [] }
  data.relation = prev.edges.filter(function (e) {
    return [e._from, e._to].indexOf(id) > -1
  })
  data.allRelations = prev.allEdges.filter(function (e) {
    return [e._from, e._to].indexOf(id) > -1
  })
  data.label = data.relation[0] && data.relation[0]._label
}

var merge = function (data) {
  traversalTree(data, function (d) {
    if (!d.children || d.children.length <= 10) {
      return
    }
    var n = d.children.length

    var LIMIT = 9
    d.children = d.children.slice(0, LIMIT)  // 保留前 LIMIT 家
    d.children[LIMIT] = {
      name: '其余' + (n - LIMIT) + '家企业'
    }
  })
}

module.exports = {
  parseTree: parseTree,
  parseNetwork: parseNetwork,
  getChildrenByLayer: getChildrenByLayer,
  traversalTree: traversalTree,
  setStructureProp: setStructureProp,
  filterTreeByDirection: filterTreeByDirection,
  setTreeProp: setTreeProp,
  merge: merge,
  traversalEdges: traversalEdges,
  traversalDataEdges: traversalDataEdges,
}
