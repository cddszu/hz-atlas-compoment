// import { hashHistory } from 'react-router'
import { message } from 'antd-mobile'
import { combineReducers } from 'redux'
import { get, post } from 'utils/dataAccess/axios'
import { mockClosure } from 'utils/mock'

const IS_MOCK_CURRENT_MODULE = false // 控制当前模块的所有接口是否使用mock
const isMock = mockClosure(IS_MOCK_CURRENT_MODULE)

const IS_MOCK =  1 ? '/mock': ''
const GET_TAG_LIST = 'GET_TAG_LIST'
const GET_TAG_COUNT = 'GET_TAG_COUNT'
const GET_TAG_DETAIL ='GET_TAG_DETAIL'

const GET_COMPANY_BASIC_TAG = 'GET_COMPANY_BASIC_TAG'

export const getTagList = (filterObj = {}) => {
  const postConfig = {
    url:  `${IS_MOCK}/crm-jj/api/cust/institution/save`,
    actionType: GET_TAG_LIST,
    successConfig: {
      callback: (payload) => {

      }
    },
    failConfig: {
      message: '获取标签信息失败'
    }
  }

  return post(postConfig)
}

export const getTagCount = (queryObj) => {
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
    url:  `${IS_MOCK}/crm-jj/api/auth/institution/findOrgCount`,
    actionType: GET_TAG_COUNT,
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

export const getTagDetail = (id) =>{
  return get({
    url: `${IS_MOCK}/crm-jj/api/cust/institution/save/${id}`,
    actionType: GET_TAG_DETAIL,
    successConfig: {
      callback: (data) =>{
        console.log('详情信息到底是什么：', data)
      }
    },
    failConfig: {
      message: '获取机构失败'
    }
  })
}

export function list (previousState = {content: []}, action) {
  if (action.type === GET_TAG_LIST) {
    return action.data
  } else {
    return previousState
  }
}

export function tagDetail (previousState = {data: []}, action) {
  if (action.type === GET_TAG_DETAIL) {
    return action.data
  } else {
    return previousState
  }
}





// 查询客户标签
export const getCompanyBasicTag = (key) => {
  const config = {
    url: `${isMock(true)}/crm-jj/api/tag/company/tab`,
    actionType: GET_COMPANY_BASIC_TAG,
    queryData: {
      companyKey: key,
    },
    successConfig: {
    },
    failConfig: {
    },
  }
  return get(config)
}
const companyBasicTag = (previousState = { uglyData: [] }, action) => {
  if (action.type === GET_COMPANY_BASIC_TAG) {
    return action.data
  } else {
    return previousState
  }
}
const tagMgt = combineReducers({
  list,
  tagDetail,
  companyBasicTag,
})
export default tagMgt
