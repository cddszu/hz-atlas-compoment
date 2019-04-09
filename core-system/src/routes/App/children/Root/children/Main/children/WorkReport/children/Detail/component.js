import React from 'react'
import './component.scss'
import CustomerList from 'components/CustomerList'
import { SwipeAction, Modal } from 'antd-mobile'
import creatHistory from 'history/createBrowserHistory'
import GoBack from 'components/hz/GoBack'
import FadePage from 'components/hz/FadePage'

const history = creatHistory();
const alert = Modal.alert

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reportId: '',
      replyId: '',  // 回复id
      replyName: '',  // 回复人
      isShowCommentPage: false,   // 是否展示评论page
      commentValue: '',   // 输入评论
      replyArr: [],    // 公告回复列表
    }
    this.deleteReportModalHandler = this.deleteReportModalHandler.bind(this)
    this.changeCommentValue = this.changeCommentValue.bind(this)
    this.toggleCommentPageHandler = this.toggleCommentPageHandler.bind(this)
    this.subReplyHandler = this.subReplyHandler.bind(this)
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this)
    this.getReplyList = this.getReplyList.bind(this)
    this.downloadHandler = this.downloadHandler.bind(this)
  }
  // 删除汇报
  deleteReportModalHandler() {
    alert('', '确定删除此汇报吗？', [
      { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
      { text: '确定', onPress: () => {this.props.deleteReport(this.state.reportId)} },
    ]);
  }

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
      reportId: this.state.reportId,
      pageNo: 0,
      pageSize: 999,
    }
    this.props.getReplyList(getReplyData)
  }
  subReplyHandler(item) {
    this.setState({
      replyId: item.id || '',
      replyName: item.userName || ''
    })
    this.toggleCommentPageHandler()
  }
  onKeyUpHandler(e) {
    let value = e.target.value
    if (e.keyCode === 13 && value !== '') {
      let bodyData = {
        reportId: this.state.reportId,
        content: value,
        replyId: this.state.replyId || '',
        resourceId: '',
        resourceType: '',
      }
      this.props.replyReportMgt(bodyData, this.getReplyList)
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
          reportId: value
        })
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.reportId !== this.state.reportId) {
      this.props.getWorkReportDetail(this.state.reportId)
      let bodyData = {
        reportId: this.state.reportId,
        pageNo: 0,
        pageSize: 999,
      }
      this.props.getReplyList(bodyData)
    }
  }
  componentWillReceiveProps({workReportDetail, replyList}) {
    if(workReportDetail !== this.props.workReportDetail) {
      if(workReportDetail.relevanceScheduleList.length !== 0) {
        this.props.getScheduleMsgById(workReportDetail.relevanceScheduleList[0])
      }
      if(workReportDetail.relevanceCustomerList.length !== 0) {
        this.props.getCustomerMsgById(workReportDetail.relevanceCustomerList[0])
      }
      if(workReportDetail.relevanceBusinessList.length !== 0) {
        this.props.getBusinessMsgById(workReportDetail.relevanceBusinessList[0])
      }
    }
    if(replyList !== this.props.replyList) {
      this.setState({
        replyArr: replyList.content ? replyList.content.reverse() : []
      })
    }
  }
  render () {
    const {workReportDetail,
      scheduleMsgById,
      customerMsgById,
      businessMsgById,
    } = this.props
    let {replyArr} = this.state
    let customerMsg = customerMsgById && customerMsgById[workReportDetail.relevanceCustomerList[0]] ? customerMsgById[workReportDetail.relevanceCustomerList[0]] : null
    let businessMsg = businessMsgById.uglyData && businessMsgById.uglyData[0] ? businessMsgById.uglyData[0] : null
    let scheduleMsg = scheduleMsgById.uglyData && scheduleMsgById.uglyData[0] ? scheduleMsgById.uglyData[0] : null
    return (
      <div className={`report-detail-component`}>
        <div className='report-detail'>
          <div className='report-detail-head'>
            <GoBack>
              <i className='select-cancel iconfont icon-return'></i>
            </GoBack>
            <span className='select-title'>汇报详情</span>
            <span className={`select-confirm `}></span>
          </div>
          <div className='report-detail-container'>
            <div className='detail-content'>
              <div className='content-base'>
                <div className='content-title'>
                  <span className='reportType'>{workReportDetail.reportTypeName}</span>
                  <span className='content'>{workReportDetail.reportTypeName === '日报' ? workReportDetail.reportDateStart :workReportDetail.reportDate}</span>
                </div>
                <div className='sub-title'>
                  <span className='create-name'>{workReportDetail.publisher}</span>
                  <span className='sub-info'>发至</span>
                  <span className='to-name'>{workReportDetail.reportTargetName}</span>
                  <span className='create-time'>{workReportDetail.createDate}</span>
                </div>
              </div>
              <div className='content-desc'>
                <span className='remark-content'>{workReportDetail.reportContent}</span>
              </div>
              <div className='file-items'>
                {
                  workReportDetail.files ? workReportDetail.files.map(item=>(
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
              <div className='border-head'>
                <i className='schedule-icon iconfont icon-guanliankehu'></i>
                <span className='item-title'>关联客户</span>
              </div>
              <div className='border-content'>
                {
                  customerMsg ? (
                    <SwipeAction
                      className='swiper-item'
                      autoClose
                      right={[
                        {
                          text: '取消关联',
                          onPress: () => {
                            // this.props.clearCustomerId(customerMsg.id)
                          },
                          style: {
                            width:'2.5067rem',
                            height:'100%',
                            background:'rgba(244,51,60,1)',
                            color: '#FFF',
                            fontSize: '0.4267rem',
                          },
                        },
                      ]}
                    >
                      <div className='relate-customer'>
                        <div className='item-logo'>
                          <i className='company-logo iconfont icon-company'></i>
                        </div>
                        <div className='item-msg'>
                          <div className='first-line'>
                            <span className='company-name'>{customerMsg.companyName}</span>
                            <span className='company-id'>{customerMsg.companyNo}</span>
                          </div>
                          <div className='second-line'>
                            <span className='tag customerType'>{customerMsg.isInside ? '行内' : '行外'}</span>
                            <span className='tag customerState'>{customerMsg.operatingState}</span>
                            <span className='tag industry'>{customerMsg.subordinateIndustry}</span>
                          </div>
                        </div>
                      </div>
                    </SwipeAction>
                  ) : (
                    <span className='no-result'>暂无关联客户</span>
                  )
                }
              </div>
            </div>
            <div className='border'>
              <div className='border-head'>
                <i className='history-icon iconfont icon-guanlianshangji'></i>
                <span className='item-title'>关联商机</span>
              </div>
              <div className='border-content'>
                {
                  businessMsg ? (
                    <SwipeAction
                      className='swiper-item'
                      autoClose
                      right={[
                        {
                          text: '取消关联',
                          onPress: () => {
                            this.props.clearBusinessId(businessMsg.id)
                          },
                          style: {
                            width:'2.5067rem',
                            height:'100%',
                            background:'rgba(244,51,60,1)',
                            color: '#FFF',
                            fontSize: '0.4267rem',
                          },
                        },
                      ]}
                    >
                      <div className='relate-busienss'>
                        <div className='title'>{businessMsg.name}</div>
                        <div className='second-row'>
                          <span>{businessMsg.businessChanceType}</span>
                          <span className='gap'>|</span>
                          <span>{businessMsg.businessStatus}</span>
                          <span className='gap'>|</span>
                          <span>{businessMsg.validDt}</span>
                        </div>
                        <div className='third-row'>
                          <span className='customerType '>{businessMsg.customerType}</span>
                          <span className='customerName'>{businessMsg.customerName}</span>
                        </div>
                      </div>
                    </SwipeAction>
                  ) : (
                    <span className='no-result'>暂无关联商机</span>
                  )
                }
              </div>
            </div>
            <div className='border'>
              <div className='border-head'>
                <i className='history-icon iconfont icon-guanlianshangji'></i>
                <span className='item-title'>关联日程</span>
              </div>
              <div className='border-content relate-schedule'>
                {
                   scheduleMsg ? (
                      <SwipeAction
                        className='swiper-item'
                        autoClose
                        right={[
                          {
                            text: '取消关联',
                            onPress: () => {
                              // this.relateScheduleHandler(item) TODO: 缺少商机取消关联日程的接口
                            },
                            style: {
                              width:'2.5067rem',
                              height:'100%',
                              background:'rgba(244,51,60,1)',
                              color: '#FFF',
                              fontSize: '0.4267rem',
                            },
                          },
                        ]}
                      >
                        <li className='card-container'>
                          <div className='card-head'>
                            <span className='before-sign'></span>
                            <span className='card-title'>{scheduleMsg.topic || '--'}</span>
                          </div>
                          <div className='card-content'>
                            <div className='first-line'>
                              <div className='left-content'>{scheduleMsg.companyVo ? scheduleMsg.companyVo.companyName : '--'}</div>
                              <div className='right-content'>
                                <span className='time-line'>{scheduleMsg.startDt.substr(0,10) || ''}</span>
                                <span className='time-line'>{(scheduleMsg.startDt.substr(11,5) || '') + '-' + (scheduleMsg.endDt.substr(11, 5) || '')}</span>
                              </div>
                            </div>
                            <div className='second-line'>
                              <div className='left-content'>客户名称</div>
                              <div className='right-content'>日程时间</div>
                            </div>
                          </div>
                        </li>
                      </SwipeAction>
                  ) : (
                    <span className='no-result'>暂无关联日程</span>
                  )
                }
              </div>
            </div>
            <div className='reply-border'>
              {
                workReportDetail.reply ? (
                  <div className='border-head'>
                    <span className='reply-num'>回执：{workReportDetail.replyUserName.length}人回复/</span><span className='all-num'>共{workReportDetail.receiveUserName.length}人</span>
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
                          <div className='right-part'>{item.date}</div>
                        </div>
                        <div className='item-content'>
                          <div className='content-container'>
                            {
                              item.targetReplyUserName ? (
                                <span className='red-name'>{item.targetReplyUserName}</span>
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
                          item.targetReplyId ? (
                            <div className='sub-chat'>
                              <div className='sub-item-title'>
                                <span className='sub-chat-name'>{item.targetReplyUserName}</span>
                                <span className='sub-chat-time'>{item.targetReplyDate}</span>
                              </div>
                              <div className='sub-item-content'>{item.targetReplyContent}</div>
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
            <div className='delete-schedule' onClick={this.deleteReportModalHandler}>
              <span className='delete-title'>删除汇报</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Detail
