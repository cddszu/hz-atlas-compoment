import React from 'react'
// var nameMapPathKey = {
//   '首页': '/root/main',
//   '基础应用': '',
//   '公告信息': '',
//   '拜访管理': '',
//   '任务管理': '',
//   '商机管理': '',
//   '排行榜': '',
//   '客户管理': '',
//   '客户分配': '',
//   '批量分配': '',
//   '客户导出': '',
//   '知识图谱': '',
//   '客户概览': '',
//   '客户业绩': '',
//   '基本信息': '',
//   '关联关系': '',
//   '客户价值': '',
//   '已开展业务': '',
//   '风险预警': '',
//   '客户认领': '',
//   '行内动态': '',
//   '添加商机': '',
//   '添加拜访': '',
//   '行外事件': '',
//   '产品目录': '',
//   '查看详情': '',
//   '日程': '',
//   '客户动态': '',
//   '商机导出': '',
//   '商机新建': '',
//   '商机修改': '',
//   '商机认领': '',
//   '商机导入': '',
//   '营销活动': '',
//   '任务创建': '',
//   '任务批量导入': '',
//   '查看任务进度': '',
//   '任务批量导出': '',
//   '任务修改/终止': '',
//   '项目监测 ': '',
//   '对公客户明细查询': '',
//   '对公共存款变化情况表': '',
//   '报表查询': '',
//   '项目储备': '',
//   '拜访新建': '',
//   '拜访修改': '',
//   '营销成果': '',
//   '系统管理': 'systemMgt',
//   '用户管理': '',
//   '角色管理': 'roleMgt',
//   '数据上传': '',
//   '参数配置': '',
//   '知识库': '',
//   '大客户': '',
//   '公告发布': '',
//   '零售客户': '',
//   '反洗钱收益人': '',
//   '消息推送': '',
//   '认领审批日志': ''
// }

/**
 * @desc map对象，记录所有功能模块及当前用户所有的访问权限；
 *       key：为需要权限控制的模块名称，如'用户管理'、'角色管理'；
 *       value：为boolean值，表示是否有权限；
 *  */
var moduleMapPermission = {

}

/**
 * @desc 实现组件模块（包括：路由组件、按钮组件、链接组件等）的权限验证
 *       实现思路：每个被验证的功能模块，需要用Auth包裹，Auth组件接收一个permissionPath数组，
 *               该数组记录着当前功能模块对应的权限路径，每一个元素对应一个权限节点（层级），
 *               index越小的元素，其对应的权限层级越高
 *
 */
class Auth extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hasPermission: true
    }

    // 调试字段，为true时表示取消权限控制
    this.cancelPermission = true

    this.judgeInterface = this.judgeInterface.bind(this)
    // this.judge1 = this.judge1.bind(this)
    this.judge2 = this.judge2.bind(this)
  }

  /**
   * @desc 根据权限树(数组)，生成一个map对象:moduleMapPermission，该对象记录所有功能模块及当前用户的所属权限
   *
   */
  generateModulePermission = (permissionTree) => {
    if (permissionTree) {
      permissionTree.forEach(permissionObj => {

        // 核心代码
        moduleMapPermission[permissionObj.name] = permissionObj.checked === 'true'
        if (permissionObj.subs) {
          this.generateModulePermission(permissionObj.subs)
        }
      })
    }
  }

  judgeInterface(userPermission) {
    this.judge1(userPermission)
    // this.judge2()
  }

  /**
   * @desc 正确可用，但是要给组件一层层配置权限路径，不能忽略某一层，使用麻烦
   *
   */
  judge1(userPermission) {
    const { permissionPath } = this.props
    let hasPermission = true

    if (permissionPath && userPermission) {
      let currentArr = userPermission.data

      outer:
      for (let deep = 0; deep < permissionPath.length; deep++) {

        // 用于判断在当前功能模块层级是否有匹配的模块，默认值为false
        let hasMath = false

        inner:
        for (let i = 0; i < currentArr.length; i++) {

          let item = currentArr[i]

          // 如果找到匹配的功能模块
          if (item.name === permissionPath[deep]) {
            hasMath = true

            // 继续判断用户在当前功能模块的权限
            if (item.checked === 'false') { // 权限为false

              // 没有权限则退出外重循环
              hasPermission = false
              break outer
            } else { // 权限为true


              if (Array.isArray(item.subs) && item.subs.length > 0) { // 匹配下一层的功能模块
                currentArr = item.subs
                break
              } else { // 没有下一层则说明匹配完毕，是否有权限可确定
                hasPermission = true
                break outer
              }
            }
          }
        }

        if (!hasMath) {
          hasPermission = false
          break
        }
      }
    }

    this.setState({
      hasPermission: hasPermission
    })
  }

  /**
   * @desc 此判断方法不严谨(在出现功能模块名称相同时会失效)，但是简单、高效，能否满足当前业务需求（所有功能模块没有重名的）
   *
   *       特别说明：为了减少权限路径数组的配置，本组件支持配置单个权限元素，但是要求这个权限元素的描述是唯一的；
   *                如果不唯一，增需要在前面补充一个权限元素，以达到区分的目的
   *                举例：1. ['系统管理', '用户管理']，可以缩写为['用户管理']
   *                     2. ['创建']这个权限配置无效，因为很多管理模块都有'创建'权限，因在前面补充权限元素，如['用户管理', '创建']
   *
   */
  judge2() {
    const { permissionPath } = this.props
    let hasPermission = true
    if (permissionPath) {

      // hasPermissionArr存的值为boolean值，对应per
      const hasPermissionArr = permissionPath.map(module => {
        return moduleMapPermission[module]
      })

      hasPermissionArr.forEach(item => {
        hasPermission = hasPermission && item
      })
    }

    this.setState({
      hasPermission: hasPermission
    })
  }


  componentWillMount() {
    // this.judgeInterface(this.props.userPermission)
  }

  componentWillReceiveProps({ userPermission }) {
    if (
      userPermission.data.length !== this.props.userPermission.data.length
    ) {
      this.generateModulePermission(userPermission.data)
      this.judgeInterface(userPermission)
    }
  }

  shouldComponentUpdate({ userPermission }) {
    if (
      userPermission.data.length !== this.props.userPermission.data.length
    ) {
      return true
    } else {
      return false
    }
  }

  render() {
    const { children } = this.props
    let { hasPermission } = this.state
    return (
      hasPermission || this.cancelPermission ?
        children
        : null
    )
  }
}
export default Auth
