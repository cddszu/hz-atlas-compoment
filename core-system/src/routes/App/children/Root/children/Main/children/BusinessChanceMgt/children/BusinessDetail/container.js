import { connect } from 'react-redux'
import Component from './component.js'
import { getQueryBusinessChanceDetail } from 'store/modules/businessChanceMgt'

const mapDispatchToProps = {
  getQueryBusinessChanceDetail,
}

const mapStateToProps = (state) => ({
  queryBusinessChanceDetail: state.businessChanceMgt.queryBusinessChanceDetail,
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
