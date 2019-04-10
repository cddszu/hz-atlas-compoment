import { combineReducers } from 'redux'
import { get, post } from 'utils/dataAccess/axios'
import { formatMsgDate } from 'utils/timeFormat'
import { mockClosure } from 'utils/mock'

const IS_MOCK_CURRENT_MODULE = false // 控制当前模块的所有接口是否使用mock
const isMock = mockClosure(IS_MOCK_CURRENT_MODULE)

const GET_HOME_SEARCH_RESULT = 'GET_HOME_SEARCH_RESULT'
const GET_HISTORY_RESULT = 'GET_HISTORY_RESULT'

export const getHomeSearchResult = (option={}) => {
  const getConfig = {
    url: `${isMock(true)}${option.url}`,
    actionType: GET_HOME_SEARCH_RESULT,
    queryData: option.param,
    successConfig: {
    },
    failConfig: {
    },
  }
  if (option.method.toLowerCase() === 'post') {
    return post(getConfig);
  } else {
    return get(getConfig);
  }
}
const homeSearchResult = (previousState = {content: []}, action) => {
  if (action.type === GET_HOME_SEARCH_RESULT) {
    return action.data
  } else {
    return previousState
  }
}

export const getHistoryResult = (option={}) => {
  const getConfig = {
    url: `${isMock()}${option.url}`,
    actionType: GET_HISTORY_RESULT,
    queryData: option.param,
    successConfig: {
    },
    failConfig: {
    },
  }
  if (option.method.toLowerCase() === 'post') {
    return post(getConfig);
  } else {
    return get(getConfig);
  }
}
const historyResult = (previousState = {uglyData: []}, action) => {
  if (action.type === GET_HISTORY_RESULT) {
    return action.data
  } else {
    return previousState
  }
}
// ---------------------------
// combine and export
// ---------------------------
const home = combineReducers({
  homeSearchResult,
  historyResult
})
export default home
