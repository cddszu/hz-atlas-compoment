import { connect } from 'react-redux'
import Component from './component.js'
import { createReport,upFileReport,getDownFileReport } from 'store/modules/workReport'
import { getUserByInstitutionNo, getInstitutionTree } from 'store/modules/institutionMgt'
const mapDispatchToProps = {
  createReport,
  getUserByInstitutionNo,
  getInstitutionTree,
  upFileReport,
  getDownFileReport
}

const mapStateToProps = (state) => ({
  userByInstitutionNo: state.institutionMgt.userByInstitutionNo,
  institutionTree: state.institutionMgt.institutionTree,
  downFileReport: state.report.downFileReport
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
