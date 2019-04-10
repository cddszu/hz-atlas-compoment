import { combineReducers } from 'redux'
import { get, post } from 'utils/dataAccess/axios'
import { mockClosure } from 'utils/mock'
import creatHistory from 'history/createBrowserHistory'

const history = creatHistory();
const IS_MOCK_CURRENT_MODULE = false // 控制当前模块的所有接口是否使用mock
const isMock = mockClosure(IS_MOCK_CURRENT_MODULE)

const GET_LIST_REPORT = 'GET_LIST_REPORT'
const CREATE_REPORT = 'CREATE_REPORT'
const GET_WORK_REPORT_DETAIL = 'GET_WORK_REPORT_DETAIL'
const DELETE_REPORT = 'DELETE_REPORT'
const DOWN_FILE_REPORT = 'DOWN_FILE_REPORT'
const GET_REPLY_LIST = 'GET_REPLY_LIST'
const REPLY_REPORT_MGT = 'REPLY_REPORT_MGT'
// 获取汇报列表
export const getListReport = (bodyData, successConfig) => {
  const config = {
    url: `${isMock()}/crm-jj/api/report/listReport`,
    actionType: GET_LIST_REPORT,
    bodyData: bodyData,
    successConfig,
    failConfig: {
    },
  }
  return post(config)
}
const listReport = (previousState = {content:[]}, action) => {
  if (action.type === GET_LIST_REPORT) {
    return action.data
  } else {
    return previousState
  }
}

//上传附件
export const upFileReport = (bodyData) => {
  const config = {
    url: `${isMock()}/crm-jj/api/file/fileUp`,
    bodyData: bodyData,
    successConfig: {
      message: '上传成功',
    },
    failConfig: {
      message: '上传失败',
    },
    processData: false, //不处理数据
    contentType: false, //不设置内容类型
  }
  return post(config)
}

//下载附件
export const getDownFileReport = (id) => {
  debugger;
  const config = {
    url: `${isMock()}/crm-jj/api/file/fileDown`,
    queryData: {
      fileId: id
    },
    actionType: DOWN_FILE_REPORT,
    // responseType: 'blob',
    successConfig: {
      message: '下载成功',
      // callback : callback()
    },
    failConfig: {
      message: '下载失败',
    },
    // processData: false, //不处理数据
    // contentType: false, //不设置内容类型
  }
  return get(config)
}

const downFileReport = (previousState = {}, action) => {
  if (action.type === DOWN_FILE_REPORT) {
    return action.data
  } else {
    return previousState
  }
}
// const downFileReport = (previousState={}, action) => {
//   if (action.type === DOWN_FILE_REPORT) {
//     console.log('action.data :', action.data);
//     return action.data
//   } else {
//     return previousState
//   }
// }

// 新建汇报
export const createReport = (bodyData) => {
  const config = {
    url: `${isMock(false)}/crm-jj/api/report/createReport`,
    actionType: CREATE_REPORT,
    bodyData: {
      relevanceBusinessList: bodyData.relevanceBusinessList,
      relevanceCustomerList: bodyData.relevanceCustomerList,
      relevanceScheduleList: bodyData.relevanceScheduleList,
      relevanceFileList: bodyData.relevanceFileList,
      reportContent: bodyData.reportContent,
      reportTargetList: bodyData.reportTargetList,
      reportDateStart: bodyData.reportDateStart,
      reportDateEnd: bodyData.reportDateEnd,
      reportType: bodyData.reportType,
    },
    successConfig: {
      message: '新建成功',
      callback: () => {
        history.goBack()
      }
    },
    failConfig: {
      message: '新建失败',
    },
  }
  return post(config)
}

// 获取汇报详情
export const getWorkReportDetail = (id, successConfig) => {
  const config = {
    url: `${isMock(false)}/crm-jj/api/report/reportDetail`,
    actionType: GET_WORK_REPORT_DETAIL,
    queryData: {
      reportId: id
    },
    successConfig,
    failConfig: {
    },
  }
  return get(config)
}
const workReportDetail = (previousState = {
  relevanceScheduleList: [],
  relevanceFileList: [],
  relevanceCustomerList: [],
  relevanceBusinessList: [],
}, action) => {
  if (action.type === GET_WORK_REPORT_DETAIL) {
    return action.data
  } else {
    return previousState
  }
}

// 删除汇报
export const deleteReport = (id) => {
  const config = {
    url: `${isMock(false)}/crm-jj/api/report/delReport`,
    actionType: DELETE_REPORT,
    queryData: {
      reportId: id
    },
    successConfig: {
      message: '删除成功',
      callback: ()=>{
        history.goBack()
      }
    },
    failConfig: {
      message: '删除失败',
    },
  }
  return get(config)
}

//获取公告回执列表
export const getReplyList = (queryData) => {
  const postConfig = {
    url: `${isMock()}/crm-jj/api/report/listReply`,
    actionType: GET_REPLY_LIST,
    queryData: {
      reportId: queryData.reportId,
      page: queryData.pageNo,
      size: queryData.pageSize,
    },
    successConfig: {
      callback: (payload) => {

      }
    },
    failConfig: {
    }
  }
  return get(postConfig)
}
const replyList = (previousState = { content: [] }, action) => {
  if (action.type === GET_REPLY_LIST) {
    return action.data
  } else {
    return previousState;
  }
}

//公告回复
export const replyReportMgt = (bodyData, callback) => {
  const postConfig = {
    url: `${isMock()}/crm-jj/api/report/createReply`,
    actionType: REPLY_REPORT_MGT,
    bodyData: {
      reportId: bodyData.reportId || '',
      content: bodyData.content || '',
      replyId: bodyData.replyId || '',
      resourceId: bodyData.resourceId || '',
      resourceType: bodyData.resourceType || '',
    },
    successConfig: {
      callback: callback,
    },
    failConfig: {
    }
  }
  return post(postConfig)
}

const report = combineReducers({
  downFileReport,
  listReport,
  workReportDetail,
  replyList,
})
export default report
