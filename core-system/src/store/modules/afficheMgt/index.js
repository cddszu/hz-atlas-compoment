import { combineReducers } from 'redux'
import { get, post } from 'utils/dataAccess/axios'
import { mockClosure } from 'utils/mock'

const IS_MOCK_CURRENT_MODULE = false // 控制当前模块的所有接口是否使用mock
const isMock = mockClosure(IS_MOCK_CURRENT_MODULE)
//获取外勤列表数据
const GET_AFFICHE_LIST = 'GET_AFFICHE_LIST';
//获取外勤详情数据
const GET_WORK_AFFICHE_DETAIL = 'GET_WORK_AFFICHE_DETAIL';
const GET_REPLY_LIST = 'GET_REPLY_LIST';
const REPLY_AFFICHE_MGT = 'REPLY_AFFICHE_MGT'
const DOWN_LOAD_FILE = 'DOWN_LOAD_FILE'

let filterObj = {
  pageNo: 1,
    pageSize: 10,
    type: "my",
    title: '',
    pubdate: '',
    endDate: ''
}

//公告列表
export const getAfficheList = (bodyData) => {
  bodyData = Object.assign(filterObj,bodyData)
  const postConfig = {
    url: `${isMock()}/crm-jj/api/noticeManage/find`,
    actionType: GET_AFFICHE_LIST,
    bodyData: bodyData,
    successConfig: {
      callback: (payload) => {

      }
    },
    failConfig: {
      message: '获取列表失败'
    }
  }
  return post(postConfig)
}
const afficheList = (previousState = { uglyData: [] }, action) => {
  if (action.type === GET_AFFICHE_LIST) {
    return action.data
  } else {
    return previousState;
  }
}

// 公告详情
export const getWorkAfficheDetail = (id) => {
  const config = {
    url: `${isMock()}/crm-jj/api/noticeManage/detailNotice`,
    actionType: GET_WORK_AFFICHE_DETAIL,
    queryData: {
      id: id
    }
  }
  return post(config);
}
const workAfficheDetail = (previousState = {
  replyList: [],
  replyUserName: [],
  unReplyUserName: [],
  receiveUserName: [],
  receiveUserId: [],
  unReadUserName: [],
  readUserName: [],
}, action) => {
  if (action.type === GET_WORK_AFFICHE_DETAIL) {
    return action.data
  } else {
    return previousState;
  }
}

//获取公告回执列表
export const getReplyList = (bodyData) => {
  const postConfig = {
    url: `${isMock()}/crm-jj/api/noticeManage/getReplyList`,
    actionType: GET_REPLY_LIST,
    bodyData: {
      noticeId: bodyData.noticeId,
      pageNo: bodyData.pageNo,
      pageSize: bodyData.pageSize,
    },
    successConfig: {
      callback: (payload) => {

      }
    },
    failConfig: {
    }
  }
  return post(postConfig)
}
const replyList = (previousState = { uglyData: [] }, action) => {
  if (action.type === GET_REPLY_LIST) {
    return action.data
  } else {
    return previousState;
  }
}

//公告回复
export const replyAfficheMgt = (bodyData, callback) => {
  const postConfig = {
    url: `${isMock()}/crm-jj/api/noticeManage/insertReply`,
    actionType: REPLY_AFFICHE_MGT,
    bodyData: {
      noticeId: bodyData.noticeId || '',
      content: bodyData.content || '',
      replySup: bodyData.replySup || '',
      fileIds: bodyData.fileIds || [],
    },
    successConfig: {
      callback: callback,
    },
    failConfig: {
    }
  }
  return post(postConfig)
}

//附件下载
export const downLoadFile = (fileId) => {
  const getConfig = {
    url: `${isMock()}/crm-jj/api/file/fileDown`,
    actionType: DOWN_LOAD_FILE,
    queryData: {
      fileId: fileId || '',
    },
    successConfig: {
      message: '正在下载',
    },
    failConfig: {
      message: '下载失败',
    }
  }
  return get(getConfig)
}

const legWork = combineReducers({
  afficheList,
  workAfficheDetail,
  replyList,
})

export default legWork
