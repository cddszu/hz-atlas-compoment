import React from 'react'
import './component.scss'
import PaginationList from 'components/PaginationList'
import { SwipeAction } from 'antd-mobile'
import SearchPage from 'components/SearchPage'

class RelateBusiness extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      keyword: ''
    }
    this.roleType = localStorage.getItem('currentRole')

    this.toggleSearchPageHandler = this.toggleSearchPageHandler.bind(this)
    this.getKeyWordHandler = this.getKeyWordHandler.bind(this)
    this.getBusinessIdHandler = this.getBusinessIdHandler.bind(this)
    this.getBusinessListHandler = this.getBusinessListHandler.bind(this)
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
  getBusinessIdHandler(id, title) {
    this.props.getRelateBusinessId(id, title)
    this.props.goBack()
  }
  getBusinessListHandler() {
    if (this.roleType === 'customer') {
      this.props.searchMyBusinessByName(this.state.keyword)
    } else {
      this.props.searchOrgBusinessByName(this.state.keyword)
    }
  }
  componentDidMount() {
    this.getBusinessListHandler()
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.keyword !== this.state.keyword) {
      this.getBusinessListHandler()
    }
  }
  render () {
    const { myBusinessByName, orgBusinessByName } = this.props
    let businessList = {}
    if (this.roleType === 'customer') {
      businessList = myBusinessByName
    } else {
      businessList = orgBusinessByName
    }
    return (
      <div className={`relate-business-component ${this.props.isShow ? 'show' : 'hide'}`}>
        <div className='select-business'>
          <div className='select-business-head'>
            <i className='select-cancel iconfont icon-return' onClick={this.props.goBack}></i>
            <span className='select-title'>选择商机</span>
            <span className='select-confirm'></span>
          </div>
          <div className='select-business-container'>
            <div className='search-board'>
              <div className="attach">
                <i className='search-icon iconfont icon-sousuo'></i>
              </div>
              <input className='search-input' placeholder='搜索' onClick={this.toggleSearchPageHandler} readOnly="readOnly"/>
            </div>
            {
              businessList.uglyData.map(item=>(
                <div className='select-item' key={item.id} id={item.id} onClick={this.getBusinessIdHandler.bind(this, item.id, item.name)}>
                  <div className='item-icon'>
                    <i className='item-icon-normal iconfont icon-check_normal'></i>
                    <i className='item-icon-active iconfont icon-danxuan-xuanzhong'></i>
                  </div>
                  <div className='item-right'>
                    <div className='item-content'>
                      <div className='title'>{item.name}</div>
                      <div className='second-row'>
                        <span>{item.businessChanceType}</span>
                        <span className='gap'>|</span>
                        <span>{item.businessStatus}</span>
                        <span className='gap'>|</span>
                        <span>{item.validDt}</span>
                      </div>
                      <div className='third-row'>
                        <span className='customerType '>{item.customerType}</span>
                        <span className='customerName'>{item.customerName}</span>
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
              inputText={'请输入商机名称或关键字'}
              noResultText={'没有搜索到相关结果'}
            >
              {
                businessList.uglyData.map(item=>(
                  <div className='select-item' key={item.id} id={item.id} onClick={this.getBusinessIdHandler.bind(this, item.id, item.name)}>
                    <div className='item-icon'>
                      <i className='item-icon-normal iconfont icon-check_normal'></i>
                      <i className='item-icon-active iconfont icon-danxuan-xuanzhong'></i>
                    </div>
                    <div className='item-right'>
                      <div className='item-content'>
                        <div className='title'>{item.name}</div>
                        <div className='second-row'>
                          <span>{item.businessChanceType}</span>
                          <span className='gap'>|</span>
                          <span>{item.businessStatus}</span>
                          <span className='gap'>|</span>
                          <span>{item.validDt}</span>
                        </div>
                        <div className='third-row'>
                          <span className='customerType '>{item.customerType}</span>
                          <span className='customerName'>{item.customerName}</span>
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

export default RelateBusiness
