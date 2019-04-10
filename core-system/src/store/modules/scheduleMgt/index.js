import { combineReducers } from 'redux'
import { get, post } from 'utils/dataAccess/axios'
import { mockClosure } from 'utils/mock'

const IS_MOCK_CURRENT_MODULE = false // 控制当前模块的所有接口是否使用mock
const isMock = mockClosure(IS_MOCK_CURRENT_MODULE)

const GET_FOLLOW_BUSINESS_CHANCE_LIST = 'GET_FOLLOW_BUSINESS_CHANCE_LIST'
const GET_SOMEDAY_SCHEDULE_LIST = 'GET_SOMEDAY_SCHEDULE_LIST'
const GET_DATE_RANGE_SCHEDULE_LIST = 'GET_DATE_RANGE_SCHEDULE_LIST'

const CREATE_SCHEDULE = 'CREATE_SCHEDULE'
const GET_SCHEDULE_DETAIL = 'GET_SCHEDULE_DETAIL'
const DELETE_SCHEDULE = 'DELETE_SCHEDULE'

const CLEAR_BUSINESS_ID = 'CLEAR_BUSINESS_ID'
const CLEAR_CUSTOMER_ID = 'CLEAR_CUSTOMER_ID'
const GET_SCHEDULE_MSG_BY_ID = 'GET_SCHEDULE_MSG_BY_ID'

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
      pushStatus: bodyData.pushStatus.join(','),
      sort: [
      ],
      sortOrders: [
        {
          property: 'string',
          direction: 'ASC'
      }
      ]
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

// 查询某个时间日期段的所有日程
export const get_date_range_schedule_list = (startDate, endDate, callback) => {
  const config = {
    url: `${isMock()}/crm-jj/api/scheduler/querySchedulerByDate`,
    actionType: GET_DATE_RANGE_SCHEDULE_LIST,
    bodyData: {
      dateEnd: startDate,
      dateStart:endDate
    },
    successConfig: {
      callback: callback
    },
    failConfig: {
    },
  }
  return post(config)
}

const dateRange_scheduleList = (previousState = {businessChanceResultVos: {
  content: []
}}, action) => {
  if (action.type === GET_DATE_RANGE_SCHEDULE_LIST) {
    return action.data
  } else {
    return previousState
  }
}

// 查询某日的日程
export const get_someday_schedule_list = (searchDate) => {
  const config = {
    url: `${isMock()}/crm-jj/api/scheduler/querySchedulerTodayList`,
    actionType: GET_SOMEDAY_SCHEDULE_LIST,
    bodyData: {
      searchDate: searchDate
    },
    successConfig: {
    },
    failConfig: {
    },
  }
  return post(config)
}

const someday_schedule_list = (previousState = {businessChanceResultVos: {
  content: []
}}, action) => {
  if (action.type === GET_SOMEDAY_SCHEDULE_LIST) {
    return action.data
  } else {
    return previousState
  }
}

// 新建日程
export const createSchedule = (bodyData, callback) => {
  const config = {
    url: `${isMock()}/crm-jj/api/scheduler/createScheduler`,
    actionType: CREATE_SCHEDULE,
    bodyData: bodyData,
    successConfig: {
      message: '新建日程成功',
      callback: callback
    },
    failConfig: {
      message: '新建日程失败'
    },
  }
  return post(config)
}


// 日程详情
export const getScheduleDetail = (id) => {
  const config = {
    url: `${isMock()}/crm-jj/api/scheduler/detailScheduler`,
    actionType: GET_SCHEDULE_DETAIL,
    queryData: {
      schedulerId: id
    },
    successConfig: {
    },
    failConfig: {
    },
  }
  return get(config)
}
const scheduleDetail = (previousState = {companyVo: {},businessChanceResultVo:{}}, action) => {
  if (action.type === GET_SCHEDULE_DETAIL) {
    return action.data
  } else {
    return previousState
  }
}

// 删除日程
export const deleteSchedule = (id) => {
  const config = {
    url: `${isMock()}/crm-jj/api/scheduler/deleteScheduler`,
    actionType: DELETE_SCHEDULE,
    queryData: {
      schedulerId: id
    },
    successConfig: {
      message: '删除日程成功'
    },
    failConfig: {
      message: '删除日程失败'
    },
  }
  return get(config)
}

// 日程删除商机id
export const clearBusinessId = (id) => {
  const config = {
    url: `${isMock()}/crm-jj/api/scheduler/clearBusinessIdBySchedulerId`,
    actionType: CLEAR_BUSINESS_ID,
    queryData: {
      schedulerId: id
    },
    successConfig: {
      message: '取消关联成功'
    },
    failConfig: {
      message: '取消关联失败'
    },
  }
  return get(config)
}
// 日程删除客户id
export const  clearCustomerId = (id) => {
  const config = {
    url: `${isMock()}/crm-jj/api/scheduler/clearCustomerIdBySchedulerId`,
    actionType: CLEAR_CUSTOMER_ID,
    queryData: {
      schedulerId: id
    },
    successConfig: {
      message: '取消关联成功'
    },
    failConfig: {
      message: '取消关联失败'
    },
  }
  return get(config)
}

// 通过id查询日程信息
export const getScheduleMsgById = (id) => {
  const config = {
    url: `${isMock(false)}/crm-jj/api/scheduler/querySchedulersByIds`,
    actionType: GET_SCHEDULE_MSG_BY_ID,
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
const scheduleMsgById = (previousState = {}, action) => {
  if (action.type === GET_SCHEDULE_MSG_BY_ID) {
    return action.data
  } else {
    return previousState
  }
}
// ---------------------------
// combine and export
// ---------------------------
const home = combineReducers({
  someday_schedule_list,
  dateRange_scheduleList,
  scheduleDetail,
  scheduleMsgById,
})
export default home
