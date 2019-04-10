import { combineReducers } from 'redux'
import { get, post } from 'utils/dataAccess/axios'
import { formatMsgDate } from 'utils/timeFormat'
import { mockClosure } from 'utils/mock'

const IS_MOCK_CURRENT_MODULE = false // 控制当前模块的所有接口是否使用mock
const isMock = mockClosure(IS_MOCK_CURRENT_MODULE)

const GET_TODAY_SCHEDULER = 'GET_TODAY_SCHEDULER'
const GET_ALL_SCHEDULE = 'GET_ALL_SCHEDULE'
const GET_SEARCH_SCHEDULE_LIST = 'GET_SEARCH_SCHEDULE_LIST'
var today = formatMsgDate('today')

export const getTodayScheduler = () => {
  const getConfig = {
    url: `${isMock()}/crm-jj/api/scheduler/querySchedulerTodayList`,
    bodyData: {
      searchDate: today
    },
    actionType: GET_TODAY_SCHEDULER,
    successConfig: {
    },
    failConfig: {
    },
  }
  return post(getConfig);
}

const todayScheduler = (previousState = {today: []}, action) => {
  if (action.type === GET_TODAY_SCHEDULER) {
    return action.data
  } else {
    return previousState
  }
}

export const getAllSchedule = () => {
  const getConfig = {
    url: `${isMock()}/crm-jj/api/scheduler/querySchedulerByDate`,
    bodyData: {
      dateStart: '2000-01-01',
      dateEnd: '2030-01-01'
    },
    actionType: GET_ALL_SCHEDULE,
    successConfig: {
    },
    failConfig: {
    },
  }
  return post(getConfig);
}

const allSchedule = (previousState = {content: []}, action) => {
  if (action.type === GET_ALL_SCHEDULE) {
    return action.data
  } else {
    return previousState
  }
}

export const getSearchScheduleList = (bodyData) => {
  const getConfig = {
    url: `${isMock()}/crm-jj/api/scheduler/querySchedulerByCondition`,
    bodyData: {
      condition: bodyData.condition || '',
      searchDate: bodyData.searchDate || "" // 初始查询日期
    },
    actionType: GET_SEARCH_SCHEDULE_LIST,
    successConfig: {
    },
    failConfig: {
    },
  }
  return post(getConfig);
}

const searchScheduleList = (previousState = {content: []}, action) => {
  if (action.type === GET_SEARCH_SCHEDULE_LIST) {
    return action.data
  } else {
    return previousState
  }
}
// ---------------------------
// combine and export
// ---------------------------
const home = combineReducers({
  todayScheduler,
  allSchedule,
  searchScheduleList
})
export default home
