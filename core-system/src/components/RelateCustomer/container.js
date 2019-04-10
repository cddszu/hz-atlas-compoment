import { connect } from 'react-redux'
import Component from './component.js'
import {getCustomerSearchResult} from 'store/modules/customerMgt/custMgt'
const mapDispatchToProps = {
  getCustomerSearchResult,
}

const mapStateToProps = (state) => ({
  customerSearchResult: state.custMgt.customerSearchResult
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
