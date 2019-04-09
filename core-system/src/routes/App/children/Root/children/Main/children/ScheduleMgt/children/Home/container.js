import { connect } from 'react-redux'
import Component from './component.js'
import { get_date_range_schedule_list, get_someday_schedule_list } from 'store/modules/scheduleMgt'

const mapDispatchToProps = {
  get_date_range_schedule_list,
  get_someday_schedule_list
}

const mapStateToProps = (state) => ({
  someday_schedule_list: state.scheduleMgt.someday_schedule_list
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
