import { connect } from 'react-redux'
import Component from './component.js'
import { getAllSchedule,getSearchScheduleList } from 'store/modules/queryScheduler'
import { updateRelateSchedule } from 'store/modules/businessChanceMgt'
const mapDispatchToProps = {
  getAllSchedule,
  updateRelateSchedule,
  getSearchScheduleList
}

const mapStateToProps = (state) => ({
  allSchedule: state.queryScheduler.allSchedule,
  searchScheduleList: state.queryScheduler.searchScheduleList
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
