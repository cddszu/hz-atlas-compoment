import {connect} from 'react-redux';
import Component from './component.js';
import {getLegWorkDetail,dropLegWorkDetail} from 'store/modules/legWork'

const mapDispatchToProps = {
  getLegWorkDetail,
  dropLegWorkDetail
}

const mapStateToProps = (state) => (
  // console.log('state :', state)
  {
    legWorkDetail : state.legWork.legWorkDetail
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(Component)
