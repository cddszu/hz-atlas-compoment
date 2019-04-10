import {connect} from 'react-redux'
import {
  getLoginUserInfo,
  getLoginRoleInfo,
  getLoginResourceInfo,
  getLoginUrl,
  setRole,
  queryUserList,
  switchUser,
  getLoginAllResourceInfo,
  setPanelList,
  switchRole,
  getUserPermission,
  getMessageCount,
  getHeaderMessage
} from 'store/modules/account/index'
import Component from './component.js'

const mapDispatchToProps = {
  getLoginUserInfo,
  getLoginRoleInfo,
  getLoginResourceInfo,
  getLoginUrl,
  setRole,
  queryUserList,
  switchUser,
  getLoginAllResourceInfo,
  setPanelList,
  switchRole,
  getUserPermission,
  getMessageCount,
  getHeaderMessage
}

const mapStateToProps = (state) => ({
  loginUserInfo: state.account.loginUserInfo,
  loginRoleInfo: state.account.loginRoleInfo,
  loginResourceInfo: state.account.loginResourceInfo,
  loginUrl: state.account.loginUrl,
  currentRole: state.account.currentRole,
  userList: state.account.userList,
  loginAllResourceInfo: state.account.loginAllResourceInfo,
  userPermission: state.account.userPermission,
  messageCount: state.account.messageCount,
  headerMessage: state.account.headerMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
