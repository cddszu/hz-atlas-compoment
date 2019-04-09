import {connect} from 'react-redux';
import Component from './component.js';
import {getLegWorkList} from 'store/modules/legWork'

const mapDispatchToProps = {
  getLegWorkList
}

const mapStateToProps = (state) => (
  {
    // legWorkList : state.legWork.legWorkList
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(Component)
