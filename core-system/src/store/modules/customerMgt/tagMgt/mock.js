module.exports = function(router) {
  // 客户管理——标签列表
  router.post('/mock/crm-jj/api/cust/institution/save', function(req, res, next) {
    res.json({
      "success": true,
      "payload": {
        "data": [
          {
            "id": 1,
            "name": "高新企业",
            "labelSource": "系统标签",
            "tagType": "关系属性",
            "labelDescription": "而维吾尔而温热我",
            "createDate": "2019-01-08"
          },
          {
            "id": 2,
            "name": "朝阳企业",
            "labelSource": "自定义标签",
            "tagType": "业务属性",
            "labelDescription": "奋斗奋斗放松放松",
            "createDate": "2019-01-01"
          },
          {
            "id": 3,
            "name": "XX企业",
            "labelSource": "系统标签",
            "tagType": "",
            "labelDescription": "而维吾尔而温热我",
            "createDate": "2019-01-02"
          },
          {
            "id": 4,
            "name": "朝阳企业",
            "labelSource": "自定义标签",
            "tagType": "群体特征属性",
            "labelDescription": "奋斗奋斗放松放松",
            "createDate": "2019-01-03"
          },
          {
            "id": 5,
            "name": "MM企业",
            "labelSource": "系统标签",
            "tagType": "关系属性",
            "labelDescription": "而维吾尔而温热我",
            "createDate": "2019-01-04"
          },
          {
            "id": 6,
            "name": "朝阳企业",
            "labelSource": "自定义标签",
            "tagType": "业务属性",
            "labelDescription": "奋斗奋斗放松放松",
            "createDate": "2019-01-05"
          },
          {
            "id": 7,
            "name": "XX企业",
            "labelSource": "系统标签",
            "tagType": "",
            "labelDescription": "而维吾尔而温热我",
            "createDate": "2019-01-06"
          },
          {
            "id": 8,
            "name": "朝阳企业",
            "labelSource": "自定义标签",
            "tagType": "群体特征属性",
            "labelDescription": "奋斗奋斗放松放松",
            "createDate": "2019-01-07"
          },
          {
            "id": 9,
            "name": "MM企业",
            "labelSource": "系统标签",
            "tagType": "关系属性",
            "labelDescription": "而维吾尔而温热我",
            "createDate": "2019-01-08"
          },
          {
            "id": 10,
            "name": "XX企业",
            "labelSource": "系统标签",
            "tagType": "基本属性",
            "labelDescription": "而维吾尔而温热我",
            "createDate": "2019-01-09"
          },
          {
            "id": 11,
            "name": "朝阳企业",
            "labelSource": "自定义标签",
            "tagType": "基本属性",
            "labelDescription": "奋斗奋斗放松放松",
            "createDate": "2019-01-10"
          }
        ],
        "totalElements": 11
      }
    })
  })
  router.get('/mock/crm-jj/api/tag/company/tab', function(req, res, next) {
    res.json({
      "success": true,
      "payload": [{
        "tagId": 101001,
        "graph": "cims",
        "tagCategoryId": 101,
        "tagCategoryName": null,
        "tagName": "行内客户",
        "tagDesc": "行内客户",
        "tagGroup": "SYSTEM",
        "tagStatus": "UP",
        "upTime": null,
        "applyUpTime": null,
        "applyBy": "99999999",
        "approveBy": null,
        "weight": 1,
        "dataType": "BOOLEAN",
        "originalRule": {
          "expression": "@sql(10100101.hnkh) !=null",
          "logicOperators": {},
          "rules": []
        },
        "rule": "@sql(10100101.hnkh) !=null",
        "createdDt": "1552474129000",
        "updatedDt": "1552984721000",
        "ruleParams": {},
        "tagValue": 1,
        "objectKeyCount": 0,
      }]
    })
  })
}
