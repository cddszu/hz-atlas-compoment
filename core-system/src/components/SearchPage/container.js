import { connect } from 'react-redux'
import Component from './component.js'
import { getHistoryResult } from 'store/modules/search'

const mapDispatchToProps = {
  getHistoryResult
}

const mapStateToProps = (state) => ({
  historyResult: state.search.historyResult
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
