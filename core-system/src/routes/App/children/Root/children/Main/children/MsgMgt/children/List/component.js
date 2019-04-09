import React from 'react'
import './component.scss'
import GoBack from 'components/hz/GoBack'
import SearchPage from 'components/SearchPage'

const tabsTitle = [
  {
    key: '1',
    value: '行外动态'
  },
  {
    key: '2',
    value: '行内动态'
  },
  {
    key: '3',
    value: '商机提醒'
  },
  {
    key: '4',
    value: '公告提醒'
  },
  {
    key: '5',
    value: '日程提醒'
  }
]

class MsgList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: '1',
      isShowSearch: false
    }
    this.showSearchHandler = this.showSearchHandler.bind(this)
    this.searchCancelHandler = this.searchCancelHandler.bind(this)
    this.showMsgDetail = this.showMsgDetail.bind(this)
  }

  tabChangeHandler(key) {
    let filtersObj = {
      customerName: '',
      msgType: key,
      pageNo: 1,
      pageSize: 100,
      pushDt: ''
    }
    this.props.getMsgList(filtersObj)
    this.setState({
      currentTab: key
    })
  }

  showSearchHandler() {
    this.setState({
      isShowSearch: true
    })
  }

  searchCancelHandler() {
    this.setState({
      isShowSearch: false
    })
  }

  showMsgDetail(item) {
    this.props.history.push(`/root/main/msgMgt/detail?id=${item.id}&msgType=${item.msgType}`)
  }

  componentDidMount() {
    this.tabChangeHandler('1')
  }

  render() {
    const { msgList } = this.props
    return (
      <div className="msg-list-component">
        <div className="msg-list-head">
          <GoBack><i className="list-cancel iconfont icon-return"></i></GoBack>
          <span className="list-title">消息提醒</span>
          <span className="list-confirm"></span>
        </div>
        <div className="msg-list-tabs">
          <div className="msg-list-tabs-scroll">
          {
            tabsTitle.map((item, index) => {
              return (
                <div className={`option ${item.key === this.state.currentTab ? 'selected': ''}`}
                  key={item.key}
                  onClick={this.tabChangeHandler.bind(this, item.key)}
                >
                  {item.value}
                </div>
              )
            })
          }
          </div>
          <div className="rect"></div>
        </div>
        <div className='search-board' onClick={this.showSearchHandler}>
          <i className='search-icon iconfont icon-sousuo'></i>
          <input className='search-input' placeholder='搜索' onClick={this.showSearchPageHandler} readOnly="readOnly"/>
        </div>
        <div className="msg-list-container">
        {
          msgList.content.map((item) => {
            return (
              <div className="list-item" key={item.id} onClick={this.showMsgDetail.bind(this, item)}>
                <div className="first-row">
                  <span className="title">{item.msgTitle}</span>
                  <span className="time">{item.pushDate}</span>
                </div>
                <div className="second-row">{item.content}</div>
                <div className="third-row">
                  <span className="from">来源：</span>
                  <span className="addr">{item.companyName}</span>
                </div>
              </div>
            )
          })
        }
        </div>
        {/* 搜索页面 */}
        <SearchPage
          searchCancelHandler={this.searchCancelHandler}
          getKeyWordHandler={this.getKeyWordHandler}
          isShow={this.state.isShowSearch}
          inputText={'请输入标题或负责人搜索'}
          noResultText={'未搜索到相关结果'}
          historyParam={this.historyParam}
        >
          {}  {/*自定义搜索结果列表 */}
        </SearchPage>

          {/* <div className="list-item">
            <div className="first-row">
              <span className="title">资产类产品到期提醒</span>
              <span className="time">09:30</span>
            </div>
            <div className="second-row">根据与XXXXXX客户在2015年10月12日签订的商务合同，资产...</div>
            <div className="third-row">
              <span className="from">来源：</span>
              <span className="addr">大数据分析中心</span>
            </div>
          </div>
          <div className="list-item">
            <div className="first-row">
              <span className="title">资产类产品到期提醒</span>
              <span className="time">09:30</span>
            </div>
            <div className="second-row">根据与XXXXXX客户在2015年10月12日签订的商务合同，资产...</div>
            <div className="third-row">
              <span className="from">来源：</span>
              <span className="addr">大数据分析中心</span>
            </div>
          </div> */}
      </div>
    )
  }
}

export default MsgList
