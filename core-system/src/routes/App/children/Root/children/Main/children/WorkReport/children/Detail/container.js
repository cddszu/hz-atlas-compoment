import {connect} from 'react-redux';
import Component from './component.js';
import {getWorkReportDetail, deleteReport, getReplyList, replyReportMgt} from 'store/modules/workReport'
import {getCustomerMsgById} from 'store/modules/customerMgt/custMgt'
import {getScheduleMsgById} from 'store/modules/scheduleMgt'
import {getBusinessMsgById} from 'store/modules/businessChanceMgt'
import {downLoadFile} from 'store/modules/afficheMgt'

const mapDispatchToProps = {
  getWorkReportDetail,
  getCustomerMsgById,
  getScheduleMsgById,
  getBusinessMsgById,
  deleteReport,
  getReplyList,
  replyReportMgt,
  downLoadFile,
}

const mapStateToProps = (state) => ({
  workReportDetail: state.report.workReportDetail,
  customerMsgById: state.custMgt.customerMsgById,
  scheduleMsgById: state.scheduleMgt.scheduleMsgById,
  businessMsgById: state.businessChanceMgt.businessMsgById,
  replyList: state.report.replyList,
})

export default connect(mapStateToProps,mapDispatchToProps)(Component)
