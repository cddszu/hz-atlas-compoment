import {get, post} from 'utils/dataAccess/axios'
import {combineReducers} from 'redux'

const GET_MANAGER_TREE = 'GET_MANAGER_TREE'
const GET_MANAGER_BY_ID='GET_MANAGER_BY_ID'
// 获取用户权限内的机构树
export function getManagerTree(callback) {
  return get({
    url: '/crm-jj/api/auth/institution/managerTree',
    actionType: GET_MANAGER_TREE,
    successConfig: {
      callback
    },
    failConfig: {
      message: '获取机构失败'
    }
  })
}
//根据机构ID获取客户经理列表
export function getManagerListById(id,callback){
  return get({
    url:`/crm-jj/api/user/findManager/${id}`,
    actionType: GET_MANAGER_TREE,
    successConfig: {
      callback
    },
    failConfig: {
      message: '获取机构失败'
    }
  })
}

export function managerTree(previousState = {data: {}}, action) {
  if (action.type === GET_MANAGER_TREE) {
    return action.data
  } else {
    return previousState
  }
}

export function managerList(previousState = {data: {}}, action) {
  if (action.type === GET_MANAGER_BY_ID) {
    return action.data
  } else {
    return previousState
  }
}


const customerMgt = combineReducers({
  managerTree,
  managerList
})
export default customerMgt
