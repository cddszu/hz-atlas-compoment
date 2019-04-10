import { connect } from 'react-redux'
import Component from './component.js'
import { searchMyBusinessByName, searchOrgBusinessByName } from 'store/modules/businessChanceMgt'
const mapDispatchToProps = {
  searchMyBusinessByName,
  searchOrgBusinessByName,
}

const mapStateToProps = (state) => ({
  myBusinessByName: state.businessChanceMgt.myBusinessByName,
  orgBusinessByName: state.businessChanceMgt.orgBusinessByName
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
