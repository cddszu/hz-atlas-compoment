import React from 'react'
import './component.scss'
import CustomerList from 'components/CustomerList'
import { SwipeAction, Modal } from 'antd-mobile'
import creatHistory from 'history/createBrowserHistory'

const history = creatHistory();

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scheduleId: '',
    }
  }

  componentDidMount() {
    let param = window.location.hash.split('?')[1]
    let scheduleId = param.split('=')[1]
    this.setState({
      scheduleId: scheduleId
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.scheduleId !== this.state.scheduleId) {
      this.props.getScheduleDetail(this.state.scheduleId)
    }
  }
  componentWillReceiveProps() {
  }
  render () {
    const {scheduleDetail} = this.props
    return (
      <div className={`schedule-detail-component`}>
        <div className='schedule-detail'>
          <div className='schedule-detail-head'>
            <i className='select-cancel iconfont icon-return' onClick={()=>{history.goBack()}}></i>
            <span className='select-title'>日程详情</span>
            <span className={`select-confirm `}></span>
          </div>
          <div className='schedule-detail-container'>
            <div className='detail-content'>
              <div className='content-base'>
                <div className='content-title'>{scheduleDetail.topic}</div>
                <div className='content-time'>
                  <span>开始时间：</span><span>{scheduleDetail.startDt}</span><span> | </span>
                  <span>结束时间：</span><span>{scheduleDetail.endDt}</span>
                </div>
              </div>
              <div className='content-desc'>
                <span className='content-remark'>商机描述：</span><span className='remark-content'>{scheduleDetail.remark}</span>
              </div>
            </div>
            <div className='border base-msg'>
              <div className='border-head'>
                <i className='msg-icon iconfont icon-essential-informatio'></i>
                <span className='item-title'>基本信息</span>
              </div>
              <div className='border-content'>
                <div className='content-item'>
                  <i className='item-icon iconfont icon-dizhi'></i>
                  <div className='item-right'>
                    <span className='item-title'>日程相关地点</span>
                    <span className='item-content'>{scheduleDetail.address || '--'}</span>
                  </div>
                </div>
                <div className='content-item'>
                  <i className='item-icon iconfont icon-tixing'></i>
                  <div className='item-right'>
                    <span className='item-title'>是否需要提醒</span>
                    <span className='item-content'>{scheduleDetail.schedulerRemind === '1' ? '是' : '否'}</span>
                  </div>
                </div>
                <div className='content-item'>
                  <i className='item-icon iconfont icon-effective-time'></i>
                  <div className='item-right'>
                    <span className='item-title'>日程提醒时间</span>
                    <span className='item-content'>{scheduleDetail.remindDt || '--'}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='border'>
              <div className='border-head'>
                <i className='schedule-icon iconfont icon-guanliankehu'></i>
                <span className='item-title'>关联客户</span>
              </div>
              <div className='border-content'>
                {
                  scheduleDetail.companyVo ? (
                    <SwipeAction
                      className='swiper-item'
                      autoClose
                      right={[
                        {
                          text: '取消关联',
                          onPress: () => {
                            this.props.clearCustomerId(scheduleDetail.companyVo.id)
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
                            <span className='company-name'>{scheduleDetail.companyVo.companyName}</span>
                            <span className='company-id'>{scheduleDetail.companyVo.companyNo}</span>
                          </div>
                          <div className='second-line'>
                            <span className='tag customerType'>{scheduleDetail.companyVo.isInside ? '行内' : '行外'}</span>
                            <span className='tag customerState'>{scheduleDetail.companyVo.operatingState}</span>
                            <span className='tag industry'>{scheduleDetail.companyVo.subordinateIndustry}</span>
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
                  scheduleDetail.businessChanceResultVo ? (
                    <SwipeAction
                      className='swiper-item'
                      autoClose
                      right={[
                        {
                          text: '取消关联',
                          onPress: () => {
                            this.props.clearBusinessId(scheduleDetail.businessChanceResultVo.id)
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
                        <div className='title'>{scheduleDetail.businessChanceResultVo.name}</div>
                        <div className='second-row'>
                          <span>{scheduleDetail.businessChanceResultVo.businessChanceType}</span>
                          <span className='gap'>|</span>
                          <span>{scheduleDetail.businessChanceResultVo.businessStatus}</span>
                          <span className='gap'>|</span>
                          <span>{scheduleDetail.businessChanceResultVo.validDt}</span>
                        </div>
                        <div className='third-row'>
                          <span className='customerType '>{scheduleDetail.businessChanceResultVo.customerType}</span>
                          <span className='customerName'>{scheduleDetail.businessChanceResultVo.customerName}</span>
                        </div>
                      </div>
                    </SwipeAction>
                  ) : (
                    <span className='no-result'>暂无关联商机</span>
                  )
                }
              </div>
            </div>
            <div className='delete-schedule' onClick={()=>{this.props.deleteSchedule(this.state.scheduleId)}}>
              <span className='delete-title'>删除日程</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Detail
