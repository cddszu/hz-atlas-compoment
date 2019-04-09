import { connect } from 'react-redux'
import Component from './component.js'
import { createSchedule } from 'store/modules/scheduleMgt'
const mapDispatchToProps = {
  createSchedule,
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
