module.exports = function (router) {
  router.post('/mock/crm-jj/api/noticeManage/find', function (req, res, next) {
      res.json(
        {
          success: true,
          message: "",
          payload: [
          {
            'workOutsideId': 1,
            'title' : "工行总部信贷部沟通贷款事宜",
            'createName': "肖鹰松",
            'reportToName': "boss",
            'longitude': "",
            'latitude': "",
            'addressName': "中国北京复兴门大街甲5号",
            'startDt': "09:30",
            'endDt': "09:30",
            'planDesc': "",
            'relationCustomers': [{}, {}, {}],
            'relationBusiness': [{}, {}, {}],
            'relationSchedulers': [{}, {}, {}]
          },
          {
            'workOutsideId': 0,
            'title' : "工行总部信贷部沟通贷款事宜",
            'createName': "肖鹰松",
            'reportToName': "boss",
            'longitude': "",
            'latitude': "",
            'addressName': "中国北京复兴门大街甲5号",
            'startDt': "09:30",
            'endDt': "09:30",
            'planDesc': "",
            'relationCustomers': [{}, {}, {}],
            'relationBusiness': [{}, {}, {}],
            'relationSchedulers': [{}, {}, {}]
          },
          {
            'workOutsideId': 2,
            'title' : "工行总部信贷部沟通贷款事宜",
            'createName': "肖鹰松",
            'reportToName': "boss",
            'longitude': "",
            'latitude': "",
            'addressName': "中国北京复兴门大街甲5号",
            'startDt': "09:30",
            'endDt': "09:30",
            'planDesc': "",
            'relationCustomers': [{}, {}, {}],
            'relationBusiness': [{}, {}, {}],
            'relationSchedulers': [{}, {}, {}]
          },
        ]
      }
      )
  })




  router.get('/mock/crm-jj/api/mobile/workOutside/queryWorkOutsideDetail', function (req, res, next) {
    res.json({
        success: true,
        message: "",
        payload:
        {
          'workOutsideId':1,
          'title' : "工行总部信贷部沟通贷款事宜",
          'createName': "肖鹰松",
          'reportToName':"boss",
          'longitude':"",
          'latitude':"",
          'addressName':"中国北京复兴门大街甲5号",
          'addressFirst':'大街甲5号',
          'startDt':"09:30",
          'endDt':"09:30",
          'planDesc':"工行总部信贷部沟通贷款事宜",
          'createdDt':"09:30",
          'createdBy':"admin",
          'createdById':1,
          'updateBy':"admin",
          'updateById':1,
          'isNotRead':"1",		//1未读，0已读
          'enabledFlag':"1",			//1有效，0无效，暂时不需要使用
          'relationCustomers':[{},{},{}],
          'relationBusiness':[{},{}, {}],
          'relationSchedulers':[{},{},{}]
        }
    })
})
}
