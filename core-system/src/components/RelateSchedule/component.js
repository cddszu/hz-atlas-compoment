import React from 'react'
import './component.scss'
import PaginationList from 'components/PaginationList'
import { SwipeAction } from 'antd-mobile'
import SearchPage from 'components/SearchPage'

class RelateSchedule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      keyword: ''
    }
    this.toggleSearchPageHandler = this.toggleSearchPageHandler.bind(this)
    this.getKeyWordHandler = this.getKeyWordHandler.bind(this)
    this.getScheduleIdHandler = this.getScheduleIdHandler.bind(this)
  }
  toggleSearchPageHandler(event) {
    this.setState((prevState) => ({
      isShow: !prevState.isShow
    }))
  }
  getKeyWordHandler(value) {
    this.setState({
      keyword: value
    })
  }
  getScheduleIdHandler(id, title) {
    this.props.getRelateScheduleId(id, title)
    this.props.goBack()
  }
  componentDidMount() {
    this.props.getAllSchedule()
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.keyword !== this.state.keyword) {
      let bodyData = {
        condition: this.state.keyword,
      }
      this.props.getSearchScheduleList(bodyData)
    }
  }
  render () {
    const {allSchedule , searchScheduleList} = this.props
    return (
      <div className={`relate-schedule-component ${this.props.isShow ? 'show' : 'hide'}`}>
        <div className='select-schedule'>
          <div className='select-schedule-head'>
            <i className='select-cancel iconfont icon-return' onClick={this.props.goBack}></i>
            <span className='select-title'>选择日程</span>
            <span className='select-confirm'></span>
          </div>
          <div className='select-schedule-container'>
            <div className='search-board'>
              <div className="attach">
                <i className='search-icon iconfont icon-sousuo'></i>
              </div>
              <input className='search-input' placeholder='搜索' onClick={this.toggleSearchPageHandler} readOnly="readOnly"/>
            </div>
              {
                Object.keys(allSchedule).map((itemKey) => (
                  <div className='select-items' key={itemKey}>
                    {
                      Object.prototype.toString.call(allSchedule[itemKey]) === '[object Array]' ? <div className='time-board'>{itemKey}</div> : ''
                    }
                    {
                      Object.prototype.toString.call(allSchedule[itemKey]) === '[object Array]' ? allSchedule[itemKey].map(item=>(
                        <div className='select-item' key={item.id} id={item.id} onClick={this.getScheduleIdHandler.bind(this, item.id, item.topic)}>
                          <div className='item-icon'>
                            <i className='item-icon-normal iconfont icon-check_normal'></i>
                            <i className='item-icon-active iconfont icon-danxuan-xuanzhong'></i>
                          </div>
                          <div className='item-right'>
                            <div className='item-content'>
                              <div className='item-top'>
                                <span className='item-name'>{item.topic}</span>
                                <span className='item-time'>{item.startDt.substr(11, 5) + '-' + item.endDt.substr(11, 5)}</span>
                              </div>
                              <div className={`item-bottom ${(item.companyVo && item.companyVo.companyName) ? 'show' : 'hide'}`}>
                                <span className='item-tag'>{item.companyVo ? item.companyVo.companyName : ''}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )) : ''
                    }
                  </div>
                ))
              }

              <SearchPage
                searchCancelHandler={this.toggleSearchPageHandler}
                getKeyWordHandler={this.getKeyWordHandler}
                isShow={this.state.isShow}
                inputText={'请输入日程名称或关键字'}
                noResultText={'没有搜索到相关结果'}
              >
                {
                  Object.keys(searchScheduleList).map((itemKey) => (
                    <div className='select-items' key={itemKey}>
                      {
                        Object.prototype.toString.call(searchScheduleList[itemKey]) === '[object Array]' ? <div className='time-board'>{itemKey}</div> : ''
                      }
                      {
                        Object.prototype.toString.call(searchScheduleList[itemKey]) === '[object Array]' ? searchScheduleList[itemKey].map(item=>(
                          <div className='select-item' key={item.id} id={item.id} onClick={this.getScheduleIdHandler.bind(this, item.id, item.topic)}>
                            <div className='item-icon'>
                              <i className='item-icon-normal iconfont icon-check_normal'></i>
                              <i className='item-icon-active iconfont icon-danxuan-xuanzhong'></i>
                            </div>
                            <div className='item-right'>
                              <div className='item-content'>
                                <div className='item-top'>
                                  <span className='item-name'>{item.topic}</span>
                                  <span className='item-time'>{item.startDt.substr(11, 5) + '-' + item.endDt.substr(11, 5)}</span>
                                </div>
                                <div className={`item-bottom ${(item.companyVo && item.companyVo.companyName) ? 'show' : 'hide'}`}>
                                  <span className='item-tag'>{item.companyVo ? item.companyVo.companyName : ''}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )) : ''
                      }
                    </div>
                  ))
                }
              </SearchPage>
          </div>
        </div>
      </div>
    )
  }
}

export default RelateSchedule
