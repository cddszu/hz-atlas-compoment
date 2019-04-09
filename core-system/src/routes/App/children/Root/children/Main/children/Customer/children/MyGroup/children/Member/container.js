import { connect } from 'react-redux'
import Component from './component.js'
import { getMyGroupList, getGroupMemberList } from 'store/modules/group'
const mapDispatchToProps = {
  getMyGroupList,
  getGroupMemberList,
}

const mapStateToProps = (state) => ({
  myGroupList: state.groupMgt.myGroupList,
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
