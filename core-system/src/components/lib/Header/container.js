import { connect } from 'react-redux'
import Component from './component.js'
// import { changePassword } from 'store/modules/login/index'
// import { getRoleAndProject, showRoleSelect, loginOut } from 'store/modules/common/index'

const mapDispatchToProps = {
  // loginOut,
  // changePassword,
  // getRoleAndProject,
  // showRoleSelect,
}

const mapStateToProps = (state) => ({
  // userInfo: state.nav.userInfo,
  // roleAndProject: state.common.roleAndProject
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
