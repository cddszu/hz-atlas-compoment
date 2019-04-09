import { connect } from 'react-redux'
import Component from './component.js'
import { getQueryBusinessTaskDetail,getQueryDistributeDetail } from 'store/modules/businessChanceMgt'

const mapDispatchToProps = {
  getQueryBusinessTaskDetail,
  getQueryDistributeDetail
}

const mapStateToProps = (state) => ({
  queryBusinessTaskDetail: state.businessChanceMgt.queryBusinessTaskDetail,
  queryDistributeDetail: state.businessChanceMgt.queryDistributeDetail
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
