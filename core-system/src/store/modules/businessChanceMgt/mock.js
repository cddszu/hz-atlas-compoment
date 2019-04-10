module.exports = function (router) {

  router.get('/mock/crm-jj/api/message/messageBox', function (req, res, next) {
    let todyDate = new Date()
    res.json({
      "success": true,
      "payload": {
        "content": [{
          "messageType": "3",
          "messageTypeName": "商机提醒",
          "createDate": todyDate,
          "num": 93
        }, {
          "messageType": "4",
          "messageTypeName": "公告提醒",
          "createDate": "2019-01-18 14:52:52",
          "num": 28
        }, {
          "messageType": "5",
          "messageTypeName": "日程提醒",
          "createDate": "2019-01-17 07:30:00",
          "num": 10
        }],
        "totalPages": 1,
        "totalElements": 131,
        "last": true,
        "number": 0,
        "size": 0,
        "first": true,
        "sort": null,
        "numberOfElements": 3
      }
    })
  })

  router.get('/mock/crm-jj/api/message/list', function (req, res, next) {
    // req.json({"subMsgType":"","readStatus":"","pageNo":1,"pushDt":"","msgType":"","pageSize":10})
    res.json({
      "success": true,
      "payload": {
        "content": [{
          "id": 103,
          "msgTitle": "我是客户呀",
          "companyId": null,
          "companyName": null,
          "msgCategoryType": null,
          "msgType": null,
          "isInner": null,
          "pushDate": "2019-01-10",
          "content": null,
          "status": "1",
          "msgkey": "3"
        }, {
          "id": 144,
          "msgTitle": "s",
          "companyId": "hymcacmhjlmpyohptvmwuppjohyqqzqz",
          "companyName": null,
          "msgCategoryType": null,
          "msgType": "3",
          "isInner": "否",
          "pushDate": "2019-01-16",
          "content": null,
          "status": "1",
          "msgkey": "61525"
        }, {
          "id": 149,
          "msgTitle": "广州二",
          "companyId": "hymcacmhjlmpyohptvmwuppjohyqqzqz",
          "companyName": null,
          "msgCategoryType": null,
          "msgType": "3",
          "isInner": "否",
          "pushDate": "2019-01-16",
          "content": null,
          "status": "1",
          "msgkey": "61680"
        }, {
          "id": 154,
          "msgTitle": "撕破",
          "companyId": null,
          "companyName": null,
          "msgCategoryType": null,
          "msgType": "5",
          "isInner": null,
          "pushDate": "2019-01-17",
          "content": null,
          "status": "1",
          "msgkey": "58461"
        }, {
          "id": 156,
          "msgTitle": "我是一个新建商机117",
          "companyId": "hymcacmhjlmpyohptvmwuppjohyqqzqz",
          "companyName": null,
          "msgCategoryType": null,
          "msgType": "3",
          "isInner": "否",
          "pushDate": "2019-01-17",
          "content": null,
          "status": "1",
          "msgkey": "62121"
        }, {
          "id": 160,
          "msgTitle": "又是一个新建的商机内容哟20190117-4",
          "companyId": "hymcacmhjlmpyohptvmwuppjohyqqzqz",
          "companyName": null,
          "msgCategoryType": null,
          "msgType": "3",
          "isInner": "否",
          "pushDate": "2019-01-17",
          "content": null,
          "status": "1",
          "msgkey": "62428"
        }, {
          "id": 161,
          "msgTitle": "我是一个新商机哟20190117-5",
          "companyId": "hymcacmhjlmpyohptvmwuppjohyqqzqz",
          "companyName": null,
          "msgCategoryType": null,
          "msgType": "3",
          "isInner": "否",
          "pushDate": "2019-01-17",
          "content": null,
          "status": "1",
          "msgkey": "62442"
        }, {
          "id": 164,
          "msgTitle": "1231",
          "companyId": "hymcacmhjlmpyohptvmwuppjohyqqzqz",
          "companyName": null,
          "msgCategoryType": null,
          "msgType": "3",
          "isInner": "否",
          "pushDate": "2019-01-17",
          "content": null,
          "status": "1",
          "msgkey": "63115"
        }, {
          "id": 165,
          "msgTitle": "阿斯顿发",
          "companyId": "hymcacmhjlmpyohptvmwuppjohyqqzqz",
          "companyName": null,
          "msgCategoryType": null,
          "msgType": "3",
          "isInner": "否",
          "pushDate": "2019-01-17",
          "content": null,
          "status": "1",
          "msgkey": "63127"
        }, {
          "id": 166,
          "msgTitle": "asdfas",
          "companyId": "hymcacmhjlmpyohptvmwuppjohyqqzqz",
          "companyName": null,
          "msgCategoryType": null,
          "msgType": "3",
          "isInner": "否",
          "pushDate": "2019-01-17",
          "content": null,
          "status": "1",
          "msgkey": "63143"
        }],
        "totalPages": 1,
        "totalElements": 106,
        "last": true,
        "number": 0,
        "size": 0,
        "first": true,
        "sort": null,
        "numberOfElements": 10
      }
    })
  })

  router.post('/mock/crm-jj/api/business/queryManagerBusiness', function (req, res, next) {
    res.json({
      "success": true,
      "payload": {
        "unSuccess": 0,
        "success": 5,
        "businessChanceResultVos": {
          "content": [{
              "updateFlag": "1",
              "name": "创建一个商机测试事件列表",
              "customerId": 30006,
              "customerName": "测试行内公司二号",
              "customerKey": null,
              "executor": 73840,
              "businessChanceType": "自建商机",
              "businessStatus": "终止",
              "pushStatus": "目标客户",
              "customerType": "行内",
              "validDt": "2019-02-21 15:45:00",
              "enable": "低",
              "remark": null,
              "reason": "商机到期自动终止",
              "executorName": "admin",
              "executorOrgName": "全行",
              "executorOrg": "000000",
              "belongOrgName": "全行",
              "claimStatus": "已认领",
              "households": null,
              "deposit": null,
              "loan": null,
              "otherRemark": null,
              "orgNames": null,
              "address": null,
              "cooperators": [],
              "schedulerVos": null,
              "optList": null,
              "id": 76743,
              "enabledFlag": "1",
              "createdDt": "2019-02-13 15:15:47",
              "updatedDt": "2019-02-13 15:15:47",
              "createdById": "1",
              "createdBy": "admin",
              "updateById": "1",
              "updateBy": "admin"
            },
            {
              "updateFlag": "1",
              "name": "阿斯顿六块腹肌",
              "customerId": 30000,
              "customerName": "测试行内公司一号",
              "customerKey": "hymcacmhjlmpyohptvmwuppjohyqqzqzascasc",
              "executor": 73840,
              "businessChanceType": "自建商机",
              "businessStatus": "终止",
              "pushStatus": "目标客户",
              "customerType": "行内",
              "validDt": "2019-02-02 18:30:00",
              "enable": "高",
              "remark": null,
              "reason": "商机到期自动终止",
              "executorName": "admin",
              "executorOrgName": "全行",
              "executorOrg": "000000",
              "belongOrgName": "全行",
              "claimStatus": "已认领",
              "households": null,
              "deposit": null,
              "loan": null,
              "otherRemark": null,
              "orgNames": "测试机构,总行",
              "address": "重庆市重庆郊县丰都县双路镇334号",
              "cooperators": [{
                "name": "admin",
                "id": "1"
              }],
              "schedulerVos": null,
              "optList": null,
              "id": 75531,
              "enabledFlag": "1",
              "createdDt": "2019-01-31 18:08:12",
              "updatedDt": "2019-01-31 18:08:12",
              "createdById": "1",
              "createdBy": "admin",
              "updateById": "1",
              "updateBy": "admin"
            },
            {
              "updateFlag": "1",
              "name": "商机1-31-16",
              "customerId": 30000,
              "customerName": "测试行内公司一号",
              "customerKey": "hymcacmhjlmpyohptvmwuppjohyqqzqzascasc",
              "executor": 73840,
              "businessChanceType": "自建商机",
              "businessStatus": "终止",
              "pushStatus": "目标客户",
              "customerType": "行内",
              "validDt": "2019-02-02 06:30:00",
              "enable": "中",
              "remark": null,
              "reason": "商机到期自动终止",
              "executorName": "admin",
              "executorOrgName": "全行",
              "executorOrg": "000000",
              "belongOrgName": "全行",
              "claimStatus": "已认领",
              "households": null,
              "deposit": null,
              "loan": null,
              "otherRemark": null,
              "orgNames": "测试机构,总行",
              "address": "重庆市重庆郊县丰都县双路镇334号",
              "cooperators": [{
                "name": "admin3",
                "id": "7"
              }],
              "schedulerVos": null,
              "optList": null,
              "id": 75526,
              "enabledFlag": "1",
              "createdDt": "2019-01-31 18:06:58",
              "updatedDt": "2019-01-31 18:06:58",
              "createdById": "1",
              "createdBy": "admin",
              "updateById": "1",
              "updateBy": "admin"
            },
            {
              "updateFlag": "1",
              "name": "商机19-1-31",
              "customerId": 30000,
              "customerName": "测试行内公司一号",
              "customerKey": "hymcacmhjlmpyohptvmwuppjohyqqzqzascasc",
              "executor": 73840,
              "businessChanceType": "自建商机",
              "businessStatus": "终止",
              "pushStatus": "目标客户",
              "customerType": "行内",
              "validDt": "2019-02-01 18:35:00",
              "enable": "高",
              "remark": null,
              "reason": "商机到期自动终止",
              "executorName": "admin",
              "executorOrgName": "全行",
              "executorOrg": "000000",
              "belongOrgName": "全行",
              "claimStatus": "已认领",
              "households": null,
              "deposit": null,
              "loan": null,
              "otherRemark": null,
              "orgNames": "测试机构,总行",
              "address": "重庆市重庆郊县丰都县双路镇334号",
              "cooperators": [{
                "name": "admin3",
                "id": "7"
              }],
              "schedulerVos": null,
              "optList": null,
              "id": 75519,
              "enabledFlag": "1",
              "createdDt": "2019-01-31 18:03:56",
              "updatedDt": "2019-01-31 18:03:56",
              "createdById": "1",
              "createdBy": "admin",
              "updateById": "1",
              "updateBy": "admin"
            },
            {
              "updateFlag": "1",
              "name": "新建一个商机",
              "customerId": 30000,
              "customerName": "测试行内公司一号",
              "customerKey": "hymcacmhjlmpyohptvmwuppjohyqqzqzascasc",
              "executor": 73840,
              "businessChanceType": "自建商机",
              "businessStatus": "终止",
              "pushStatus": "目标客户",
              "customerType": "行内",
              "validDt": "2019-02-08 10:50:00",
              "enable": "未知",
              "remark": null,
              "reason": "商机到期自动终止",
              "executorName": "admin",
              "executorOrgName": "全行",
              "executorOrg": "000000",
              "belongOrgName": "全行",
              "claimStatus": "已认领",
              "households": null,
              "deposit": null,
              "loan": null,
              "otherRemark": null,
              "orgNames": "测试机构,总行",
              "address": "重庆市重庆郊县丰都县双路镇334号",
              "cooperators": [{
                "name": "admin",
                "id": "1"
              }],
              "schedulerVos": null,
              "optList": null,
              "id": 75513,
              "enabledFlag": "1",
              "createdDt": "2019-01-31 18:03:08",
              "updatedDt": "2019-01-31 18:03:08",
              "createdById": "1",
              "createdBy": "admin",
              "updateById": "1",
              "updateBy": "admin"
            }
          ],
          "last": true,
          "totalPages": 1,
          "totalElements": 5,
          "first": true,
          "sort": null,
          "numberOfElements": 5,
          "size": 10,
          "number": 0
        }
      }
    })
  })

  router.post('/mock/crm-jj/api/business/queryWithinManagerBusiness', function (req, res, next) {
    res.json({
      "success": true,
      "payload": {
        "unSuccess": 12,
        "success": 0,
        "businessChanceResultVos": {
          "content": [{
            "updateFlag": "2",
            "name": "123[六嚏掉撕卿元褪龋蚊有限公司9]",
            "customerId": null,
            "customerName": "六嚏掉撕卿元褪龋蚊有限公司9",
            "customerKey": null,
            "executor": null,
            "businessChanceType": "任务商机",
            "businessStatus": "新建",
            "pushStatus": "",
            "customerType": "系统外",
            "validDt": "2019-03-05 10:35:00",
            "enable": "未知",
            "remark": null,
            "reason": null,
            "executorName": null,
            "executorOrgName": "全行",
            "executorOrg": "000000",
            "belongOrgName": "全行",
            "claimStatus": "未认领",
            "households": null,
            "deposit": null,
            "loan": null,
            "otherRemark": null,
            "orgNames": null,
            "address": null,
            "cooperators": [],
            "schedulerVos": null,
            "optList": null,
            "id": 88707,
            "enabledFlag": "1",
            "createdDt": "2019-03-05 10:35:54",
            "updatedDt": "2019-03-05 10:35:54",
            "createdById": "84994",
            "createdBy": "admin",
            "updateById": "84994",
            "updateBy": "admin"
          }, {
            "updateFlag": "2",
            "name": "123[六嚏掉撕卿元褪龋蚊有限公司8]",
            "customerId": null,
            "customerName": "六嚏掉撕卿元褪龋蚊有限公司8",
            "customerKey": null,
            "executor": null,
            "businessChanceType": "任务商机",
            "businessStatus": "新建",
            "pushStatus": "",
            "customerType": "系统外",
            "validDt": "2019-03-05 10:35:00",
            "enable": "未知",
            "remark": null,
            "reason": null,
            "executorName": null,
            "executorOrgName": "全行",
            "executorOrg": "000000",
            "belongOrgName": "全行",
            "claimStatus": "未认领",
            "households": null,
            "deposit": null,
            "loan": null,
            "otherRemark": null,
            "orgNames": null,
            "address": null,
            "cooperators": [],
            "schedulerVos": null,
            "optList": null,
            "id": 88704,
            "enabledFlag": "1",
            "createdDt": "2019-03-05 10:35:54",
            "updatedDt": "2019-03-05 10:35:54",
            "createdById": "84994",
            "createdBy": "admin",
            "updateById": "84994",
            "updateBy": "admin"
          }, {
            "updateFlag": "2",
            "name": "123[六嚏掉撕卿元褪龋蚊有限公司7]",
            "customerId": null,
            "customerName": "六嚏掉撕卿元褪龋蚊有限公司7",
            "customerKey": null,
            "executor": null,
            "businessChanceType": "任务商机",
            "businessStatus": "新建",
            "pushStatus": "",
            "customerType": "系统外",
            "validDt": "2019-03-05 10:35:00",
            "enable": "未知",
            "remark": null,
            "reason": null,
            "executorName": null,
            "executorOrgName": "全行",
            "executorOrg": "000000",
            "belongOrgName": "全行",
            "claimStatus": "未认领",
            "households": null,
            "deposit": null,
            "loan": null,
            "otherRemark": null,
            "orgNames": null,
            "address": null,
            "cooperators": [],
            "schedulerVos": null,
            "optList": null,
            "id": 88701,
            "enabledFlag": "1",
            "createdDt": "2019-03-05 10:35:54",
            "updatedDt": "2019-03-05 10:35:54",
            "createdById": "84994",
            "createdBy": "admin",
            "updateById": "84994",
            "updateBy": "admin"
          }, {
            "updateFlag": "2",
            "name": "123[六嚏掉撕卿元褪龋蚊有限公司6]",
            "customerId": null,
            "customerName": "六嚏掉撕卿元褪龋蚊有限公司6",
            "customerKey": null,
            "executor": null,
            "businessChanceType": "任务商机",
            "businessStatus": "新建",
            "pushStatus": "",
            "customerType": "系统外",
            "validDt": "2019-03-05 10:35:00",
            "enable": "未知",
            "remark": null,
            "reason": null,
            "executorName": null,
            "executorOrgName": "全行",
            "executorOrg": "000000",
            "belongOrgName": "全行",
            "claimStatus": "未认领",
            "households": null,
            "deposit": null,
            "loan": null,
            "otherRemark": null,
            "orgNames": null,
            "address": null,
            "cooperators": [],
            "schedulerVos": null,
            "optList": null,
            "id": 88698,
            "enabledFlag": "1",
            "createdDt": "2019-03-05 10:35:54",
            "updatedDt": "2019-03-05 10:35:54",
            "createdById": "84994",
            "createdBy": "admin",
            "updateById": "84994",
            "updateBy": "admin"
          }, {
            "updateFlag": "2",
            "name": "123[六嚏掉撕卿元褪龋蚊有限公司5]",
            "customerId": null,
            "customerName": "六嚏掉撕卿元褪龋蚊有限公司5",
            "customerKey": null,
            "executor": null,
            "businessChanceType": "任务商机",
            "businessStatus": "新建",
            "pushStatus": "",
            "customerType": "系统外",
            "validDt": "2019-03-05 10:35:00",
            "enable": "未知",
            "remark": null,
            "reason": null,
            "executorName": null,
            "executorOrgName": "全行",
            "executorOrg": "000000",
            "belongOrgName": "全行",
            "claimStatus": "未认领",
            "households": null,
            "deposit": null,
            "loan": null,
            "otherRemark": null,
            "orgNames": null,
            "address": null,
            "cooperators": [],
            "schedulerVos": null,
            "optList": null,
            "id": 88695,
            "enabledFlag": "1",
            "createdDt": "2019-03-05 10:35:54",
            "updatedDt": "2019-03-05 10:35:54",
            "createdById": "84994",
            "createdBy": "admin",
            "updateById": "84994",
            "updateBy": "admin"
          }, {
            "updateFlag": "2",
            "name": "123[六嚏掉撕卿元褪龋蚊有限公司4]",
            "customerId": null,
            "customerName": "六嚏掉撕卿元褪龋蚊有限公司4",
            "customerKey": null,
            "executor": null,
            "businessChanceType": "任务商机",
            "businessStatus": "新建",
            "pushStatus": "",
            "customerType": "系统外",
            "validDt": "2019-03-05 10:35:00",
            "enable": "未知",
            "remark": null,
            "reason": null,
            "executorName": null,
            "executorOrgName": "全行",
            "executorOrg": "000000",
            "belongOrgName": "全行",
            "claimStatus": "未认领",
            "households": null,
            "deposit": null,
            "loan": null,
            "otherRemark": null,
            "orgNames": null,
            "address": null,
            "cooperators": [],
            "schedulerVos": null,
            "optList": null,
            "id": 88692,
            "enabledFlag": "1",
            "createdDt": "2019-03-05 10:35:54",
            "updatedDt": "2019-03-05 10:35:54",
            "createdById": "84994",
            "createdBy": "admin",
            "updateById": "84994",
            "updateBy": "admin"
          }, {
            "updateFlag": "2",
            "name": "123[次领枷兼卸冯煮邯有限公司]",
            "customerId": null,
            "customerName": "次领枷兼卸冯煮邯有限公司",
            "customerKey": null,
            "executor": null,
            "businessChanceType": "任务商机",
            "businessStatus": "新建",
            "pushStatus": "",
            "customerType": "系统外",
            "validDt": "2019-03-05 10:35:00",
            "enable": "未知",
            "remark": null,
            "reason": null,
            "executorName": null,
            "executorOrgName": "全行",
            "executorOrg": "000000",
            "belongOrgName": "全行",
            "claimStatus": "未认领",
            "households": null,
            "deposit": null,
            "loan": null,
            "otherRemark": null,
            "orgNames": null,
            "address": null,
            "cooperators": [],
            "schedulerVos": null,
            "optList": null,
            "id": 88689,
            "enabledFlag": "1",
            "createdDt": "2019-03-05 10:35:54",
            "updatedDt": "2019-03-05 10:35:54",
            "createdById": "84994",
            "createdBy": "admin",
            "updateById": "84994",
            "updateBy": "admin"
          }, {
            "updateFlag": "2",
            "name": "123[六嚏掉撕卿元褪龋蚊有限公司2]",
            "customerId": null,
            "customerName": "六嚏掉撕卿元褪龋蚊有限公司2",
            "customerKey": null,
            "executor": null,
            "businessChanceType": "任务商机",
            "businessStatus": "新建",
            "pushStatus": "",
            "customerType": "系统外",
            "validDt": "2019-03-05 10:35:00",
            "enable": "未知",
            "remark": null,
            "reason": null,
            "executorName": null,
            "executorOrgName": "全行",
            "executorOrg": "000000",
            "belongOrgName": "全行",
            "claimStatus": "未认领",
            "households": null,
            "deposit": null,
            "loan": null,
            "otherRemark": null,
            "orgNames": null,
            "address": null,
            "cooperators": [],
            "schedulerVos": null,
            "optList": null,
            "id": 88686,
            "enabledFlag": "1",
            "createdDt": "2019-03-05 10:35:54",
            "updatedDt": "2019-03-05 10:35:54",
            "createdById": "84994",
            "createdBy": "admin",
            "updateById": "84994",
            "updateBy": "admin"
          }, {
            "updateFlag": "2",
            "name": "123[六嚏掉撕卿元褪龋蚊有限公司1]",
            "customerId": null,
            "customerName": "六嚏掉撕卿元褪龋蚊有限公司1",
            "customerKey": null,
            "executor": null,
            "businessChanceType": "任务商机",
            "businessStatus": "新建",
            "pushStatus": "",
            "customerType": "系统外",
            "validDt": "2019-03-05 10:35:00",
            "enable": "未知",
            "remark": null,
            "reason": null,
            "executorName": null,
            "executorOrgName": "全行",
            "executorOrg": "000000",
            "belongOrgName": "全行",
            "claimStatus": "未认领",
            "households": null,
            "deposit": null,
            "loan": null,
            "otherRemark": null,
            "orgNames": null,
            "address": null,
            "cooperators": [],
            "schedulerVos": null,
            "optList": null,
            "id": 88683,
            "enabledFlag": "1",
            "createdDt": "2019-03-05 10:35:54",
            "updatedDt": "2019-03-05 10:35:54",
            "createdById": "84994",
            "createdBy": "admin",
            "updateById": "84994",
            "updateBy": "admin"
          }, {
            "updateFlag": "2",
            "name": "123[六嚏掉撕卿元褪龋蚊有限公司]",
            "customerId": null,
            "customerName": "六嚏掉撕卿元褪龋蚊有限公司",
            "customerKey": null,
            "executor": null,
            "businessChanceType": "任务商机",
            "businessStatus": "新建",
            "pushStatus": "",
            "customerType": "系统外",
            "validDt": "2019-03-05 10:35:00",
            "enable": "未知",
            "remark": null,
            "reason": null,
            "executorName": null,
            "executorOrgName": "全行",
            "executorOrg": "000000",
            "belongOrgName": "全行",
            "claimStatus": "未认领",
            "households": null,
            "deposit": null,
            "loan": null,
            "otherRemark": null,
            "orgNames": null,
            "address": null,
            "cooperators": [],
            "schedulerVos": null,
            "optList": null,
            "id": 88680,
            "enabledFlag": "1",
            "createdDt": "2019-03-05 10:35:54",
            "updatedDt": "2019-03-05 10:35:54",
            "createdById": "84994",
            "createdBy": "admin",
            "updateById": "84994",
            "updateBy": "admin"
          }],
          "totalPages": 2,
          "totalElements": 12,
          "last": false,
          "numberOfElements": 10,
          "first": true,
          "sort": null,
          "size": 10,
          "number": 0
        }
      }
    })
  })

  router.get('/mock/crm-jj/api/message/detail', function (req, res, next) {
    // req.json({"id": 6}) 行外动态消息
    // res.json({
    //   "success": true,
    //   "payload": {
    //     "company_type": "行内",
    //     "msgCategoryType": "W16",
    //     "orgName": "全行",
    //     "handleTime": "2019-01-17",
    //     "object_key": "201811300103",
    //     "userNo": "001",
    //     "company_key": "523af537946b79c4f8369ed39ba78605",
    //     "type": "3",
    //     "_score": 6.700775,
    //     "userName": "admin",
    //     "content": "开头：投融资信息/n开头二：时空裂缝健身房据了解逢狼时刻积分/n开头收水电费第三方三：slkfjslfjslfkjsfnknvkxn/n",
    //     "ramark": "admin,kaka",
    //     "pushDt": "2018-11-30",
    //     "messageStatus": "未处理",
    //     "_schema": "es_xxtx_outer_event_info",
    //     "orgNo": "000000",
    //     "msgTitle": "客户涉黑标题",
    //     "company_name": "公司中文名称",
    //     "cust_no": "001",
    //     "name": "客户涉黑标题",
    //     "time": "2019-01-15",
    //     "_id": "201811300103",
    //     "org_no": "000000",
    //     "msgCategoryName": "客户涉黑"
    //   }
    // })

    // req.json({"id": 139}) 行内动态消息
    // res.json({
    //   "success": true,
    //   "payload": {
    //     "data_dt": "2019-01-16",
    //     "msgCategoryType": "Z10",
    //     "product": "sdfsf",
    //     "orgName": "全行",
    //     "handleTime": "2019-01-29",
    //     "object_key": "001",
    //     "userNo": "001",
    //     "_score": 3.4273396,
    //     "userName": "admin",
    //     "ramark": null,
    //     "pushDt": "2019-01-16",
    //     "messageStatus": "已处理",
    //     "_schema": "es_xxtx_in_evt_acct_chng",
    //     "orgNo": "000000",
    //     "msgTitle": "账户异常变动",
    //     "cust_no": "001",
    //     "cust_name": "",
    //     "_id": "001",
    //     "bef_status": "1",
    //     "aft_status": "2",
    //     "event_time": "2019-01-16",
    //     "account": "1111",
    //     "msgCategoryName": "账户异常变动"
    //   }
    // })
  })

  // 行外动态详情渲染
  // var data = data.payload;
  // if (!data.msgTitle) return;
  // $("#msgTitle").html(data.msgTitle);
  // $("#msgStatus").html(data.messageStatus);
  // $("#msgCategoryName").html(data.msgCategoryName);
  // $("#pushDt").html(data.pushDt);
  // $("#companyName").html(data.company_name);
  // $("#userName").html(data.userName);
  // $("#remark").html(data.ramark);
  // $("#handleTime").html(data.handleTime);
  // $("#content").html(data.content);


  // 行内动态消息详情表格渲染
  // function makeTable(data) {
  //   //表格render
  //   var info = "";
  //   //大额资金变动
  //   if (data.msgCategoryType && data.msgCategoryType === "Z2") {
  //     info = [
  //       [{ head: '客户编号', data: data.cust_no }, { head: '客户名称', data: data.cust_name }],
  //       [{ head: '账户类型', data: data.acct_type }, { head: '客户账号', data: data.acct_no }],
  //       [{ head: '产品名称', data: data.product_name }, { head: '动账金额', data: data.amount }],
  //       [{ head: '用途描述', data: data.remark }, { head: '客户经理', data: data.userName }],
  //       [{ head: '客户经理编号', data: data.userNo }, { head: '所属机构', data: data.orgName }]
  //     ]
  //   }
  //   //存款到期
  //   if (data.msgCategoryType && data.msgCategoryType === "D3") {
  //     info = [
  //       [{ head: '客户编号', data: data.cust_no }, { head: '客户名称', data: data.cust_name }],
  //       [{ head: '账户类型', data: data.acct_type }, { head: '客户账号', data: data.acct_no }],
  //       [{ head: '到期金额', data: data.product_name }, { head: '账户产品', data: data.product }],
  //       [{ head: '账户利率', data: data.rate }, { head: '起息日期', data: data.start_dt }],
  //       [{ head: '到期日期', data: data.due_dt }, { head: '客户经理', data: data.userName }],
  //       [{ head: '客户经理编号', data: data.userNo }, { head: '所属机构', data: data.orgName }]
  //     ]
  //   }
  //   //贷款到期
  //   if (data.msgCategoryType && data.msgCategoryType === "D4") {
  //     info = [
  //       [{ head: '客户编号', data: data.cust_no }, { head: '客户名称', data: data.cust_name }],
  //       [{ head: '贷款类型', data: data.loan_type }, { head: '贷款借据', data: data.iou_no }],
  //       [{ head: '到期金额', data: data.due_amt }, { head: '贷款产品', data: data.product }],
  //       [{ head: '贷款利率', data: data.rate }, { head: '开始日期', data: data.start_dt }],
  //       [{ head: '到期日期', data: data.due_dt }, { head: '客户经理', data: data.userName }],
  //       [{ head: '客户经理编号', data: data.userNo }, { head: '所属机构', data: data.orgName }]
  //     ]
  //   }
  //   //理财到期
  //   if (data.msgCategoryType && data.msgCategoryType === "D5") {
  //     info = [
  //       [{ head: '客户编号', data: data.cust_no }, { head: '客户名称', data: data.cust_name }],
  //       [{ head: '购买日期', data: data.buy_dt }, { head: '理财账号', data: data.acct_no }],
  //       [{ head: '理财金额', data: data.amt }, { head: '理财产品', data: data.product }],
  //       [{ head: '逾期收益率', data: data.rate }, { head: '开始日期', data: data.start_dt }],
  //       [{ head: '到期日期', data: data.due_dt }, { head: '客户经理', data: data.userName }],
  //       [{ head: '客户经理编号', data: data.userNo }, { head: '所属机构', data: data.orgName }]
  //     ]
  //   }
  //   //银承到期
  //   if (data.msgCategoryType && data.msgCategoryType === "D6") {
  //     info = [
  //       [{ head: '客户编号', data: data.cust_no }, { head: '客户名称', data: data.cust_name }],
  //       [{ head: '银承总额', data: data.acept_amt }, { head: '敞口总额', data: data.cred_amt }],
  //       [{ head: '客户经理', data: data.userName }, { head: '客户经理编号', data: data.userNo },],
  //       [{ head: '所属机构', data: data.orgName }, { head: '', data: '' },]
  //     ]
  //   }
  //   //信用证到期
  //   if (data.msgCategoryType && data.msgCategoryType === "D7") {
  //     info = [
  //       [{ head: '客户编号', data: data.cust_no }, { head: '客户名称', data: data.cust_name }],
  //       [{ head: '信用证类型', data: data.lc_type }, { head: '信用证协议号', data: data.lc_no }],
  //       [{ head: '金额', data: data.amt }, { head: '受益人', data: data.beneficiary },],
  //       [{ head: '开证日期', data: data.start_dt }, { head: '交单日期', data: data.bill_dt },],
  //       [{ head: '承兑日期', data: data.due_dt }, { head: '客户经理', data: data.userName },],
  //       [{ head: '客户经理编号', data: data.userNo }, { head: '所属机构', data: data.orgName },]
  //     ]
  //   }
  //   //授信到期
  //   if (data.msgCategoryType && data.msgCategoryType === "D8") {
  //     info = [
  //       [{ head: '客户编号', data: data.cust_no }, { head: '客户名称', data: data.cust_name }],
  //       [{ head: '授信类型', data: data.crdt_type }, { head: '授信协议号', data: data.cred_no }],
  //       [{ head: '授信金额', data: data.cred_amt }, { head: '开始日期', data: data.start_dt },],
  //       [{ head: '到期日期', data: data.due_dt }, { head: '客户经理', data: data.userName },],
  //       [{ head: '客户经理编号', data: data.userNo }, { head: '所属机构', data: data.orgName },]
  //     ]
  //   }
  //   //贷款还款余额不足
  //   if (data.msgCategoryType && data.msgCategoryType === "F9") {
  //     info = [
  //       [{ head: '客户编号', data: data.cust_no }, { head: '客户名称', data: data.cust_name }],
  //       [{ head: '还款账号', data: data.repay_acct_no }, { head: '还款账户余额', data: data.repay_acct_bal }],
  //       [{ head: '贷款账号', data: data.cred_no }, { head: '还款金额', data: data.due_amt },],
  //       [{ head: '还款日期', data: data.due_dt }, { head: '客户经理', data: data.userName },],
  //       [{ head: '客户经理编号', data: data.userNo }, { head: '所属机构', data: data.orgName },]
  //     ]
  //   }

  //   //账户异常变动
  //   if (data.msgCategoryType && data.msgCategoryType === "Z10") {
  //     info = [
  //       [{ head: '客户编号', data: data.cust_no }, { head: '客户名称', data: data.cust_name }],
  //       [{ head: '客户账号', data: data.account }, { head: '变动前账户状态', data: data.bef_status }],
  //       [{ head: '变动后账户状态', data: data.aft_status }, { head: '产品名称', data: data.product },],
  //       [{ head: '客户经理', data: data.userName }, { head: '客户经理编号', data: data.userNo },],
  //       [{ head: '所属机构', data: data.orgName }, { head: '', data: '' },]
  //     ]
  //   }

  //   //贷款逾期
  //   if (data.msgCategoryType && data.msgCategoryType === "F11") {
  //     info = [
  //       [{ head: '客户编号', data: data.cust_no }, { head: '客户名称', data: data.cust_name }],
  //       [{ head: '贷款账号', data: data.loan_acct_no }, { head: '贷款余额', data: data.loan_bal }],
  //       [{ head: '逾期金额', data: data.overdue_amt }, { head: '逾期日期', data: data.overdue_dt },],
  //       [{ head: '逾期天数', data: data.overdue_day }, { head: '逾期类型', data: data.overdue_type },],
  //       [{ head: '客户经理', data: data.userName }, { head: '客户经理编号', data: data.userNo },],
  //       [{ head: '所属机构', data: data.orgName }, { head: '', data: '' },]
  //     ]
  //   }

  //   //准久悬户提醒
  //   // if(data.msgCategoryType && data.msgCategoryType==="F11"){
  //   //   info = [
  //   //    [{ head: '客户编号', data: data.cust_no  }, { head: '客户名称', data: data.cust_name }],
  //   //    [{ head: '账户类型', data: data.acct_type }, { head: '客户账号', data: data.acct_no }],
  //   //    [{ head: '产品名称', data: data.orgName }, { head: '开户日期', data: data.userNo }, ],
  //   //    [{ head: '账户状态', data: data.orgName }, { head: '客户经理', data: data.userNo }, ],
  //   //    [{ head: '客户经理编号', data: data.orgName },{ head: '所属机构',data:'' }, ]
  //   //  ]
  //   // }

  //   $('#inline-detail').html(template('horizontalTableTmpl', info))

  // }

}
