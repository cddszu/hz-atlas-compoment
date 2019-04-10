import { combineReducers } from 'redux'
import { get, post, drop } from 'utils/dataAccess/axios'
import { mockClosure } from 'utils/mock'

const IS_MOCK_CURRENT_MODULE = false // 控制当前模块的所有接口是否使用mock
const isMock = mockClosure(IS_MOCK_CURRENT_MODULE)

const GET_MY_GROUP_LIST = 'GET_MY_GROUP_LIST'
const CREATE_GROUP = 'CREATE_GROUP'
const UPDATE_GROUP = 'UPDATE_GROUP'
const DELETE_GROUP = 'DELETE_GROUP'

const GET_GROUP_MEMBER = 'GET_GROUP_MEMBER'


// 我的分组列表
export const getMyGroupList = (callback) => {
  const config = {
    url: `${isMock()}/crm-jj/api/group/list`,
    actionType: GET_MY_GROUP_LIST,
    successConfig: {
      callback
    },
    failConfig: {
    },
  }
  return get(config)
}
const myGroupList = (previousState = {uglyData: []}, action) => {
  if (action.type === GET_MY_GROUP_LIST) {
    return action.data
  } else {
    return previousState
  }
}

// 分组成员列表
export const getGroupMemberList = (queryData, callback) => {
  const config = {
    url: `${isMock()}/crm-jj/api/group/listCompany`,
    actionType: GET_GROUP_MEMBER,
    queryData: queryData,
    successConfig: {
      callback
    },
    failConfig: {
    },
  }
  return get(config)
}
const groupMemberList = (previousState = {companyVos: []}, action) => {
  if (action.type === GET_GROUP_MEMBER) {
    return action.data
  } else {
    return previousState
  }
}

// 新建分组
export const createGroup = (bodyData, callback) => {
  const config = {
    url: `${isMock()}/crm-jj/api/group/create`,
    actionType: CREATE_GROUP,
    bodyData: bodyData,
    successConfig: {
      message: '新建成功',
      callback
    },
    failConfig: {
      message: '新建失败',
    },
  }
  return post(config)
}

// 编辑分组
export const updateGroup = (bodyData, callback) => {
  const config = {
    url: `${isMock()}/crm-jj/api/group/update`,
    actionType: UPDATE_GROUP,
    bodyData: bodyData,
    successConfig: {
      message: '编辑成功',
      callback
    },
    failConfig: {
      message: '编辑失败',
    },
  }
  return post(config)
}

// 删除分组
export const deleteGroup = (id, callback) => {
  const config = {
    url: `${isMock()}/crm-jj/api/group/delete`,
    actionType: DELETE_GROUP,
    queryData: {
      id: id
    },
    successConfig: {
      message: '删除成功',
      callback
    },
    failConfig: {
      message: '删除失败',
    },
  }
  return drop(config)
}
// ---------------------------
// combine and export
// ---------------------------
const groupMgt = combineReducers({
  myGroupList,
  groupMemberList,
})
export default groupMgt
