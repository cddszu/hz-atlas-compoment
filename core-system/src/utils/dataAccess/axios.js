import {Toast} from 'antd-mobile'
import {hashHistory, Redirect} from 'react-router'
import axios from 'axios'
import {isNullOrUndefined} from 'utils/common.js'
import { request } from 'http';

const TIPS_DURATION = 2
const TIPS_INTERFACE_ERROR = '接口获取数据失败，详情请查看控制台'

const isPlainObject = require('is-plain-object')

axios.interceptors.response.use(function (response) {
  return response
}, function (error) { // 两类错误，一类错误是

  // error包含3个字段，分别为config、request和reponse，仅response有用
  return Promise.reject(error)
})

const DEFAULT_CONFIG = {
  url: '',
  method: 'get',
  bodyData: {},
  queryData: {},
  actionType: '',
  actionDataKey: 'data',
  extendData: {},
  successConfig: null, // {message: '', callback: function, isForceShow: false}
  failConfig: null // {message: '', callback: function, isForceShow: false}
}

/**
 * @desc 1. 如果payload不是对象类型，则把payload包装为对象类型（以前和后端约定过，部分后端不遵守）
 *       2. 把payload包装为对象类型，是为了方便我们往返回结果里面统一插入一些自定义数据，统一封装到extendData对象里面
*/
const formatPayload = (responseData) => {
  if(!isPlainObject(responseData.payload)) {
    if (responseData.payload !== null && responseData.payload !== undefined) {
      responseData.payload = {

        // 如果payload不是{}对象，都被认为是丑陋的数据，封装到payload中
        uglyData: responseData.payload
      }
    } else {
      responseData.payload = {}
    }
  }
  // if (isPlainObject(responseData.payload.data) && Object.keys(responseData.payload).length === 1) {
  //   responseData.payload = responseData.payload.data
  // }
}
/**
 *
 * @desc get、post、drop等请求的response的通用处理器
 *
 * @param data { PlainObject } 后端返回的reponse, 格式为：
 *   {
      "payload": {...},
      "errorMsg":
      { "errorCode": null, "errorMsg": "用户未登录" },
      "msgId": 1515567900129,
      "status": 10004,
      "properties": null
    }
 *
 *
 */
const responseHandler = (dispatch, config) => {
  formatPayload(config.responseData)
  // 后端返回的结果数据和前端发起请求时的额外数据，都会通过payload发给请求处理完毕的回调函数
  config.responseData.payload.extendData = config.extendData
  if (config.responseData.success === true) {

    if (config.actionType) {
      dispatch({
        type: config.actionType,
        [config.actionDataKey]: config.responseData.payload
      })
    }
    if (config.successConfig) {
      if (config.successConfig.message) {
        Toast.success(config.successConfig.message, TIPS_DURATION)
      }
      if (config.successConfig.callback) {
        config.successConfig.callback(config.responseData.payload)
      }
    }
  } else { // 其它异常处理: 200的异常情况(success为false)、400、404、500(success标记位不存在)等

    if (!config.responseData.message) {
      config.responseData.message = {}
    }
    const errorMsg = config.responseData.message.desc
    if (errorMsg) {
      if (config.failConfig && config.failConfig.isForceShow) { // 判断是否强制执行前端自定义错误提示信息
        if (config.failConfig.message) {
          Toast.fail(config.failConfig.message, TIPS_DURATION)
        }
      } else {
        Toast.fail(errorMsg, TIPS_DURATION)
      }
    } else { // 如果后端没有默认的错误信息，则执行前端自定义错误提示信息
      if (config.failConfig) {
        if (config.failConfig.message) {
          Toast.fail(config.failConfig.message, TIPS_DURATION)
        }
      }
    }

    // 执行自定义的failCallback
    if (config.failConfig) {
      if (config.failConfig.callback) {
        config.failConfig.callback(config.responseData.payload)
      }
    }
  }
}

/**
 * @desc 用于判断是否切换登录
 *
 */
const loginUserIsChanged = (url) => {
  const currentUser = JSON.parse(window.localStorage.getItem('currentUser') || '{}')
  const userIdInput = document.querySelector('#userId')
  let userId = userIdInput.value

  // excludeUrls包含不需要登录就可以访问的接口
  const excludeUrls = ['/api/account/login']
  if (!excludeUrls.includes(url)) {
    if (currentUser.id && (currentUser.id != userId)) {
      document.querySelector('#userId').value = currentUser.id
      // hashHistory.push('/main')
      Toast.fail('账号已重新登录，重新刷新页面', TIPS_DURATION)
      setTimeout(() => {
        window.location.reload()
      }, 2500)
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}


export const axiosHandler = (config) => {
  // if (loginUserIsChanged(url)) return

  config = Object.assign({}, DEFAULT_CONFIG, config)

  // 有些post接口也用query传值，有些奇葩，但是这里get、post、drop等都统一支持query传值
  if (config.queryData) {
    let str = ''
    if (typeof config.queryData === 'object') {
      for (let key in config.queryData) {
        str += key + '=' + encodeURIComponent(config.queryData[key]) + '&'
      }
      if (Object.keys(config.queryData).length) {
        config.url = config.url + '?' + str.replace(/&$/, '')
      }
    }
  }
  return (dispatch) => {
    let axiosConfig = {
      url: config.url,
      method: config.method
    }
    if (config.method.toLowerCase() === 'post') {
      let contentType = 'application/json'
      // if (!(config.bodyData instanceof FormData)) {
      //   contentType = 'application/json'
      // } else if (config.bodyData instanceof FormData && config.contentType === 'multipart/form-data') {
      //   contentType = 'multipart/form-data'
      // } else if (config.bodyData instanceof FormData) {
      //   contentType = 'application/x-www-form-urlencoded'
      //   config.bodyData = [...config.bodyData.entries()].map((d) => `${d[0]}=${d[1]}`)
      //   config.bodyData = config.bodyData.join('&')
      // }

      axiosConfig = Object.assign(axiosConfig, {
        headers: contentType ? {'content-type': contentType} : {},
        data: config.bodyData
      })
    }

    return axios(axiosConfig).then(response => { // 200

      // 1. 一种特殊的200，success为false
      // {"success":false,"message":{"code":10017,"desc":"用户名或密码错误"}}
      config.responseData = response.data
      responseHandler(dispatch, config)
    }).catch(error => { // 400（坏请求），404, 500等，一些非http请求错误也会被捕获到


      // 1.未发送(举例如下)
      // error: {
      //   message: "Converting circular structure to JSON",
      //   stack: "TypeError: Converting circular structure to JSON↵    at JSON.stringify (<anonymous>)↵    at transformRequest (http://localhost:3000/static/js/0.chunk.js:4469:19)↵    at transform (http://localhost:3000/static/js/0.chunk.js:4404:12)↵    at Object.forEach (http://localhost:3000/static/js/0.chunk.js:5200:12)↵    at transformData (http://localhost:3000/static/js/0.chunk.js:4403:9)↵    at dispatchRequest (http://localhost:3000/static/js/0.chunk.js:4287:17)"
      // }

      // 2.已发送(400、404、500等，举例如下)
    //   error: {
    //     "config": {
    //         "transformRequest": {},
    //         "transformResponse": {},
    //         "timeout": 0,
    //         "xsrfCookieName": "XSRF-TOKEN",
    //         "xsrfHeaderName": "X-XSRF-TOKEN",
    //         "maxContentLength": -1,
    //         "headers": {
    //             "Accept": "application/json, text/plain, */*",
    //             "Content-Type": "application/json"
    //         },
    //         "method": "post",
    //         "url": "/crm-jj/api/business/createBusinessChance?",
    //         "data": "{\"businessStatus\":\"1\",\"cooperators\":[{\"id\":248,\"userNo\":\"248\",\"password\":null,\"name\":\"客户经理248号\",\"sex\":\"0\",\"status\":null,\"emplyPos\":null,\"emplyPost\":null,\"superEmplyNum\":null,\"idNumber\":null,\"phone\":null,\"email\":null,\"birthDt\":null,\"inPosDt\":null,\"belongOrgNum\":\"247\",\"belongOrg\":\"九江银行支行247号\",\"belongDeptNum\":null,\"belong_dept\":null,\"cont_addr\":null,\"leavePosDt\":null,\"enabledFlag\":null,\"updatedBy\":null,\"createdBy\":null,\"updatedDt\":null,\"createdDt\":null,\"orgId\":247,\"orgNo\":\"247\",\"isPerson\":true,\"zIndex\":4,\"personChecked\":true,\"username\":\"客户经理248号\"}],\"customerId\":\"30002\",\"customerName\":\"测试行内公司一号\",\"customerType\":\"1\",\"enable\":\"4\",\"executor\":248,\"name\":\"d\",\"remark\":\"\",\"schedulerDateIds\":[\"\"],\"validDt\":\"2019-03-26 21:57:00\"}"
    //     },
    //     "request": {},
    //     "response": {
    //         "data": {
    //             "success": false,
    //             "message": "field:[executor_org] message:[机构编号不能为空]"
    //         },
    //         "status": 400,
    //         "statusText": "Bad Request",
    //         "headers": {
    //             "date": "Tue, 26 Mar 2019 13:58:18 GMT",
    //             "content-encoding": "gzip",
    //             "x-powered-by": "Express",
    //             "vary": "Origin, Accept-Encoding",
    //             "content-type": "application/json;charset=UTF-8",
    //             "access-control-allow-origin": "http://localhost:5000",
    //             "transfer-encoding": "chunked",
    //             "connection": "close",
    //             "access-control-allow-credentials": "true",
    //             "x-application-context": "application:haizhi:8091"
    //         },
    //         "config": {
    //             "transformRequest": {},
    //             "transformResponse": {},
    //             "timeout": 0,
    //             "xsrfCookieName": "XSRF-TOKEN",
    //             "xsrfHeaderName": "X-XSRF-TOKEN",
    //             "maxContentLength": -1,
    //             "headers": {
    //                 "Accept": "application/json, text/plain, */*",
    //                 "Content-Type": "application/json"
    //             },
    //             "method": "post",
    //             "url": "/crm-jj/api/business/createBusinessChance?",
    //             "data": "{\"businessStatus\":\"1\",\"cooperators\":[{\"id\":248,\"userNo\":\"248\",\"password\":null,\"name\":\"客户经理248号\",\"sex\":\"0\",\"status\":null,\"emplyPos\":null,\"emplyPost\":null,\"superEmplyNum\":null,\"idNumber\":null,\"phone\":null,\"email\":null,\"birthDt\":null,\"inPosDt\":null,\"belongOrgNum\":\"247\",\"belongOrg\":\"九江银行支行247号\",\"belongDeptNum\":null,\"belong_dept\":null,\"cont_addr\":null,\"leavePosDt\":null,\"enabledFlag\":null,\"updatedBy\":null,\"createdBy\":null,\"updatedDt\":null,\"createdDt\":null,\"orgId\":247,\"orgNo\":\"247\",\"isPerson\":true,\"zIndex\":4,\"personChecked\":true,\"username\":\"客户经理248号\"}],\"customerId\":\"30002\",\"customerName\":\"测试行内公司一号\",\"customerType\":\"1\",\"enable\":\"4\",\"executor\":248,\"name\":\"d\",\"remark\":\"\",\"schedulerDateIds\":[\"\"],\"validDt\":\"2019-03-26 21:57:00\"}"
    //         },
    //         "request": {}
    //     },
    //     "message": "Request failed with status code 400",
    //     "stack": "Error: Request failed with status code 400↵    at createError (http://localhost:3000/static/js/0.chunk.js:4232:15)↵    at settle (http://localhost:3000/static/js/0.chunk.js:4374:12)↵    at XMLHttpRequest.handleLoad (http://localhost:3000/static/js/0.chunk.js:3774:7)"
    // }


    // {"success":false,"message":{"code":10017,"desc":"用户名或密码错误"}}
      // config.responseData = error.response || {message: error.message}
      config.responseData = {success: false, message: {desc:  error.message}}
      responseHandler(dispatch, config)
    })
  }
}

export const get = (config) => {
  config.method = 'GET'
  return axiosHandler(config)
}

export const drop = (config) => {
  config.method = 'DELETE'
  return axiosHandler(config)
}

export const post = (config) => {
  config.method = 'POST'
  return axiosHandler(config)
}
