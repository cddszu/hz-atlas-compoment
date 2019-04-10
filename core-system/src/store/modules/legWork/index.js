import { combineReducers } from 'redux'
import { get, post } from 'utils/dataAccess/axios'
import { mockClosure } from 'utils/mock'
import creatHistory from 'history/createBrowserHistory'

const history = creatHistory();

const IS_MOCK_CURRENT_MODULE = false // 控制当前模块的所有接口是否使用mock
const isMock = mockClosure(IS_MOCK_CURRENT_MODULE)
//获取外勤列表数据
const GET_LEG_WORK_LIST = 'GET_LEG_WORK_LIST';
//获取外勤详情数据
const GET_LEG_WORK_DETAIL = 'GET_LEG_WORK_DETAIL';
//创建外情
const GET_LEG_WORK_CREATE = 'GET_LEG_WORK_CREATE';

export const getLegWorkList = (postConfig) => {
  const config = {
    url: `${isMock(false)}/crm-jj/api/mobile/workOutside/queryWorkOutsideList`,
    actionType: GET_LEG_WORK_LIST,
    bodyData: {
      endDt: postConfig.endDt,
      pageNo: postConfig.pageNo,
      pageSize: postConfig.pageSize,
      startDt: postConfig.startDt,
      title: postConfig.title,
      userId : postConfig.userId,
      workOutsideType : postConfig.workOutsideType
    }
  }
  return post(config);
}

const legWorkList = (previousState = {vos: []},action) => {
  if (action.type === GET_LEG_WORK_LIST) {
    return action.data
  } else {
    return previousState;
  }
}

export const getLegWorkDetail = (workOutsideId) => {
  const config = {
    url: `${isMock(false)}/crm-jj/api/mobile/workOutside/queryWorkOutsideDetail`,
    actionType: GET_LEG_WORK_DETAIL,
    queryData: {
      workOutsideId: workOutsideId
    }
  }
  return get(config);
}

const legWorkDetail = (previousState = {uglyData: [
  {
    relationBusiness : [],
    relationCustomers: [],
    relationSchedulers: [],
  }
]},action) => {
  if (action.type === GET_LEG_WORK_DETAIL) {
    return action.data
  } else {
    return previousState;
  }
}

export const getLegWorkCreate = (postConfig) => {
  console.log('postConfig :', postConfig);
  const config = {
    url: `${isMock(false)}/crm-jj/api/mobile/workOutside/createWorkOutside`,
    actionType: GET_LEG_WORK_CREATE,
    bodyData: {
      addressName: postConfig.addressName,
      endDt: postConfig.endDt,
      latitude : postConfig.latitude,
      longitude : postConfig.longitude,
      planDesc : postConfig.planDesc,
      relationBusinessIds : postConfig.relationBusinessIds,
      relationCustomerIds : postConfig.relationCustomerIds,
      relationSchedulers : postConfig.relationSchedulers,
      reportToId : postConfig.reportToId,
      reportToName : postConfig.reportToName,
      startDt : postConfig.startDt,
      title : postConfig.title
    },
    successConfig: {
      message: '新建外勤成功',
      callback: (payload) => {
        history.goBack()
      }
    },
    failConfig: {
      message: '新建外勤失败',
      callback: (payload) => {
      }
    },
  }
  return post(config);
}

const legWorkCreate = (previousState = {payload:{}},action) => {
  if (action.type === GET_LEG_WORK_CREATE) {
    return action.data
  } else {
    return previousState;
  }
}

export const dropLegWorkDetail = (workOutsideIds) => {
  const config = {
    url: `${isMock(false)}/crm-jj/api/mobile/workOutside/deleteWorkOutsideById`,
    actionType: GET_LEG_WORK_CREATE,
    queryData: {
      workOutsideId: workOutsideIds
    },
    successConfig: {
      message: '删除外勤成功',
      callback: (payload) => {
        history.goBack()
      }
    },
    failConfig: {
      message: '删除外勤失败',
      callback: (payload) => {
      }
    },
  }
  return get(config);
}


const legWork = combineReducers({
  legWorkList,
  legWorkDetail,
  legWorkCreate,
})

export default legWork
