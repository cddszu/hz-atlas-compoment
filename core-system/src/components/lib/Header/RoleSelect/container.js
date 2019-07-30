import { connect } from 'react-redux'
import Component from './component.js'
// import { showRoleSelect, getProject, getRoles, saveRolesAndProject } from 'store/modules/common/index'

const mapDispatchToProps = {
  // showRoleSelect,
  // getProject,
  // getRoles,
  // saveRolesAndProject
}

const mapStateToProps = (state) => ({
  isRoleSelectShow: state.common.isRoleSelectShow,
  userProjectList: state.common.userProjectList,
  roleList: state.common.roleList,
  saveRolesInfo: state.common.saveRolesInfo,
  roleAndProject: state.common.roleAndProject
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
