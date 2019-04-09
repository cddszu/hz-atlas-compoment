import { get, post } from 'utils/dataAccess/axios'
import { combineReducers } from 'redux'
import { dispatch } from 'rxjs/internal/observable/pairs';

const baseUrl = '/crm-fd/api'

// ======================== actions =============================
const GET_DYNAMIC_LIST = 'GET_DYNAMIC_LIST'
const GET_DYNAMIC_TYPE = 'GET_DYNAMIC_TYPE'
const DELIVER_DYNAMIC_FILTER = 'DELIVER_DYNAMIC_FILTER'
const GET_DYNAMIC_DETAIL = 'GET_DYNAMIC_DETAIL'



// ======================== dispatchers =========================

// 获取客户动态列表
export const getDynamicList = (bodyData = {}) => {
  const config = {
    url: `${baseUrl}/customerDynamic/query`,
    bodyData,
    actionType: GET_DYNAMIC_LIST,
    successConfig: {},
    failConfig: {
      message: '获取动态列表失败'
    }
  }
  return post(config)
}

// 获取客户动态类型
export const getDynamicType = () => {
  const config = {
    url: `${baseUrl}/customerDynamic/type`,
    actionType: GET_DYNAMIC_TYPE,
    failConfig: {
      message: '获取动态类型失败'
    }
  }
  return get(config)
}

// 传递客户动态筛选条件
export const deliverDynamicFilter = (filterObj) => {
  return (dispatch) => {
    dispatch({
      type: DELIVER_DYNAMIC_FILTER,
      data: filterObj,
    })
  }
}

// 获取客户动态详情
export const getDynamicDetail = (dynamicKey) => {
  const config = {
    url: `${baseUrl}/customerDynamic/details/${dynamicKey}`,
    actionType: GET_DYNAMIC_DETAIL,
    failConfig: {
      message: '获取详情失败'
    }
  }
  return get(config)
}




// ======================== reducers ============================

// 客户动态列表
const dynamicList = (previousState = {data:[]}, action) => {
  if (action.type === GET_DYNAMIC_LIST) {
    return action.data
  } else {
    return previousState
  }
}

// 客户动态类型
const dynamicType = (previousState = {data:[]}, action) => {
  if (action.type === GET_DYNAMIC_TYPE) {
    return action.data
  } else {
    return previousState
  }
}

// 客户动态筛选条件对象
const dynamicFilter = (previousState = {}, action) => {
  if (action.type === DELIVER_DYNAMIC_FILTER) {
    return action.data
  } else {
    return previousState
  }
}

const dynamicDetail = (previousState = {}, action) => {
  if (action.type === GET_DYNAMIC_DETAIL) {
    return action.data
  } else {
    return previousState
  }
}





// ======================= output ===============================
const customerDynamic = combineReducers({
  dynamicList,
  dynamicType,
  dynamicFilter,
  dynamicDetail,
})

export default customerDynamic
