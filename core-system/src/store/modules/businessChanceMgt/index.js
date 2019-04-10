import { combineReducers } from 'redux'
import { get, post } from 'utils/dataAccess/axios'
import { mockClosure } from 'utils/mock'
import creatHistory from 'history/createBrowserHistory'

const history = creatHistory();
const IS_MOCK_CURRENT_MODULE = false // 控制当前模块的所有接口是否使用mock
const isMock = mockClosure(IS_MOCK_CURRENT_MODULE)

const GET_FOLLOW_BUSINESS_CHANCE_LIST = 'GET_FOLLOW_BUSINESS_CHANCE_LIST'
const GET_INNER_BUSINESS_CHANCE_LIST = 'GET_INNER_BUSINESS_CHANCE_LIST'

const GET_ORG_BUSINESS_CHANCE_LIST = 'GET_ORG_BUSINESS_CHANCE_LIST'
const GET_QUERY_TASK_LIST = 'GET_QUERY_TASK_LIST'

const CREATE_BUSINESS_CHANCE = 'CREATE_BUSINESS_CHANCE'
const UPDATE_BUSINESS_CHANCE = 'UPDATE_BUSINESS_CHANCE'
const RELATE_SCHEDULE = 'RELATE_SCHEDULE'

const GET_QUERY_BUSINESS_TASK_DETAIL = 'GET_QUERY_BUSINESS_TASK_DETAIL'
const GET_QUERY_BUSINESS_CHANCE_DETAIL = 'GET_QUERY_BUSINESS_CHANCE_DETAIL'
const GET_QUERY_DISTRIBUTE_DETAIL = 'GET_QUERY_DISTRIBUTE_DETAIL'

const SEARCH_MY_BUSINESS_BY_NAME = 'SEARCH_MY_BUSINESS_BY_NAME'
const SEARCH_ORG_BUSINESS_BY_NAME = 'SEARCH_ORG_BUSINESS_BY_NAME'
const GET_BUSINESS_MSG_BY_ID = 'GET_BUSINESS_MSG_BY_ID'

// 跟进商机
export const getFollowBusinessChanceList = (bodyData) => {

  const config = {
    url: `${isMock()}/crm-jj/api/business/queryManagerBusiness`,
    actionType: GET_FOLLOW_BUSINESS_CHANCE_LIST,

    bodyData: {
      businessChanceType: bodyData.businessChanceType,
      businessStatus: bodyData.businessStatus,
      customerName: bodyData.customerName,
      customerType: bodyData.customerType,
      pageNo: bodyData.pageNo,
      pageSize: bodyData.pageSize,
      pushStatus: bodyData.pushStatus,
      // sort: [
      // ],
      // sortOrders: [
      //   {
      //     property: 'string',
      //     direction: 'ASC'
      // }
      // ]
    },
    successConfig: {
    },
    failConfig: {
    },
  }
  return post(config)
}
const followBusinessChanceList = (previousState = {businessChanceResultVos: {
  content: []
}}, action) => {
  if (action.type === GET_FOLLOW_BUSINESS_CHANCE_LIST) {
    return action.data
  } else {
    return previousState
  }
}

// 辖内商机
export const getInnerBusinessChanceList = (bodyData) => {
  const config = {
    url: `${isMock()}/crm-jj/api/business/queryManagerWithinBusiness`,
    actionType: GET_INNER_BUSINESS_CHANCE_LIST,
    bodyData: {
      customerName: bodyData.customerName,
      customerType: bodyData.customerType,
      pageNo: bodyData.pageNo,
      pageSize: bodyData.pageSize,
    },
    successConfig: {
    },
    failConfig: {
    },
  }
  return post(config)
}
const innerBusinessChanceList = (previousState = {businessChanceResultVos: {
  content: []
}}, action) => {
  if (action.type === GET_INNER_BUSINESS_CHANCE_LIST) {
    return action.data
  } else {
    return previousState
  }
}


// 商机关联日程
export const updateRelateSchedule = (schedulerId, businessId) => {
  const config = {
    url: `${isMock()}/crm-jj/api/business/updateBusinessRelationWithScheduler`,
    actionType: RELATE_SCHEDULE,
    queryData: {
      schedulerId: schedulerId,
      businessId: businessId
    },
    successConfig: {
      message: '关联日程成功',
    },
    failConfig: {
      message: '关联日程失败',
    },
  }
  return get(config)
}

// 新建商机
export const createBusinessChance = (bodyData) => {
  const config = {
    url: `${isMock()}/crm-jj/api/business/createBusinessChance`,
    actionType: CREATE_BUSINESS_CHANCE,
    bodyData: bodyData,
    successConfig: {
      message: '新建商机成功',
      callback: (payload) => {
        history.goBack()
      }
    },
    failConfig: {
      message: '新建商机失败',
      callback: (payload) => {
      }
    },
  }
  return post(config)
}

// 商机列表
export const getOrgBusinessChanceList = (bodyData) => {
  const config = {
    url: `${isMock()}/crm-jj/api/business/queryOrgWithinBusiness`,
    actionType: GET_ORG_BUSINESS_CHANCE_LIST,

    bodyData: bodyData,
    successConfig: {
      // message: '商机列表获取成功',
    },
    failConfig: {
      // message: '商机获取失败失败'
    },
  }
  return post(config)
}
const orgBusinessChanceList = (previousState = {businessChanceResultVos: {
  content: []
}}, action) => {
  if (action.type === GET_ORG_BUSINESS_CHANCE_LIST) {
    return action.data
  } else {
    return previousState
  }
}

// 任务列表
export const getQueryTaskList = (bodyData) => {
  const config = {
    url: `${isMock()}/crm-jj/api/businessTask/queryTaskList`,
    actionType: GET_QUERY_TASK_LIST,

    bodyData: bodyData,
    successConfig: {
      // message: '任务列表获取成功',
    },
    failConfig: {
      // message: '任务列表获取失败'
    },
  }
  return post(config)
}
const queryTaskList = (previousState = { content: [] }, action) => {
  if (action.type === GET_QUERY_TASK_LIST) {
    return action.data
  } else {
    return previousState
  }
}

// 任务详情
export const getQueryBusinessTaskDetail = (id) => {
  const config = {
    url: `${isMock()}/crm-jj/api/businessTask/queryBusinessTaskDetail`,
    actionType: GET_QUERY_BUSINESS_TASK_DETAIL,

    bodyData: {
      businessTaskId: id,
      transform: 1
    },
    successConfig: {
      // message: '任务详情获取成功',
    },
    failConfig: {
      // message: '任务详情获取失败'
    },
  }
  return post(config)
}
const queryBusinessTaskDetail = (previousState = { businessChanceResultVos: {} }, action) => {
  if (action.type === GET_QUERY_BUSINESS_TASK_DETAIL) {
    return action.data
  } else {
    return previousState
  }
}

// 下发流程
export const getQueryDistributeDetail = (id) => {
  const config = {
    url: `${isMock()}/crm-jj/api/businessTask/queryDistributeDetail`,
    actionType: GET_QUERY_DISTRIBUTE_DETAIL,

    queryData: {
      businessChanceId: id,
    },
    successConfig: {
    },
    failConfig: {
    },
  }
  return get(config)
}
const queryDistributeDetail = (previousState = { uglyData: [] }, action) => {
  if (action.type === GET_QUERY_DISTRIBUTE_DETAIL) {
    return action.data
  } else {
    return previousState
  }
}

// 商机详情
export const getQueryBusinessChanceDetail = (id) => {
  const config = {
    url: `${isMock()}/crm-jj/api/business/queryBusinessChanceDetail`,
    actionType: GET_QUERY_BUSINESS_CHANCE_DETAIL,

    queryData: {
      businessId: id
    },
    successConfig: {
      // message: '商机详情获取成功',
    },
    failConfig: {
      // message: '商机详情获取失败'
    },
  }
  return get(config)
}
const queryBusinessChanceDetail = (previousState = { schedulerVos: [], cooperators:[],optList:[] }, action) => {
  if (action.type === GET_QUERY_BUSINESS_CHANCE_DETAIL) {
    return action.data
  } else {
    return previousState
  }
}

// 跟进商机
export const updateBusinessChance = (bodyData, callback) => {
  const config = {
    url: `${isMock()}/crm-jj/api/business/updateBusinessChance`,
    actionType: UPDATE_BUSINESS_CHANCE,

    bodyData: bodyData,
    successConfig: {
      message: '跟进商机成功',
      callback
    },
    failConfig: {
      message: '跟进商机失败'
    },
  }
  return post(config)
}

// 关联商机  客户经理搜索商机
export const searchMyBusinessByName = (keyword = '') => {
  const config = {
    url: `${isMock()}/crm-jj/api/business/queryMyBusinessByName`,
    actionType: SEARCH_MY_BUSINESS_BY_NAME,
    queryData: {
      conditionName: keyword
    },
    successConfig: {
    },
    failConfig: {
    },
  }
  return get(config)
}
const myBusinessByName = (previousState = { uglyData: [] }, action) => {
  if (action.type === SEARCH_MY_BUSINESS_BY_NAME) {
    return action.data
  } else {
    return previousState
  }
}

// 关联商机  机构角色搜索商机
export const searchOrgBusinessByName = (keyword = '') => {
  const config = {
    url: `${isMock()}/crm-jj/api/business/queryOrgWithinBusinessByName`,
    actionType: SEARCH_ORG_BUSINESS_BY_NAME,
    queryData: {
      conditionName: keyword
    },
    successConfig: {
    },
    failConfig: {
    },
  }
  return get(config)
}
const orgBusinessByName = (previousState = { uglyData: [] }, action) => {
  if (action.type === SEARCH_ORG_BUSINESS_BY_NAME) {
    return action.data
  } else {
    return previousState
  }
}

// 通过id查询商机信息
export const getBusinessMsgById = (id) => {
  const config = {
    url: `${isMock(false)}/crm-jj/api/business/queryBusinessByIds`,
    actionType: GET_BUSINESS_MSG_BY_ID,
    queryData: {
      ids: id
    },
    successConfig: {
    },
    failConfig: {
    },
  }
  return post(config)
}
const businessMsgById = (previousState = { }, action) => {
  if (action.type === GET_BUSINESS_MSG_BY_ID) {
    return action.data
  } else {
    return previousState
  }
}
// ---------------------------
// combine and export
// ---------------------------
const home = combineReducers({
  followBusinessChanceList,
  innerBusinessChanceList,
  orgBusinessChanceList,
  queryTaskList,
  queryBusinessTaskDetail,
  queryBusinessChanceDetail,
  queryDistributeDetail,
  myBusinessByName,
  orgBusinessByName,
  businessMsgById,
})
export default home
