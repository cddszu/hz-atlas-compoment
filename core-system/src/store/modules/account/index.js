import {get, post} from 'utils/dataAccess/axios'
import {combineReducers} from 'redux'
import {makeUrlString} from 'utils/index'
import {getCookie} from 'utils/cookie.js'
import {dispatch} from 'rxjs/internal/observable/range'
import axios from 'axios';
// import { getLoginUrl } from '../loginOut';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const GET_LOGIN_USER_INFO = 'GET_LOGIN_USER_INFO'
const GET_LOGIN_ROLE_INFO = 'GET_LOGIN_ROLE_INFO'
const GET_LOGIN_RESOURCE_INFO = 'GET_LOGIN_RESOURCE_INFO'
const GET_LOGIN_All_RESOURCE_INFO = 'GET_LOGIN_All_RESOURCE_INFO'
const GET_LOGIN_URL = 'GET_LOGIN_URL'
const SET_ROLE = 'SET_ROLE'
const QUERY_USER_LIST = 'QUERY_USER_LIST'
const SET_PANEL_LIST = 'SET_PANEL_LIST'
const GET_USER_PERMISSION = 'GET_USER_PERMISSION'
const GET_MESSAGE_COUNT = 'GET_MESSAGE_COUNT'
const GET_HEADER_MESSAGE = 'GET_HEADER_MESSAGE'

/**
 * @desc 更新密码
 *
 */
export function updatePassword(oldPassword, newPassword) {
  let url = makeUrlString('api/account/password/edit', {
    oldPassword: oldPassword,
    newPassword: newPassword,
  })
  let passwords = {
    oldPassword: oldPassword,
    newPassword: newPassword
  }
  let successTips = '修改密码成功'
  let failTips = '修改密码失败'

  return post(url, passwords, UPDATE_PASSWORD, 'data', {}, successTips, failTips)
}

export function getLoginUserInfo() {
  return get({
    url: '/crm-jj/api/auth/info',
    actionType: GET_LOGIN_USER_INFO,
    successConfig: {
      callback: (payload) => {
        localStorage.setItem('userId', payload.id)
      }
    },
    failConfig: {
      message: '获取用户数据失败'
    }
  })
}

export function loginUserInfo(previousState = {}, action) {
  if (action.type === GET_LOGIN_USER_INFO) {
    return action.data
  } else {
    return previousState
  }
}

export function getLoginRoleInfo() {
  return get({
    url: '/gap/api/login/getLoginUserRoleList',
    actionType: GET_LOGIN_ROLE_INFO,
    successConfig: {},
    failConfig: {
      message: '获取用户数据失败'
    }
  })
}

export function loginRoleInfo(previousState = {data: []}, action) {
  if (action.type === GET_LOGIN_ROLE_INFO) {
    return action.data
  } else {
    return previousState
  }
}

export function getLoginResourceInfo(roleCode) {
  return get({
    url: `/gap/api/login/findRootResourcesByCode?roleCode=${roleCode}`,
    actionType: GET_LOGIN_RESOURCE_INFO,
    successConfig: {},
    failConfig: {
      message: '获取用户数据失败'
    }
  })
}

export function loginResourceInfo(previousState = {data: []}, action) {
  if (action.type === GET_LOGIN_RESOURCE_INFO) {
    return action.data
  } else {
    return previousState
  }
}

export function getLoginAllResourceInfo() {
  let role = JSON.parse(getCookie('role'))
  return get({
    url: `/gap/api/login/queryAllResourcesByCode?roleCode=${role.code}`,
    actionType: GET_LOGIN_All_RESOURCE_INFO,
    successConfig: {},
    failConfig: {
      message: '获取用户数据失败'
    }
  })
}

export function loginAllResourceInfo(previousState = {data: [], isInit: true}, action) {
  if (action.type === GET_LOGIN_All_RESOURCE_INFO) {
    /**
     * todo
     * 找到一个合适的地方去设置localStorage
     */
    window.localStorage.setItem('resource', JSON.stringify(action.data))
    action.data.isInit = false
    return action.data
  } else {
    return previousState
  }
}

export const getLoginUrl = () => {
  return get({
    url: '/gap/api/login/doLogin',
    actionType: GET_LOGIN_URL
  })
}

export function loginUrl(previousState = {type: '', url: ''}, action) {
  if (action.type === GET_LOGIN_URL) {
    return action.data
  } else {
    return previousState
  }
}

export const setRole = (role) => {

  return (dispatch) => {
    dispatch({
      type: SET_ROLE,
      data: role
    })
  }
}

/**
 * todo
 * 太繁杂了，后续合并
 */
export const switchRole = (role) => {
  const myPromise = () => {
    return axios({
      url: `/gap/api/login/switchLoginUserRole?code=${role.code}`,
      method: 'get',
    })
  }
  return myPromise
}

export function currentRole(previousState = {data: {}}, action) {
  if (action.type === SET_ROLE) {
    return action.data
  } else {
    return previousState
  }
}


/**
 * 测试接口 start
 */

export const queryUserList = () => {
  return get({
    url: `/gap/api/login/queryUserList`,
    actionType: QUERY_USER_LIST,
    successConfig: {},
    failConfig: {
      message: '获取用户数据失败'
    }
  })
}

export function userList(previousState = {data: []}, action) {
  if (action.type === QUERY_USER_LIST) {
    return action.data
  } else {
    return previousState
  }
}

export const switchUser = (id) => {
  return get({
    url: `/gap/api/login/switchLoginUser?id=${id}`,
    actionType: GET_LOGIN_USER_INFO,
    successConfig: {},
    failConfig: {
      message: '获取用户数据失败'
    }
  })
}


/**
 * 测试接口 end
 */


export const setPanelList = (arr) => {
  return (dispatch) => {
    dispatch({
      type: SET_PANEL_LIST,
      data: arr
    })
  }
}

export function panelList(previousState = [], action) {
  if (action.type === SET_PANEL_LIST) {
    return action.data
  } else {
    return previousState
  }
}

export function getUserPermission() {
  return get({
    url: makeUrlString('/crm-jj/api/auth/findPermissions', {
      type: 'pc'
    }),
    actionType: GET_USER_PERMISSION,
    successConfig: {
    },
    failConfig: {
      message: '获取用户数据失败'
    }
  })
}

export function userPermission(previousState = {data: []}, action) {
  if (action.type === GET_USER_PERMISSION) {
    return action.data
  }
  return previousState
}

export function getMessageCount() { //获取未读消息总数
  return get({
    url: '/crm-jj/api/message/count',
    actionType: GET_MESSAGE_COUNT,
    keepPayload: true,
    successConfig: {},
    failConfig: {
      message: '获取消息失败'
    }
  })
}

export function messageCount(previousState = 0, action) {
  if (action.type === GET_MESSAGE_COUNT) {
    return action.data.data
  }
  return previousState
}

export function getHeaderMessage() { //获取头部消息
  /*TODO:接口可能更换*/
  return post({
    url: '/crm-jj/api/message/findMessage/messageCenter',
    actionType: GET_HEADER_MESSAGE,
    successConfig: {},
    failConfig: {
      message: '获取消息失败'
    }
  })
}

export function headerMessage(previousState = [], action) {
  if (action.type === GET_HEADER_MESSAGE) {
    /*TODO:接口可能更换,数据结构可能变*/
    return action.data.content
  }
  return previousState
}


const account = combineReducers({
  loginUserInfo,
  loginRoleInfo,
  loginResourceInfo,
  loginUrl,
  currentRole,
  userList,
  loginAllResourceInfo,
  panelList,
  userPermission,
  messageCount,
  headerMessage
})
export default account
