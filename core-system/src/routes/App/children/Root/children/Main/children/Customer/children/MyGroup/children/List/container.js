import { connect } from 'react-redux'
import Component from './component.js'
import { getMyGroupList, deleteGroup } from 'store/modules/group'

const mapDispatchToProps = {
  getMyGroupList,
  deleteGroup,
}

const mapStateToProps = (state) => ({
  myGroupList: state.groupMgt.myGroupList,
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
