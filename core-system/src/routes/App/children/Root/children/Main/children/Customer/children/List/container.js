import { connect } from 'react-redux'
import Component from './component.js'
import { searchExistCustomer,searchTargetCustomer,searchPotentCustomer,targetCustomerBack,potentCustomerClaim } from 'store/modules/customerMgt/custMgt'

const mapDispatchToProps = {
  searchExistCustomer,
  searchTargetCustomer,
  searchPotentCustomer,
  targetCustomerBack,
  potentCustomerClaim,
}

const mapStateToProps = (state) => ({
  existCustomerList: state.custMgt.existCustomerList,
  targetCustomerList: state.custMgt.targetCustomerList,
  potentialCustomerList: state.custMgt.potentialCustomerList,
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
