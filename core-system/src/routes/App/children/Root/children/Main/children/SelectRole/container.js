import { connect } from 'react-redux'
import Component from './component.js'
import { confirmRole } from 'store/modules/roleMgt'

const mapDispatchToProps = {
  confirmRole
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
