const middleNodeApi = 'http://192.168.1.45:5000' // 前端的atlas-web代码

const nodePort = 6000 // node部署端口，需要和 package.json 的代理地址保持一致

module.exports = {
  nodePort,
  middleNodeApi
}
