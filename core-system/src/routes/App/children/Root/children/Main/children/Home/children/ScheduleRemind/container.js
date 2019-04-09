import { connect } from 'react-redux'
import Component from './component.js'
// import { getMsgList } from 'store/modules/msgMgt/index'

const mapDispatchToProps = {
  // getMsgList
}

const mapStateToProps = (state) => ({
  // msgList: state.msgMgt.msgList

})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
