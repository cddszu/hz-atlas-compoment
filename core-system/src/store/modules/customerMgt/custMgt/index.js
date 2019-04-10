// import { hashHistory } from 'react-router'
import { message } from "antd-mobile";
import { combineReducers } from "redux";
import { get, post } from "utils/dataAccess/axios";
import { mockClosure } from "utils/mock";

const IS_MOCK_CURRENT_MODULE = false; // 控制当前模块的所有接口是否使用mock
const isMock = mockClosure(IS_MOCK_CURRENT_MODULE);

const IS_MOCK = 1 ? "/mock" : "";
const GET_CUST_LIST = "GET_CUST_LIST";
const GET_CUSTOMER_SEARCH_RESULT = "GET_CUSTOMER_SEARCH_RESULT";
const SEARCH_EXIST_CUSTOMER = "SEARCH_EXIST_CUSTOMER";
const SEARCH_TARGET_CUSTOMER = "SEARCH_TARGET_CUSTOMER";
const SEARCH_POTENTIAL_CUSTOMER = "SEARCH_POTENTIAL_CUSTOMER";
const TARGET_CUSTOMER_BACK = "TARGET_CUSTOMER_BACK";
const POTENT_CUSTOMER_CLAIM = "POTENT_CUSTOMER_CLAIM";
const GET_CUSTOMER_BASE_MSG = "GET_CUSTOMER_BASE_MSG";
const GET_CUSTOMER_CHANCE = "GET_CUSTOMER_CHANCE";
const GET_CUSTOMER_RISK = "GET_CUSTOMER_RISK";
const GET_CUSTOMER_BUSINESS_LIST = "GET_CUSTOMER_BUSINESS_LIST";
const GET_CUSTOMER_SCHEDULE_LIST = "GET_CUSTOMER_SCHEDULE_LIST";
const GET_CUSTOMER_OUTEVET = "GET_CUSTOMER_OUTEVET";

const GET_COMPANY_BASIC_REGISTER_INFO = "GET_COMPANY_BASIC_REGISTER_INFO";
const GET_COMPANY_BASIC_CAPITAL_FORMATION =
  "GET_COMPANY_BASIC_CAPITAL_FORMATION";
const GET_COMPANY_BASIC_FOREIGN_INVESTMENT =
  "GET_COMPANY_BASIC_FOREIGN_INVESTMENT";
const GET_COMPANY_BASIC_EXECUTIVE_INFO = "GET_COMPANY_BASIC_EXECUTIVE_INFO";
const GET_COMPANY_BASIC_CONTACT_INFO = "GET_COMPANY_BASIC_CONTACT_INFO";

const GET_QUERY_SEARCH_HISTORY = "GET_QUERY_SEARCH_HISTORY";
const GET_CUSTOMER_MSG_BY_ID = "GET_CUSTOMER_MSG_BY_ID";
const GET_CUSTOMER_BUSSNINESS_ACCOUNT = "GET_CUSTOMER_BUSSNINESS_ACCOUNT";

const GET_BIZ_CHANNEL_BY_COMPANYKEY = "GET_BIZ_CHANNEL_BY_COMPANYKEY";
const GET_BIZ_COLLECTION_PAY_BY_COMPANYKEY =
  "GET_BIZ_COLLECTION_PAY_BY_COMPANYKEY";
const GET_ACOUNT_LOAN = "GET_ACOUNT_LOAN";
const GET_BANK_ACCEPTANCE = "GET_BANK_ACCEPTANCE";
const GET_CREDIT_LETTER = "GET_CREDIT_LETTER";
const GET_DISCOUNT = "GET_DISCOUNT";
const GET_GUARANTEE = "GET_GUARANTEE";

  export const getBizCollectionPay = (companyKey) => {
    const config = {
      url: `${isMock(true)}/crm-jj/api/customerBusiness/basic/bizCollectionPay`,
      actionType: GET_BIZ_COLLECTION_PAY_BY_COMPANYKEY,
      queryData: {
        companyKey: companyKey
      },
      successConfig: {
      },
      failConfig: {
      },
    }
    return get(config)
  }

  const bizCollectionPay = (previousState = {data: []}, action) =>{
    if (action.type === GET_BIZ_COLLECTION_PAY_BY_COMPANYKEY) {
      return action.data
    } else {
      return previousState
    }
  }

  export const getBizChannel = (companyKey) => {
    const config = {
      url: `${isMock(true)}/crm-jj/api/customerBusiness/basic/bizChannel`,
      actionType: GET_BIZ_CHANNEL_BY_COMPANYKEY,
      queryData: {
        companyKey: companyKey
      },
      successConfig: {
      },
      failConfig: {
      },
    }
    return get(config)
  }
  const bizChannel = (previousState = {data: []}, action) =>{
    if (action.type === GET_BIZ_CHANNEL_BY_COMPANYKEY) {
      return action.data
    } else {
      return previousState
    }
  }

/**
 * 已开展业务：账户总览
 */
export const getCustomerBussinessAccount = (filterObj = {}) => {
  let queryData = {
    // 查询需要的相关参数
    companyKey: filterObj.companyKey,
    accountType: filterObj.accountType,
    pageNo: filterObj.pageNo,
    pageSize: filterObj.pageSize
  };

  const getConfig = {
    url: `${isMock(true)}/crm-jj/api/customerBusiness/basic/account`,
    actionType: GET_CUSTOMER_BUSSNINESS_ACCOUNT,
    queryData: queryData,
    successConfig: {
      callback: payload => {}
    },
    failConfig: {
      message: "获取已开展业务数据失败"
    }
  };
  return get(getConfig);
};

export const getCustList = (filterObj = {}) => {
  let bodyData = {
    // 查询需要的相关参数
  };

  const postConfig = {
    url: `${IS_MOCK}/crm-jj/api/customer/search`,
    actionType: GET_CUST_LIST,
    bodyData: bodyData,
    successConfig: {
      callback: payload => {}
    },
    failConfig: {
      message: "111111111获取客户列表失败"
    }
  };
  return post(postConfig);
};

export function custList(previousState = { data: [] }, action) {
  if (action.type === GET_CUST_LIST) {
    return action.data;
  } else {
    return previousState;
  }
}

export const getCustomerSearchResult = (keyWord = "") => {
  let queryData = {
    // 查询需要的相关参数
    name: keyWord
  };

  const getConfig = {
    url: `${isMock()}/crm-jj/api/customerCommon/searchRecommend`,
    actionType: GET_CUSTOMER_SEARCH_RESULT,
    queryData: queryData,
    successConfig: {
      callback: payload => {}
    },
    failConfig: {
      message: "获取客户列表失败"
    }
  };
  return get(getConfig);
};

export function customerSearchResult(previousState = { uglyData: [] }, action) {
  if (action.type === GET_CUSTOMER_SEARCH_RESULT) {
    return action.data;
  } else {
    return previousState;
  }
}

// 搜素现有客户
export const searchExistCustomer = queryData => {
  const config = {
    url: `${isMock()}/crm-jj/api/existCustomer/search`,
    actionType: SEARCH_EXIST_CUSTOMER,
    bodyData: queryData,
    successConfig: {},
    failConfig: {}
  };
  return post(config);
};
const existCustomerList = (previousState = { companyVos: [] }, action) => {
  if (action.type === SEARCH_EXIST_CUSTOMER) {
    return action.data;
  } else {
    return previousState;
  }
};

// 搜素目标客户
export const searchTargetCustomer = queryData => {
  const config = {
    url: `${isMock()}/crm-jj/api/targetCustomer/list`,
    actionType: SEARCH_TARGET_CUSTOMER,
    bodyData: queryData,
    successConfig: {},
    failConfig: {}
  };
  return post(config);
};
const targetCustomerList = (previousState = { companyVos: [] }, action) => {
  if (action.type === SEARCH_TARGET_CUSTOMER) {
    return action.data;
  } else {
    return previousState;
  }
};
// 搜素潜在客户
export const searchPotentCustomer = queryData => {
  const config = {
    url: `${isMock()}/crm-jj/api/subCustomer/search`,
    actionType: SEARCH_POTENTIAL_CUSTOMER,
    bodyData: queryData,
    successConfig: {},
    failConfig: {}
  };
  return post(config);
};
const potentialCustomerList = (previousState = { companyVos: [] }, action) => {
  if (action.type === SEARCH_POTENTIAL_CUSTOMER) {
    return action.data;
  } else {
    return previousState;
  }
};

// 目标客户回退
export const targetCustomerBack = id => {
  const config = {
    url: `${isMock()}/crm-jj/api//targetCustomer/claimBack`,
    actionType: TARGET_CUSTOMER_BACK,
    bodyData: {
      companyId: id
    },
    successConfig: {},
    failConfig: {}
  };
  return post(config);
};

// 潜在客户认领
export const potentCustomerClaim = id => {
  const config = {
    url: `${isMock()}/crm-jj/api/subCustomer/claim`,
    actionType: POTENT_CUSTOMER_CLAIM,
    bodyData: {
      companyId: id
    },
    successConfig: {},
    failConfig: {}
  };
  return post(config);
};

// 查询客户基本信息
export const getCustomerBaseMsg = id => {
  const config = {
    url: `${isMock()}/crm-jj/api/existCustomer/getCompanyBasicInfo`,
    actionType: GET_CUSTOMER_BASE_MSG,
    queryData: {
      customerId: id
    },
    successConfig: {},
    failConfig: {}
  };
  return get(config);
};
const customerBaseMsg = (previousState = { companyVos: [] }, action) => {
  if (action.type === GET_CUSTOMER_BASE_MSG) {
    return action.data;
  } else {
    return previousState;
  }
};

// 查询客户行外机会事件
export const getCustomerChance = bodyData => {
  const config = {
    url: `${isMock()}/crm-jj/api/outevet/findChangeEvent`,
    actionType: GET_CUSTOMER_CHANCE,
    bodyData: bodyData,
    successConfig: {},
    failConfig: {}
  };
  return post(config);
};
const customerChance = (previousState = { content: [] }, action) => {
  if (action.type === GET_CUSTOMER_CHANCE) {
    return action.data;
  } else {
    return previousState;
  }
};

// 查询客户行外风险事件
export const getCustomerRisk = bodyData => {
  const config = {
    url: `${isMock()}/crm-jj/api/outevet/findRiskEvent`,
    actionType: GET_CUSTOMER_RISK,
    bodyData: bodyData,
    successConfig: {},
    failConfig: {}
  };
  return post(config);
};
const customerRisk = (previousState = { content: [] }, action) => {
  if (action.type === GET_CUSTOMER_RISK) {
    return action.data;
  } else {
    return previousState;
  }
};

// 查询客户行外事件
export const getCustomerOutevet = bodyData => {
  const config = {
    url: `${isMock()}/crm-jj/api/outevet/findEventList`,
    actionType: GET_CUSTOMER_OUTEVET,
    bodyData: bodyData,
    successConfig: {},
    failConfig: {}
  };
  return post(config);
};
const customerOutevet = (previousState = { content: [] }, action) => {
  if (action.type === GET_CUSTOMER_OUTEVET) {
    return action.data;
  } else {
    return previousState;
  }
};

// 查询客户商机列表
export const getCustomerBusinessList = bodyData => {
  const config = {
    url: `${isMock()}/crm-jj/api/business/queryBusinessListByCompanyId`,
    actionType: GET_CUSTOMER_BUSINESS_LIST,
    bodyData: bodyData,
    successConfig: {},
    failConfig: {}
  };
  return post(config);
};
const customerBusinessList = (
  previousState = { businessChanceVosList: [] },
  action
) => {
  if (action.type === GET_CUSTOMER_BUSINESS_LIST) {
    return action.data;
  } else {
    return previousState;
  }
};

// 查询客户日程列表
export const getCustomerScheduleList = bodyData => {
  const config = {
    url: `${isMock()}/crm-jj/api/scheduler/querySchedulerListByCompanyId`,
    actionType: GET_CUSTOMER_SCHEDULE_LIST,
    bodyData: bodyData,
    successConfig: {},
    failConfig: {}
  };
  return post(config);
};
const customerScheduleList = (previousState = {}, action) => {
  if (action.type === GET_CUSTOMER_SCHEDULE_LIST) {
    return action.data;
  } else {
    return previousState;
  }
};

// 查询外部信息-注册信息
export const getCompanyBasicRegisterInfo = id => {
  const config = {
    url: `${isMock()}/crm-jj/api/existCustomer/getCompanyBasicRegisterInfo`,
    actionType: GET_COMPANY_BASIC_REGISTER_INFO,
    queryData: {
      customerId: id
    },
    successConfig: {},
    failConfig: {}
  };
  return get(config);
};
const companyBasicRegisterInfo = (previousState = {}, action) => {
  if (action.type === GET_COMPANY_BASIC_REGISTER_INFO) {
    return action.data;
  } else {
    return previousState;
  }
};

// 查询外部信息-资本构成
export const getCompanyBasicCapitalFormation = id => {
  const config = {
    url: `${isMock()}/crm-jj/api/existCustomer/getCompanyBasicCapitalFormation`,
    actionType: GET_COMPANY_BASIC_CAPITAL_FORMATION,
    queryData: {
      customerId: id
    },
    successConfig: {},
    failConfig: {}
  };
  return get(config);
};
const companyBasicCapitalFormation = (
  previousState = { uglyData: [] },
  action
) => {
  if (action.type === GET_COMPANY_BASIC_CAPITAL_FORMATION) {
    return action.data;
  } else {
    return previousState;
  }
};

// 查询外部信息-对外投资
export const getCompanyBasicForeignInvestment = id => {
  const config = {
    url: `${isMock()}/crm-jj/api/existCustomer/getCompanyBasicForeignInvestment`,
    actionType: GET_COMPANY_BASIC_FOREIGN_INVESTMENT,
    queryData: {
      customerId: id
    },
    successConfig: {},
    failConfig: {}
  };
  return get(config);
};
const companyBasicForeignInvestment = (
  previousState = { uglyData: [] },
  action
) => {
  if (action.type === GET_COMPANY_BASIC_FOREIGN_INVESTMENT) {
    return action.data;
  } else {
    return previousState;
  }
};

// 查询外部信息-高管信息
export const getCompanyBasicExecutiveInfo = id => {
  const config = {
    url: `${isMock()}/crm-jj/api/existCustomer/getCompanyBasicExecutiveInfo`,
    actionType: GET_COMPANY_BASIC_EXECUTIVE_INFO,
    queryData: {
      customerId: id
    },
    successConfig: {},
    failConfig: {}
  };
  return get(config);
};
const companyBasicExecutiveInfo = (
  previousState = { uglyData: [] },
  action
) => {
  if (action.type === GET_COMPANY_BASIC_EXECUTIVE_INFO) {
    return action.data;
  } else {
    return previousState;
  }
};

// 查询联系人
export const getCompanyBasicContactInfo = id => {
  const config = {
    url: `${isMock()}/crm-jj/api/existCustomer/getCompanyBasicContactInfo`,
    actionType: GET_COMPANY_BASIC_CONTACT_INFO,
    queryData: {
      customerId: id,
      pageNo: 1,
      pageSize: 1000
    },
    successConfig: {},
    failConfig: {}
  };
  return get(config);
};
const companyBasicContactInfo = (
  previousState = { companyBasicContactInfoVos: [] },
  action
) => {
  if (action.type === GET_COMPANY_BASIC_CONTACT_INFO) {
    return action.data;
  } else {
    return previousState;
  }
};

// 主页搜索历史
export const getQuerySearchHistor = () => {
  const config = {
    url: `${isMock()}/crm-jj/api/homepage/querySearchHistory`,
    actionType: GET_QUERY_SEARCH_HISTORY,
    successConfig: {},
    failConfig: {}
  };
  return get(config);
};
const querySearchHistor = (previousState = { uglyData: [] }, action) => {
  if (action.type === GET_QUERY_SEARCH_HISTORY) {
    return action.data;
  } else {
    return previousState;
  }
};

// 通过客户id搜索客户信息
export const getCustomerMsgById = id => {
  const config = {
    url: `${isMock(false)}/crm-jj/api/customerCommon/batchGetCustomer`,
    actionType: GET_CUSTOMER_MSG_BY_ID,
    queryData: {
      ids: id
    },
    successConfig: {},
    failConfig: {}
  };
  return get(config);
};
const customerMsgById = (previousState = {}, action) => {
  if (action.type === GET_CUSTOMER_MSG_BY_ID) {
    return action.data;
  } else {
    return previousState;
  }
};

const customerBussinessAccount = (previousState = {}, action) => {
  if (action.type === GET_CUSTOMER_BUSSNINESS_ACCOUNT) {
    return action.data;
  } else {
    return previousState;
  }
};

export const getAcountLoan = (companyKey) => {
  console.log(111, GET_ACOUNT_LOAN)
  const config = {
    url: `${isMock(true)}/crm-jj/api/customerBusiness/basic/acountloan`,
    actionType: GET_ACOUNT_LOAN,
    queryData: {
      companyKey: companyKey
    },
    successConfig: {},
    failConfig: {}
  };
  return get(config);
};
const acountLoan = (previousState = {}, action) => {
  if (action.type === GET_ACOUNT_LOAN) {
    return action.data;
  }else{
    return previousState;
  }
};

export const getBankAcceptance = (companyKey) => {
  console.log(111)
  const config = {
    url: `${isMock(true)}/crm-jj/api/customerBusiness/basic/bankAcceptance`,
    actionType: GET_BANK_ACCEPTANCE,
    queryData: {
      companyKey: companyKey
    },
    successConfig: {},
    failConfig: {}
  };
  return get(config);
};
const bankAcceptance = (previousState = {}, action) => {
  if (action.type === GET_BANK_ACCEPTANCE) {
    return action.data;
  }else{
    return previousState;
  }
};

export const getCreditLetter = (companyKey) => {
  const config = {
    url: `${isMock(true)}/crm-jj/api/customerBusiness/basic/creditLetter`,
    actionType: GET_CREDIT_LETTER,
    queryData: {
      companyKey: companyKey
    },
    successConfig: {},
    failConfig: {}
  };
  return get(config);
};
const creditLetter = (previousState = {}, action) => {
  if (action.type === GET_CREDIT_LETTER) {
    return action.data;
  }else{
    return previousState;
  }
};

export const getDiscount = (companyKey) => {
  const config = {
    url: `${isMock(true)}/crm-jj/api/customerBusiness/basic/discount`,
    actionType: GET_DISCOUNT,
    queryData: {
      companyKey: companyKey
    },
    successConfig: {},
    failConfig: {}
  };
  return get(config);
};
const discount = (previousState = {}, action) => {
  if (action.type === GET_DISCOUNT) {
    return action.data;
  }else{
    return previousState;
  }
};

export const getGuarantee = (companyKey) => {
  const config = {
    url: `${isMock(true)}/crm-jj/api/customerBusiness/basic/guarantee`,
    actionType: GET_GUARANTEE,
    queryData: {
      companyKey: companyKey
    },
    successConfig: {},
    failConfig: {}
  };
  return get(config);
};
const guarantee = (previousState = {}, action) => {
  if (action.type === GET_GUARANTEE) {
    return action.data;
  }else{
    return previousState;
  }
};
const custMgt = combineReducers({
  custList,
  customerSearchResult,
  existCustomerList,
  targetCustomerList,
  potentialCustomerList,
  customerBaseMsg,
  customerChance,
  customerRisk,
  customerBusinessList,
  customerScheduleList,
  customerOutevet,

  companyBasicRegisterInfo,
  companyBasicCapitalFormation,
  companyBasicForeignInvestment,
  companyBasicExecutiveInfo,
  companyBasicContactInfo,

  querySearchHistor,
  customerMsgById,
  customerBussinessAccount,
  bizCollectionPay,
  bizChannel,
  acountLoan,
  bankAcceptance,
  creditLetter,
  discount,
  guarantee,
});
export default custMgt;
