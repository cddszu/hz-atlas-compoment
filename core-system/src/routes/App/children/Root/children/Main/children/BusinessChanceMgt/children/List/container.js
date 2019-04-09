import { connect } from 'react-redux'
import Component from './component.js'
import { getFollowBusinessChanceList,
  getInnerBusinessChanceList,
  getOrgBusinessChanceList,
  getQueryTaskList,
  updateRelateSchedule } from 'store/modules/businessChanceMgt'

const mapDispatchToProps = {
  getFollowBusinessChanceList,
  getInnerBusinessChanceList,
  getOrgBusinessChanceList,
  getQueryTaskList,
  updateRelateSchedule
}

const mapStateToProps = (state) => ({
  followBusinessChanceList: state.businessChanceMgt.followBusinessChanceList.businessChanceResultVos,
  innerBusinessChanceList: state.businessChanceMgt.innerBusinessChanceList.businessChanceResultVos,
  orgBusinessChanceList: state.businessChanceMgt.orgBusinessChanceList.businessChanceResultVos,
  queryTaskList: state.businessChanceMgt.queryTaskList,
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
