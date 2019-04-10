module.exports = function (router) {

  //图谱对应的图标识
  // "atlasType": typeMap[type],
  // "graph": "cims",
  // "vertexId": 'Company/' + req.query.name

  let typeMap = {
    'stockRight': 'HOLD_SHARES', // 图谱顺序 1 股权结构
    'executive': 'OFFICER', // 2 公司高管
    'invest': 'INVEST', // 3 投资图谱
    'credit': "CREDIT", // 4 集团成员关系
    'guarantee': 'GUARANTEEE', // 5 担保关系
    'transfer': 'TRANSFER', // 6 资金往来
    'borrowing': 'BANK_LOAN', // 7 银行借贷
    'concert': 'CONCERT', // 8 一致行动人
    'actual_controller': 'ACTUAL_CONTROLLER', // 9 实际控制人
    'upAndDown': 'UP_DOWN_STREAM', // 10 上下游关系
    'faction': 'CLIQUE', // 11 派系关系
    'exceptionGuarantee': 'EXCEPTION_GURANTEEE', // 12 异常担保形态
    'beneficiary': 'BENEFICIARY' // 13 企业受益人
  }

  let structData = {
    success: true,
    "payload": {
      "properties": {
        "enterprise_type": "上市股份有限公司",
        "_utime": "2018-04-20 22:24:14",
        "capital": "10995210218.00",
        "is_listed": "true",
        "registered_address": "深圳市市场监督管理局",
        "city": "广东深圳",
        "_rev": "_YXuyp6W--A",
        "industry": "房地产业",
        "_key": "48912D6F30923B4CBCAC3A908127C33B",
        "_in_time": "2018-04-20 22:10:22",
        "operation_startdate": "1984-05-30",
        "province": "广东",
        "hezhun_date": "2017-07-14",
        "ctime": "2019-03-21 01:02:46",
        "company": "万科企业股份有限公司",
        "registered_capital_unit": "元",
        "stock_code": "000002",
        "is_abnormal_status": false,
        "public_sector": "深市主板",
        "address": "深圳市盐田区大梅沙环梅路33号万科中心",
        "business_status": "存续（在营、开业、在册）",
        "utime": "2019-03-21 01:02:46",
        "legal_man": "郁亮",
        "registered_capital": "10995210218.00",
        "business_scope": "兴办实业（具体项目另行申报）；国内商业、物资供销业（不含专营、专控、专卖商品）；进出口业务（按深经发审证字第113号外贸企业审定证书规定办理）；房地产开发。；",
        "_record_id": "ad78111717250a6184a1791f81cb3f25",
        "name": "万科企业股份有限公司",
        "_id": "Company/48912D6F30923B4CBCAC3A908127C33B",
        "registered_date": "1984-05-30",
        "registered_code": "440301102900139"
      },
      "children": [
        {
          "properties": {
            "is_listed": "false",
            "utime": "2019-03-20 01:03:33",
            "_rev": "_YXaZXG6--A",
            "name": "前海人寿保险股份有限公司-海利年年",
            "ctime": "2019-03-20 01:03:33",
            "_id": "Company/65130B6598B9229DE79AD5BA0B2DC8E2",
            "_key": "65130B6598B9229DE79AD5BA0B2DC8E2"
          },
          "relations": {
            "tradable_share": {
              "_key": "E33922F0E3B7A44B1DBF1D261C6CC52D",
              "_id": "tradable_share/E33922F0E3B7A44B1DBF1D261C6CC52D",
              "_from": "Company/65130B6598B9229DE79AD5BA0B2DC8E2",
              "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
              "_rev": "_YXd1oB---H",
              "ctime": "2019-03-20 01:03:33",
              "utime": "2019-03-20 01:03:33",
              "_record_id": "5d7d2edacfa9399cdb20c1eac7262bfc",
              "total_stake_distribution": "3.11%",
              "increase_decrease_share": "不变"
            }
          }
        },
        {
          "properties": {
            "is_listed": "false",
            "utime": "2019-03-20 01:03:33",
            "_rev": "_YXaaYNO--_",
            "name": "安邦财产保险股份有限公司-传统产品",
            "ctime": "2019-03-20 01:03:33",
            "_id": "Company/9334FADFB46BCED59FB08407690CE099",
            "_key": "9334FADFB46BCED59FB08407690CE099"
          },
          "relations": {
            "tradable_share": {
              "_key": "DA3FD555B227F8996F6D5B239EB76937",
              "_id": "tradable_share/DA3FD555B227F8996F6D5B239EB76937",
              "_from": "Company/9334FADFB46BCED59FB08407690CE099",
              "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
              "_rev": "_YXd2OIa--_",
              "ctime": "2019-03-20 01:03:33",
              "utime": "2019-03-20 01:03:33",
              "_record_id": "5d7d2edacfa9399cdb20c1eac7262bfc",
              "total_stake_distribution": "2.34%",
              "increase_decrease_share": "不变"
            }
          }
        },
        {
          "properties": {
            "enterprise_type": "有限责任公司（国有独资）",
            "_utime": "2018-05-29 18:14:18",
            "capital": "44071360000.00",
            "is_listed": "false",
            "registered_address": "深圳市市场监督管理局",
            "city": "广东深圳",
            "_rev": "_YXa_VsS--A",
            "industry": "资本市场服务",
            "_key": "A76073F6DFA0097F843EDF39E26CC2D1",
            "_in_time": "2018-04-21 08:13:31",
            "operation_startdate": "1998-07-31",
            "province": "广东",
            "hezhun_date": "2017-10-24",
            "ctime": "2019-03-20 01:03:33",
            "company": "深圳市地铁集团有限公司",
            "registered_capital_unit": "元",
            "is_abnormal_status": false,
            "address": "深圳市福田区福中一路1016号地铁大厦27-31层",
            "business_status": "存续（在营、开业、在册）",
            "utime": "2019-03-20 01:03:33",
            "legal_man": "辛杰",
            "registered_capital": "44071360000.00",
            "business_scope": "地铁、轻轨交通项目的建设经营、开发和综合利用；投资兴办实业（具体项目另行申报）；国内商业，物资供销业（不含专营、专控、专卖商品）；经营广告业务；自有物业管理；轨道交通相关业务咨询及教育培训。；",
            "_record_id": "6263b1771d6f11068653eb00e9c2e918",
            "name": "深圳市地铁集团有限公司",
            "_id": "Company/A76073F6DFA0097F843EDF39E26CC2D1",
            "registered_date": "1998-07-31",
            "registered_code": "440301103589295"
          },
          "relations": {
            "tradable_share": {
              "_key": "8B9940D6CB42732BD271764A49655592",
              "_id": "tradable_share/8B9940D6CB42732BD271764A49655592",
              "_from": "Company/A76073F6DFA0097F843EDF39E26CC2D1",
              "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
              "_rev": "_YXd1zM2--G",
              "ctime": "2019-03-20 01:03:33",
              "utime": "2019-03-20 01:03:33",
              "_record_id": "5d7d2edacfa9399cdb20c1eac7262bfc",
              "total_stake_distribution": "29.38%",
              "increase_decrease_share": "不变"
            }
          },
          "children": [
            {
              "properties": {
                "enterprise_type": "",
                "_utime": "2017-02-25 11:29:18",
                "capital": "0.00",
                "is_listed": "false",
                "address": "",
                "registered_address": "",
                "business_status": "",
                "utime": "2019-03-21 01:02:47",
                "city": "广东深圳",
                "_rev": "_YXvPvi---B",
                "industry": "资本市场服务",
                "_key": "C4F96C6D9038C738EFD78B1D2A554455",
                "registered_capital": "0.00",
                "_in_time": "2016-11-22 13:39:11",
                "operation_startdate": "",
                "_record_id": "fc610701fef6921b1370ebef2b3d76b2",
                "province": "广东",
                "name": "深圳市人民政府国有资产监督管理委员会",
                "ctime": "2019-03-21 01:02:47",
                "company": "深圳市人民政府国有资产监督管理委员会",
                "_id": "Company/C4F96C6D9038C738EFD78B1D2A554455",
                "registered_capital_unit": "元",
                "is_abnormal_status": false
              },
              "relations": {
                "invest": {
                  "_key": "2B728A50C6FEE2A0E279258562A4C929",
                  "_id": "invest/2B728A50C6FEE2A0E279258562A4C929",
                  "_from": "Company/C4F96C6D9038C738EFD78B1D2A554455",
                  "_to": "Company/A76073F6DFA0097F843EDF39E26CC2D1",
                  "_rev": "_YVgfQv2---",
                  "ctime": "2019-03-14 01:02:44",
                  "utime": "2019-03-14 01:02:44",
                  "_record_id": "6263b1771d6f11068653eb00e9c2e918",
                  "invest_amount": "0.00",
                  "invest_amount_unit": "",
                  "paied_amount": "0.00",
                  "paied_amount_unit": "",
                  "shareholder_type": "机关法人"
                }
              }
            }
          ]
        },
        {
          "properties": {
            "enterprise_type": "有限责任公司(法人独资)",
            "_utime": "2018-02-02 20:08:56",
            "capital": "5000000000.00",
            "is_listed": "false",
            "registered_address": "东城分局",
            "city": "北京",
            "_rev": "_YXaUpyK--A",
            "industry": "商务服务业",
            "_key": "5196F7D241EA978A65782A181EF6B5EA",
            "_in_time": "2017-03-22 23:31:05",
            "operation_startdate": "2015-11-06",
            "province": "北京",
            "hezhun_date": "2015-11-06",
            "ctime": "2019-03-20 01:03:34",
            "company": "中央汇金资产管理有限责任公司",
            "registered_capital_unit": "元",
            "is_abnormal_status": false,
            "address": "北京市东城区朝阳门北大街1号1669室",
            "business_status": "存续（在营、开业、在册）",
            "utime": "2019-03-20 01:03:34",
            "legal_man": "张宏安",
            "registered_capital": "5000000000.00",
            "business_scope": "资产管理；项目投资；投资管理。（“1、未经有关部门批准，不得以公开方式募集资金；2、不得公开开展证券类产品和金融衍生品交易活动；3、不得发放贷款；4、不得对所投资企业以外的其他企业提供担保；5、不得向投资者承诺投资本金不受损失或者承诺最低收益”；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动。）",
            "_record_id": "a642419dfddb4d7e5ce73c8fd0fc3cae",
            "name": "中央汇金资产管理有限责任公司",
            "_id": "Company/5196F7D241EA978A65782A181EF6B5EA",
            "registered_date": "2015-11-06",
            "registered_code": ""
          },
          "relations": {
            "tradable_share": {
              "_key": "3B2AA593D31FDD07BEF8514B534474F9",
              "_id": "tradable_share/3B2AA593D31FDD07BEF8514B534474F9",
              "_from": "Company/5196F7D241EA978A65782A181EF6B5EA",
              "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
              "_rev": "_YXd1y02--F",
              "ctime": "2019-03-20 01:03:33",
              "utime": "2019-03-20 01:03:33",
              "_record_id": "5d7d2edacfa9399cdb20c1eac7262bfc",
              "total_stake_distribution": "1.72%",
              "increase_decrease_share": "新进"
            }
          },
          "children": [
            {
              "properties": {
                "enterprise_type": "有限责任公司(国有独资)",
                "_utime": "2018-02-18 13:29:13",
                "capital": "828208627200.00",
                "is_listed": "false",
                "registered_address": "北京市工商行政管理局",
                "city": "北京",
                "_rev": "_YXvOI8u--B",
                "industry": "商务服务业",
                "_key": "F5BA8B23D9ED970E016E4C0F3AF0371A",
                "_in_time": "2017-03-29 15:21:53",
                "operation_startdate": "2003-12-16",
                "province": "北京",
                "hezhun_date": "2016-06-17",
                "ctime": "2019-03-21 01:02:39",
                "company": "中央汇金投资有限责任公司",
                "registered_capital_unit": "元",
                "is_abnormal_status": false,
                "address": "朝阳门北大街1号新保利大厦",
                "business_status": "开业",
                "utime": "2019-03-21 01:02:39",
                "legal_man": "丁学东",
                "registered_capital": "828208627200.00",
                "business_scope": "接受国务院授权,对国有重点金融企业进行股权投资；国务院批准的其他相关业务。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
                "_record_id": "b024d2c807242b12628bf2d16e2f95e5",
                "name": "中央汇金投资有限责任公司",
                "_id": "Company/F5BA8B23D9ED970E016E4C0F3AF0371A",
                "registered_date": "2003-12-16",
                "registered_code": ""
              },
              "relations": {
                "invest": {
                  "_key": "1A27315C2D95B4A63757275DA4719B2C",
                  "_id": "invest/1A27315C2D95B4A63757275DA4719B2C",
                  "_from": "Company/F5BA8B23D9ED970E016E4C0F3AF0371A",
                  "_to": "Company/5196F7D241EA978A65782A181EF6B5EA",
                  "_rev": "_YUIZVVi--_",
                  "ctime": "2019-03-06 01:03:17",
                  "utime": "2019-03-06 01:03:17",
                  "_record_id": "a642419dfddb4d7e5ce73c8fd0fc3cae",
                  "invest_amount": "5000000000.00",
                  "invest_amount_unit": "元",
                  "paied_amount": "0.00",
                  "paied_amount_unit": "元",
                  "shareholder_type": "法人股东"
                }
              },
              "children": [
                {
                  "properties": {
                    "enterprise_type": "有限责任公司(国有独资)",
                    "_utime": "2017-02-25 05:20:29",
                    "capital": "1550000000000.00",
                    "is_listed": "false",
                    "registered_address": "国家工商行政管理总局",
                    "city": "北京",
                    "_rev": "_YXa_oSC--B",
                    "industry": "资本市场服务",
                    "_key": "F855ECF21AD7E7D3C586CEBE32B03C7E",
                    "_in_time": "2016-09-28 12:23:01",
                    "operation_startdate": "2007-09-28",
                    "province": "北京",
                    "hezhun_date": "2016-06-17 00:00:00",
                    "ctime": "2019-03-20 01:03:17",
                    "company": "中国投资有限责任公司",
                    "registered_capital_unit": "元",
                    "is_abnormal_status": false,
                    "address": "北京市朝阳门北大街1号新保利大厦16-19层",
                    "business_status": "存续",
                    "utime": "2019-03-20 01:03:17",
                    "legal_man": "丁学东",
                    "registered_capital": "1550000000000.00",
                    "business_scope": "境内外币债券等外币类金融产品投资；境外债券、股票、基金、衍生金融工具等金融产品投资；境内外股权投资；对外委托投资；委托金融机构进行贷款；外汇资产受托管理；发起设立股权投资基金及基金管理公司；国家有关部门批准的其他业务。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
                    "_record_id": "c138d843207c46f0ef3f0ad7ee41946e",
                    "name": "中国投资有限责任公司",
                    "_id": "Company/F855ECF21AD7E7D3C586CEBE32B03C7E",
                    "registered_date": "2007-09-28 00:00:00",
                    "registered_code": "100000000041222"
                  },
                  "relations": {
                    "invest": {
                      "_key": "1F95CF9CA1FBC7B3A9D33BE55D924C28",
                      "_id": "invest/1F95CF9CA1FBC7B3A9D33BE55D924C28",
                      "_from": "Company/F855ECF21AD7E7D3C586CEBE32B03C7E",
                      "_to": "Company/F5BA8B23D9ED970E016E4C0F3AF0371A",
                      "_rev": "_YUa9g_S--_",
                      "ctime": "2019-03-08 01:02:54",
                      "utime": "2019-03-08 01:02:54",
                      "_record_id": "b024d2c807242b12628bf2d16e2f95e5",
                      "invest_amount": "0.00",
                      "invest_amount_unit": "",
                      "paied_amount": "0.00",
                      "paied_amount_unit": "",
                      "shareholder_type": "企业法人"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "properties": {
            "is_listed": "false",
            "utime": "2019-03-20 01:03:34",
            "_rev": "_YXZ7Dsa--_",
            "name": "HKSCC NOMINEES LIMITED",
            "ctime": "2019-03-20 01:03:34",
            "_id": "Company/7B777F28BB4A8F183648618D019D4035",
            "_key": "7B777F28BB4A8F183648618D019D4035"
          },
          "relations": {
            "tradable_share": {
              "_key": "0005FDDC1F9CF82B9F84D37EE9756822",
              "_id": "tradable_share/0005FDDC1F9CF82B9F84D37EE9756822",
              "_from": "Company/7B777F28BB4A8F183648618D019D4035",
              "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
              "_rev": "_YXd2I2W--L",
              "ctime": "2019-03-20 01:03:33",
              "utime": "2019-03-20 01:03:33",
              "_record_id": "5d7d2edacfa9399cdb20c1eac7262bfc",
              "total_stake_distribution": "11.91%",
              "increase_decrease_share": "-3504"
            }
          }
        },
        {
          "properties": {
            "is_listed": "false",
            "utime": "2019-03-20 01:03:33",
            "_rev": "_YXZ4M_O--A",
            "name": "安邦人寿保险股份有限公司-保守型投资组合",
            "ctime": "2019-03-20 01:03:33",
            "_id": "Company/3A5C819C9AB82AF50F21A6D0E11FF462",
            "_key": "3A5C819C9AB82AF50F21A6D0E11FF462"
          },
          "relations": {
            "tradable_share": {
              "_key": "D8AA36D5F16F74517643155B098C2A21",
              "_id": "tradable_share/D8AA36D5F16F74517643155B098C2A21",
              "_from": "Company/3A5C819C9AB82AF50F21A6D0E11FF462",
              "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
              "_rev": "_YXd2DsG--G",
              "ctime": "2019-03-20 01:03:33",
              "utime": "2019-03-20 01:03:33",
              "_record_id": "5d7d2edacfa9399cdb20c1eac7262bfc",
              "total_stake_distribution": "3.21%",
              "increase_decrease_share": "111075960"
            }
          }
        },
        {
          "properties": {
            "is_listed": "false",
            "utime": "2019-02-28 12:36:04",
            "_rev": "_YSyN1LK-_v",
            "name": "西部利得基金-建设银行-西部利得金裕1号资产管理计划",
            "ctime": "2019-02-28 12:36:04",
            "_id": "Company/854C642252349A795A078E04552674C6",
            "_key": "854C642252349A795A078E04552674C6"
          },
          "relations": {
            "tradable_share": {
              "_key": "63F72EEA7F91A254DE6A48CD8D08CDA9",
              "_id": "tradable_share/63F72EEA7F91A254DE6A48CD8D08CDA9",
              "_from": "Company/854C642252349A795A078E04552674C6",
              "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
              "_rev": "_YS3p2r2--B",
              "ctime": "2019-02-28 12:36:04",
              "utime": "2019-02-28 12:36:04",
              "_record_id": "5d7d2edacfa9399cdb20c1eac7262bfc",
              "total_stake_distribution": "2.04%",
              "increase_decrease_share": "不变"
            }
          }
        },
        {
          "properties": {
            "is_listed": "false",
            "utime": "2019-03-20 01:03:33",
            "_rev": "_YXaDz8q--B",
            "name": "招商财富-招商银行-德赢1号专项资产管理计划",
            "ctime": "2019-03-20 01:03:33",
            "_id": "Company/18AB7A8BD686142140A8CA2D5E815A78",
            "_key": "18AB7A8BD686142140A8CA2D5E815A78"
          },
          "relations": {
            "tradable_share": {
              "_key": "DA1D689805582D6D0DC4FB2A422CE89D",
              "_id": "tradable_share/DA1D689805582D6D0DC4FB2A422CE89D",
              "_from": "Company/18AB7A8BD686142140A8CA2D5E815A78",
              "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
              "_rev": "_YXd2U-m--L",
              "ctime": "2019-03-20 01:03:33",
              "utime": "2019-03-20 01:03:33",
              "_record_id": "5d7d2edacfa9399cdb20c1eac7262bfc",
              "total_stake_distribution": "2.98%",
              "increase_decrease_share": "不变"
            }
          }
        },
        {
          "properties": {
            "is_listed": "false",
            "utime": "2019-03-20 01:03:33",
            "_rev": "_YXZ4E-e--B",
            "name": "前海人寿保险股份有限公司-聚富产品",
            "ctime": "2019-03-20 01:03:33",
            "_id": "Company/219EFB3F48CF17769974A6FD488B2A85",
            "_key": "219EFB3F48CF17769974A6FD488B2A85"
          },
          "relations": {
            "tradable_share": {
              "_key": "1C521295F35442526CD2DEA94B846305",
              "_id": "tradable_share/1C521295F35442526CD2DEA94B846305",
              "_from": "Company/219EFB3F48CF17769974A6FD488B2A85",
              "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
              "_rev": "_YS3pV46--_",
              "ctime": "2019-02-28 12:36:04",
              "utime": "2019-02-28 12:36:04",
              "_record_id": "5d7d2edacfa9399cdb20c1eac7262bfc",
              "total_stake_distribution": "1.98%",
              "increase_decrease_share": "不变"
            }
          }
        },
        {
          "properties": {
            "is_listed": "false",
            "utime": "2019-03-20 01:03:33",
            "_rev": "_YXaPV8q--A",
            "name": "国信证券-工商银行-国信金鹏分级1号集合资产管理计划",
            "ctime": "2019-03-20 01:03:33",
            "_id": "Company/00D7BA6E962D5EEFF35C3205DAF53535",
            "_key": "00D7BA6E962D5EEFF35C3205DAF53535"
          },
          "relations": {
            "tradable_share": {
              "_key": "FF32DA76C95C1529AA624F7D43D12EA0",
              "_id": "tradable_share/FF32DA76C95C1529AA624F7D43D12EA0",
              "_from": "Company/00D7BA6E962D5EEFF35C3205DAF53535",
              "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
              "_rev": "_YXd2-M6--B",
              "ctime": "2019-03-20 01:03:33",
              "utime": "2019-03-20 01:03:33",
              "_record_id": "5d7d2edacfa9399cdb20c1eac7262bfc",
              "total_stake_distribution": "4.14%",
              "increase_decrease_share": "不变"
            }
          }
        },
        {
          "properties": {
            "is_listed": "false",
            "utime": "2019-03-20 01:03:32",
            "_rev": "_YXaV9Am--_",
            "name": "UBS AG",
            "ctime": "2019-03-20 01:03:32",
            "_id": "Company/B2E2BCD452198C30CD5E89F70297D80F",
            "_key": "B2E2BCD452198C30CD5E89F70297D80F"
          },
          "relations": {
            "tradable_share": {
              "_key": "30C8CD0749D23FBA3E322A13C1578751",
              "_id": "tradable_share/30C8CD0749D23FBA3E322A13C1578751",
              "_from": "Company/B2E2BCD452198C30CD5E89F70297D80F",
              "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
              "_rev": "_YXd2Fuu--L",
              "ctime": "2019-03-20 01:03:33",
              "utime": "2019-03-20 01:03:33",
              "_record_id": "5d7d2edacfa9399cdb20c1eac7262bfc",
              "total_stake_distribution": "1.90%",
              "increase_decrease_share": "新进"
            }
          }
        },
        {
          "properties": {
            "enterprise_type": "非上市股份有限公司",
            "_utime": "2018-05-29 17:43:35",
            "capital": "16303542900.00",
            "is_listed": "false",
            "registered_address": "深圳市市场监督管理局",
            "city": "广东深圳",
            "_rev": "_YXaJc52--A",
            "industry": "资本市场服务",
            "_key": "E8A700155B8D09CCFBF054211DB1AB72",
            "_in_time": "2018-04-20 23:21:53",
            "operation_startdate": "2002-01-28",
            "province": "广东",
            "hezhun_date": "2018-01-17",
            "ctime": "2019-03-20 01:03:32",
            "company": "深圳市钜盛华股份有限公司",
            "registered_capital_unit": "元",
            "is_abnormal_status": false,
            "address": "深圳市罗湖区宝安北路2088号深业物流大厦八楼802室",
            "business_status": "存续（在营、开业、在册）",
            "utime": "2019-03-20 01:03:32",
            "legal_man": "叶伟青",
            "registered_capital": "16303542900.00",
            "business_scope": "投资兴办实业（具体项目另行申报）；计算机软件开发，合法取得土地使用权的房地产开发、经营；企业营销策划、信息咨询（不含人才中介、证券、保险、基金、金融业务及其它限制项目）；建材、机械设备、办公设备、通信设备、五金交电、电子产品、家具、室内装修材料的购销；国内贸易，货物及技术进出口；自有物业租赁；供应链管理；为项目提供咨询、财务顾问服务。（以上法律、行政法规禁止的项目除外，法律、行政法规限制的项目须取得许可后方可经营）；",
            "_record_id": "58b83efc04cc2830410b185c5cb942fc",
            "name": "深圳市钜盛华股份有限公司",
            "_id": "Company/E8A700155B8D09CCFBF054211DB1AB72",
            "registered_date": "2002-01-28",
            "registered_code": "440301103645413"
          },
          "relations": {
            "tradable_share": {
              "_key": "3416FFA9671D2586D97351952016DE83",
              "_id": "tradable_share/3416FFA9671D2586D97351952016DE83",
              "_from": "Company/E8A700155B8D09CCFBF054211DB1AB72",
              "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
              "_rev": "_YXd1yfa--H",
              "ctime": "2019-03-20 01:03:33",
              "utime": "2019-03-20 01:03:33",
              "_record_id": "5d7d2edacfa9399cdb20c1eac7262bfc",
              "total_stake_distribution": "8.39%",
              "increase_decrease_share": "不变"
            }
          },
          "children": [
            {
              "properties": {
                "enterprise_type": "有限责任公司",
                "_utime": "2018-05-29 19:03:18",
                "capital": "35000000.00",
                "is_listed": "false",
                "registered_address": "深圳市市场监督管理局",
                "city": "广东深圳",
                "_rev": "_YXvPbVS--A",
                "industry": "装卸搬运和运输代理业",
                "_key": "26388DE3C460A2F14F97CB1F513D7DFB",
                "_in_time": "2018-04-21 20:40:53",
                "operation_startdate": "2010-06-09",
                "province": "广东",
                "hezhun_date": "2016-12-27",
                "ctime": "2019-03-21 01:02:44",
                "company": "深圳宝源物流有限公司",
                "registered_capital_unit": "元",
                "is_abnormal_status": false,
                "address": "深圳市罗湖区宝安北路2088号深业物流大厦七楼707室",
                "business_status": "存续（在营、开业、在册）",
                "utime": "2019-03-21 01:02:44",
                "legal_man": "陈琳",
                "registered_capital": "35000000.00",
                "business_scope": "国际货运代理；物流信息咨询、信息咨询（不含人才中介服务、证券及限制项目）；为商业企业提供管理服务；建筑设备的购销及租赁；建筑材料、装饰材料的购销及其它国内贸易（法律、行政法规、国务院决定规定在登记前须经批准的项目除外）。；",
                "_record_id": "af7cf2ccff7c8bf4a50a35b92ea79c6c",
                "name": "深圳宝源物流有限公司",
                "_id": "Company/26388DE3C460A2F14F97CB1F513D7DFB",
                "registered_date": "2010-06-09",
                "registered_code": "440301104733857"
              },
              "relations": {
                "invest": {
                  "_key": "71A60CF817E15F8D44F91C5E1450AA67",
                  "_id": "invest/71A60CF817E15F8D44F91C5E1450AA67",
                  "_from": "Company/26388DE3C460A2F14F97CB1F513D7DFB",
                  "_to": "Company/E8A700155B8D09CCFBF054211DB1AB72",
                  "_rev": "_YWK0gYi---",
                  "ctime": "2019-03-16 01:02:56",
                  "utime": "2019-03-16 01:02:56",
                  "_record_id": "58b83efc04cc2830410b185c5cb942fc",
                  "invest_amount": "0.00",
                  "invest_amount_unit": "",
                  "paied_amount": "0.00",
                  "paied_amount_unit": "",
                  "shareholder_type": "法人股东"
                }
              },
              "children": [
                {
                  "properties": {
                    "enterprise_type": "有限责任公司",
                    "_utime": "2017-02-25 02:01:14",
                    "capital": "0.00",
                    "is_listed": "false",
                    "registered_address": "深圳市市场监督管理局福田分局",
                    "city": "广东深圳",
                    "_rev": "_YWcWVSa--_",
                    "industry": "批发业",
                    "_key": "B1F2422E3F67DECFECD862C76C873272",
                    "_in_time": "2016-09-29 12:45:18",
                    "operation_startdate": "2002-01-28",
                    "province": "广东",
                    "ctime": "2019-03-17 01:03:56",
                    "company": "深圳市钜盛华实业发展有限公司",
                    "registered_capital_unit": "元",
                    "is_abnormal_status": false,
                    "address": "深圳市罗湖区宝安北路2088号深业物流大厦八楼802室",
                    "business_status": "在业",
                    "utime": "2019-03-17 01:03:56",
                    "legal_man": "叶伟青",
                    "registered_capital": "0.00",
                    "business_scope": "投资兴办实业（具体项目另行申报）；计算机软件开发，合法取得土地使用权的房地产开发、经营；企业营销策划、信息咨询（不含人才中介、证券、保险、基金、金融业务及其它限制项目）；建材、机械设备、办公设备、通信设备、五金交电、电子产品、家具、室内装修材料的购销；国内贸易，货物及技术进出口。（法律、行政法规禁止的项目除外，法律、行政法规限制的项目须取得许可后方可经营）^",
                    "_record_id": "38d143bed2e7247041768f191255a559",
                    "name": "深圳市钜盛华实业发展有限公司",
                    "_id": "Company/B1F2422E3F67DECFECD862C76C873272",
                    "registered_date": "2002-01-28 00:00:00",
                    "registered_code": "440301103645413"
                  },
                  "relations": {
                    "invest": {
                      "_key": "49864007292FC06411EA190E696328D8",
                      "_id": "invest/49864007292FC06411EA190E696328D8",
                      "_from": "Company/B1F2422E3F67DECFECD862C76C873272",
                      "_to": "Company/26388DE3C460A2F14F97CB1F513D7DFB",
                      "_rev": "_YV0YWca--_",
                      "ctime": "2019-03-15 01:02:00",
                      "utime": "2019-03-15 01:02:00",
                      "_record_id": "af7cf2ccff7c8bf4a50a35b92ea79c6c",
                      "invest_amount": "0.00",
                      "invest_amount_unit": "",
                      "paied_amount": "0.00",
                      "paied_amount_unit": "",
                      "shareholder_type": "法人股东"
                    }
                  }
                },
                {
                  "properties": {
                    "enterprise_type": "有限责任公司（自然人独资）",
                    "_utime": "2018-05-29 18:04:58",
                    "capital": "300000000.00",
                    "is_listed": "false",
                    "registered_address": "深圳市市场监督管理局",
                    "city": "广东深圳",
                    "_rev": "_YXuulRS--A",
                    "industry": "资本市场服务",
                    "_key": "45D112D704C0B4AB3A3A0B11CA7937F3",
                    "_in_time": "2018-04-21 02:50:47",
                    "operation_startdate": "2000-03-23",
                    "province": "广东",
                    "hezhun_date": "2017-10-25",
                    "ctime": "2019-03-21 01:02:44",
                    "company": "深圳市宝能投资集团有限公司",
                    "registered_capital_unit": "元",
                    "is_abnormal_status": false,
                    "address": "深圳市罗湖区笋岗街道宝安北路2088号深业物流大厦10楼",
                    "business_status": "存续（在营、开业、在册）",
                    "utime": "2019-03-21 01:02:44",
                    "legal_man": "姚振华",
                    "registered_capital": "300000000.00",
                    "business_scope": "投资兴办实业（具体项目另行申报）；投资文化旅游产业（具体项目另行申报）；建筑、装饰材料的购销及其它国内贸易（法律、行政法规、国务院决定规定在登记前须经批准的项目除外）、经营进出口业务（法律、行政法规、国务院决定禁止的项目除外，限制的项目须取得许可后方可经营）；建筑设备的购销与租赁；信息咨询、企业管理咨询（不含人才中介、证券、保险、基金、金融业务及其它限制项目）；供应链管理。；",
                    "_record_id": "79695e99f5439028c414db90f96cbcaa",
                    "name": "深圳市宝能投资集团有限公司",
                    "_id": "Company/45D112D704C0B4AB3A3A0B11CA7937F3",
                    "registered_date": "2000-03-23",
                    "registered_code": "440301104384231"
                  },
                  "relations": {
                    "invest": {
                      "_key": "801B22932C4EFF09E1F3361472EB6AAF",
                      "_id": "invest/801B22932C4EFF09E1F3361472EB6AAF",
                      "_from": "Company/45D112D704C0B4AB3A3A0B11CA7937F3",
                      "_to": "Company/26388DE3C460A2F14F97CB1F513D7DFB",
                      "_rev": "_YV0YLFC--_",
                      "ctime": "2019-03-15 01:02:00",
                      "utime": "2019-03-15 01:02:00",
                      "_record_id": "af7cf2ccff7c8bf4a50a35b92ea79c6c",
                      "invest_amount": "0.00",
                      "invest_amount_unit": "",
                      "paied_amount": "0.00",
                      "paied_amount_unit": "",
                      "shareholder_type": "法人股东"
                    }
                  }
                }
              ]
            },
            {
              "properties": {
                "enterprise_type": "有限责任公司（自然人独资）",
                "_utime": "2018-05-29 18:04:58",
                "capital": "300000000.00",
                "is_listed": "false",
                "registered_address": "深圳市市场监督管理局",
                "city": "广东深圳",
                "_rev": "_YXuulRS--A",
                "industry": "资本市场服务",
                "_key": "45D112D704C0B4AB3A3A0B11CA7937F3",
                "_in_time": "2018-04-21 02:50:47",
                "operation_startdate": "2000-03-23",
                "province": "广东",
                "hezhun_date": "2017-10-25",
                "ctime": "2019-03-21 01:02:44",
                "company": "深圳市宝能投资集团有限公司",
                "registered_capital_unit": "元",
                "is_abnormal_status": false,
                "address": "深圳市罗湖区笋岗街道宝安北路2088号深业物流大厦10楼",
                "business_status": "存续（在营、开业、在册）",
                "utime": "2019-03-21 01:02:44",
                "legal_man": "姚振华",
                "registered_capital": "300000000.00",
                "business_scope": "投资兴办实业（具体项目另行申报）；投资文化旅游产业（具体项目另行申报）；建筑、装饰材料的购销及其它国内贸易（法律、行政法规、国务院决定规定在登记前须经批准的项目除外）、经营进出口业务（法律、行政法规、国务院决定禁止的项目除外，限制的项目须取得许可后方可经营）；建筑设备的购销与租赁；信息咨询、企业管理咨询（不含人才中介、证券、保险、基金、金融业务及其它限制项目）；供应链管理。；",
                "_record_id": "79695e99f5439028c414db90f96cbcaa",
                "name": "深圳市宝能投资集团有限公司",
                "_id": "Company/45D112D704C0B4AB3A3A0B11CA7937F3",
                "registered_date": "2000-03-23",
                "registered_code": "440301104384231"
              },
              "relations": {
                "invest": {
                  "_key": "F848192D1A1036B964AADEBB7645CFFC",
                  "_id": "invest/F848192D1A1036B964AADEBB7645CFFC",
                  "_from": "Company/45D112D704C0B4AB3A3A0B11CA7937F3",
                  "_to": "Company/E8A700155B8D09CCFBF054211DB1AB72",
                  "_rev": "_YWKwlYi--_",
                  "ctime": "2019-03-16 01:02:56",
                  "utime": "2019-03-16 01:02:56",
                  "_record_id": "58b83efc04cc2830410b185c5cb942fc",
                  "invest_amount": "0.00",
                  "invest_amount_unit": "",
                  "paied_amount": "0.00",
                  "paied_amount_unit": "",
                  "shareholder_type": "法人股东"
                }
              },
              "children": [
                {
                  "properties": {
                    "is_listed": "false",
                    "utime": "2019-03-16 01:03:13",
                    "_rev": "_YWJaoQC---",
                    "name": "姚振华",
                    "ctime": "2019-03-16 01:03:13",
                    "_id": "Person/860F1DB3A0E8B72085041A4595FA56AA",
                    "_key": "860F1DB3A0E8B72085041A4595FA56AA"
                  },
                  "relations": {
                    "invest": {
                      "_key": "25F4786E9EE63FFF1AA7D5C7973435B6",
                      "_id": "invest/25F4786E9EE63FFF1AA7D5C7973435B6",
                      "_from": "Person/860F1DB3A0E8B72085041A4595FA56AA",
                      "_to": "Company/45D112D704C0B4AB3A3A0B11CA7937F3",
                      "_rev": "_YWKteBG--B",
                      "ctime": "2019-03-16 01:03:13",
                      "utime": "2019-03-16 01:03:13",
                      "_record_id": "79695e99f5439028c414db90f96cbcaa",
                      "invest_amount": "0.00",
                      "invest_amount_unit": "",
                      "paied_amount": "0.00",
                      "paied_amount_unit": "",
                      "shareholder_type": "自然人股东"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  }

  let treeData = {
    success: true,
    "payload": {
      "properties": {
        "enterprise_type": "股份有限公司(上市)",
        "capital": "10995210218.00",
        "is_listed": "true",
        "address": "深圳市盐田区大梅沙环梅路33号万科中心",
        "registered_address": "深圳市市场监督管理局",
        "business_status": "存续（在营、开业、在册）",
        "utime": "2019-03-20 01:03:33",
        "city": "广东深圳",
        "_rev": "_YXaGSh6--A",
        "industry": "房地产业",
        "_key": "48912D6F30923B4CBCAC3A908127C33B",
        "operation_startdate": "1984-05-30",
        "province": "广东",
        "name": "万科企业股份有限公司",
        "ctime": "2019-03-20 01:03:33",
        "_id": "Company/48912D6F30923B4CBCAC3A908127C33B",
        "registered_capital_unit": "元"
      },
      "children": [
        {
          "properties": {
            "name": "核心高管",
            "_key": "key_officer"
          },
          "children": [
            {
              "properties": {
                "name": "郁亮(法定代表人, 总经理, 董事长)",
                "_id": "Person/64DE3547F44B095CE10B0B7BFAA7BAEA",
                "_key": "64DE3547F44B095CE10B0B7BFAA7BAEA"
              },
              "relations": [
                {
                  "_key": "099B39FC84FB2016418289CE49820EA1",
                  "_id": "officer/099B39FC84FB2016418289CE49820EA1",
                  "_from": "Person/64DE3547F44B095CE10B0B7BFAA7BAEA",
                  "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
                  "position": "法定代表人, 总经理, 董事长",
                  "label": "法定代表人, 总经理, 董事长"
                }
              ]
            }
          ]
        },
        {
          "properties": {
            "name": "董事",
            "_key": "director"
          },
          "children": [
            {
              "properties": {
                "name": "张旭(董事)",
                "_id": "Person/9B8DECCD3A024C998CA7B890E32923DE",
                "_key": "9B8DECCD3A024C998CA7B890E32923DE"
              },
              "relations": [
                {
                  "_key": "128DBB11DEC191A6D2658A613AF95960",
                  "_id": "officer/128DBB11DEC191A6D2658A613AF95960",
                  "_from": "Person/9B8DECCD3A024C998CA7B890E32923DE",
                  "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
                  "position": "董事",
                  "label": "董事"
                }
              ]
            },
            {
              "properties": {
                "name": "李强(董事)",
                "_id": "Person/27CBEA0824D5A52BD59F46470722F2DA",
                "_key": "27CBEA0824D5A52BD59F46470722F2DA"
              },
              "relations": [
                {
                  "_key": "FFB85C1213E3BEEB18799925D05C36B0",
                  "_id": "officer/FFB85C1213E3BEEB18799925D05C36B0",
                  "_from": "Person/27CBEA0824D5A52BD59F46470722F2DA",
                  "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
                  "position": "董事",
                  "label": "董事"
                }
              ]
            },
            {
              "properties": {
                "name": "林茂德(董事)",
                "_id": "Person/587BB2A338E408A1527D9652F745A269",
                "_key": "587BB2A338E408A1527D9652F745A269"
              },
              "relations": [
                {
                  "_key": "323A1F2C43A0A8D6EAAC5AF8E22A6603",
                  "_id": "officer/323A1F2C43A0A8D6EAAC5AF8E22A6603",
                  "_from": "Person/587BB2A338E408A1527D9652F745A269",
                  "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
                  "position": "董事",
                  "label": "董事"
                }
              ]
            },
            {
              "properties": {
                "name": "孙盛典(董事)",
                "_id": "Person/009E36C388137DE8A19175C46DB1BF1C",
                "_key": "009E36C388137DE8A19175C46DB1BF1C"
              },
              "relations": [
                {
                  "_key": "27E6CF99C33C58387FC650AB822CA892",
                  "_id": "officer/27E6CF99C33C58387FC650AB822CA892",
                  "_from": "Person/009E36C388137DE8A19175C46DB1BF1C",
                  "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
                  "position": "董事",
                  "label": "董事"
                }
              ]
            },
            {
              "properties": {
                "name": "王文金(董事)",
                "ctime": "2019-03-20 01:01:59",
                "_id": "Person/5D825F0C71ACCC18AD5183FBBBFBF819",
                "_key": "5D825F0C71ACCC18AD5183FBBBFBF819"
              },
              "relations": [
                {
                  "_key": "183178FB11B3C15F966DDE7D047E0216",
                  "_id": "officer/183178FB11B3C15F966DDE7D047E0216",
                  "_from": "Person/5D825F0C71ACCC18AD5183FBBBFBF819",
                  "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
                  "position": "董事",
                  "label": "董事"
                }
              ]
            },
            {
              "properties": {
                "name": "刘姝威(董事)",
                "_id": "Person/26C58EABC39545C6B1E7557F09A87DC3",
                "_key": "26C58EABC39545C6B1E7557F09A87DC3"
              },
              "relations": [
                {
                  "_key": "07D571A35654AB8C395240CAE2EB413F",
                  "_id": "officer/07D571A35654AB8C395240CAE2EB413F",
                  "_from": "Person/26C58EABC39545C6B1E7557F09A87DC3",
                  "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
                  "position": "董事",
                  "label": "董事"
                }
              ]
            },
            {
              "properties": {
                "name": "肖民(董事)",
                "_id": "Person/EF0B7A27076F8F47669AC0E9FCCF3AD9",
                "_key": "EF0B7A27076F8F47669AC0E9FCCF3AD9"
              },
              "relations": [
                {
                  "_key": "68C640E59F92866EAF7EDA7A8354B264",
                  "_id": "officer/68C640E59F92866EAF7EDA7A8354B264",
                  "_from": "Person/EF0B7A27076F8F47669AC0E9FCCF3AD9",
                  "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
                  "position": "董事",
                  "label": "董事"
                }
              ]
            },
            {
              "properties": {
                "name": "吴嘉宁(董事)",
                "_id": "Person/C4C26D7B281DD11570C48864E2726E1D",
                "_key": "C4C26D7B281DD11570C48864E2726E1D"
              },
              "relations": [
                {
                  "_key": "0CE08DA7879DE2E1A8EEEBE91A236787",
                  "_id": "officer/0CE08DA7879DE2E1A8EEEBE91A236787",
                  "_from": "Person/C4C26D7B281DD11570C48864E2726E1D",
                  "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
                  "position": "董事",
                  "label": "董事"
                }
              ]
            },
            {
              "properties": {
                "name": "康典(董事)",
                "_id": "Person/80641489A7A28CECE024713EF90AEA76",
                "_key": "80641489A7A28CECE024713EF90AEA76"
              },
              "relations": [
                {
                  "_key": "1B0D7E900D6613FBE5B69D4C68874DF7",
                  "_id": "officer/1B0D7E900D6613FBE5B69D4C68874DF7",
                  "_from": "Person/80641489A7A28CECE024713EF90AEA76",
                  "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
                  "position": "董事",
                  "label": "董事"
                }
              ]
            }
          ]
        },
        {
          "properties": {
            "name": "监事",
            "_key": "supervisor"
          },
          "children": [
            {
              "properties": {
                "name": "解冻(监事)",
                "_id": "Person/2E31EA9719ABD380DF9E899139DA3C06",
                "_key": "2E31EA9719ABD380DF9E899139DA3C06"
              },
              "relations": [
                {
                  "_key": "B1834E4069413A00FDF1A0E09013C279",
                  "_id": "officer/B1834E4069413A00FDF1A0E09013C279",
                  "_from": "Person/2E31EA9719ABD380DF9E899139DA3C06",
                  "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
                  "position": "监事",
                  "label": "监事"
                }
              ]
            },
            {
              "properties": {
                "name": "周清平(监事)",
                "_id": "Person/E9A25A501B6EA852DF7AE960041C6BB6",
                "_key": "E9A25A501B6EA852DF7AE960041C6BB6"
              },
              "relations": [
                {
                  "_key": "578498DA6F5A25468CB4F044DD1CB08F",
                  "_id": "officer/578498DA6F5A25468CB4F044DD1CB08F",
                  "_from": "Person/E9A25A501B6EA852DF7AE960041C6BB6",
                  "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
                  "position": "监事",
                  "label": "监事"
                }
              ]
            },
            {
              "properties": {
                "name": "郑英(监事)",
                "_id": "Person/4FF6BFB9FAB2D50461D422195C2AF4D4",
                "_key": "4FF6BFB9FAB2D50461D422195C2AF4D4"
              },
              "relations": [
                {
                  "_key": "5B88D048BE7A6A95DC6AC677CD7E1F9D",
                  "_id": "officer/5B88D048BE7A6A95DC6AC677CD7E1F9D",
                  "_from": "Person/4FF6BFB9FAB2D50461D422195C2AF4D4",
                  "_to": "Company/48912D6F30923B4CBCAC3A908127C33B",
                  "position": "监事",
                  "label": "监事"
                }
              ]
            }
          ]
        }
      ]
    }
  }

  let graphData = {
    success: true,
    payload: {
      "vertexes": [{
        "is_customer": "true",
        "is_three_licenses_united": "true",
        "original_status": "存续（在营、开业、在册）",
        "management_scope": "计算机网络综合管理及网络系统集成、通讯设备技术开发、技术服务、技术转让、技术培训；电子信息技术咨询（中介除外）；委托生产通讯设备；销售计算机网络软硬件产品、通讯设备、家用电器、电子产品、安全技术防范产品；电子信息技术系统工程设计；通讯设备售后服务；技术进出口、代理进出口、货物进出口；第一类增值电信业务中的互联网接入服务业务、互联网数据中心业务。（企业依法自主选择经营项目，开展经营活动；依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事本市产业政策禁止和限制类项目的经营活动。）",
        "_key": "7908891a00d02b29354c4dd5147de439",
        "english_name": "BeijingUltrapowerSoftwareCo.Ltd.",
        "lifecycle": "初创期",
        "institution": "1",
        "reg_province": "北京",
        "ctime": "2010-10-10 00:00:00",
        "social_credit_code": "91110000802090167W",
        "basic_account_branch": "德州分行",
        "credit_class": "A",
        "financial_ins_cert": "FIC3562311c",
        "business_license_reg_no": "OHTINMQKUB7LFGJX3K",
        "telephone": "010-34469483",
        "reg_date": "2010-10-10 00:00:00",
        "business_license_period": "2010-07-27至",
        "reg_capital_unit": "元",
        "name": "海致星图技术（北京）有限公司",
        "short_name": "海致星图",
        "_id": "Company/7908891a00d02b29354c4dd5147de439",
        "economic_type": "个体经济",
        "cust_id": "17333209",
        "org_code": "AX3499DT",
        "status": "存续",
        "object_key": "7908891a00d02b29354c4dd5147de439",
        "service_scale_index": 45,
        "_rev": "_XnlgyE---_",
        "reg_address": "北京市海淀区万泉庄路28号万柳新贵大厦A座6层601室",
        "coorperation_length": 8,
        "industry": "科技推广和应用服务业",
        "paid_capital_amount": 2000000000,
        "paid_capital_currency": "元",
        "margin_contribution_index": 51,
        "browse_count": 0,
        "stock_full_code": "shmb601886",
        "stock_code": "601886",
        "email": "yinwei@hotmail.com",
        "public_sector": "沪市A股",
        "business_license_start_date": "2010-10-10 00:00:00",
        "website": "www.ultrapower.com.cn",
        "institution_type": "其他股份有限公司(上市)",
        "concern_count": 0,
        "utime": "2010-10-10 00:00:00",
        "legal_representative": "任旭阳",
        "reg_capital": 2000000000,
        "reg_country": "中国",
        "cust_open_date": "2003-11-10 00:00:00",
        "stock_type": "A",
        "reg_city": "北京",
        "is_listed_company": "true",
        "enterprise_scale": "大型企业",
        "is_blacklist": true
      }, {
        "is_customer": "true",
        "is_three_licenses_united": "true",
        "original_status": "存续（在营、开业、在册）",
        "management_scope": "服装、针纺品、纺织品、机械、化学纤维、一般劳动防护用品、特种劳动防护用品的制造加工、销售；鞋帽、皮具、箱包、眼镜的销售；污水处理，工业用水经营；自有房屋租赁；提供企业管理服务；经营本企业自产产品的出口业务和本企业所需的机械设备、零配件、原辅材料的进口业务（国家限定公司经营或禁止进出口的商品及技术除外）。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "_key": "36d37c063ee31a5aebcc3667af028715",
        "english_name": "JiangsuHongdouIndustryCo.Ltd.",
        "lifecycle": "成熟期",
        "institution": "1",
        "reg_province": "江苏",
        "ctime": "2009-05-09 00:00:00",
        "social_credit_code": "81110000802090167W",
        "basic_account_branch": "临沂分行",
        "credit_class": "A-",
        "financial_ins_cert": "LKDJFLIE33485",
        "business_license_reg_no": "MT3L13XQMF5JYLMLJF",
        "telephone": "010-34469483",
        "reg_date": "2009-05-09 00:00:00",
        "business_license_period": "2009-05-09至",
        "reg_capital_unit": "元",
        "name": "江苏红豆实业股份有限公司",
        "short_name": "红豆股份",
        "_id": "Company/36d37c063ee31a5aebcc3667af028715",
        "economic_type": "私营经济",
        "cust_id": "48376211",
        "org_code": "XUI99342DF",
        "status": "存续",
        "object_key": "36d37c063ee31a5aebcc3667af028715",
        "service_scale_index": 45,
        "_rev": "_XnlgyE---B",
        "reg_address": "江苏省无锡市锡山区东港镇",
        "coorperation_length": 12,
        "industry": "饰物装饰设计服务",
        "paid_capital_amount": 3000000000,
        "paid_capital_currency": "元",
        "margin_contribution_index": 46,
        "browse_count": 0,
        "stock_full_code": "shmb600135",
        "stock_code": "600135",
        "email": "yinwei@hotmail.com",
        "public_sector": "港股",
        "business_license_start_date": "2009-05-09 00:00:00",
        "website": "www.ultrapower.com.cn",
        "institution_type": "其他股份有限公司(上市)",
        "concern_count": 0,
        "utime": "2009-05-09 00:00:00",
        "legal_representative": "刘连红",
        "reg_capital": 3000000000,
        "reg_country": "中国",
        "cust_open_date": "2007-11-10 00:00:00",
        "stock_type": "",
        "reg_city": "无锡",
        "is_listed_company": "true",
        "enterprise_scale": "中型企业",
        "is_blacklist": true
      }, {
        "object_key": "71D5654944ADEE991715A1D521C684C3",
        "utime": "2018-05-01",
        "_rev": "_XO4bwVO--D",
        "name": "杨再飞",
        "ctime": "2018-05-01",
        "_id": "Person/71D5654944ADEE991715A1D521C684C3",
        "_key": "71D5654944ADEE991715A1D521C684C3"
      }],
      "edges": [{
        "to_key": "Company/36d37c063ee31a5aebcc3667af028715",
        "_from": "Company/7908891a00d02b29354c4dd5147de439",
        "object_key": "09KFL54944ADEE991715A1D521C68334",
        "utime": "2014/1/23 2:55",
        "_rev": "_XnlgxyO--C",
        "rule": "Rule3",
        "_key": "09KFL54944ADEE991715A1D521C68334",
        "depth": 1,
        "ctime": "2014/1/23 2:55",
        "_id": "te_actual_controller/09KFL54944ADEE991715A1D521C68334",
        "_to": "Company/36d37c063ee31a5aebcc3667af028715",
        "attr": "actual_control",
        "from_key": "Company/7908891a00d02b29354c4dd5147de439",
        "ratio": 0.6,
        "label": ""
      }, {
        "to_key": "Company/7908891a00d02b29354c4dd5147de439",
        "_from": "Person/71D5654944ADEE991715A1D521C684C3",
        "object_key": "71D5654944ADEE991715A1D521C684C3",
        "utime": "2014/1/23 2:55",
        "_rev": "_XnlgxyO--A",
        "rule": "Rule3",
        "_key": "71D5654944ADEE991715A1D521C684C3",
        "depth": 1,
        "ctime": "2014/1/23 2:55",
        "_id": "te_actual_controller/71D5654944ADEE991715A1D521C684C3",
        "_to": "Company/7908891a00d02b29354c4dd5147de439",
        "attr": "actual_control",
        "from_key": "Person/71D5654944ADEE991715A1D521C684C3",
        "ratio": 0.58,
        "label": ""
      }]
    }
  }
  router.post('/mock/crm-jj/api/scheduler/querySchedulerByDate', (req, res, next) => {
    res.json()
  })
  router.get('/mock/crm-jj/api/message/detail', function (req, res, next) {})

  //股权结构
  router.get('/mock/crm-jj/api/relation_graph/stockRight', function (req, res, next) {
    res.json(structData)
  })

  //公司高管
  router.get('/mock/crm-jj/api/relation_graph/executive', function (req, res, next) {
    res.json(treeData)
  })

  //投资图谱
  router.get('/mock/crm-jj/api/relation_graph/invest', function (req, res, next) {
    res.json(treeData)
  })

  //集团成员关系
  router.get('/mock/crm-jj/api/relation_graph/credit', function (req, res, next) {
    res.json(graphData)
  })

  //担保关系
  router.get('/mock/crm-jj/api/relation_graph/guarantee', function (req, res, next) {
    res.json(graphData)
  })


  //资金往来
  router.get('/mock/crm-jj/api/relation_graph/transfer', function (req, res, next) {
    res.json(treeData)
  })

  //银行借贷
  router.get('/mock/crm-jj/api/relation_graph/borrowing', function (req, res, next) {
    res.json(graphData)
  })

  //一致行动人
  router.get('/mock/crm-jj/api/relation_graph/concert', function (req, res, next) {
    res.json(graphData)
  })

  //实际控制人
  router.get('/mock/crm-jj/api/relation_graph/actual_controller', function (req, res, next) {
    res.json(treeData)
  })


  //上下游关系/crm-jj/api/relation_graph/upAndDown
  router.get('/mock/crm-jj/api/relation_graph/upAndDown', function (req, res, next) {
    res.json(graphData)
  })

  //派系关系
  router.get('/mock/crm-jj/api/relation_graph/faction', function (req, res, next) {
    res.json(graphData)
  })

  //异常担保关系
  router.get('/mock/crm-jj/api/relation_graph/exceptionGuarantee', function (req, res, next) {
    res.json(graphData)
  })

  //受益人
  router.get('/mock/crm-jj/api/relation_graph/beneficiary', function (req, res, next) {
    res.json(graphData)
  })




}
