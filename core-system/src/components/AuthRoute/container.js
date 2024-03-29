import { connect } from 'react-redux'
import Component from './component.js.js'
import { getLoginAllResourceInfo } from 'store/modules/account'

const mapDispatchToProps = {
  getLoginAllResourceInfo
}

const mapStateToProps = (state) => ({
  loginAllResourceInfo: state.account.loginAllResourceInfo,
  loginResourceInfo: state.account.loginResourceInfo,
  userPermission: state.account.userPermission
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
