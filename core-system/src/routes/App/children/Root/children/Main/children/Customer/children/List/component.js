import React from 'react'
import './component.scss'
import Header from 'components/Header'
import SearchPage from 'components/SearchPage'
import { Link } from 'react-router-dom'
import Navbar from 'components/Navbar'
import { FadePage } from 'components/lib'
import { SwipeAction, Modal } from 'antd-mobile'
import { formatMoney } from 'utils/moneyFormat'
import PaginationList from 'components/PaginationList'

const customerType = [
  {
    key: '现有客户',
    value: '现有客户'
  },{
    key: '目标客户',
    value: '目标客户'
  },{
    key: '潜在客户',
    value: '潜在客户'
  },
]
const PAGE_SIZE = 10
const alert = Modal.alert

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      keyWord: '',
      isShowSearchPage: false,
      isShowFadePage: false,
      customerType: '现有客户',
      existCustomerList: {
        companyVos: []
      },
      targetCustomerList: {
        companyVos: []
      },
      potentialCustomerList: {
        companyVos: []
      }
    }
    this.targetOption = {
      pageNo: 1,
      pageSize: PAGE_SIZE,
      orderType: 1
    }
    this.existOption = {
      pageNo: 1,
      pageSize: PAGE_SIZE,
      customerName: '',
      orderType: 1,
    }

    this.roleType = localStorage.getItem('currentRole')
    this.getCustomerType = this.getCustomerType.bind(this)
    this.getKeyWordHandler = this.getKeyWordHandler.bind(this)
    this.toggleFadePageHandler = this.toggleFadePageHandler.bind(this)
    this.toggleSearchPageHandler = this.toggleSearchPageHandler.bind(this)
    this.jumpCustomerDetail = this.jumpCustomerDetail.bind(this)
    this.getMoreData = this.getMoreData.bind(this)
  }

  jumpCustomerDetail(item) {
    window.location.href='/#/root/main/customer/detail?id='+item.id+'&key='+item.objectKey
  }
  // 认领客户
  claimCustomerHandler(id) {
    alert('', '确定认领此潜在客户吗？', [
      { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
      { text: '确定', onPress: () => (this.props.potentCustomerClaim(id)) },
    ]);
  }
  // 退回目标客户
  targetCustomerBackHandler(id) {
    alert('', '确定退回此目标客户吗？', [
      { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
      { text: '确定', onPress: () => (this.props.targetCustomerBack(id)) },
    ]);
  }
  getKeyWordHandler(value) {
    this.setState({
      keyWord: value
    })
  }
  toggleFadePageHandler() {
    this.setState((prevState)=>({
      isShowFadePage: !prevState.isShowFadePage
    }))
  }
  toggleSearchPageHandler() {
    this.setState((prevState)=>({
      isShowSearchPage: !prevState.isShowSearchPage
    }))
  }
  getCustomerType(value) {
    this.setState({
      customerType: value,
    })
    this.toggleFadePageHandler()
  }
  getMoreData() {
    if(this.state.customerType === '目标客户') {
      this.targetOption.pageNo += 1
      this.props.searchTargetCustomer(this.targetOption)
    } else if(this.state.customerType === '潜在客户') {
      this.existOption.pageNo += 1
      this.props.searchPotentCustomer(this.existOption)
    } else {
      this.existOption.pageNo += 1
      this.props.searchExistCustomer(this.existOption)
    }
  }
  componentDidMount() {
    this.props.searchExistCustomer(this.existOption)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.customerType !== this.state.customerType || prevState.keyWord !== this.state.keyWord) {
      if(this.state.customerType === '目标客户') {
        this.props.searchTargetCustomer(this.targetOption)
      } else if(this.state.customerType === '潜在客户') {
        this.existOption.customerName = this.state.keyWord
        this.props.searchPotentCustomer(this.existOption)
      } else {
        this.existOption.customerName = this.state.keyWord
        this.props.searchExistCustomer(this.existOption)
      }
    }
  }
  componentWillReceiveProps({ existCustomerList,targetCustomerList,potentialCustomerList }) {
    if (existCustomerList !== this.props.existCustomerList) {
      if(this.existOption.pageNo !== 1)
      existCustomerList.companyVos = this.props.existCustomerList.companyVos.concat(existCustomerList.companyVos)
      this.setState({
        existCustomerList: existCustomerList
      })
    }
    if (targetCustomerList !== this.props.targetCustomerList) {
      if(this.targetOption.pageNo !== 1)
      targetCustomerList.companyVos = this.props.targetCustomerList.companyVos.concat(targetCustomerList.companyVos)
      this.setState({
        targetCustomerList: targetCustomerList
      })
    }
    if (potentialCustomerList !== this.props.potentialCustomerList) {
      if(this.existOption.pageNo !== 1)
      potentialCustomerList.companyVos = this.props.potentialCustomerList.companyVos.concat(potentialCustomerList.companyVos)
      this.setState({
        potentialCustomerList: potentialCustomerList
      })
    }
  }
  render () {
    let {existCustomerList, targetCustomerList, potentialCustomerList} = this.state
    let customerList = {}
    let total = 0
    if(this.state.customerType === '目标客户') {
      customerList = targetCustomerList.companyVos || []
      total = targetCustomerList.totalAmount
    } else if(this.state.customerType === '潜在客户') {
      customerList = potentialCustomerList.companyVos || []
      total = potentialCustomerList.totalAmount
    } else {
      customerList = existCustomerList.companyVos || []
      total = existCustomerList.totalAmount
    }

    let list = (
      <div className='list-items'>
        {
          this.roleType === 'customer' && this.state.customerType !== '现有客户' ? (
            this.state.customerType === '目标客户' ? (
              customerList.map((item, index) => (
                <SwipeAction
                  className='swiper-item'
                  autoClose
                  key={index}
                  right={[
                    {
                      text: '退回潜在',
                      onPress: () => {
                        this.targetCustomerBackHandler(item.id)
                      },
                      style: {
                        width:'2.5068rem',
                        height:'100%',
                        background:'#BDBDBD',
                        color: '#FFF',
                        fontSize: '0.4267rem',
                      },
                    },
                  ]}
                >
                  <div className={'list-item'} key={index} onClick={this.jumpCustomerDetail.bind(this, item)}>
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
                </SwipeAction>
              ))
            ) : (
              customerList.map((item, index) => (
                <SwipeAction
                  className='swiper-item'
                  autoClose
                  key={index}
                  right={[
                    {
                      text: '认领',
                      onPress: () => {
                        this.claimCustomerHandler(item.id)
                      },
                      style: {
                        width:'2.5068rem',
                        height:'100%',
                        background: 'linear-gradient(315deg,rgba(68,129,235,1) 0%,rgba(4,190,254,1) 100%)',
                        color: '#FFF',
                        fontSize: '0.4267rem',
                      },
                    },
                  ]}
                >
                  <div className={'list-item'} key={index} onClick={this.jumpCustomerDetail.bind(this, item)}>
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
                </SwipeAction>
              ))
            )
          ) : (
            customerList.map((item, index) => (
              <div className={'list-item'} key={index} onClick={this.jumpCustomerDetail.bind(this, item)}>
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
          )
        }
      </div>
    )
    return (
      <div className='customer-component'>
        <div className='customer-header'>
          <i></i>
          {/* <i className='group-icon iconfont icon-fenzu' onClick={()=>{window.location.href="/#/root/main/customer/myGroup"}}></i> */}  {/**TODO: 分组，搜索未完成 */}
          <div className='center-container' onClick={this.toggleFadePageHandler}>
            <span className='head-title'>{this.state.customerType}</span>
            <i className={`switch-icon ${this.state.isShowFadePage ? 'up' : 'down'} iconfont icon-gengduo`}></i>
          </div>
          {
            this.state.customerType !== '目标客户' ? <i className='search-icon iconfont icon-sousuo' onClick={this.toggleSearchPageHandler}></i> : <i></i>
          }
        </div>
        <div className='customer-container'>
          <PaginationList
            list={list}
            totalCount={total}
            onPullUp={this.getMoreData}
          />
        </div>
        <Navbar/>
        <FadePage
          isShow={this.state.isShowFadePage}
          toggleFadePage={this.toggleFadePageHandler}
          position='top'
        >
          <div className='select-list-page'>
            {
              customerType.map(item=>(
                <div className={`select-item ${item.value === this.state.customerType ? 'selected' : ''}`} key={item.key} onClick={this.getCustomerType.bind(this,item.value)}>
                  <span>{item.value}</span>
                  <i className={`item-icon iconfont icon-select`}></i>
                </div>
              ))
            }
          </div>
        </FadePage>
        <SearchPage
          searchCancelHandler={this.toggleSearchPageHandler}
          getKeyWordHandler={this.getKeyWordHandler}
          isShow={this.state.isShowSearchPage}
          inputText={'请输入客户名称'}
          noResultText={'未搜索到相关结果'}
          // historyParam={this.historyParam}
        >
        {list}  {/*自定义搜索结果列表 */}
        </SearchPage>
      </div>
    )
  }
}
export default List
