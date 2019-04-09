import React from 'react'
import './component.scss'
import { SwipeAction, Modal } from 'antd-mobile'
import GoBack from 'components/hz/GoBack'
import { formatMsgDate } from 'utils/timeFormat'
import FadePage from 'components/hz/FadePage'
import TogglePage from 'components/hz/TogglePage'

const alert = Modal.alert

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      afficheId: '',  // 公告id
      replyId: '',  // 回复id
      replyName: '',  // 回复人
      isShowCommentPage: false,   // 是否展示评论page
      commentValue: '',   // 输入评论
      replyArr: [],    // 公告回复列表
    }
    this.deleteAfficheModalHandler = this.deleteAfficheModalHandler.bind(this)
    this.changeCommentValue = this.changeCommentValue.bind(this)
    this.toggleCommentPageHandler = this.toggleCommentPageHandler.bind(this)
    this.subReplyHandler = this.subReplyHandler.bind(this)
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this)
    this.getReplyList = this.getReplyList.bind(this)
    this.downloadHandler = this.downloadHandler.bind(this)
  }
  // 删除汇报
  deleteAfficheModalHandler() {
    alert('', '确定删除此公告吗？', [
      { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
      { text: '确定', onPress: () => {this.props.deleteAfficheId(this.state.afficheId)} },
    ]);
  }
  // showCommentPageHandler() {
  //   this.comment.show()
  //   this.setState({
  //     isShowCommentPage: true
  //   })
  // }
  // hideCommentPageHandler() {
  //   this.comment.hide()
  //   this.setState({
  //     isShowCommentPage: false
  //   })
  // }
  toggleCommentPageHandler() {
    this.setState((prevState)=>({
      isShowCommentPage: !prevState.isShowCommentPage
    }))
  }
  changeCommentValue(e) {
    this.setState({
      commentValue: e.target.value
    })
  }
  getReplyList() {
    let getReplyData = {
      noticeId: this.state.afficheId,
      pageNo: 1,
      pageSize: 999,
    }
    this.props.getReplyList(getReplyData)
  }
  subReplyHandler(item) {
    this.setState({
      replyId: item.replyId || '',
      replyName: item.userName || ''
    })
    this.toggleCommentPageHandler()
  }
  onKeyUpHandler(e) {
    let value = e.target.value
    if (e.keyCode === 13 && value !== '') {
      let bodyData = {
        content: value,
        fileIds: [],
        noticeId: this.state.afficheId,
        replySup: this.state.replyId,
      }
      this.props.replyAfficheMgt(bodyData, this.getReplyList)
      this.toggleCommentPageHandler()
      this.setState({
        commentValue: ''
      })
    }
  }
  downloadHandler(fileId) {
    this.props.downLoadFile(fileId)
  }
  componentDidMount() {
    let param = window.location.hash.split('?')[1]
    let hashArr = param.split('&')
    for(let item in hashArr) {
      let key = hashArr[item].split('=')[0]
      let value = hashArr[item].split('=')[1]
      if(key === 'id') {
        this.setState({
          afficheId: value
        })
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.afficheId !== this.state.afficheId) {
      this.props.getWorkAfficheDetail(this.state.afficheId)
    }
  }
  componentWillReceiveProps({workAfficheDetail, replyList}) {
    if(workAfficheDetail !== this.props.workAfficheDetail) {
      let bodyData = {
        noticeId: workAfficheDetail.id,
        pageNo: 1,
        pageSize: 999,
      }
      this.props.getReplyList(bodyData)
    }
    if(replyList !== this.props.replyList) {
      this.setState({
        replyArr: replyList.uglyData ? replyList.uglyData.reverse() : []
      })
    }
  }
  render () {
    const {workAfficheDetail} = this.props
    let { replyArr } = this.state
    return (
      <div className={`affiche-detail-component`}>
        <div className='affiche-detail'>
          <div className='affiche-detail-head'>
            <GoBack>
              <i className='select-cancel iconfont icon-return'></i>
            </GoBack>
            <span className='select-title'>公告详情</span>
            <span className={`select-confirm `}></span>
          </div>
          <div className='affiche-detail-container'>
            <div className='detail-content'>
              <div className='content-base'>
                <div className='content-title'>
                  <span className='afficheType'>{workAfficheDetail.title}</span>
                </div>
                <div className='sub-title'>
                  <span className='left-part'>
                    <span className='create-name'>{workAfficheDetail.pubUserName}</span>
                    <span className='sub-info'>发至</span>
                    <span className='to-name'>
                    {
                      workAfficheDetail.receiveUserName.map(item=>(
                        item
                      ))
                    }
                    </span>
                  </span>
                  <span className='create-time'>{formatMsgDate(workAfficheDetail.pubDt)}</span>
                </div>
              </div>
              <div className='content-desc'>
                <span className='remark-content' dangerouslySetInnerHTML={{ __html: workAfficheDetail.content ? workAfficheDetail.content: '--'}}></span>
              </div>
              <div className='file-items'>
                {
                  workAfficheDetail.file ? workAfficheDetail.file.map(item=>(
                    <div className='file-item' key={item.id}>
                      <span className='left-part'>
                        <i className='annex-icon iconfont icon-fujian'></i>
                        <span className='file-name'>附件：{item.name}</span>
                      </span>
                      <span className='right-part'>
                        <span className='file-length'>{item.fileLength}</span>
                        <i className='download-icon iconfont icon-xiazai' onClick={this.downloadHandler.bind(this, item.id)}></i>
                      </span>
                    </div>
                  )) : ''
                }
              </div>
            </div>
            <div className='border'>
              {
                workAfficheDetail.reply ? (
                  <div className='border-head'>
                    <span className='reply-num'>回执：{workAfficheDetail.replyUserName.length}人回复/</span><span className='all-num'>共{workAfficheDetail.receiveUserName.length}人</span>
                  </div>
                ): ''
              }
              <div className='border-content'>
                <div className='reply-items'>
                  {
                    replyArr.map((item, index) => (
                      <div className='reply-item' key={index}>
                        <div className='item-head'>
                          <div className='left-part'>
                            <i className='leg-img'></i>
                            <span className='chat-name'>{item.userName}</span>
                          </div>
                          <div className='right-part'>{item.replyDate}</div>
                        </div>
                        <div className='item-content'>
                          <div className='content-container'>
                            {
                              item.supNoticeReplyVo ? (
                                <span className='red-name'>{item.supNoticeReplyVo.userName}</span>
                              ) : ''
                            }
                            <span className='reply-content'>{item.content}</span>
                          </div>
                          <i className='chat-icon iconfont icon-huifu' onClick={this.subReplyHandler.bind(this, item)}></i>
                        </div>
                        {
                          item.files ? (
                            <div className='file-items'>
                            {
                              item.files.map((value, key)=>(
                                <div className='file-item' key={key}>
                                  <span className='left-part'>
                                    <i className='annex-icon iconfont icon-fujian'></i>
                                    <span className='file-name'>附件：{value.name}</span>
                                  </span>
                                  <span className='right-part'>
                                    <span className='file-length'>{value.fileLength}</span>
                                    <i className='download-icon iconfont icon-xiazai' onClick={this.downloadHandler.bind(this, value.id)}></i>
                                  </span>
                                </div>
                              ))
                            }
                            </div>
                          ) : ''
                        }
                        {
                          item.supNoticeReplyVo ? (
                            <div className='sub-chat'>
                              <div className='sub-item-title'>
                                <span className='sub-chat-name'>{item.supNoticeReplyVo.userName}</span>
                                <span className='sub-chat-time'>{item.supNoticeReplyVo.replyDate}</span>
                              </div>
                              <div className='sub-item-content'>{item.supNoticeReplyVo.content}</div>
                            </div>
                          ) : ''
                        }
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className='comment-box' onClick={this.subReplyHandler.bind(this, {})}>
              <span className='comment-title'>请输入评论内容...</span>
            </div>
            <FadePage
              isShow={this.state.isShowCommentPage}
              toggleFadePage={this.toggleCommentPageHandler}
              position='bottom'
            >
              <div className='comment-border'>
                <textarea className='comment-textarea' placeholder={this.state.replyId ? '评论'+this.state.replyName+'...' : '请输入评论内容...'} value={this.state.commentValue} onChange={this.changeCommentValue} onKeyUp={this.onKeyUpHandler}></textarea>
              </div>
            </FadePage>
          </div>
        </div>
      </div>
    )
  }
}

export default Detail

