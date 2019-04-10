import { combineReducers } from 'redux'
import { get, post } from 'utils/dataAccess/axios'
import { mockClosure } from 'utils/mock'

const IS_MOCK_CURRENT_MODULE = false // 控制当前模块的所有接口是否使用mock
const isMock = mockClosure(IS_MOCK_CURRENT_MODULE)

const GET_MSG_NUMS = 'GET_MSG_NUMS'
const GET_MSG_LIST = 'GET_MSG_LIST'
const GET_MSG_DETAIL = 'GET_MSG_DETAIL'

export const getMsgNums = () => {
  const getConfig = {
    url: `${isMock()}/crm-jj/api/message/messageBox`,
    actionType: GET_MSG_NUMS,
    successConfig: {
    },
    failConfig: {
    },
  }
  return get(getConfig)
}


const msgNums = (previousState = {content: []}, action) => {
  if (action.type === GET_MSG_NUMS) {
    return action.data
  } else {
    return previousState
  }
}

export const getMsgList = (filtersObj) => {
  const postConfig = {
    url: `${isMock(false)}/crm-jj/api/message/list`,
    actionType: GET_MSG_LIST,
    bodyData: filtersObj,
    successConfig: {
    },
    failConfig: {
    },
  }
  return post(postConfig)
}


const msgList = (previousState = {content: []}, action) => {
  if (action.type === GET_MSG_LIST) {
    return action.data
  } else {
    return previousState
  }
}

export const getMsgDetail = (id) => {
  const getConfig = {
    url: `${isMock(false)}/crm-jj/api/message/detail`,
    actionType: GET_MSG_DETAIL,
    queryData: {
      id: id
    },
    successConfig: {
    },
    failConfig: {
    },
  }
  return get(getConfig)
}


const msgDetail = (previousState = {}, action) => {
  if (action.type === GET_MSG_DETAIL) {
    return action.data
  } else {
    return previousState
  }
}

// ---------------------------
// combine and export
// ---------------------------
const home = combineReducers({
  msgNums,
  msgList,
  msgDetail
})
export default home
