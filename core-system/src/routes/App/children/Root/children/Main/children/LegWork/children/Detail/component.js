import React, {Component} from 'react';
import './component.scss'
import PaginationList from 'components/PaginationList'
import SearchPage from 'components/SearchPage'
import Tabs from 'components/hz/Tabs'
import { DatePicker, SwipeAction } from 'antd-mobile'

class HeadTitle extends Component {

  constructor (props) {
    super(props);
    this.state = {};
  }

  handlerReturn = () => {
    let {history} = this.props.data;
    history.goBack();
  }

  render () {
    return (
      <div className='leg-detail-title'>
        <span className='title-left' onClick={this.handlerReturn}><i className='iconfont icon-return'></i></span>
        <span className='title-info'>外勤详情</span>
      </div>
    )
  }
}

//外情详情
class DetailInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {

    let {legWorkDetail:{uglyData}} = this.props.data;

    return (
      uglyData.map((value,index) => (
          <div className='detail-info'>
            <div className='info-top'>
              <div className='title'>{value.title}</div>
              <div className='sub-title'>
                <span className='create-name'>{value.createName}</span>
                <span className='sub-info'>发至</span>
                <span className='to-name'>{value.reportToName}</span>
                <span className='create-time'>{value.createdDt}</span>
              </div>
            </div>
            <div className='info-bottom'>
              <div className='leg-desc'>
                <span>外勤描述:</span><span className='plan-desc'>{value.planDesc || '--'}</span>
              </div>
              <div className='map'>
                <i className='map-img'></i>
                <div className='address'>
                  <div className='address-first'>{value.addressFirst || '暂无地点'}</div>
                  <div className='address-detail'>{value.addressName || '暂无地点'}</div>
                </div>
                <i className='arrow-right'></i>
              </div>
            </div>
        </div>
        )
      )
    )
  }
}


export default class LegDetail extends Component {

    constructor(props) {
      super(props);
      this.state={
        //外勤列表详情
        legWorkDetail : [],
      }
    }

    componentDidMount () {
      this.props.getLegWorkDetail(this.getUrlParams('workOutsideId'));
    }

    cancelHandler = () => {
      this.props.dropLegWorkDetail(this.getUrlParams('workOutsideId'));
    }

    getUrlParams = (keyName) => {
      let param = window.location.hash.split('?')[1]
      let hashArr = param.split('&')
      for(let item in hashArr) {
        let key = hashArr[item].split('=')[0]
        let value = hashArr[item].split('=')[1]
        if (keyName === key) {
          return value;
        }
      }
    }

    componentWillReceiveProps ({legWorkDetail}) {
      if (legWorkDetail !== this.props.legWorkDetail) {
        this.setState({
          legWorkDetail: legWorkDetail
        })
      }
    }

    render() {

      let {legWorkDetail:{uglyData}} = this.props;

      return (
        <div className='leg-detail-component'>
          <HeadTitle data={this.props}></HeadTitle>
          <DetailInfo data={this.props}></DetailInfo>
          {/* 关联客户 */}
          <SwipeAction
            className='swiper-item'
            autoClose
            key={1}
            right={[
              {
                text: '取消关联',
                onPress: () => {
                  this.relateScheduleHandler('')
                },
                style: {
                  width:'2.5067rem',
                  height:'3.548rem',
                  background:'rgba(244,51,60,1)',
                  color: '#FFF',
                  fontSize: '0.4267rem',
                },
              },
            ]}
          >
            {
              uglyData[0].relationCustomers && uglyData[0].relationCustomers.length !== 0 ?
              (<div className='relation-customer'>
                <div className='title'>
                  <i className="cus-img icon iconfont icon-guanliankehu"></i>
                  <span className='title-info'>关联客户</span>
                </div>
                <div className='main'>
                  <i className='com-img icon iconfont icon-company'></i>
                  <div className='main-info'>
                    <div className='info-title'>江西联盛集团有限公司<span>C079211109</span></div>
                    <div className='tag'>
                      <span className='tag-first'>
                        行内
                      </span>
                      <span className='tag-sec'>
                        存续
                      </span>
                      <span className='tag-thi'>
                        建筑业
                      </span>
                    </div>
                  </div>
                </div>
              </div>):('')
            }
          </SwipeAction>
          {/* 关联商机 */}
          <SwipeAction
            className='swiper-item'
            autoClose
            key={2}
            right={[
              {
                text: '取消关联',
                onPress: () => {
                  // this.relateScheduleHandler(item) TODO: 缺少商机取消关联日程的接口
                },
                style: {
                  width:'2.5067rem',
                  height:'3.348rem',
                  background:'rgba(244,51,60,1)',
                  color: '#FFF',
                  fontSize: '0.4267rem',
                },
              },
            ]}
          >
            {
              uglyData[0].relationBusiness && uglyData[0].relationBusiness.length !== 0 ? (
                <div className='relation-opportunity'>
                  <div className='title'>
                    <i className="cus-img icon iconfont icon-guanlianshangji"></i>
                    <span className='title-info'>关联商机</span>
                  </div>
                  <div className='main'>
                    <div className='main-info'>
                      <div className='info-title'>{uglyData[0].relationBusiness[0].name}</div>
                      <div className='tag'>
                        <span className='tag-first'>
                          {uglyData[0].relationBusiness[0].customerType}
                        </span>
                        <span className='tag-sec'>
                          {uglyData[0].relationBusiness[0].businessStatus}
                        </span>
                        <span className='tag-thi'>
                          建筑业
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : ('')
            }
          </SwipeAction>
          {/* 关联日程 */}
          <SwipeAction
            className='swiper-item'
            autoClose
            key={3}
            right={[
              {
                text: '取消关联',
                onPress: () => {

                },
                style: {
                  width:'2.5067rem',
                  height:'5.348rem',
                  background:'rgba(244,51,60,1)',
                  color: '#FFF',
                  fontSize: '0.4267rem',
                },
              },
            ]}
          >
            {
              uglyData[0].relationSchedulers && uglyData[0].relationSchedulers.length !== 0 ? (
                <div className='relation-scheduler'>
                  <div className='title'>
                    <i className="cus-img icon iconfont icon-related-schedule"></i>
                    <span className='title-info'>关联日程</span>
                  </div>
                  <div className='main'>
                    <div className='main-title'><span>{uglyData[0].relationSchedulers[0].topic}</span></div>
                    <div className='main-content'>
                      <div className='content-detail'>
                        <div className='detail-customer'>{uglyData[0].relationSchedulers[0].companyVo || '--'}</div>
                        <div className='detail-time'><span className='detail-year'>{uglyData[0].relationSchedulers[0].startDt}</span><span>{uglyData[0].relationSchedulers[0].endDt}</span></div>
                      </div>
                      <div className='content-info'>
                        <div className='info-customer'>客户名称</div>
                        <div className='info-time'>日程时间</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : ('')
            }

          </SwipeAction>
          <div className='bottom' onClick={this.cancelHandler}>删除外勤</div>
        </div>
      )
    }
}
