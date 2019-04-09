import { connect } from 'react-redux'
import Component from './component.js'
import {
  getCompanyBasicRegisterInfo,
  getCompanyBasicCapitalFormation,
  getCompanyBasicForeignInvestment,
  getCompanyBasicExecutiveInfo,
 } from 'store/modules/customerMgt/custMgt'

const mapDispatchToProps = {
  getCompanyBasicRegisterInfo,
  getCompanyBasicCapitalFormation,
  getCompanyBasicForeignInvestment,
  getCompanyBasicExecutiveInfo,
}

const mapStateToProps = (state) => ({
  companyBasicRegisterInfo: state.custMgt.companyBasicRegisterInfo,
  companyBasicCapitalFormation: state.custMgt.companyBasicCapitalFormation,
  companyBasicForeignInvestment: state.custMgt.companyBasicForeignInvestment,
  companyBasicExecutiveInfo: state.custMgt.companyBasicExecutiveInfo,
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
