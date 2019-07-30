import axios from 'axios'

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
        }
      } else {
      }
    } else { // 如果后端没有默认的错误信息，则执行前端自定义错误提示信息
      if (config.failConfig) {
        if (config.failConfig.message) {
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


export const axiosHandler = (config) => {
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
      axiosConfig = Object.assign(axiosConfig, {
        headers: contentType ? {'content-type': contentType} : {},
        data: config.bodyData
      })
    }

    return axios(axiosConfig).then(response => { // 200
      config.responseData = response.data
      responseHandler(dispatch, config)
      return response.data
    }).catch(error => { // 400（坏请求），404, 500等，一些非http请求错误也会被捕获到
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
