import { connect } from 'react-redux'
import Component from './component.js'
import { getRelationGraph  } from 'store/modules/relation'

const mapDispatchToProps = {
  getRelationGraph
}

const mapStateToProps = (state) => ({
  relationGraph: state.relation.relationGraph
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
