import React, { Component } from 'react'
import './component.scss'
import { Link } from 'react-router-dom'
// import AuthRouter from 'components/AuthRouter'
import PaginationList from 'components/PaginationList'
import SearchPage from 'components/SearchPage'
import { Tabs } from 'components/lib'
import creatHistory from 'history/createBrowserHistory'
import { GoBack } from 'components/lib'
import { formatMsgDate } from 'utils/timeFormat'

const history = creatHistory();
function formatDate(date) {
  /* eslint no-confusing-arrow: 0 */
  let dateStr = ''
  const pad = n => n < 10 ? `0${n}` : n;
  try {
    dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  } catch (error) {
    dateStr = ''
  }
  return dateStr;
}
const filterText = {
  left: '公告',
  right: '筛选'
}
export default class AfficheList extends Component {
  constructor(props) {
    super(props);
    this.param = {
      pageNo: 1,
      pageSize: 10,
      type: "my",
      title: '',
      pubdate: '',
      endDate: ''
    }
    this.state = {
      //外勤模块列表数据
      afficheList: [],
      //搜索页面打开标识
      isShowSearch: false,
      searchFilter: {
        showChoose: filterText,
        showDate: false
      }

    };
    this.goBackHandler = this.goBackHandler.bind(this)
    this.getKeyWordHandler = this.getKeyWordHandler.bind(this)
    this.initFilter = this.initFilter.bind(this)
    this.confirmHandler = this.confirmHandler.bind(this)
    this.getMoreData = this.getMoreData.bind(this)
  }
  // 筛选
  initFilter() {
    this.setState({
      searchFilter: {
        showChoose: null,
        showDate: true
      }
    })
  }
  // 时间选择确定
  confirmHandler(b, e,t) {
    this.setState({
      searchFilter: {
        showChoose: filterText,
        showDate: false,
      }
    })
    this.param.pubdate = formatDate(b)
    this.param.endDate = formatDate(e)
    this.param.title = t || ''
    this.props.getAfficheList(this.param);
  }
  // 搜索页面打开
  showSearchHandler = () => {
    this.setState({
      isShowSearch: true,
      searchFilter: {
        showChoose: filterText,
        showDate: false
      }
    })
  }

  // 搜索页面关闭
  searchCancelHandler = () => {
    this.setState({
      isShowSearch: false
    })
  }

  getMoreData() {
    this.param.pageNo += 1
    this.props.getAfficheList(this.param);
  }

  getKeyWordHandler(value) {
    this.setState({
      searchFilter: {
        showChoose: filterText,
        showDate: false
      }
    })
    this.param.title = value || ''
    this.props.getAfficheList(this.param);
  }


  componentWillMount() {
    this.tabs = [
      { title: '公告中心', id: 0 }
    ]
    this.props.getAfficheList(this.param);
  }

  componentWillReceiveProps({ afficheList }) {
    if (afficheList !== this.props.afficheList) {
      if(this.param.pageNo !== 1) {
        afficheList.result = this.props.afficheList.result.concat(afficheList.result)
      }
      this.setState({
        afficheList: afficheList
      })
    }
  }
  goBackHandler() {
    history.goBack()
  }

  render() {
    let {match} = this.props
    let { afficheList } = this.state;
    let resultList = afficheList.result || []
    let list = (
      <ul>
        {
          resultList.map((item, index) => (
            <Link to={`${match.url}/detail?id=` + item.id} key={index}><li className='card-item'>
              <div className='card-left'>
                <i className='leg-img'></i>
              </div>
              <div className='card-right'>
                <div className='info'>
                  <span className='info-name'>{item.pubUserName}</span>
                  <span className='to'>至</span>
                  <span className='to-name'>{item.receiveUserName ? (item.receiveUserName.length > 15 ? item.receiveUserName.substr(0, 15) + '...' : item.receiveUserName) : '--'}</span>
                  <span className={`red-dot ${item.status ? 'show' : 'hide'}`}></span>
                  <span className='info-time'>{formatMsgDate(item.pubdate)}</span>
                </div>
                <div className='main'>
                  <span className='content'>{item.title}</span>
                </div>
                <div className='address'>
                  <p className='address-info'>{item.content}</p>
                </div>
              </div>
            </li></Link>
          ))
        }
      </ul>
    )

    return (
      <div className='affiche-list-component'>
        <div>
          <div className='affiche-list-head'>
            <GoBack><i className='affiche-cancel iconfont icon-return'></i></GoBack>
            <span className='affiche-title'>公告中心</span>
            <i className='affiche-confirm iconfont icon-sousuo' onClick={this.showSearchHandler}></i>
          </div>
          <div className='affiche-list-container'>
            <div style={{ height: `100%` }}>
              <PaginationList
                list={list}
                totalCount={this.state.afficheList.totalElements}
                // totalCount={1000}
                onPullUp={this.getMoreData}
              />
              {/* <div className='icon-add-chance' onClick={this.jumpCreateBusinessPageHandler}></div> */}
            </div>
            {/* 搜索页面 */}
            <SearchPage
              searchCancelHandler={this.searchCancelHandler}
              getKeyWordHandler={this.getKeyWordHandler}
              isShow={this.state.isShowSearch}
              inputText={'请输入公告标题搜索'}
              noResultText={'未搜索到相关结果'}
              filter={this.state.searchFilter}
              clickRight={this.initFilter}
              confirmHandler={this.confirmHandler}
            // beginDateHandler={this.beginDateHandler}
            // historyParam={this.historyParam}
            >
              {list}  {/*自定义搜索结果列表 */}
            </SearchPage>
          </div>
        </div>

      </div>

    )
  }
}
