const targetAPI = 'http://192.168.1.146:8087' // 后端地址
const sysApi = 'http://192.168.1.57:10030'
// const targetAPI = 'http://192.168.1.146:8099' // 后端地址


const middleNodeApi = 'http://192.168.1.42:5000'
const nodePort = 6000 // node部署端口，需要和 package.json 的代理地址保持一致


module.exports = {
  targetAPI,
  nodePort,
  sysApi,
  middleNodeApi
}
