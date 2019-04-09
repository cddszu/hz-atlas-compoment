import React from 'react'
import './component.scss'
import CustomerList from 'components/CustomerList'
import { SwipeAction, Modal } from 'antd-mobile'
import FollowBusiness from './children/FollowBusiness'
import creatHistory from 'history/createBrowserHistory'
import ReturnHeader from 'components/hz/ReturnHeader'
import TogglePage from 'components/hz/TogglePage'

const history = creatHistory();
class BusinessDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowFollowBusiness: false,
      businessId: ''
    }
    this.roleTyle = localStorage.getItem('currentRole')
    this.toggleFollowBusinessHandler = this.toggleFollowBusinessHandler.bind(this)
    this.clickFollowBtnHandler = this.clickFollowBtnHandler.bind(this)
    this.showFollowBusinessPageHandler = this.showFollowBusinessPageHandler.bind(this)
    this.hideFollowBusinessPageHandler = this.hideFollowBusinessPageHandler.bind(this)
  }
  showFollowBusinessPageHandler() {
    this.followBusinessPage.show()
  }
  hideFollowBusinessPageHandler() {
    this.followBusinessPage.hide()
  }
  toggleFollowBusinessHandler() {
    this.setState((prevState)=>({
      isShowFollowBusiness: !prevState.isShowFollowBusiness
    }))
  }
  clickFollowBtnHandler() {
    if(this.props.queryBusinessChanceDetail.businessStatus !== '完成' && this.props.queryBusinessChanceDetail.businessStatus !== '终止') {
      this.toggleFollowBusinessHandler()
    }
  }
  componentDidMount() {
    let param = window.location.hash.split('?')[1]
    let businessId = param.split('=')[1]
    this.setState({
      businessId: businessId
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.businessId !== this.state.businessId) {
      this.props.getQueryBusinessChanceDetail(this.state.businessId)
    }
    if(prevState.isShowFollowBusiness !== this.state.isShowFollowBusiness && !this.state.isShowFollowBusiness){
      this.props.getQueryBusinessChanceDetail(this.state.businessId)
    }
  }
  componentWillReceiveProps() {
  }
  render () {
    const {queryBusinessChanceDetail} = this.props
    return (
      <div className={`business-detail-component`}>
        <div className='business-detail'>
          {/* <ReturnHeader
            title='商机详情'
            leftBtn={{
              onClick: ()=>{history.goBack()}
            }}
          /> */}
          <div className='business-detail-head'>
            <i className='select-cancel iconfont icon-return' onClick={()=>{history.goBack()}}></i>
            <span className='select-title'>商机详情</span>
            <span
              className={`select-confirm `}
              onClick={this.showFollowBusinessPageHandler}
            >
              {queryBusinessChanceDetail.businessStatus !== '完成' && queryBusinessChanceDetail.businessStatus !== '终止' && queryBusinessChanceDetail.businessChanceType !== '任务商机' ? '跟进' : ''}
            </span>
          </div>
          <div className='business-detail-container'>
            <div className='detail-content'>
              <div className='content-base'>
                <div className='content-title'>{queryBusinessChanceDetail.name}</div>
                <div className='content-time'>
                  <span>最近维护时间：</span><span>{queryBusinessChanceDetail.updatedDt}</span>
                </div>
              </div>
              <div className='content-desc'>
                <span className='content-remark'>商机描述：</span><span className='remark-content'>{queryBusinessChanceDetail.remark}</span>
              </div>
            </div>
            <div className='border base-msg'>
              <div className='border-head'>
                <i className='msg-icon iconfont icon-essential-informatio'></i>
                <span className='item-title'>基本信息</span>
              </div>
              <div className='border-content'>
                <div className='content-item'>
                  <i className='item-icon iconfont icon-customer'></i>
                  <div className='item-right'>
                    <span className='item-title'>客户名称</span>
                    <span className='item-content'>{queryBusinessChanceDetail.customerName || '--'}</span>
                  </div>
                </div>
                <div className='content-item'>
                  <i className='item-icon iconfont icon-type'></i>
                  <div className='item-right'>
                    <span className='item-title'>客户类型</span>
                    <span className='item-content'>{queryBusinessChanceDetail.customerType || '--'}</span>
                  </div>
                </div>
                <div className='content-item'>
                  <i className='item-icon iconfont icon-follow-up'></i>
                  <div className='item-right'>
                    <span className='item-title'>跟进人</span>
                    <span className='item-content'>{queryBusinessChanceDetail.executorName || queryBusinessChanceDetail.executorOrgName || '--'}</span>
                  </div>
                </div>
                <div className='content-item'>
                  <i className='item-icon iconfont icon-synergetic'></i>
                  <div className='item-right'>
                    <span className='item-title'>协同人</span>
                    <span className='item-content'>{queryBusinessChanceDetail.cooperators[0] ? queryBusinessChanceDetail.cooperators[0].name : '--'}</span>
                  </div>
                </div>
                <div className='content-item'>
                  <i className='item-icon iconfont icon-effective-time'></i>
                  <div className='item-right'>
                    <span className='item-title'>有效时间</span>
                    <span className='item-content'>{queryBusinessChanceDetail.validDt || '--'}</span>
                  </div>
                </div>
                <div className='content-item'>
                  <i className='item-icon iconfont icon-possibility'></i>
                  <div className='item-right'>
                    <span className='item-title'>可能性</span>
                    <span className='item-content'>{queryBusinessChanceDetail.enable || '--'}</span>
                  </div>
                </div>
                <div className='content-item'>
                  <i className='item-icon iconfont icon-business-opportunity'></i>
                  <div className='item-right'>
                    <span className='item-title'>商机状态</span>
                    <span className='item-content'>{queryBusinessChanceDetail.businessStatus || '--'}</span>
                  </div>
                </div>
                <div className='content-item'>
                  <i className='item-icon iconfont icon-propulsion-state'></i>
                  <div className='item-right'>
                    <span className='item-title'>推进状态</span>
                    <span className='item-content'>{queryBusinessChanceDetail.pushStatus || '--'}</span>
                  </div>
                </div>
                <div className='content-item'>
                  <i className='item-icon iconfont icon-termination-instruct'></i>
                  <div className='item-right no-bottom'>
                    <span className='item-title'>终止说明</span>
                    <span className='item-content'>{queryBusinessChanceDetail.reason || '--'}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`border relate-schedule ${this.roleTyle === 'customer' ? 'show' : 'hide'}`}>
              <div className='border-head'>
                <i className='schedule-icon iconfont icon-related-schedule'></i>
                <span className='item-title'>关联日程</span>
              </div>
              <div className='border-content'>
                {
                  queryBusinessChanceDetail.schedulerVos.length > 0 ? (
                    queryBusinessChanceDetail.schedulerVos.map((item, index)=>(
                      <SwipeAction
                        className='swiper-item'
                        autoClose
                        key={index}
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
                            <span className='card-title'>{item.topic || '--'}</span>
                          </div>
                          <div className='card-content'>
                            <div className='first-line'>
                              <div className='left-content'>{item.companyVo ? item.companyVo.companyName : '--'}</div>
                              <div className='right-content'>
                                <span className='time-line'>{item.startDt.substr(0,10) || ''}</span>
                                <span className='time-line'>{(item.startDt.substr(11,5) || '') + '-' + (item.endDt.substr(11, 5) || '')}</span>
                              </div>
                            </div>
                            <div className='second-line'>
                              <div className='left-content'>客户名称</div>
                              <div className='right-content'>日程时间</div>
                            </div>
                          </div>
                        </li>
                      </SwipeAction>
                    ))
                  ) : (
                    <span className='no-history'>暂无关联日程</span>
                  )
                }
              </div>
            </div>
            <div className='border history-operation'>
              <div className='border-head'>
                <i className='history-icon iconfont icon-historical-operation'></i>
                <span className='item-title'>历史操作</span>
              </div>
              <div className='border-content'>
                {
                  queryBusinessChanceDetail.optList.length > 0 ? (
                    queryBusinessChanceDetail.optList.map((item, index)=>(
                      <div className='history-item' key={index}>
                        <div className='history-title'>{item.operationDesc}</div>
                        <div className='history-time'>{item.operationDt}</div>
                      </div>
                    ))
                  ) : (
                    <span className='no-history'>暂无历史操作</span>
                  )
                }
              </div>
            </div>
          </div>
          {/* <FollowBusiness
            isShow={this.state.isShowFollowBusiness}
            toggleFollowBusiness={this.toggleFollowBusinessHandler}
            businessMsg={this.props.queryBusinessChanceDetail}
          /> */}
          <TogglePage
            ref={followBusinessPage => this.followBusinessPage = followBusinessPage }
          >
            <FollowBusiness
              leftBtn={this.hideFollowBusinessPageHandler}
              businessMsg={this.props.queryBusinessChanceDetail}
            />
          </TogglePage>
        </div>
      </div>
    )
  }
}

export default BusinessDetail
