import { connect } from 'react-redux'
import Component from './component.js'
import { createBusinessChance,updateBusinessChance,getQueryBusinessChanceDetail } from 'store/modules/businessChanceMgt'
import {getCustomerSearchResult} from 'store/modules/customerMgt/custMgt'
import { getUserByInstitutionNo, getInstitutionTree } from 'store/modules/institutionMgt'

const mapDispatchToProps = {
  getCustomerSearchResult,
  createBusinessChance,
  updateBusinessChance,
  getQueryBusinessChanceDetail,
  getUserByInstitutionNo,
  getInstitutionTree
}

const mapStateToProps = (state) => ({
  customerSearchResult: state.custMgt.customerSearchResult,
  institutionTree: state.institutionMgt.institutionTree,
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
