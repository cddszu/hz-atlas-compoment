module.exports = function(router) {

  // 机构管理——机构详情 入参 id
  router.get('/mock/crm-fd/api/auth/institution/details', function (req, res, next) {
    res.json(
      {
        "success": true,
        "payload": {
          "id": 237,
          "orgNo": "0",
          "name": "富滇银行",
          "shname": "富滇银行",
          "parentId": 0,
          "level": "1",
          "isLeafOrg": null,
          "status": "1",
          "address": null,
          "tel": null,
          "distAreaCd": null,
          "enabledFlag": null,
          "customerGroup": null,
          "primaryBusiness": null,
          "industry": null,
          "principal": null,
          "effectiveDate": null,
          "expiryDate": null,
          "path": "237",
          "createdDt": null,
          "updatedDt": null,
          "createdById": null,
          "updateById": null,
          "users": null
        }
      }
    )
  })

  // 机构管理——新增机构  入参
  //  {
  // address (string, optional): 机构地址 ,
  // customerGroup (string, optional): 主要客群 ,
  // distAreaCd (string, optional): 行政区划代码 ,
  // effectiveDate (string, optional): 生效日期 ,
  // enabledFlag (string, optional): 数据状态：'1'有效，'0'无效 ,
  // expiryDate (string, optional): 失效日期 ,
  // id (integer, optional): 机构id，修改时候传入 ,
  // industry (string, optional): 主营行业 ,
  // isLeafOrg (string, optional): 是否叶子机构：0：是，1：否 ,
  // level (string, optional): 机构级别 ,
  // name (string, optional): 机构全称 ,
  // orgNo (string, optional): 机构编号 ,
  // parentId (integer, optional): 上级机构 ,
  // primaryBusiness (string, optional): 主营业务 ,
  // principal (string, optional): 负责人 ,
  // shname (string, optional): 机构简称 ,
  // status (string, optional): 机构状态：0：有效，1：失效 ,
  // tel (string, optional): 机构电话
  // }

  router.post('/mock/crm-fd/api/auth/institution/save', function (req, res, next) {
    res.json(
      {success: true}
    )
  })

  //机构管理——更新机构  同上，多id字段
  router.post('/mock/crm-fd/api/auth/institution/save', function (req, res, next) {
    res.json(
      {success: true}
    )
  })

  // 机构管理——机构列表 入参{
  //   "nameOrNo": "富滇",
  //   "pageNo": 1,
  //   "pageSize": 10,
  //   "status": 1
  // }
  router.post('/mock/crm-fd/api/auth/institution/save', function (req, res, next) {
    res.json({
      "success": true,
      "payload": {
        "content": [
          {
            "id": 256,
            "orgNo": "87193105",
            "name": "富滇银行昆明白云支行",
            "shname": "富滇银行昆明白云支行",
            "parentId": 242,
            "level": "3",
            "isLeafOrg": null,
            "status": "1",
            "address": null,
            "tel": null,
            "distAreaCd": null,
            "enabledFlag": null,
            "customerGroup": null,
            "primaryBusiness": null,
            "industry": null,
            "principal": null,
            "effectiveDate": null,
            "expiryDate": null,
            "path": "237,242,256",
            "createdDt": null,
            "updatedDt": null,
            "createdById": null,
            "updateById": null,
            "users": null
          },
          {
            "id": 512,
            "orgNo": "87398001",
            "name": "富滇银行红河分行营业部",
            "shname": "富滇银行红河分行营业部",
            "parentId": 511,
            "level": "3",
            "isLeafOrg": null,
            "status": "1",
            "address": null,
            "tel": null,
            "distAreaCd": null,
            "enabledFlag": null,
            "customerGroup": null,
            "primaryBusiness": null,
            "industry": null,
            "principal": null,
            "effectiveDate": null,
            "expiryDate": null,
            "path": "237,511,512",
            "createdDt": null,
            "updatedDt": null,
            "createdById": null,
            "updateById": null,
            "users": null
          },
          {
            "id": 257,
            "orgNo": "87193106",
            "name": "富滇螺蛳湾国贸支行",
            "shname": "富滇螺蛳湾国贸支行",
            "parentId": 242,
            "level": "3",
            "isLeafOrg": null,
            "status": "1",
            "address": null,
            "tel": null,
            "distAreaCd": null,
            "enabledFlag": null,
            "customerGroup": null,
            "primaryBusiness": null,
            "industry": null,
            "principal": null,
            "effectiveDate": null,
            "expiryDate": null,
            "path": "237,242,257",
            "createdDt": null,
            "updatedDt": null,
            "createdById": null,
            "updateById": null,
            "users": null
          },
          {
            "id": 513,
            "orgNo": "87398002",
            "name": "富滇银行红河蒙自支行",
            "shname": "富滇银行红河蒙自支行",
            "parentId": 511,
            "level": "3",
            "isLeafOrg": null,
            "status": "1",
            "address": null,
            "tel": null,
            "distAreaCd": null,
            "enabledFlag": null,
            "customerGroup": null,
            "primaryBusiness": null,
            "industry": null,
            "principal": null,
            "effectiveDate": null,
            "expiryDate": null,
            "path": "237,511,513",
            "createdDt": null,
            "updatedDt": null,
            "createdById": null,
            "updateById": null,
            "users": null
          },
          {
            "id": 514,
            "orgNo": "87398003",
            "name": "富滇银行红河河口支行",
            "shname": "富滇银行红河河口支行",
            "parentId": 511,
            "level": "3",
            "isLeafOrg": null,
            "status": "1",
            "address": null,
            "tel": null,
            "distAreaCd": null,
            "enabledFlag": null,
            "customerGroup": null,
            "primaryBusiness": null,
            "industry": null,
            "principal": null,
            "effectiveDate": null,
            "expiryDate": null,
            "path": "237,511,514",
            "createdDt": null,
            "updatedDt": null,
            "createdById": null,
            "updateById": null,
            "users": null
          },
          {
            "id": 515,
            "orgNo": "87398004",
            "name": "富滇银行红河个旧支行",
            "shname": "富滇银行红河个旧支行",
            "parentId": 511,
            "level": "3",
            "isLeafOrg": null,
            "status": "1",
            "address": null,
            "tel": null,
            "distAreaCd": null,
            "enabledFlag": null,
            "customerGroup": null,
            "primaryBusiness": null,
            "industry": null,
            "principal": null,
            "effectiveDate": null,
            "expiryDate": null,
            "path": "237,511,515",
            "createdDt": null,
            "updatedDt": null,
            "createdById": null,
            "updateById": null,
            "users": null
          },
          {
            "id": 516,
            "orgNo": "87398005",
            "name": "富滇银行红河开远支行",
            "shname": "富滇银行红河开远支行",
            "parentId": 511,
            "level": "3",
            "isLeafOrg": null,
            "status": "1",
            "address": null,
            "tel": null,
            "distAreaCd": null,
            "enabledFlag": null,
            "customerGroup": null,
            "primaryBusiness": null,
            "industry": null,
            "principal": null,
            "effectiveDate": null,
            "expiryDate": null,
            "path": "237,511,516",
            "createdDt": null,
            "updatedDt": null,
            "createdById": null,
            "updateById": null,
            "users": null
          },
          {
            "id": 261,
            "orgNo": "87194002",
            "name": "富滇银行昆明江东支行",
            "shname": "富滇银行昆明江东支行",
            "parentId": 242,
            "level": "3",
            "isLeafOrg": null,
            "status": "1",
            "address": null,
            "tel": null,
            "distAreaCd": null,
            "enabledFlag": null,
            "customerGroup": null,
            "primaryBusiness": null,
            "industry": null,
            "principal": null,
            "effectiveDate": null,
            "expiryDate": null,
            "path": "237,242,261",
            "createdDt": null,
            "updatedDt": null,
            "createdById": null,
            "updateById": null,
            "users": null
          },
          {
            "id": 517,
            "orgNo": "87398006",
            "name": "富滇银行红河弥勒支行",
            "shname": "富滇银行红河弥勒支行",
            "parentId": 511,
            "level": "3",
            "isLeafOrg": null,
            "status": "1",
            "address": null,
            "tel": null,
            "distAreaCd": null,
            "enabledFlag": null,
            "customerGroup": null,
            "primaryBusiness": null,
            "industry": null,
            "principal": null,
            "effectiveDate": null,
            "expiryDate": null,
            "path": "237,511,517",
            "createdDt": null,
            "updatedDt": null,
            "createdById": null,
            "updateById": null,
            "users": null
          },
          {
            "id": 262,
            "orgNo": "88379000",
            "name": "富滇银行临沧分行",
            "shname": "富滇银行临沧分行",
            "parentId": 237,
            "level": "2",
            "isLeafOrg": null,
            "status": "1",
            "address": null,
            "tel": null,
            "distAreaCd": null,
            "enabledFlag": null,
            "customerGroup": null,
            "primaryBusiness": null,
            "industry": null,
            "principal": null,
            "effectiveDate": null,
            "expiryDate": null,
            "path": "237,262",
            "createdDt": null,
            "updatedDt": null,
            "createdById": null,
            "updateById": null,
            "users": null
          }
        ],
        "totalPages": 19,
        "totalElements": 190,
        "last": false,
        "size": 10,
        "number": 0,
        "sort": [
          {
            "direction": "DESC",
            "property": "updatedDt",
            "ignoreCase": false,
            "nullHandling": "NATIVE",
            "ascending": false,
            "descending": true
          }
        ],
        "first": true,
        "numberOfElements": 10
      }
    })
  })
}


