import { connect } from 'react-redux'
import Component from './component'
import { getMsgNums } from 'store/modules/msgMgt'
import { getTodayScheduler } from 'store/modules/queryScheduler'

const mapDispatchToProps = {
  getMsgNums,
  getTodayScheduler,
}

const mapStateToProps = (state) => ({
  msgNums: state.msgMgt.msgNums,
  todayScheduler: state.queryScheduler.todayScheduler,
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
