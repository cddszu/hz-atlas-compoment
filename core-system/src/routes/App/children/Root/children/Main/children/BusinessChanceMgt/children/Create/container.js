import { connect } from 'react-redux'
import Component from './component.js'
import { createBusinessChance } from 'store/modules/businessChanceMgt'
import {getCustomerSearchResult} from 'store/modules/customerMgt/custMgt'
import { getUserByInstitutionNo, getInstitutionTree } from 'store/modules/institutionMgt'

const mapDispatchToProps = {
  getCustomerSearchResult,
  createBusinessChance,
  getUserByInstitutionNo,
  getInstitutionTree
}

const mapStateToProps = (state) => ({
  customerSearchResult: state.custMgt.customerSearchResult,
  userByInstitutionNo: state.institutionMgt.userByInstitutionNo,
  institutionTree: state.institutionMgt.institutionTree,

})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
