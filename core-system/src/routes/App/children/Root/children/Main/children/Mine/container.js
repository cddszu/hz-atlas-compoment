import { connect } from 'react-redux'
import Component from './component.js'
import { getLoginUserInfo } from 'store/modules/account'
import {loginout} from 'store/modules/loginOut'
const mapDispatchToProps = {
  getLoginUserInfo,
  loginout,
}

const mapStateToProps = (state) => ({
  loginUserInfo: state.account.loginUserInfo
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
