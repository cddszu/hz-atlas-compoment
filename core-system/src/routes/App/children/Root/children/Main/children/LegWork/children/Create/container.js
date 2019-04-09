import {connect} from 'react-redux';
import Component from './component.js';
import {getLegWorkCreate} from 'store/modules/legWork'
import { getUserByInstitutionNo, getInstitutionTree } from 'store/modules/institutionMgt'


const mapDispatchToProps = {
  getUserByInstitutionNo,
  getInstitutionTree,
  getLegWorkCreate
}

const mapStateToProps = (state) => (
  {
    userByInstitutionNo: state.institutionMgt.userByInstitutionNo,
    institutionTree: state.institutionMgt.institutionTree,
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(Component)
