import { connect } from 'react-redux'
import Component from './component'
import { getMsgNums, getMsgList } from 'store/modules/msgMgt'
import { getTodayScheduler } from 'store/modules/queryScheduler'
import {getQuerySearchHistor, getCustomerSearchResult} from 'store/modules/customerMgt/custMgt'
const mapDispatchToProps = {
  getMsgNums,
  getMsgList,
  getTodayScheduler,
  getQuerySearchHistor,
  getCustomerSearchResult,
}

const mapStateToProps = (state) => ({
  msgNums: state.msgMgt.msgNums,
  msgList: state.msgMgt.msgList,
  todayScheduler: state.queryScheduler.todayScheduler,
  querySearchHistor: state.custMgt.querySearchHistor,
  customerSearchResult: state.custMgt.customerSearchResult,
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
