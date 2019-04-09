import { connect } from 'react-redux'
import Component from './component.js'
import {getScheduleDetail, deleteSchedule, clearBusinessId, clearCustomerId} from 'store/modules/scheduleMgt'
const mapDispatchToProps = {
  getScheduleDetail,
  deleteSchedule,
  clearBusinessId,
  clearCustomerId
}

const mapStateToProps = (state) => ({
  scheduleDetail: state.scheduleMgt.scheduleDetail
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
