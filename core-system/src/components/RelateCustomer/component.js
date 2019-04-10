import React from 'react'
import './component.scss'
import PaginationList from 'components/PaginationList'
import { SwipeAction } from 'antd-mobile'
import SearchPage from 'components/SearchPage'

class RelateCustomer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      keyword: ''
    }
    this.toggleSearchPageHandler = this.toggleSearchPageHandler.bind(this)
    this.getKeyWordHandler = this.getKeyWordHandler.bind(this)
    this.getCustomerIdHandler = this.getCustomerIdHandler.bind(this)
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
  getCustomerIdHandler(id, title) {
    this.props.getRelateCustomerId(id, title)
    this.props.goBack()
  }
  componentDidMount() {
    this.props.getCustomerSearchResult()
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.keyword !== this.state.keyword) {
      this.props.getCustomerSearchResult(this.state.keyword)
    }
  }
  render () {
    const {customerSearchResult} = this.props
    return (
      <div className={`relate-customer-component ${this.props.isShow ? 'show' : 'hide'}`}>
        <div className='select-customer'>
          <div className='select-customer-head'>
            <i className='select-cancel iconfont icon-return' onClick={this.props.goBack}></i>
            <span className='select-title'>选择客户</span>
            <span className='select-confirm'></span>
          </div>
          <div className='select-customer-container'>
            <div className='search-board'>
              <div className="attach">
                <i className='search-icon iconfont icon-sousuo'></i>
              </div>
              <input className='search-input' placeholder='搜索' onClick={this.toggleSearchPageHandler} readOnly="readOnly"/>
            </div>
            {
              customerSearchResult.uglyData.map(item=>(
              // [{},{},{},{},{}].map(item=>(
                <div className='select-item' key={item.id} id={item.id} onClick={this.getCustomerIdHandler.bind(this, item.id, item.companyName)}>
                  <div className='item-icon'>
                    <i className='item-icon-normal iconfont icon-check_normal'></i>
                    <i className='item-icon-active iconfont icon-danxuan-xuanzhong'></i>
                  </div>
                  <div className='item-right'>
                    <div className='item-content'>
                      <div className='item-logo'>
                        <i className='company-logo iconfont icon-company'></i>
                      </div>
                      <div className='item-msg'>
                        <div className='first-line'>
                          <span className='company-name'>{item.companyName}</span>
                          <span className='company-id'>{item.companyNo}</span>
                        </div>
                        <div className='second-line'>
                          <span className='tag customerType'>{item.isInside ? '行内' : '行外'}</span>
                          <span className='tag customerState'>{item.operatingState}</span>
                          <span className='tag industry'>{item.subordinateIndustry}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
            <SearchPage
              searchCancelHandler={this.toggleSearchPageHandler}
              getKeyWordHandler={this.getKeyWordHandler}
              isShow={this.state.isShow}
              inputText={'请输入客户名称或关键字'}
              noResultText={'没有搜索到相关结果'}
            >
              {
                customerSearchResult.uglyData.map(item=>(
                // [{},{},{},{},{}].map(item=>(
                  <div className='select-item' key={item.id} id={item.id} onClick={this.getCustomerIdHandler.bind(this, item.id, item.topic)}>
                    <div className='item-icon'>
                      <i className='item-icon-normal iconfont icon-check_normal'></i>
                      <i className='item-icon-active iconfont icon-danxuan-xuanzhong'></i>
                    </div>
                    <div className='item-right'>
                      <div className='item-content'>
                        <div className='item-logo'>
                          <i className='company-logo iconfont icon-company'></i>
                        </div>
                        <div className='item-msg'>
                          <div className='first-line'>
                            <span className='company-name'>{item.companyName}</span>
                            <span className='company-id'>{item.companyNo}</span>
                          </div>
                          <div className='second-line'>
                            <span className='tag customerType'>{item.isInside ? '行内' : '行外'}</span>
                            <span className='tag customerState'>{item.operatingState}</span>
                            <span className='tag industry'>{item.subordinateIndustry}</span>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default RelateCustomer
