import { connect } from 'react-redux'

import Component from './component'
import { login } from 'store/modules/loginOut'

const mapDispatchToProps = {
  login
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
