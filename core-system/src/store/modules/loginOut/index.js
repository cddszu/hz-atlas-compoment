// import { hashHistory } from 'react-router'
import { message } from 'antd-mobile'
import { combineReducers } from 'redux'
import { get, post } from 'utils/dataAccess/axios'

// ------------------------------------
// Constants
// ------------------------------------
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
// ------------------------------------
// Actions
// ------------------------------------
export const login = (data) => {
  // let formData = new FormData()

  // formData.append('name', data.name)
  // formData.append('password', data.password)
  let bodyData = {
    userNo: data.username,
    password: data.password
  }
  const postConfig = {
    url: `/crm-jj/api/auth/login`,
    actionType: LOGIN,
    bodyData: bodyData,
    successConfig: {
      message: '登录成功',
      callback: (payload) => {
        if (payload) {
          localStorage.setItem('roleList', JSON.stringify(payload.uglyData))
          window.location.href = '/#/root/main/selectRole'

          // 将userId保存到页面隐藏的input元素，用以接口在调用时，检查是否切换了用户
          // document.querySelector('#userId').value = payload.userInfo.id
        }
      }
    },
    failConfig: {
      message: '登录失败'
    }
  }

  return post(postConfig)
}

// export function logout () {
//   return (dispatch, getState) => {
//       dispatch({
//           type: LOGOUT,
//           data: {}
//       })
//   }
// }

export function loginout() {
  const postConfig = {
    url: `/crm-jj/api//auth/logout`,
    successConfig: {
      callback: (payload) => {
        window.location.href='/#/root/'
      }
    },
    failConfig: {
    }
  }

  return get(postConfig)
}

export function updatePassword(bodyData) {
  const postConfig = {
    url: `/crm-jj/api/auth/updatePassword`,
    bodyData: bodyData,
    successConfig: {
      message: '修改密码成功',
      callback: (payload) => {
      }
    },
    failConfig: {
      message: '修改密码失败'
    }
  }

  return post(postConfig)
}

export function loginUserInfo (previousState = {}, action) {
  if (action.type === LOGIN) {
    return action.data.payload || {}
  } else if (action.type === LOGOUT) {
    return {}
  } else {
    return previousState
  }
}

const loginOut = combineReducers({
  loginUserInfo
})
export default loginOut

