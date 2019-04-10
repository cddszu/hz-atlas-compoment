import { connect } from 'react-redux'
import Component from './component.js'
import { getUserByInstitutionNo } from 'store/modules/institutionMgt'

const mapDispatchToProps = {
  getUserByInstitutionNo
}

const mapStateToProps = (state) => ({
  userByInstitutionNo: state.institutionMgt.userByInstitutionNo
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
