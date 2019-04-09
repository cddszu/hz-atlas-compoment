import { connect } from 'react-redux'
import Component from './component.js'
import { getMsgDetail } from 'store/modules/msgMgt'

const mapDispatchToProps = {
  getMsgDetail
}

const mapStateToProps = (state) => ({
  msgDetail: state.msgMgt.msgDetail
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
