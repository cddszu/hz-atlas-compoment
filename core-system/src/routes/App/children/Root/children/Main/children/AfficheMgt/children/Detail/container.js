import {connect} from 'react-redux';
import Component from './component.js';
import {getWorkAfficheDetail, getReplyList, replyAfficheMgt, downLoadFile} from 'store/modules/afficheMgt'

const mapDispatchToProps = {
  getWorkAfficheDetail,
  getReplyList,
  replyAfficheMgt,
  downLoadFile,
}

const mapStateToProps = (state) => (
  {
    workAfficheDetail : state.affiche.workAfficheDetail,
    replyList: state.affiche.replyList
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(Component)
