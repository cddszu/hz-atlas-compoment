const base = '/mock/crm-jj/api/customer'


module.exports = function (router) {

  // 客户详情
  router.get(`${base}/basic/general`, function (req, res, next) {
    res.json({
      success: true,
      payload: {
        data: {
          acctMgerOrg: '管户员机构',// 管户员机构 ,
          accumulativeExport: '累计出口金额',//  累计出口金额,
          accumulativeImport: '累计进口金额',// 累计进口金额,
          advanCorp: '优势企业',//  优势企业,
          apprvDate: '核准日期',// 核准日期,
          basicOpenAcctBank: '基本户开户行',// 基本户开户行,
          belongBranch: '归属支行',//  归属支行,
          branchOrg: '分支机构',//  分支机构,
          businessLimit: '营业期限',// 营业期限,
          capital: '资产金额',//  资产金额,
          certCode: '证件号码',// 证件号码,
          certType: '证件类型',// 证件类型,
          cnName: '中文名称',//  中文名称,
          cnShortName: '中文简称',// 中文简称,
          code: '客户编号',//  客户编号,
          contMan: '联系人',// 联系人,
          contTel: '联系电话',//  联系电话,
          cooperationLimit: '与我行合作年限',//  与我行合作年限,
          crdtAcctMger: '信贷管户员',// 信贷管户员,
          ctyLimitCtrlCorp: '国家宏观调控限控行业',//  国家宏观调控限控行业,
          dataOrgNo: '数据归属机构号',//  数据归属机构号,
          dataUserNo: '数据归属客户经理号',//  数据归属客户经理号,
          employeeCnt: '企业人数',//  企业人数,
          enName: '英文名称',// 英文名称,
          enterpriseScale: '企业规模',// 企业规模,
          envmtAsesLevel: '环评等级',//  环评等级,
          extCrdtLevel: '外部信用等级',//  外部信用等级,
          groupCustType: '集团客户类型',// 集团客户类型,
          groupNo: '集团编号',// 集团编号,
          holdName: '股东名称',//  股东名称,
          holdType: '控股类型',// 控股类型,
          impExpInd: '进出口权标识',// 进出口权标识,
          industry: '客户行业',//  客户行业,
          industryType: '行业标签',//  行业标签,
          intCrdtLevel: '内部信用等级',// 内部信用等级,
          intRatingDate: '内部评级日期',//  内部评级日期,
          investMain: '投资主体',//  投资主体,
          isCrdt: '是否信贷户',//  是否信贷户,
          isCustomer: '客户属性',// 客户属性,
          isDiff: '行内外是否相同标识',// 行内外是否相同标识,
          isGoverFinPlat: '是否政府融资平台',// 是否政府融资平台,
          isGroup: '是否集团户',// 是否集团户,
          isInter: '行内外客户标识',//  行内外客户标识：1 行内，2行外 ,
          isInterStl: '是否国结户',// 是否国结户 ,
          isList: '是否上市',//  是否上市 ,
          isPotential: '是否是潜在客户',// 是否是潜在客户 ,
          isTallRemain: '是否两高一剩',//  是否两高一剩 ,
          legalPerson: '法定代表人',// 法定代表人 ,
          level: '客户级别',// 客户级别 ,
          lifecycle: '客户生命周期',//  客户生命周期 ,
          loanCardNo: '贷款卡编号',//  贷款卡编号 ,
          localTaxRegCd: '地税税务登记代码',// 地税税务登记代码 ,
          managerNo: '客户经理',//  客户经理 ,
          matureDate: '到期日期',//  到期日期 ,
          name: '名称',//  名称 ,
          nationTaxRegCd: '国税税务登记代码',// 国税税务登记代码 ,
          objectKey: '客户标识',// 客户标识，es搜索用，前端不用关心 ,
          openDate: '开户日期', //开户日期 ,
          openLics: '开户许可证',//开户许可证 ,
          openOrg: '开户机构',// 开户机构 ,
          openTellerNo: '开户柜员号',//  开户柜员号 ,
          operRange: '经营范围',//  经营范围 ,
          operStatus: '经营状态',//  经营状态 ,
          orgCode: '组织机构代码',//  组织机构代码 ,
          ownSys: '企业所有制',// 企业所有制 ,
          publicSector: '上市板块',// 上市板块 ,
          public_sector: '',// ,
          regAddress: '注册地址',//  注册地址 ,
          regCapital: '注册资本',//  注册资本 ,
          regCity: '注册城市',//  注册城市 ,
          regCurrency: '注册币种',// 注册币种 ,
          regDate: '注册日期',// 注册日期 ,
          regNo: '注册编号',//  注册编号 ,
          regOrg: '登记机关',//  登记机关 ,
          regProvince: '注册省份',//  注册省份 ,
          regStatus: '注册状态',//  注册状态 ,
          regType: '注册类型',//  注册类型 ,
          riskLevel: '风险等级',// 风险等级 ,
          shareholder: '股东类型',// 股东类型 ,
          status: '经营状况',//  经营状况 ,
          stockType: '股票类型',// 股票类型 ,
          suprSalaryCorp: '高薪企业',// 高薪企业 ,
          totalDeposit: '存款总额',//  存款总额 ,
          totalLoan: '贷款余额',//  贷款余额 ,
          unifiedSocialCode: '统一社会信用代码',// 统一社会信用代码 ,
          zoneImpCorp: '地区重点企业',//  地区重点企业
        }
      },
      message: {
        type: 'mock'
      }
    })
  })

  //搜索客户列表
  // router.post(`${base}/search`, function (req, res, next) {
  //   res.json(
  //     {
  //       "message": {},
  //       "payload": {
  //         "data": [
  //           {
  //             "acctMgerOrg": "string", //管户员机构
  //             "accumulativeExport": "string",//累计出口金额
  //             "accumulativeImport": "string",//累计进口金额
  //             "advanCorp": "string",//优势企业
  //             "apprvDate": "string",//核准日期
  //             "basicOpenAcctBank": "string",//基本户开户行
  //             "belongBranch": "string",// 归属支行
  //             "branchOrg": "string",//分支机构
  //             "businessLimit": "string",//营业期限 ,
  //             "capital": "string",//资产金额 ,
  //             "certCode": "string",// 证件号码 ,
  //             "certType": "string",//证件类型 ,
  //             "cnName": "string",//中文名称 ,
  //             "cnShortName": "string",//中文简称 ,
  //             "code": "string",//客户编号 ,
  //             "contMan": "string",//联系人 ,
  //             "contTel": "string",//联系电话 ,
  //             "cooperationLimit": "string",// 与我行合作年限 ,
  //             "crdtAcctMger": "string",// 信贷管户员
  //             "ctyLimitCtrlCorp": "string",//国家宏观调控限控行业 ,
  //             "dataOrgNo": "string",//数据归属机构号 ,
  //             "dataUserNo": "string",//数据归属客户经理号 ,
  //             "employeeCnt": "string",//企业人数 ,
  //             "enName": "string",// 英文名称
  //             "enterpriseScale": "string",//企业规模 ,
  //             "envmtAsesLevel": "string",// 环评等级 ,
  //             "extCrdtLevel": "string",//外部信用等级 ,
  //             "groupCustType": "string",//集团客户类型 ,
  //             "groupNo": "string",// 集团编号 ,
  //             "holdName": "string",//股东名称 ,
  //             "holdType": "string",//控股类型 ,
  //             "impExpInd": "string",//进出口权标识 ,
  //             "industry": "string",//客户行业 ,
  //             "industryType": "string",//行业标签 ,
  //             "intCrdtLevel": "string",//内部信用等级 ,
  //             "intRatingDate": "string",// 内部评级日期 ,
  //             "investMain": "string",//投资主体
  //             "isCrdt": "string",//是否信贷户 ,
  //             "isCustomer": "string",// 客户属性 ,
  //             "isDiff": "string",//行内外是否相同标识 ,
  //             "isGoverFinPlat": "string",// 是否政府融资平台 ,
  //             "isGroup": "string",//是否集团户 ,
  //             "isInter": "string",//行内外客户标识：1行内，2行外 ,
  //             "isInterStl": "string",// 是否国结户 ,
  //             "isList": "string",//是否上市 ,
  //             "isPotential": "string",//是否是潜在客户 ,
  //             "isTallRemain": "string",//是否两高一剩 ,
  //             "legalPerson": "string",//法定代表人 ,
  //             "level": "string",// 客户级别 ,
  //             "lifecycle": "string",//客户生命周期 ,
  //             "loanCardNo": "string",//贷款卡编号 ,
  //             "localTaxRegCd": "string",//地税税务登记代码 ,
  //             "managerNo": "string",//客户经理 ,
  //             "matureDate": "string",// 到期日期 ,
  //             "name": "string",//名称
  //             "nationTaxRegCd": "string",//国税税务登记代码 ,
  //             "objectKey": "1234567890",//客户标识，es搜索用，前端不用关心 ,
  //             "openDate": "string",// 开户日期 ,
  //             "openLics": "string",//开户许可证 ,
  //             "openOrg": "string",//开户机构 ,
  //             "openTellerNo": "string",//开户柜员号 ,
  //             "operRange": "string",//经营范围 ,
  //             "operStatus": "string",//经营状态 ,
  //             "orgCode": "string",//组织机构代码 ,
  //             "ownSys": "string",//企业所有制 ,
  //             "publicSector": "string",//上市板块 ,
  //             "public_sector": "string",//
  //             "regAddress": "string",// 注册地址 ,
  //             "regCapital": "string",//注册资本 ,
  //             "regCity": "string",//注册城市 ,
  //             "regCurrency": "string",// 注册币种 ,
  //             "regDate": "string",//注册日期 ,
  //             "regNo": "string",//注册编号 ,
  //             "regOrg": "string",//登记机关 ,
  //             "regProvince": "string",//注册省份 ,
  //             "regStatus": "string",//注册状态 ,
  //             "regType": "string",//注册类型 ,
  //             "riskLevel": "string",//风险等级 ,
  //             "shareholder": "string",//股东类型 ,
  //             "status": "string",//经营状况 ,
  //             "stockType": "string",//股票类型 ,
  //             "suprSalaryCorp": "string",//高薪企业 ,
  //             "totalDeposit": "string",//存款总额 ,
  //             "totalLoan": "string",//贷款余额 ,
  //             "unifiedSocialCode": "string",// 统一社会信用代码 ,
  //             "zoneImpCorp": "string"//地区重点企业
  //           }
  //         ],
  //         "pageNo": 1,
  //         "pageSize": 10,
  //         "total": 100,
  //         "totalPages": 0
  //       },
  //       "success": true
  //     }
  //   )
  // })

  //根据account获取分配的客户经理
  router.get(`${base}/allocationCustomer/findAccount/:account`, function (req, res, next) {
    res.json({
      "message": {},
      "payload": {
        "data": [
          {
            "account": "9090976",
            "companyKey": "MD5",
            "institutionId": 123,
            "institutionName": "富滇银行",
            "persent": "10%",
            "userId": 123,
            "userName": "赵强"
          }
        ]
      },
      "success": true
    })
  })

  //根据companyKey获取该公司所有分配的客户经理
  router.get(`${base}/allocationCustomer/findCustomer/:companyKey`, function (req, res, next) {
    res.json({
      "message": {},
      "payload": {
        "data": [
          {
            "companyKey": "MD5",
            "companyName": "富通公司",
            "institutionId": 123,
            "institutionName": "富滇银行",
            "userId": 123,
            "userName": "赵强"
          }
        ]
      },
      "success": true
    })
  })

  //分配账户给客户经理
  router.post(`${base}/allocationCustomer/updateAccount`, function (req, res, next) {
    res.json({
      "message": {},
      "payload": {
        "data": {}
      },
      "success": true
    })
  })

  //分配客户给客户经理
  router.post(`${base}/allocationCustomer/updateCustomer`, function (req, res, next) {
    res.json({
      "message": {},
      "payload": {
        "data": {}
      },
      "success": true
    })
  })
}

