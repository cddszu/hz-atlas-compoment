module.exports = function (router) {
  // 客户管理－客户列表
  router.post("/mock/crm-jj/api/customer/search", function (req, res, next) {
    res.json({
      success: true,
      payload: {
        data: [{
            id: "11111111",
            cnName: "云南白药控股有限公司",
            legalPerson: "陈发树",
            openDate: "1997-09-01",
            extCrdtLevel: "AAA",
            industryType: "医药制造类",
            regAddress: "云南省昆明市呈贡区云南白药街3686号",
            operRange: "植物药原料基地的开发和经营： 药品生产、销售(限所投资企业凭许可证生产、经营)、研发...",
            regCapital: "5,000.00",
            openOrg: "官渡支行－张红",
            isList: "上市公司",
            holdType: "A股上市"
          },
          {
            id: "22222222",
            cnName: "云南白药控股有限公司",
            legalPerson: "陈发树",
            openDate: "1997-09-01",
            extCrdtLevel: "AAA",
            industryType: "医药制造类",
            regAddress: "云南省昆明市呈贡区云南白药街3686号",
            operRange: "植物药原料基地的开发和经营： 药品生产、销售(限所投资企业凭许可证生产、经营)、研发...",
            regCapital: "5,000.00",
            openOrg: "官渡支行－张红",
            isList: "上市公司",
            holdType: "A股上市"
          },
          {
            id: "33333333",
            cnName: "云南白药控股有限公司",
            legalPerson: "陈发树",
            openDate: "1997-09-01",
            extCrdtLevel: "AAA",
            industryType: "医药制造类",
            regAddress: "云南省昆明市呈贡区云南白药街3686号",
            operRange: "植物药原料基地的开发和经营： 药品生产、销售(限所投资企业凭许可证生产、经营)、研发...",
            regCapital: "5,000.00",
            openOrg: "官渡支行－张红",
            isList: "上市公司",
            holdType: "A股上市"
          },
          {
            id: "44444444",
            cnName: "云南白药控股有限公司",
            legalPerson: "陈发树",
            openDate: "1997-09-01",
            extCrdtLevel: "AAA",
            industryType: "医药制造类",
            regAddress: "云南省昆明市呈贡区云南白药街3686号",
            operRange: "植物药原料基地的开发和经营： 药品生产、销售(限所投资企业凭许可证生产、经营)、研发...",
            regCapital: "5,000.00",
            openOrg: "官渡支行－张红",
            isList: "上市公司",
            holdType: "A股上市"
          },
          {
            id: "55555555",
            cnName: "云南白药控股有限公司",
            legalPerson: "陈发树",
            openDate: "1997-09-01",
            extCrdtLevel: "AAA",
            industryType: "医药制造类",
            regAddress: "云南省昆明市呈贡区云南白药街3686号",
            operRange: "植物药原料基地的开发和经营： 药品生产、销售(限所投资企业凭许可证生产、经营)、研发...",
            regCapital: "5,000.00",
            openOrg: "官渡支行－张红",
            isList: "上市公司",
            holdType: "A股上市"
          },
          {
            id: "66666666",
            cnName: "云南白药控股有限公司",
            legalPerson: "陈发树",
            openDate: "1997-09-01",
            extCrdtLevel: "AAA",
            industryType: "医药制造类",
            regAddress: "云南省昆明市呈贡区云南白药街3686号",
            operRange: "植物药原料基地的开发和经营： 药品生产、销售(限所投资企业凭许可证生产、经营)、研发...",
            regCapital: "5,000.00",
            openOrg: "官渡支行－张红",
            isList: "上市公司",
            holdType: "A股上市"
          },
          {
            id: "7777777",
            cnName: "云南白药控股有限公司",
            legalPerson: "陈发树",
            openDate: "1997-09-01",
            extCrdtLevel: "AAA",
            industryType: "医药制造类",
            regAddress: "云南省昆明市呈贡区云南白药街3686号",
            operRange: "植物药原料基地的开发和经营： 药品生产、销售(限所投资企业凭许可证生产、经营)、研发...",
            regCapital: "5,000.00",
            openOrg: "官渡支行－张红",
            isList: "上市公司",
            holdType: "A股上市"
          },
          {
            id: "88888888",
            cnName: "云南白药控股有限公司",
            legalPerson: "陈发树",
            openDate: "1997-09-01",
            extCrdtLevel: "AAA",
            industryType: "医药制造类",
            regAddress: "云南省昆明市呈贡区云南白药街3686号",
            operRange: "植物药原料基地的开发和经营： 药品生产、销售(限所投资企业凭许可证生产、经营)、研发...",
            regCapital: "5,000.00",
            openOrg: "官渡支行－张红",
            isList: "上市公司",
            holdType: "A股上市"
          },
          {
            id: "99999999",
            cnName: "云南白药控股有限公司",
            legalPerson: "陈发树",
            openDate: "1997-09-01",
            extCrdtLevel: "AAA",
            industryType: "医药制造类",
            regAddress: "云南省昆明市呈贡区云南白药街3686号",
            operRange: "植物药原料基地的开发和经营： 药品生产、销售(限所投资企业凭许可证生产、经营)、研发...",
            regCapital: "5,000.00",
            openOrg: "官渡支行－张红",
            isList: "上市公司",
            holdType: "A股上市"
          },
          {
            id: "45678231",
            cnName: "云南白药控股有限公司",
            legalPerson: "陈发树",
            openDate: "1997-09-01",
            extCrdtLevel: "AAA",
            industryType: "医药制造类",
            regAddress: "云南省昆明市呈贡区云南白药街3686号",
            operRange: "植物药原料基地的开发和经营： 药品生产、销售(限所投资企业凭许可证生产、经营)、研发...",
            regCapital: "5,000.00",
            openOrg: "官渡支行－张红",
            isList: "上市公司",
            holdType: "A股上市"
          },
          {
            id: "12345678",
            cnName: "云南白药控股有限公司",
            legalPerson: "陈发树",
            openDate: "1997-09-01",
            extCrdtLevel: "AAA",
            industryType: "医药制造类",
            regAddress: "云南省昆明市呈贡区云南白药街3686号",
            operRange: "植物药原料基地的开发和经营： 药品生产、销售(限所投资企业凭许可证生产、经营)、研发...",
            regCapital: "5,000.00",
            openOrg: "官渡支行－张红",
            isList: "上市公司",
            holdType: "A股上市"
          }
        ],
        total: 11
      }
    });
  });

  // 客户详情
  router.get(`/mock/crm-jj/api/customerBusiness/basic/account`, function (
    req,
    res,
    next
  ) {
    res.json({
      success: true,
      payload: {
        totalAmount: 1,
        pageNo: 1,
        pageSize: 10,
        accountVos: [{
            id: "12331",
            companyId: "12343",
            accountName: "XXX公司",
            accountType: "基本存款账户",
            openingDate: "2018-03-25",
            closingDate: "2019-12-31",
            monthAverageDaily: 0,
            yearAverageDaily: 0,
            balance: 9162.35,
            administrators: [{
              name: "福建永",
              no: "0746"
            }],
            administratorNames: ["福建永"],
            moneyType: "CNY",
            accountStatus: "有效"
          },
          {
            id: "12332",
            companyId: "12343",
            accountName: "XXX公司",
            accountType: "基本存款账户",
            openingDate: "2018-03-25",
            closingDate: "2019-12-31",
            monthAverageDaily: 0,
            yearAverageDaily: 0,
            balance: 9162.35,
            administrators: [{
              name: "福建永",
              no: "0746"
            }],
            administratorNames: ["福建永"],
            moneyType: "CNY",
            accountStatus: "有效"
          },
          {
            id: "12333",
            companyId: "12343",
            accountName: "XXX公司",
            accountType: "基本存款账户",
            openingDate: "2018-03-25",
            closingDate: "2019-12-31",
            monthAverageDaily: 0,
            yearAverageDaily: 0,
            balance: 9162.35,
            administrators: [{
              name: "福建永",
              no: "0746"
            }],
            administratorNames: ["福建永"],
            moneyType: "CNY",
            accountStatus: "有效"
          }
        ],
        accountAmountVo: {
          accountId: null,
          balance: 9162.1234,
          yearAverageDaily: 0
        }
      }
    });
  });

  // 代收代付类
  router.get(
    "/mock/crm-jj/api/customerBusiness/basic/bizCollectionPay",
    function (req, res, next) {
      res.json({
        success: true,
        payload: {
          data: [{
            is_salary: "1",
            salary_num: "23",
            salary_amount: "123123"
          }],
          total: 11
        }
      });
    }
  );

  // 渠道类
  router.get("/mock/crm-jj/api/customerBusiness/basic/bizChannel", function (
    req,
    res,
    next
  ) {
    res.json({
      success: true,
      payload: {
        data: [{
          is_pos: "1",
          is_cyber_bank: "1"
        }],
        total: 11
      }
    });
  });

  // 融资类业务 贷款
  router.get(
    "/mock/crm-jj/api/customerBusiness/basic/acountloan",
    function (req, res, next) {
      res.json({
        success: true,
        payload: {
          data: [{
            org_list: "61709",
            data_dt: "20190224",
            amount: "123123",
            biz_type: "进口信用证",
            _score: "19.999232",
            start_dt: "2018-06-07",
            _schema: "cims",
            balance: "801231",
            rate: 3.5,
            currency: "USD",
            category: "正常类贷款",
            account: "JJ123123123",
            status: "睡眠",
            due_dt: "2018-07-21"
          },{
            org_list: "61709",
            data_dt: "20190224",
            amount: "123123",
            biz_type: "进口信用证",
            _score: "19.999232",
            start_dt: "2018-06-07",
            _schema: "cims",
            balance: "801231",
            rate: 3.6,
            currency: "USD",
            category: "正常类贷款",
            account: "JJ123123123",
            status: "正常",
            due_dt: "2018-07-21"
          },{
            org_list: "61709",
            data_dt: "20190224",
            amount: "123123",
            biz_type: "进口信用证",
            _score: "19.999232",
            start_dt: "2018-06-07",
            _schema: "cims",
            balance: "801231",
            rate: 3.5,
            currency: "USD",
            category: "正常类贷款",
            account: "JJ123123123",
            status: "正常",
            due_dt: "2018-07-21"
          },{
            org_list: "61709",
            data_dt: "20190224",
            amount: "123123",
            biz_type: "进口信用证",
            _score: "19.999232",
            start_dt: "2018-06-07",
            _schema: "cims",
            balance: "801231",
            rate: 3.5,
            currency: "USD",
            category: "正常类贷款",
            account: "JJ123123123",
            status: "正常",
            due_dt: "2018-07-21"
          },{
            org_list: "61709",
            data_dt: "20190224",
            amount: "123123",
            biz_type: "进口信用证",
            _score: "19.999232",
            start_dt: "2018-06-07",
            _schema: "cims",
            balance: "801231",
            rate: 0,
            currency: "USD",
            category: "正常类贷款",
            account: "JJ123123123",
            status: "正常",
            due_dt: "2018-07-21"
          },{
            org_list: "61709",
            data_dt: "20190224",
            amount: "123123",
            biz_type: "进口信用证",
            _score: "19.999232",
            start_dt: "2018-06-07",
            _schema: "cims",
            balance: "801231",
            rate: 0,
            currency: "USD",
            category: "正常类贷款",
            account: "JJ123123123",
            status: "正常",
            due_dt: "2018-07-21"
          },{
            org_list: "61709",
            data_dt: "20190224",
            amount: "123123",
            biz_type: "进口信用证",
            _score: "19.999232",
            start_dt: "2018-06-07",
            _schema: "cims",
            balance: "801231",
            rate: 0,
            currency: "USD",
            category: "正常类贷款",
            account: "JJ123123123",
            status: "正常",
            due_dt: "2018-07-21"
          }],
          total: 11
        }
      });
    }
  );

  // 融资类业务 银行
  router.get(
    "/mock/crm-jj/api/customerBusiness/basic/bankAcceptance",
    function (req, res, next) {
      res.json({
        success: true,
        payload: {
          data: [{
            data_dt: "20190224",
            bill_property: "纸票",
            object_key: "aaaaaa",
            bill: "0312123123",
            bill_acct: "10000",
            company_key: "sad1123jsjfajs",
            _score: "20.12313",
            start_dt: "2122-12-12",
            _schema: "cims",
            bail_acct: "0",
            _id: "sfsfho12123sdasd",
            org_no: "43242",
            due_dt: "2018-07-21"
          },{
            data_dt: "20190224",
            bill_property: "纸票",
            object_key: "aaaaaa",
            bill: "0312123123",
            bill_acct: "10000",
            company_key: "sad1123jsjfajs",
            _score: "20.12313",
            start_dt: 0,
            _schema: "cims",
            bail_acct: "0",
            _id: "sfsfho12123sdasd",
            org_no: "43242",
            due_dt: "2018-07-21"
          },{
            data_dt: "20190224",
            bill_property: "纸票",
            object_key: "aaaaaa",
            bill: "0312123123",
            bill_acct: "10000",
            company_key: "sad1123jsjfajs",
            _score: "20.12313",
            start_dt: 0,
            _schema: "cims",
            bail_acct: "0",
            _id: "sfsfho12123sdasd",
            org_no: "43242",
            due_dt: "2018-07-21"
          },{
            data_dt: "20190224",
            bill_property: "纸票",
            object_key: "aaaaaa",
            bill: "0312123123",
            bill_acct: "10000",
            company_key: "sad1123jsjfajs",
            _score: "20.12313",
            start_dt: 0,
            _schema: "cims",
            bail_acct: "0",
            _id: "sfsfho12123sdasd",
            org_no: "43242",
            due_dt: "2018-07-21"
          },{
            data_dt: "20190224",
            bill_property: "纸票",
            object_key: "aaaaaa",
            bill: "0312123123",
            bill_acct: "10000",
            company_key: "sad1123jsjfajs",
            _score: "20.12313",
            start_dt: 0,
            _schema: "cims",
            bail_acct: "0",
            _id: "sfsfho12123sdasd",
            org_no: "43242",
            due_dt: "2018-07-21"
          },{
            data_dt: "20190224",
            bill_property: "纸票",
            object_key: "aaaaaa",
            bill: "0312123123",
            bill_acct: "10000",
            company_key: "sad1123jsjfajs",
            _score: "20.12313",
            start_dt: 0,
            _schema: "cims",
            bail_acct: "0",
            _id: "sfsfho12123sdasd",
            org_no: "43242",
            due_dt: "2018-07-21"
          },{
            data_dt: "20190224",
            bill_property: "纸票",
            object_key: "aaaaaa",
            bill: "0312123123",
            bill_acct: "10000",
            company_key: "sad1123jsjfajs",
            _score: "20.12313",
            start_dt: 0,
            _schema: "cims",
            bail_acct: "0",
            _id: "sfsfho12123sdasd",
            org_no: "43242",
            due_dt: "2018-07-21"
          }],
          total: 11
        }
      });
    }
  );

  // 融资类业务 贴现
  router.get(
    "/mock/crm-jj/api/customerBusiness/basic/discount",
    function (req, res, next) {
      res.json({
        success: true,
        payload: {
          data: [{
            data_dt: "20190224",
            bill_property: "213",
            amount: "123123",
            object_key: "1122kj3k1j2h31212",
            discount_amount: "200099",
            discount_dt: "2019-12-22",
            bill: "123123123123",
            company_key: "12hui12h3h1h2k",
            type: "贴现",
            _score: "19.999232",
            _schema: "cims",
            start_dt: "2018-09-23",
            rate: 3.5,
            bill_type: "2",
            _id: "213123jk1jk1",
            org_no: "312312",
            due_dt: "2018-07-21"
          },{
            data_dt: "20190224",
            bill_property: "213",
            amount: "123123",
            object_key: "1122kj3k1j2h31212",
            discount_amount: "200099",
            discount_dt: "2019-12-22",
            bill: "123123123123",
            company_key: "12hui12h3h1h2k",
            type: "贴现",
            _score: "19.999232",
            _schema: "cims",
            start_dt: "2018-09-23",
            rate: 3.5,
            bill_type: "2",
            _id: "213123jk1jk1",
            org_no: "312312",
            due_dt: "2018-07-21"
          },{
            data_dt: "20190224",
            bill_property: "213",
            amount: "123123",
            object_key: "1122kj3k1j2h31212",
            discount_amount: "200099",
            discount_dt: "2019-12-22",
            bill: "123123123123",
            company_key: "12hui12h3h1h2k",
            type: "贴现",
            _score: "19.999232",
            _schema: "cims",
            start_dt: "2018-09-23",
            rate: 3.5,
            bill_type: "2",
            _id: "213123jk1jk1",
            org_no: "312312",
            due_dt: "2018-07-21"
          },{
            data_dt: "20190224",
            bill_property: "213",
            amount: "123123",
            object_key: "1122kj3k1j2h31212",
            discount_amount: "200099",
            discount_dt: "2019-12-22",
            bill: "123123123123",
            company_key: "12hui12h3h1h2k",
            type: "贴现",
            _score: "19.999232",
            _schema: "cims",
            start_dt: "2018-09-23",
            rate: 3.5,
            bill_type: "2",
            _id: "213123jk1jk1",
            org_no: "312312",
            due_dt: "2018-07-21"
          },{
            data_dt: "20190224",
            bill_property: "213",
            amount: "123123",
            object_key: "1122kj3k1j2h31212",
            discount_amount: "200099",
            discount_dt: "2019-12-22",
            bill: "123123123123",
            company_key: "12hui12h3h1h2k",
            type: "贴现",
            _score: "19.999232",
            _schema: "cims",
            start_dt: "2018-09-23",
            rate: 3.5,
            bill_type: "2",
            _id: "213123jk1jk1",
            org_no: "312312",
            due_dt: "2018-07-21"
          },],
          total: 11
        }
      });
    }
  );

  // 融资类业务 保函
  router.get(
    "/mock/crm-jj/api/customerBusiness/basic/guarantee",
    function (req, res, next) {
      res.json({
        success: true,
        payload: {
          data: [{
            data_dt: "20190224",
            amount: "123123",
            object_key: "1122kj3k1j2h31212",
            gurt_acount: "0",
            company_key: "12hui12h3h1h2k",
            type_: "fsdf",
            _score: "19.999232",
            _schema: "cims",
            gurt_currency: "2018-09-23",
            currency: "CNY",
            _id: "213123jk1jk1",
            org_no: "312312",
            due_dt: "2018-07-21"
          },{
            data_dt: "20190224",
            amount: "123123",
            object_key: "1122kj3k1j2h31212",
            gurt_acount: "0",
            company_key: "12hui12h3h1h2k",
            type_: "fsdf",
            _score: "19.999232",
            _schema: "cims",
            gurt_currency: "2018-09-23",
            currency: "CNY",
            _id: "213123jk1jk1",
            org_no: "312312",
            due_dt: "2018-07-21"
          },{
            data_dt: "20190224",
            amount: "123123",
            object_key: "1122kj3k1j2h31212",
            gurt_acount: "0",
            company_key: "12hui12h3h1h2k",
            type_: "fsdf",
            _score: "19.999232",
            _schema: "cims",
            gurt_currency: "2018-09-23",
            currency: "CNY",
            _id: "213123jk1jk1",
            org_no: "312312",
            due_dt: "2018-07-21"
          },{
            data_dt: "20190224",
            amount: "123123",
            object_key: "1122kj3k1j2h31212",
            gurt_acount: "0",
            company_key: "12hui12h3h1h2k",
            type_: "fsdf",
            _score: "19.999232",
            _schema: "cims",
            gurt_currency: "2018-09-23",
            currency: "CNY",
            _id: "213123jk1jk1",
            org_no: "312312",
            due_dt: "2018-07-21"
          },{
            data_dt: "20190224",
            amount: "123123",
            object_key: "1122kj3k1j2h31212",
            gurt_acount: "0",
            company_key: "12hui12h3h1h2k",
            type_: "fsdf",
            _score: "19.999232",
            _schema: "cims",
            gurt_currency: "2018-09-23",
            currency: "CNY",
            _id: "213123jk1jk1",
            org_no: "312312",
            due_dt: "2018-07-21"
          },],
          total: 11
        }
      });
    }
  );

  // 融资类业务 信用证
  router.get(
    "/mock/crm-jj/api/customerBusiness/basic/creditLetter",
    function (req, res, next) {
      res.json({
        success: true,
        payload: {
          data: [{
            data_dt: "20190224",
            amount: "123123",
            object_key: "1122kj3k1j2h31212",
            pay_amount: "3218313",
            gurt_acount: "213123",
            company_key: "12hui12h3h1h2k",
            _score: "19.999232",
            start_dt: "2018-03-30",
            _schema: "cims",
            gurt_currency: "USD",
            days: "2018-07-21",
            currency: "USD",
            _id: "jljk2312lkj123",
            cred_no: "LC123123"
          },{
            data_dt: "20190224",
            amount: "123123",
            object_key: "1122kj3k1j2h31212",
            pay_amount: "3218313",
            gurt_acount: "213123",
            company_key: "12hui12h3h1h2k",
            _score: "19.999232",
            start_dt: "2018-03-30",
            _schema: "cims",
            gurt_currency: "USD",
            days: "2018-07-21",
            currency: "USD",
            _id: "jljk2312lkj123",
            cred_no: "LC123123"
          },{
            data_dt: "20190224",
            amount: "123123",
            object_key: "1122kj3k1j2h31212",
            pay_amount: "3218313",
            gurt_acount: "213123",
            company_key: "12hui12h3h1h2k",
            _score: "19.999232",
            start_dt: "2018-03-30",
            _schema: "cims",
            gurt_currency: "USD",
            days: "2018-07-21",
            currency: "USD",
            _id: "jljk2312lkj123",
            cred_no: "LC123123"
          },{
            data_dt: "20190224",
            amount: "123123",
            object_key: "1122kj3k1j2h31212",
            pay_amount: "3218313",
            gurt_acount: "213123",
            company_key: "12hui12h3h1h2k",
            _score: "19.999232",
            start_dt: "2018-03-30",
            _schema: "cims",
            gurt_currency: "USD",
            days: "2018-07-21",
            currency: "USD",
            _id: "jljk2312lkj123",
            cred_no: "LC123123"
          },{
            data_dt: "20190224",
            amount: "123123",
            object_key: "1122kj3k1j2h31212",
            pay_amount: "3218313",
            gurt_acount: "213123",
            company_key: "12hui12h3h1h2k",
            _score: "19.999232",
            start_dt: "2018-03-30",
            _schema: "cims",
            gurt_currency: "USD",
            days: "2018-07-21",
            currency: "USD",
            _id: "jljk2312lkj123",
            cred_no: "LC123123"
          },{
            data_dt: "20190224",
            amount: "123123",
            object_key: "1122kj3k1j2h31212",
            pay_amount: "3218313",
            gurt_acount: "213123",
            company_key: "12hui12h3h1h2k",
            _score: "19.999232",
            start_dt: "2018-03-30",
            _schema: "cims",
            gurt_currency: "USD",
            days: "2018-07-21",
            currency: "USD",
            _id: "jljk2312lkj123",
            cred_no: "LC123123"
          },],
          total: 11
        }
      });
    }
  );

};
