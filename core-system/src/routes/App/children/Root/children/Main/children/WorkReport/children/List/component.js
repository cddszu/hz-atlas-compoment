import React from 'react'
import './component.scss'
import { Link } from 'react-router-dom'
import { FadePage } from 'components/lib'
import { SwipeAction, Modal } from 'antd-mobile'
import PaginationList from 'components/PaginationList'
import creatHistory from 'history/createBrowserHistory'
import { formatMsgDate } from 'utils/timeFormat'


const history = creatHistory();
const reportType = [
  {
    key: '全部汇报',
    value: '全部汇报'
  },{
    key: '我发出的',
    value: '我发出的'
  },{
    key: '我接收的',
    value: '我接收的'
  },
]

const alert = Modal.alert
const PAGE_SIZE = 10

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      keyWord: '',
      isShowSearchPage: false,
      isShowFadePage: false,
      reportType: '全部汇报',
      listReport: {
        content: [],
      }
    }
    this.reportOption = {
      pageNo: 1,
      pageSize: PAGE_SIZE,
      searchType: 1
    }
    this.roleType = localStorage.getItem('currentRole')
    this.today = formatMsgDate('today')
    this.getReportType = this.getReportType.bind(this)
    this.toggleFadePageHandler = this.toggleFadePageHandler.bind(this)
    this.jumpReportCreate = this.jumpReportCreate.bind(this)
    this.getMoreData = this.getMoreData.bind(this)
    this.getReportList = this.getReportList.bind(this)
  }

  jumpReportCreate() {
    window.location.href='/#/root/main/workReport/create'
  }
  getMoreData() {
    this.reportOption.pageNo += 1
    this.getReportList()
  }
  toggleFadePageHandler() {
    this.setState((prevState)=>({
      isShowFadePage: !prevState.isShowFadePage
    }))
  }
  getReportType(value) {
    this.setState({
      reportType: value,
    })
    this.toggleFadePageHandler()
  }
  getReportList() {
    if(this.state.reportType === '全部汇报') {
      this.reportOption.searchType = 1
      this.props.getListReport(this.reportOption)
    } else if(this.state.reportType === '我发出的') {
      this.reportOption.searchType = 2
      this.props.getListReport(this.reportOption)
    } else {
      this.reportOption.searchType = 3
      this.props.getListReport(this.reportOption)
    }
  }
  componentWillMount() {
    if(this.roleType === 'customer') {
      this.setState({
        reportType: '我发出的'
      })
    }
    this.getReportList()
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.reportType !== this.state.reportType) {
      this.reportOption.pageNo = 1
      this.getReportList()
    }
  }
  componentWillReceiveProps({listReport}) {
    if(listReport !== this.props.listReport) {
      if(this.reportOption.pageNo !== 1) {
        listReport.content = this.props.listReport.content.concat(listReport.content)
      }
      this.setState({
        listReport: listReport
      })
    }
  }
  render () {
    const {match} = this.props
    let { listReport } = this.state
    let list = (
      <ul>
      {
        listReport.content.map((item,index) => (
          <Link to={`${match.url}/detail?id=` + item.reportId} key={item.reportId}>
            <li className='card-item'>
              <div className='card-left'>
                <i className='leg-img'></i>
              </div>
              <div className='card-right'>
                <div className='info'>
                  <span className='info-name'>{item.reportUserName}</span><span className='info-operation'>提交了汇报</span><span className={`red-dot ${item.hasRead == null || item.hasRead ? 'hide' : 'show'}`}></span>
                  <span className='info-time'>{formatMsgDate(item.createDate)}</span>
                </div>
                <div className='main'>
                  <span className='reportType'>{item.reportTypeName}</span>
                  <span className='content'>{item.reportTypeName === '日报' ? item.reportDateStart :item.reportDate}</span>
                </div>
                <div className='address'>
                  <span className='address-info'>{item.reportContent || '--'}</span>
                </div>
              </div>
            </li>
          </Link>
        ))
      }
      </ul>
    )
    return (
      <div className='report-list-component'>
        <div className='report-header'>
          <i className='select-cancel iconfont icon-return' onClick={()=>{history.goBack()}}></i>
          {
            this.roleType === 'customer' ? (
              <div className='center-container'>
                <span className='head-title'>我发出的</span>
              </div>
            ) : (
              <div className='center-container' onClick={this.toggleFadePageHandler}>
                <span className='head-title'>{this.state.reportType}</span>
                <i className={`switch-icon ${this.state.isShowFadePage ? 'up' : 'down'} iconfont icon-gengduo`}></i>
              </div>
            )
          }
          <i></i>
        </div>
        <div className='report-container'>
          <div className='list-items'>
            <PaginationList
              list={list}
              totalCount={listReport.totalAmount}
              // totalCount={1000}
              onPullUp={this.getMoreData}
            />
            <div className='icon-add-chance' onClick={this.jumpReportCreate}></div>
          </div>
        </div>
        <FadePage
          isShow={this.state.isShowFadePage}
          toggleFadePage={this.toggleFadePageHandler}
          position='top'
        >
          <div className='select-list-page'>
            {
              reportType.map(item=>(
                <div className={`select-item ${item.value === this.state.reportType ? 'selected' : ''}`} key={item.key} onClick={this.getReportType.bind(this,item.value)}>
                  <span>{item.value}</span>
                  <i className={`item-icon iconfont icon-select`}></i>
                </div>
              ))
            }
          </div>
        </FadePage>
      </div>
    )
  }
}
export default List
