import {connect} from 'react-redux';
import Component from './component.js';
import {getAfficheList} from 'store/modules/afficheMgt'

const mapDispatchToProps = {
  getAfficheList
}

const mapStateToProps = (state) => (
  {
    afficheList : state.affiche.afficheList
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(Component)
