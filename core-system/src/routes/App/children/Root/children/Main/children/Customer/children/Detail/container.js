import { connect } from 'react-redux'
import Component from './component.js'
import {getCompanyBasicTag,} from 'store/modules/customerMgt/tagMgt'
import { getCustomerBaseMsg,
  getCustomerChance,
  getCustomerRisk,
  getCustomerBusinessList,
  getCustomerScheduleList,
  getCustomerOutevet,
  getCompanyBasicContactInfo,
  getCustomerBussinessAccount,
  getBizChannel,
  getBizCollectionPay,
  getAcountLoan,
  getBankAcceptance,
  getCreditLetter,
  getDiscount,
  getGuarantee
} from 'store/modules/customerMgt/custMgt'

const mapDispatchToProps = {
  getCustomerBaseMsg,
  getCustomerChance,
  getCustomerRisk,
  getCustomerBusinessList,
  getCustomerScheduleList,
  getCustomerOutevet,
  getCompanyBasicContactInfo,
  getCompanyBasicTag,
  getCustomerBussinessAccount,
  getBizChannel,
  getBizCollectionPay,
  getAcountLoan,
  getBankAcceptance,
  getCreditLetter,
  getDiscount,
  getGuarantee
}

const mapStateToProps = (state) => ({
  customerBaseMsg: state.custMgt.customerBaseMsg,
  customerChance: state.custMgt.customerChance,
  customerRisk: state.custMgt.customerRisk,
  customerBusinessList: state.custMgt.customerBusinessList,
  customerScheduleList: state.custMgt.customerScheduleList,
  customerOutevet: state.custMgt.customerOutevet,
  companyBasicContactInfo: state.custMgt.companyBasicContactInfo,
  companyBasicTag: state.tagMgt.companyBasicTag,
  customerBussinessAccount: state.custMgt.customerBussinessAccount,
  bizCollectionPay: state.custMgt.bizCollectionPay,
  bizChannel: state.custMgt.bizChannel,
  acountLoan: state.custMgt.acountLoan,
  bankAcceptance: state.custMgt.bankAcceptance,
  creditLetter: state.custMgt.creditLetter,
  discount: state.custMgt.discount,
  guarantee: state.custMgt.guarantee,

})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
