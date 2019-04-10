module.exports = function(router) {

  router.get('/mock/crm-jj/api/homepage/search', function(req, res, next) {
    res.json(
      {
        "success": true,
        "payload": {
          "content": [{
            "id": 44317,
            "enabledFlag": "0",
            "createdDt": "2018-12-19 18:08:58",
            "updatedDt": "2018-12-19 18:08:58",
            "createdById": "1",
            "createdBy": "admin",
            "updateById": "1",
            "updateBy": "admin",
            "schedulerNo": "1111",
            "topic": "带走我",
            "startDt": "2018-12-20 00:30",
            "endDt": "2019-01-16 18:00",
            "address": "一个人自传的寂寞1",
            "remark": "就算我的爱你的自由都将成为泡沫",
            "schedulerRemind": "1",
            "remindDt": "2019-01-08 17:23",
            "remindSwitch": "1",
            "businessChanceResultVo": null,
            "companyVo": null,
            "name": "icodeajk"


          }, {
            "id": 52908,
            "enabledFlag": "0",
            "createdDt": "2019-01-05 11:05:45",
            "updatedDt": "2019-01-05 16:26:35",
            "createdById": "1",
            "createdBy": "admin",
            "updateById": "1",
            "updateBy": "admin",
            "schedulerNo": "1111",
            "topic": "山海",
            "startDt": "2019-01-08 08:00",
            "endDt": "2019-01-08 23:17",
            "address": "山里大海",
            "remark": "华晨宇、、",
            "schedulerRemind": "1",
            "remindDt": "2019-01-08 20:20",
            "remindSwitch": "1",
            "businessChanceResultVo": null,
            "companyVo": null,
            "name": "icodeajkopa"
          }]
        }
      }
    )
   })
   router.get('/mock/crm-jj/api/homepage/historySearch', function(req, res, next) {
    res.json(
      {
        "success": true,
        "payload": {
          "content": [{
            "id": 44317,
            "name": "icodeajk"
          }, {
            "id": 52908,
            "name": "小米科技有限公司"
          }]
        }
      }
    )
   })
   router.get('/mock/crm-jj/api/opportunity/historySearch', function(req, res, next) {
    res.json(
      {
        "success": true,
        "payload": {
          "content": [{
            "id": 44317,
            "name": "icodeajk"
          }, {
            "id": 52908,
            "name": "小米科技有限公司"
          }]
        }
      }
    )
   })
}
