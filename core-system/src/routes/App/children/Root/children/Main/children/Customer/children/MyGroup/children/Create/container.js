import { connect } from 'react-redux'
import Component from './component.js'
import { createGroup, getMyGroupList } from 'store/modules/group'
const mapDispatchToProps = {
  createGroup,
  getMyGroupList,
}

const mapStateToProps = (state) => ({
  myGroupList: state.groupMgt.myGroupList,
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
