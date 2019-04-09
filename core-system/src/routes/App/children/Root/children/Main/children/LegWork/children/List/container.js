import {connect} from 'react-redux';
import Component from './component.js';
import {getLegWorkList} from 'store/modules/legWork'
import { getUserByInstitutionNo, getInstitutionTree } from 'store/modules/institutionMgt'

const mapDispatchToProps = {
  getUserByInstitutionNo,
  getInstitutionTree,
  getLegWorkList
}

const mapStateToProps = (state) => (
  {
    legWorkList : state.legWork.legWorkList,
    userByInstitutionNo: state.institutionMgt.userByInstitutionNo,
    institutionTree: state.institutionMgt.institutionTree,
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(Component)
