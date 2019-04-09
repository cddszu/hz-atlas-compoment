import { connect } from 'react-redux'
import Component from './component.js'
import { searchExistCustomer,searchTargetCustomer,searchPotentCustomer,targetCustomerBack,potentCustomerClaim } from 'store/modules/customerMgt/custMgt'
import {getListReport} from 'store/modules/workReport'
const mapDispatchToProps = {
  searchExistCustomer,
  searchTargetCustomer,
  searchPotentCustomer,
  targetCustomerBack,
  potentCustomerClaim,

  getListReport,
}

const mapStateToProps = (state) => ({
  existCustomerList: state.custMgt.existCustomerList,
  targetCustomerList: state.custMgt.targetCustomerList,
  potentialCustomerList: state.custMgt.potentialCustomerList,

  listReport: state.report.listReport,
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
