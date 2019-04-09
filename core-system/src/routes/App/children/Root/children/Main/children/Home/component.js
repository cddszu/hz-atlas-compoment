import React from 'react'
import './component.scss'
import Header from 'components/Header'
import SearchPage from 'components/SearchPage'
import { Link } from 'react-router-dom'
import Navbar from 'components/Navbar'
import { formatMsgDate } from 'utils/timeFormat'
import BankLogo from './images/bank@2x.png'
import { formatMoney } from 'utils/moneyFormat'
import InnerPage from 'components/hz/InnerPage'
import ScheduleRemind from './children/ScheduleRemind'
import BussinessRemind from './children/BussinessRemind'
import NoticeRemind from './children/NoticeRemind'
import LegworkRemind from './children/LegworkRemind'
import ReportRemind from './children/ReportRemind'
import InnerDynamic from './children/InnerDynamic'
import OuterDynamic from './children/OuterDynamic'

// import Home from './children/Home/index'
// 行内动态 1，行外动态2，商机3，公告4，日程5，汇报6，外勤7
const msgConifig = {
  1: {
    title: '行内动态',
    key: 'inner'
  },
  2: {
    title: '行外动态',
    key: 'outer'
  },
  3: {
    title: '商机通知',
    key: 'chance'
  },
  4: {
    title: '公告通知',
    key: 'affiche'
  },
  5: {
    title: '日程提醒',
    key: 'schedule'
  },
  6: {
    title: '汇报通知',
    key: 'report'
  },
  7: {
    title: '外勤通知',
    key: 'legwork'
  },
}
const baseAppConfig = [
  [
    {
      title: '外勤',
      key: 'legwork',
      url: '/root/main/legwork'
    }, {
      title: '汇报',
      key: 'report',
      url: '/root/main/workReport'
    }, {
      title: '公告',
      key: 'affiche',
      url: '/root/main/afficheMgt'
    }
  ], [
    {
      title: '日程',
      key: 'schedule',
      url: '/root/main/scheduleMgt/'
    }, {
      title: '商机',
      key: 'chance',
      url: '/root/main/chanceMgt/'
    }, {
      title: '消息',
      key: 'notice',
      url: '/root/main/msgMgt'
    }
  ]
]

let today = formatMsgDate('today')

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      keyWord: '',
      msgNum: ''
    }
    this.historyParam = {
      url: '/crm-jj/api/homepage/querySearchHistory',
      method: 'get',
      param: {}
    }
    this.searchCancelHandler = this.searchCancelHandler.bind(this)
    this.showSearchPageHandler = this.showSearchPageHandler.bind(this)
    this.getKeyWordHandler = this.getKeyWordHandler.bind(this)
    this.showMsgPageHandler = this.showMsgPageHandler.bind(this)
    this.showMsgListHandler = this.showMsgListHandler.bind(this)
  }
  searchCancelHandler() {
    this.setState({
      isShow: false
    })
  }
  showSearchPageHandler() {
    this.setState({
      isShow: true
    })
  }
  getKeyWordHandler(value) {
    this.setState({
      keyword: value
    })
  }
  jumpCustomerDetail(item) {
    window.location.href='/#/root/main/customer/detail?id='+item.id+'&key='+item.objectKey
  }
  showMsgPageHandler(type, num) {
    let filtersObj = {
      customerName: '',
      msgType: type,
      pageNo: 1,
      pageSize: 999,
      pushDt: '',
      readStatus: 1
    }
    this.props.getMsgList(filtersObj)
    this.setState({
      msgNum: num
    })
    switch(type) {
      case '1':
        this.innerDynamicPage.show();
        break;
      case '2':
        this.outerDynamicPage.show();
        break;
      case '3':
        this.bussinessRemindPage.show();
        break;
      case '4':
        this.noticeRemindPage.show();
        break;
      case '5':
        this.scheduleRemindPage.show();
        break;
      case '6':
        this.reportRemindPage.show();
        break;
      case '7':
        this.legworkRemindPage.show();
        break;
      default:
    }
  }
  showMsgListHandler() {
    this.props.history.push('/root/main/msgMgt/list')
  }
  componentWillMount() {
    this.props.getMsgNums()
    this.props.getTodayScheduler()
  }
  componentWillReceiveProps({ msgNums, todayScheduler}) {
    if (msgNums !== this.props.msgNums) {

    }
    if (todayScheduler !== this.props.todayScheduler) {
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.keyword !== this.state.keyword) {
      this.props.getCustomerSearchResult(this.state.keyword)
    }
  }
  render () {
    const { msgNums, msgList } =  this.props
    const { todayScheduler, customerSearchResult } = this.props
    const { msgNum } = this.state
    return (
      <div className='home-component'>
        <InnerPage from='right' title={`行内动态（${msgNum}）`} ref={innerDynamicPage => this.innerDynamicPage = innerDynamicPage }>
          <InnerDynamic msgList={msgList}/>
        </InnerPage>
        <InnerPage from='right' title={`行外动态（${msgNum}）`} ref={outerDynamicPage => this.outerDynamicPage = outerDynamicPage }>
          <OuterDynamic msgList={msgList}/>
        </InnerPage>
        <InnerPage from='right' title={`日程提醒（${msgNum}）`} ref={scheduleRemindPage => this.scheduleRemindPage = scheduleRemindPage }>
          <ScheduleRemind msgList={msgList}/>
        </InnerPage>
        <InnerPage from='right' title={`商机提醒（${msgNum}）`} ref={bussinessRemindPage => this.bussinessRemindPage = bussinessRemindPage }>
          <BussinessRemind msgList={msgList}/>
        </InnerPage>
        <InnerPage from='right' title={`公告通知（${msgNum}）`} ref={noticeRemindPage => this.noticeRemindPage = noticeRemindPage }>
          <NoticeRemind msgList={msgList}/>
        </InnerPage>
        <InnerPage from='right' title={`外勤通知（${msgNum}）`} ref={legworkRemindPage => this.legworkRemindPage = legworkRemindPage }>
          <LegworkRemind msgList={msgList}/>
        </InnerPage>
        <InnerPage from='right' title={`汇报通知（${msgNum}）`} ref={reportRemindPage => this.reportRemindPage = reportRemindPage }>
          <ReportRemind msgList={msgList}/>
        </InnerPage>
        <Header />
        <div className='space-board'></div>
        <div className='search-board'>
          <i className='search-icon iconfont icon-sousuo'></i>
          <input className='search-input' placeholder='全网搜一搜' onClick={this.showSearchPageHandler} readOnly="readOnly"/>
        </div>
        <div className='msg-board'>
          <div className='msg-header' onClick={this.showMsgListHandler}>
            <span>
              <span className='title'>消息</span>
            </span>
            <i className='iconfont icon-gengduo'></i>
          </div>
          {
            msgNums.content.map((item, index) => (
              <div className={`msg-nav-item icon-${msgConifig[item.messageType].key}`} key={index} onClick={this.showMsgPageHandler.bind(this, item.messageType, item.num)}>
                <div className='first-row'>
                  <div className='msg-type'>{msgConifig[item.messageType].title}</div>
                  <div className='msg-num'>{item.num}</div>
                  <div className='msg-time'>{formatMsgDate(item.createDate)}</div>
                </div>
                <div className='first-msg'>{item.msgTitle}</div>
              </div>
            ))
          }
        </div>
        <div className='board today-schedule-board'>
          <Link className='schedule-header' to='/root/main/scheduleMgt/home'>
            <span>
              <span className='title'>今日日程</span>
              <span className='count'>{todayScheduler[today] ? todayScheduler[today].length : '0'}</span>
            </span>
            <i className='iconfont icon-gengduo'></i>
          </Link>
          {
            todayScheduler[today] ? todayScheduler[today].map((item, index)=> (
              index < 2 ? (
                <Link className={`schedule-items ${item.endDt < today ? 'grey' : ''}`} key={index} to={'/root/main/scheduleMgt/detail?scheduleId=' + item.id}>
                  <div className='schedule-item'>
                    <div className='first-row'>
                      <span className='schedule-title'>{item.topic}</span>
                      <span className='time-range'>{item.startDt.substr(11, 5) + '-' + item.endDt.substr(11, 5)}</span>
                    </div>
                    <div className='schedule-desc'>
                      {item.companyVo ? (item.companyVo.companyName || '--') : '--'}
                    </div>
                  </div>
                </Link>
              ) : ''
            )) : ''
          }
        </div>
        <div className='board base-app-board'>
          <div className='title'>
            <div className='content'>基础应用</div>
          </div>
          <div className='app-items'>
            {
              baseAppConfig.map( (rowItem, index) => (
                <div className='row' key={index}>
                    {
                      rowItem.map(appItem => (
                        <Link className='app-item' key={appItem.key} to={appItem.url}>
                          <i className={`icon icon-${appItem.key}`}/>
                          <span  className='item-title'>
                            {
                              appItem.title
                            }
                          </span>
                        </Link>
                      ))
                    }
                </div>
              ))
            }
          </div>
        </div>
        <img className='bank-logo' src={BankLogo}/>
        <SearchPage
          searchCancelHandler={this.searchCancelHandler}
          getKeyWordHandler={this.getKeyWordHandler}
          isShow={this.state.isShow}
          inputText={'请输入客户名称'}
          noResultText={'未搜索到相关结果'}
          historyParam={this.historyParam}
        >
          {
            customerSearchResult.uglyData.map(item=>(
            // [{},{},{},{},{}].map(item=>(
              <div className={'list-item'} key={item.id} onClick={this.jumpCustomerDetail.bind(this, item)}>
                <div className={'first-line'}>
                  <div className={'left-icon'}>
                    <i className='company-logo iconfont icon-company'></i>
                  </div>
                  <div className='right-title'>
                    <div className='customer-name'>
                      <span className={'customer-title'}>{item.companyName || '--'}</span>
                      <span className={'customer-id'}>{item.companyNo || ''}</span>
                    </div>
                    <div className='customer-tags'>
                      <span className='business-status'>{item.operatingState}</span>
                      <span className='industry'>{item.subordinateIndustry}</span>
                    </div>
                  </div>
                </div>
                <div className={'second-line'}>
                  <div className={'customer-msg'}>
                    <div className={'msg-content'}>{item.legalPerson || '--'}</div>
                    <div className={'msg-title'}>法人代表</div>
                  </div>
                  <div className={'customer-msg'}>
                    <div className={'msg-content'}>{formatMoney(item.registeredCapital) || '--'}</div>
                    <div className={'msg-title'}>注册资金</div>
                  </div>
                  <div className={'customer-msg'}>
                    <div className={'msg-content'}>{item.registrationDate || '--'}</div>
                    <div className={'msg-title'}>注册日期</div>
                  </div>
                </div>
              </div>
            ))
          }
        </SearchPage>
        <Navbar/>
      </div>
    )
  }
}
export default Home
