// import { hashHistory } from 'react-router'
import { combineReducers } from 'redux'
import { get, post } from 'utils/dataAccess/axios'


const IS_MOCK =  0 ? '/mock': ''
const GET_OPPORTUNITY_LIST = 'GET_OPPORTUNITY_LIST'
const GET_ORG_TREE = 'GET_ORG_TREE'
const GET_ORG_COUNT = 'GET_ORG_COUNT'
const DELETE_ORG = 'DELETE_ORG'
const GET_OPT_DETAIL = 'GET_OPT_DETAIL'
const SAVE_ORG = 'SAVE_ORG'
const UPDATE_ORG = 'UPDATE_ORG'

const GET_DYNAMIC_RELATED_BUSINESS_LIST = 'GET_DYNAMIC_RELATED_BUSINESS_LIST'
const GET_SCHEDULE_RELATED_BUSINESS_LIST = 'GET_SCHEDULE_RELATED_BUSINESS_LIST'

// 关联商机相关
const RELATE_BUSINESS_WITH_DYNAMIC = 'RELATE_BUSINESS_WITH_DYNAMIC'
const RELATE_BUSINESS_WITH_SCHEDULE = 'RELATE_BUSINESS_WITH_SCHEDULE'

// 取消关联商机
const UNRELATE_BUSINESS_WITH_DYNAMIC = 'UNRELATE_BUSINESS_WITH_DYNAMIC'


export const getOpportunityList = (filterObj = {}) => {
  let bodyData = {
    createTime: filterObj.createTime,
    pageNo: filterObj.pageNo,
    pageSize: filterObj.pageSize,
    status: filterObj.status,
    type: filterObj.type,
    nameOrCustomerName: filterObj.nameOrCustomerName,
    customerType:filterObj.customerType
  }

  const postConfig = {
    url:  `${IS_MOCK}/crm-fd/api/businessChance/query`,
    actionType: GET_OPPORTUNITY_LIST,
    bodyData: bodyData,
    successConfig: {
      callback: (payload) => {

      }
    },
    failConfig: {
      message: '获取商机列表失败'
    }
  }

  return post(postConfig)
}

// 获取已关联某个动态的商机列表
export const getDynamicRelatedBusinessList = (dynamicKey) => {
  const config = {
    url: `/crm-fd/api/customerDynamicBusiness/query/${dynamicKey}`,
    actionType: GET_DYNAMIC_RELATED_BUSINESS_LIST,
    successConfig: {},
    failConfig: {
      message: '获取商机列表失败'
    }
  }
  return get(config)
}

// 获取已关联某个日程的商机列表
export const getScheduleRelatedBusinessList = () => {

}

// 关联商机和动态
export const relateBusinessWithDynamic = (bodyData, callback = () => {}) => {
  const postConfig = {
    url: '/crm-fd/api/customerDynamicBusiness/join',
    actionType: RELATE_BUSINESS_WITH_DYNAMIC,
    bodyData,
    successConfig: {
      message: '关联商机成功',
      callback
    },
    failConfig: {
      message: '关联商机失败'
    }
  }
  return post(postConfig)
}

// 取消关联商机和动态
export const unRelateBusinessWithDynamic = (bodyData, callback = () => {}) => {
  const postConfig = {
    url: '/crm-fd/api/customerDynamicBusiness/unJoin',
    actionType: UNRELATE_BUSINESS_WITH_DYNAMIC,
    bodyData,
    successConfig: {
      message: '取消关联商机成功',
      callback
    },
    failConfig: {
      message: '取消关联商机失败'
    }
  }
  return post(postConfig)
}

// 关联商机和日程
export const relateBusinessWithSchedule = (bodyData, callback = () => {}) => {
  const postConfig = {
    url: '/crm-fd/api/businessChanceWorkSchedule/join',
    actionType: RELATE_BUSINESS_WITH_SCHEDULE,
    bodyData,
    successConfig: {
      message: '关联日程成功',
      callback
    },
    failConfig: {
      message: '关联商机失败'
    }
  }
  return post(postConfig)
}

// 获取机构树
export const getOrgTree = () => {
  const getConfig = {
    url: `${IS_MOCK}/crm-fd/api/auth/institution/tree`,
    actionType: GET_ORG_TREE,
    successConfig: {},
    failConfig: {
      message: '获取机构树失败'
    }
  }
  return get(getConfig)
}

export const getOrgCount = (queryObj) => {
  var filtersObj = queryObj.filtersObj
  let bodyData = {
    filter: {
      logicConnector: 'AND',  // AND, OR
      filters: []
    }
  }

  /* 组装查询数据 START */
  bodyData.page = queryObj.page
  // bodyData.page.sortOrders = [
  //   {
  //     direction: 'DESC',
  //     property: 'orgId'
  //   }
  // ]
  for (var key in filtersObj) {
    if (key === 'searchKey') {
      if (filtersObj[key]) {
        bodyData.filter.filters.push({
          logicConnector: "OR",
          filters: [
            {
              field: "employeeId",
              value: filtersObj[key],
              operator: "LIKE"
            },
            {
              field: "orgName",
              value: filtersObj[key],
              operator: "LIKE"
            }
          ]
          })
      }
    } else {
      if (filtersObj[key]) {
        bodyData.filter.filters.push({
          field: key,
          value: filtersObj[key],
          operator: 'EQ'
        })
      }
    }
  }
  // /* 组装查询数据 END */

  // // 检验查询数据


  const postConfig = {
    url:  `${IS_MOCK}/crm-fd/api/auth/institution/findOrgCount`,
    actionType: GET_ORG_COUNT,
    bodyData: bodyData,
    successConfig: {
      callback: (payload) => {

      }
    },
    failConfig: {
      message: '获取机构列表失败'
    }
  }

  return post(postConfig)
}

export const deleteOrg = (id) =>{
  return get({
    url: `${IS_MOCK}/crm-fd/api/auth/institution/delete?id=${id}`,
    actionType: DELETE_ORG,
    successConfig: {
      message: '删除机构成功',
      callback: (data) =>{

      }
    },
    failConfig: {
      message: '删除机构失败'
    }
  })
}
export const getOptDetail = (id) =>{
  return get({
    url: `${IS_MOCK}/crm-fd/api/businessChance/details/${id}`,
    actionType: GET_OPT_DETAIL,
    successConfig: {
      callback: (data) =>{

      }
    },
    failConfig: {
      message: '获取商机详情失败'
    }
  })
}

export const saveOrg = (orgObj) =>{
  return post({
    url: `${IS_MOCK}/crm-fd/api/auth/institution/save`,
    bodyData: orgObj,
    actionType: SAVE_ORG,
    successConfig: {
      message: '新增机构成功',
      callback: (data) =>{

      }
    },
    failConfig: {
      message: '新建机构失败'
    }
  })
}
export const updateOrg = (orgObj) =>{
  return post({
    url: `${IS_MOCK}/crm-fd/api/auth/institution/update`,
    bodyData: orgObj,
    actionType: UPDATE_ORG,
    successConfig: {
      message: '更新机构成功',
      callback: (data) =>{

      }
    },
    failConfig: {
      message: '更新机构失败'
    }
  })
}



export function opportunityList (previousState = {data: []}, action) {
  if (action.type === GET_OPPORTUNITY_LIST) {
    return action.data
  } else {
    return previousState
  }
}

const dynamicRelatedBusinessList = (previousState = {data:[]}, action) => {
  if (action.type === GET_DYNAMIC_RELATED_BUSINESS_LIST) {
    return action.data
  } else {
    return previousState
  }
}

export function orgTree(previousState = {data:[]}, action) {
  if (action.type === GET_ORG_TREE) {
    return action.data
  } else {
    return previousState
  }
}

export function optDetail (previousState = {data: []}, action) {
  if (action.type === GET_OPT_DETAIL) {
    return action.data
  } else {
    return previousState
  }
}

export function orgCount(previousState = { data: 0 }, action) {
  if (action.type === GET_ORG_COUNT) {
    return action.data
  } else {
    return previousState
  }
}

const orgMgt = combineReducers({
  opportunityList,
  dynamicRelatedBusinessList,
  orgTree,
  optDetail,
  orgCount
})
export default orgMgt
