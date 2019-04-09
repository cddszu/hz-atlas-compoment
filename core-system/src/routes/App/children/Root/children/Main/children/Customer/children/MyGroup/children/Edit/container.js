import { connect } from 'react-redux'
import Component from './component.js'
import { updateGroup, getMyGroupList } from 'store/modules/group'
const mapDispatchToProps = {
  updateGroup,
  getMyGroupList,
}

const mapStateToProps = (state) => ({
  myGroupList: state.groupMgt.myGroupList,
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
