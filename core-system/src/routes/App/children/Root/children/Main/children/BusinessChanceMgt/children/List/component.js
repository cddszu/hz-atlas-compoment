import React from 'react'
import './component.scss'
import PaginationList from 'components/PaginationList'
import SearchPage from 'components/SearchPage'
import { SwipeAction, Modal } from 'antd-mobile'
import RelateSchedule from 'components/RelateSchedule'
// import { Tabs } from 'antd-mobile'
import Tabs from 'components/hz/Tabs'
import { white } from 'ansi-colors';
import creatHistory from 'history/createBrowserHistory'

const history = creatHistory();

const PAGE_SIZE = 10

const leftPart = (
  <div className='btn-return'>
    <i className='iconfont icon-return'></i>
  </div>
)
const rightPart = (
  <div className='btn-search'>
    <i className='iconfont icon-sousuo'></i>
  </div>
)
const alert = Modal.alert

// 自定义tab header
const filterTabs = (
  <div className='content'>
    <div className='center'>
      <div className='tab-item'>
        <span className='tab-name'>客户类型</span>
        <i className='iconfont icon-up'></i>
        <i className='iconfont icon-down'></i>
      </div>
      <div className='tab-item'>
        <span className='tab-name'>商机类型</span>
        <i className='iconfont icon-up'></i>
        <i className='iconfont icon-down'></i>
      </div>
      <div className='tab-item'>
        <span className='tab-name'>更多</span>
        <i className='iconfont icon-up'></i>
        <i className='iconfont icon-down'></i>
      </div>
    </div>
  </div>
)

//辖内商机tab header
const areaTabs = (
  <div className='content'>
    <div className='center'>
      <div className='tab-item'>
        <span className='tab-name'>行内客户</span>
      </div>
      <div className='tab-item'>
        <span className='tab-name'>行外客户</span>
      </div>
      <div className='tab-item'>
        <span className='tab-name'>系统外客户</span>
      </div>
    </div>
  </div>
)

// 客户类型
const customerType = [
  {
    key: '',
    value: '全部'
  },
  {
    key: '0',
    value: '行外'
  },
  {
    key: '1',
    value: '行内'
  },
]
// 商机类型
const businessChanceType = [
  {
    key: '',
    value: '全部'
  },
  {
    key: '0',
    value: '任务商机'
  },
  {
    key: '1',
    value: '自建商机'
  },
]
// 商机状态
const businessStatus = [
  {
    key: '1',
    value: '新建'
  },
  {
    key: '2',
    value: '沟通'
  },
  {
    key: '3',
    value: '完成'
  },
  {
    key: '4',
    value: '停止'
  },
]
// 推进状态
const pushStatus = [
  {
    key: '1',
    value: '目标客户'
  },
  {
    key: '2',
    value: '首次拜访'
  },
  {
    key: '3',
    value: '跟进'
  },
  {
    key: '4',
    value: '达成意向'
  },
  {
    key: '5',
    value: '已开户'
  },
  {
    key: '6',
    value: '已入账'
  },
  {
    key: '7',
    value: '业务尽调'
  },
  {
    key: '8',
    value: '上报审批'
  },
  {
    key: '9',
    value: '等待审批'
  },
  {
    key: '10',
    value: '审批通过'
  },
  {
    key: '11',
    value: '审批未通过'
  },
  {
    key: '12',
    value: '发放授信'
  },
]
class List extends React.Component {
  constructor(props) {
    super(props)
    this.followChanceConfig = {
      // 商机类型
      businessChanceType: '',
      // 商机状态
      businessStatus: '',
      // 推进状态
      pushStatus: '',
      // 客户名称
      customerName: '',
      // 客户类型
      customerType: '',
      pageNo: 1,
      pageSize: PAGE_SIZE,
    }
    this.innerChanceConfig = {
      //客户类型
      customerType: "行内",
      customerName: '',
      pageNo: 1,
      pageSize: PAGE_SIZE,
    }
    this.queryTaskListConfig = {
      pageNo: 1,
      pageSize: PAGE_SIZE,
      taskName: '',
    }
    this.state = {
      currentPage: 1,
      // 商机类型
      temp_businessChanceType: this.followChanceConfig.businessChanceType,
      // 商机状态
      temp_businessStatus: this.followChanceConfig.businessStatus,
      // 推进状态
      temp_pushStatus: this.followChanceConfig.pushStatus,
      // 客户名称
      temp_customerName: this.followChanceConfig.customerName,
      // 客户类型
      temp_customerType: this.followChanceConfig.customerType,
      // 辖内商机客户类型
      inner_customerType: this.innerChanceConfig.customerType,
      // 顶部层级点击
      tagCurrentIndexLevel_1: 0,
      // 辖内商机第二层级tab栏点击
      tagCurrentIndexLevel_2: 0,
      // 跟进商机所有商机列表
      followBusinessChanceList: {
        content: []
      },
      // 辖内商机所有商机列表
      innerBusinessChanceList: {
        content: []
      },
      // 商机列表
      orgBusinessChanceList: {
        content: []
      },
      // 任务列表
      queryTaskList: {
        content: []
      },
      // 是否展示搜索结果页面
      isShowSearch : false,
      // 搜索keyword
      keyWord: '',
      // 选中的商机id
      businessId: '',
      // 是否展示关联日程页
      isShowRelateSchedulePage: false,
      // 关联日程id
      scheduleId: '',
    }
    // 角色类型
    this.roleType = localStorage.getItem('currentRole')
    // tab标题
    this.tabs = [
      {title: '跟进商机'},
      {title: '辖内商机'},
    ]
    //搜索页面路由
    this.historyParam = {
      url: '/crm-jj/api/opportunity/historySearch',
      method: 'get',
      param: {}
    }

    this.cancelSelectHandler = this.cancelSelectHandler.bind(this)
    this.resetHandler = this.resetHandler.bind(this)
    this.getMoreData = this.getMoreData.bind(this)
    this.clickCustomerTypeHandler = this.clickCustomerTypeHandler.bind(this)
    this.clickBusinessTypeHandler = this.clickBusinessTypeHandler.bind(this)
    this.jumpCreateBusinessPageHandler = this.jumpCreateBusinessPageHandler.bind(this)
    this.getKeyWordHandler = this.getKeyWordHandler.bind(this)
    this.goBackHandler = this.goBackHandler.bind(this)
    this.getTabOneListHandler = this.getTabOneListHandler.bind(this)
    this.getBusinessIdHandler = this.getBusinessIdHandler.bind(this)
    this.toggleRelateScheduleHandler = this.toggleRelateScheduleHandler.bind(this)
    this.relateScheduleModalHandler = this.relateScheduleModalHandler.bind(this)
    this.getRelateScheduleIdHandler = this.getRelateScheduleIdHandler.bind(this)
    this.clickBusinessItemHandler = this.clickBusinessItemHandler.bind(this)
  }
  // 区分跟进商机和商机列表
  getTabOneListHandler() {
    if(this.roleType === 'customer') {
      this.props.getFollowBusinessChanceList(this.followChanceConfig)
    } else {
      this.props.getOrgBusinessChanceList(this.followChanceConfig)
    }
  }
  // 搜索页面关闭
  searchCancelHandler = () => {
    this.setState({
      isShowSearch : false
    })
  }

  // 搜索页面展示
  showSearchHandler = () => {
    this.setState({
      isShowSearch : true
    })
  }
  // 获取搜索关键字
  getKeyWordHandler(value) {
    this.setState({
      keyWord: value
    })
  }
  // 返回
  goBackHandler() {
    history.goBack()
  }
  // 认领商机
  pickBusinessChanceHandler() {
    alert('', '确定认领此商机吗？', [
      { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
      { text: '确定', onPress: () => console.log('ok') },
    ]);
  }

  // 关联日程
  relateScheduleHandler(item) {
    alert('', '确定关联日程吗？', [
      { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
      { text: '确定', onPress: () => (this.relateScheduleModalHandler(item)) },
    ]);
  }
  // 关联日程弹窗确定函数
  relateScheduleModalHandler(item) {
    this.getBusinessIdHandler(item.id)
    this.toggleRelateScheduleHandler()
  }
  tabChangeHanlder(itemKey, value) {
    if (itemKey === 'temp_businessStatus') {
      if (this.state[itemKey] === value) {
        value = ''
      }
      if (value !== '2') {
        this.setState({
          temp_pushStatus: ''
        })
      }
    }
    // if (itemKey === 'temp_pushStatus') {
    //   let index = this.state[itemKey].indexOf(value)
    //   if (index === -1) {
    //     this.state.temp_pushStatus.push(value)
    //   } else {
    //     this.state.temp_pushStatus.splice(index, 1)
    //   }
    //   value = this.state.temp_pushStatus
    // }
    this.setState({
      [itemKey]: value
    })
  }
  cancelHandler() {
    this.setState({
      currentPage: 0
    })
  }

  confirmHandler(itemKey) {
    this.followChanceConfig[itemKey] = this.state['temp_' + itemKey]
    this.followChanceConfig.pageNo = 1
    this.innerChanceConfig.pageNo = 1
    if (itemKey === 'businessStatus') {
      this.followChanceConfig.pushStatus = this.state.temp_pushStatus
    }
    this.level_2_tabs.cancelSelectHandler()
    this.getTabOneListHandler()
  }
  cancelSelectHandler() {
    this.setState({
      // 商机类型
      temp_businessChanceType: this.followChanceConfig.businessChanceType,

      // 商机状态
      temp_businessStatus: this.followChanceConfig.temp_businessStatus,

      // 推进状态
      temp_pushStatus: this.pushStatus,

      // 客户名称
      temp_customerName: this.customerName,

      // 客户类型
      temp_customerType: this.customerType,
    })
    this.level_2_tabs.cancelSelectHandler()
  }
  resetHandler() {
    this.setState({
      // 商机状态
      temp_businessStatus: '',

      // 推进状态
      temp_pushStatus: '',
    })
  }
  getMoreData() {
    if(this.roleType === 'customer') {
      if(this.state.tagCurrentIndexLevel_1 === 0) {
        this.followChanceConfig.pageNo += 1
        this.getTabOneListHandler()
      } else {
        this.innerChanceConfig.pageNo += 1
        this.props.getInnerBusinessChanceList(this.innerChanceConfig)
      }
    } else {
      if(this.state.tagCurrentIndexLevel_1 === 0) {
        this.followChanceConfig.pageNo += 1
        this.getTabOneListHandler()
      } else {
        this.queryTaskListConfig.pageNo += 1
        this.props.getQueryTaskList(this.queryTaskListConfig)
      }
    }
  }

  clickHeadTab = (e,index) => {
    console.log('index :', index);
    if(this.roleType === 'customer') {
      index === 0 ? this.getTabOneListHandler() : this.props.getInnerBusinessChanceList(this.innerChanceConfig);
    } else {
      index === 0 ? this.getTabOneListHandler() : this.props.getQueryTaskList(this.queryTaskListConfig);
    }
    this.setState({
      tagCurrentIndexLevel_1 : index
    })
  }
  clickSubHeadTab = (e,index) => {
    //重复点击相同的tab不请求
    if (this.state.tagCurrentIndexLevel_2 === index) {
      return;
    }

    let customerType = '';
    if (index === 0) {
      customerType = '行内';
    } else if (index === 1) {
      customerType = '行外';
    } else {
      customerType = '系统外';
    }

    this.innerChanceConfig.customerType = customerType;

    this.setState({
      inner_customerType : customerType,
      tagCurrentIndexLevel_2 : index
    })

    this.props.getInnerBusinessChanceList(this.innerChanceConfig)
  }

  // 跳转新建商机页面
  jumpCreateBusinessPageHandler() {
    window.location.href='/#/root/main/chanceMgt/create'
  }
  // 选择客户类型
  clickCustomerTypeHandler(item) {
    this.tabChangeHanlder('temp_customerType', item)
    setTimeout(()=>{this.confirmHandler('customerType')}, 100)
  }
  // 选择商机类型
  clickBusinessTypeHandler(item) {
    this.tabChangeHanlder('temp_businessChanceType', item)
    setTimeout(()=>{this.confirmHandler('businessChanceType')}, 100)
  }
  // 获取选中商机id
  getBusinessIdHandler(id) {
    this.setState({
      businessId: id
    })
  }
  // 点击任务列表
  clickTaskItemHandler(id) {
    window.location.href='/#/root/main/chanceMgt/taskDetail?id=' + id
    this.getBusinessIdHandler(id)
  }
  // 关联日程的展示
  toggleRelateScheduleHandler() {
    this.setState((prevState)=>({
      isShowRelateSchedulePage: !prevState.isShowRelateSchedulePage
    }))
  }
  // 获取关联日程的id
  getRelateScheduleIdHandler(id, title) {
    this.setState({
      scheduleId: id
    })
  }
  // 点击商机列表
  clickBusinessItemHandler(id) {
    // window.location.href='/#/root/main/chanceMgt/businessDetail?id=' + id
    // this.getBusinessIdHandler(id)
  }
  componentWillMount() {
    if(this.roleType === 'customer') {
      this.tabs=[
        {title: '跟进商机'},
        {title: '辖内商机'},
      ]
    } else {
      this.tabs=[
        {title: '商机列表'},
        {title: '任务列表'},
      ]
    }
    this.getTabOneListHandler()
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.scheduleId !== this.state.scheduleId) {
      this.props.updateRelateSchedule(this.state.scheduleId, this.state.businessId)
    }
    if(prevState.keyWord !== this.state.keyWord) {
      let followChanceConfig = {
        // 商机类型
        businessChanceType: '',
        // 商机状态
        businessStatus: '',
        // 推进状态
        pushStatus: '',
        // 客户名称
        customerName: this.state.keyWord,
        // 客户类型
        customerType: '',
        pageNo: 1,
        pageSize: PAGE_SIZE,
      }
      let innerChanceConfig = {
        //客户类型
        customerType: "",
        customerName: this.state.keyWord,
        pageNo: 1,
        pageSize: PAGE_SIZE,
      }
      let queryTaskListConfig = {
        pageNo: 1,
        pageSize: PAGE_SIZE,
        taskName: this.state.keyWord,
      }
      if(this.roleType === 'customer') {
        if(this.state.tagCurrentIndexLevel_1 === 0) {
          this.props.getFollowBusinessChanceList(followChanceConfig)
        } else {
          this.props.getInnerBusinessChanceList(innerChanceConfig)
        }
      } else {
        if(this.state.tagCurrentIndexLevel_1 === 0) {
          this.props.getOrgBusinessChanceList(followChanceConfig)
        } else {
          this.props.getQueryTaskList(queryTaskListConfig)
        }
      }
    }
  }
  componentWillReceiveProps({ followBusinessChanceList,innerBusinessChanceList,orgBusinessChanceList,queryTaskList }) {
    if (followBusinessChanceList !== this.props.followBusinessChanceList) {
      if(this.followChanceConfig.pageNo !== 1)
      followBusinessChanceList.content = this.props.followBusinessChanceList.content.concat(followBusinessChanceList.content)
      this.setState({
        followBusinessChanceList: followBusinessChanceList
      })
    }
    if (innerBusinessChanceList !== this.props.innerBusinessChanceList) {
      if(this.innerChanceConfig.pageNo !== 1)
      innerBusinessChanceList.content = this.props.innerBusinessChanceList.content.concat(innerBusinessChanceList.content)
      this.setState({
        innerBusinessChanceList: innerBusinessChanceList
      })
    }
    if (orgBusinessChanceList !== this.props.orgBusinessChanceList) {
      if(this.followChanceConfig.pageNo !== 1)
      orgBusinessChanceList.content = this.props.orgBusinessChanceList.content.concat(orgBusinessChanceList.content)
      this.setState({
        orgBusinessChanceList: orgBusinessChanceList
      })
    }
    if (queryTaskList !== this.props.queryTaskList) {
      if(this.queryTaskListConfig.pageNo !== 1)
      queryTaskList.content = this.props.queryTaskList.content.concat(queryTaskList.content)
      this.setState({
        queryTaskList: queryTaskList
      })
    }
  }
  render () {
    let list = (
      this.roleType === 'customer' ? (
        <ul>
          {
            this.state.tagCurrentIndexLevel_1 === 0 ? (
              this.state.followBusinessChanceList.content.map((item, index) => (
                <SwipeAction
                  className='swiper-item'
                  style={{ backgroundColor: 'gray' }}
                  key={index}
                  autoClose
                  right={[
                    {
                      text: '关联日程',
                      onPress: () => {
                        this.relateScheduleHandler(item)
                      },
                      style: {
                        background:'linear-gradient(135deg,rgba(253,139,111,1) 0%,rgba(253,107,103,1) 100%)',
                        width: '2.5rem',
                        height: '100%',
                        color: '#FFF',
                      },
                    },
                  ]}
                  onOpen={() => console.log('global open')}
                  onClose={() => console.log('global close')}
                >
                  <li className='card-item' onClick={this.clickBusinessItemHandler.bind(this, item.id)}>
                    <div className='title'>{item.name}</div>
                    <div className='second-row'>
                      <span>{item.businessChanceType}</span>
                      <span className='gap'>|</span>
                      <span>{item.businessStatus}</span>
                      <span className='gap'>|</span>
                      <span>{item.validDt}</span>
                    </div>
                    <div className='third-row'>
                      <span className='customerType'>{item.customerType}</span>
                      <span className='customerName'>{item.customerName}</span>
                    </div>
                  </li>
                </SwipeAction>
              ))
            ) : (
              this.state.innerBusinessChanceList.content.map((item, index) => (
                <SwipeAction
                  className='swiper-item'
                  key={index}
                  style={{ backgroundColor: 'gray' }}
                  autoClose
                  right={[
                    {
                      text: '认领',
                      onPress: () => {
                        this.pickBusinessChanceHandler(item)
                      },
                      style: {
                        background:'linear-gradient(315deg,rgba(68,129,235,1) 0%,rgba(4,190,254,1) 100%)',
                        width: '2.5rem',
                        height: '100%',
                        color: '#FFF',
                      },
                    },
                  ]}
                  onOpen={() => console.log('global open')}
                  onClose={() => console.log('global close')}
                >
                  <li className='card-item' onClick={this.clickBusinessItemHandler.bind(this, item.id)}>
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
                  </li>
                </SwipeAction>
              ))
            )
          }
        </ul>
      ) : (
        <ul>
          {
            this.state.tagCurrentIndexLevel_1 === 0 ? (
              this.state.orgBusinessChanceList.content.map((item, index) => (
                <SwipeAction
                  className='swiper-item'
                  key={index}
                  style={{ backgroundColor: 'gray' }}
                  autoClose
                  right={[
                    {
                      text: '关联日程',
                      onPress: () => {
                        this.relateScheduleHandler(item)
                      },
                      style: {
                        background:'linear-gradient(135deg,rgba(253,139,111,1) 0%,rgba(253,107,103,1) 100%)',
                        width: '2.5rem',
                        height: '100%',
                        color: '#FFF',
                      },
                    },
                  ]}
                  onOpen={() => console.log('global open')}
                  onClose={() => console.log('global close')}
                >
                  <li className='card-item' onClick={this.clickBusinessItemHandler.bind(this, item.id)}>
                    <div className='title'>{item.name}</div>
                    <div className='second-row'>
                      <span>{item.businessChanceType}</span>
                      <span className='gap'>|</span>
                      <span>{item.businessStatus}</span>
                      <span className='gap'>|</span>
                      <span>{item.validDt}</span>
                    </div>
                    <div className='third-row'>
                      <span className='customerType'>{item.customerType}</span>
                      <span className='customerName'>{item.customerName}</span>
                    </div>
                  </li>
                </SwipeAction>
              ))
            ) : (
              this.state.queryTaskList.content.map((item, index) => (
                <SwipeAction
                  className='list-item'
                  key={index}
                  style={{ backgroundColor: '#FFF' }}
                >
                  <li className='card-item' onClick={this.clickTaskItemHandler.bind(this,item.id)}>
                    <div className='title'>{item.taskName}</div>
                    <div className='second-row'>
                      <span>{item.createdByName || '--'}</span>
                      <span className='gap'>|</span>
                      <span>{item.validDate || '--'}</span>
                    </div>
                  </li>
                </SwipeAction>
              ))
            )
          }
        </ul>
      )
    )

    return (
      <div className='list-component'>
        {
          this.roleType === 'customer' ? (
            <Tabs
              className='tabs'
              tabs={this.tabs}
              left={leftPart}
              right={rightPart}
              onChange={this.clickHeadTab.bind(this,'level_1')}
              rightHandler={this.showSearchHandler}
              leftHandler={this.goBackHandler}
              initialPage={1}
            >
              <div className='follow-chance filter-board level_2_tabs'>
                <Tabs
                  component={filterTabs}
                  ref={ref => this.level_2_tabs = ref}
                >
                  <div className='pane-item'>
                    <div className='body'>
                      <div className='select-items'>
                        {
                          customerType.map((item, index) => (
                            <div className={`option ${item.key === this.state.temp_customerType ? 'selected' : ''}`}
                              key={item.key}
                              onClick={this.clickCustomerTypeHandler.bind(this, item.key)}
                            >
                              <span className='item-name'>{item.value}</span>
                              <i className='item-icon iconfont icon-select'></i>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                  <div className='pane-item'>
                    <div className='body'>
                      <div className='select-items'>
                        {
                          businessChanceType.map(item => (
                            <div className={`option ${item.key === this.state.temp_businessChanceType ? 'selected' : ''}`}
                              key={item.key}
                              onClick={this.clickBusinessTypeHandler.bind(this, item.key)}
                            >
                              <span className='item-name'>{item.value}</span>
                              <i className='item-icon iconfont icon-select'></i>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                  <div className='pane-item more-pane-item'>
                    <div className='body'>
                      <div className='title'>商机状态</div>
                      <div className='options'>
                        {
                          businessStatus.map(item => (
                            <div className={`option ${item.key === this.state.temp_businessStatus ? 'selected' : ''}`}
                              key={item.key}
                              onClick={this.tabChangeHanlder.bind(this, 'temp_businessStatus', item.key)}
                            >
                              {item.value}
                            </div>
                          ))
                        }
                      </div>
                      {
                        this.state.temp_businessStatus === '2' &&
                        <div className='push-state'>
                          <div className='title'>推进状态</div>
                          <div className='options'>
                            {
                              pushStatus.map((item,index) => (
                                <div className={`option ${item.key === this.state.temp_pushStatus ? 'selected' : ''}`}
                                  key={item.key}
                                  onClick={this.tabChangeHanlder.bind(this, 'temp_pushStatus', item.key)}
                                >
                                  {item.value}
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      }
                    </div>
                    <div className='btn-area'>
                      <div className='btn btn-reset' onClick={this.resetHandler}>重置</div>
                      <div className='btn btn-confirm' onClick={this.confirmHandler.bind(this, 'businessStatus')}>确定</div>
                    </div>
                  </div>
                </Tabs>
                <div className='pagination-list-wrapper'>
                  <PaginationList

                    list={list}
                    totalCount={this.state.followBusinessChanceList.totalElements}
                    // totalCount={1000}
                    onPullUp={this.getMoreData}
                  />
                  <div className='icon-add-chance' onClick={this.jumpCreateBusinessPageHandler}>
                  </div>
                </div>
              </div>
              <div className='area-chance level_2_tabs'>
                <Tabs
                  component={areaTabs}
                  onChange={this.clickSubHeadTab.bind(this,'level_2')}
                  initialPage={1}
                >
                </Tabs>
                <div className='pagination-list-wrapper'>
                  <PaginationList
                    list={list}
                    totalCount={this.props.innerBusinessChanceList.totalElements}
                    // totalCount={1000}
                    onPullUp={this.getMoreData}
                  />
                </div>
                <div className='icon-add-chance' onClick={this.jumpCreateBusinessPageHandler}></div>
              </div>
            </Tabs>
          ) : (
            <Tabs
              className='tabs'
              tabs={this.tabs}
              left={leftPart}
              right={rightPart}
              onChange={this.clickHeadTab.bind(this,'level_1')}
              rightHandler={this.showSearchHandler}
              leftHandler={this.goBackHandler}
              initialPage={1}
            >
              <div className='follow-chance filter-board level_2_tabs'>
                <Tabs
                  component={filterTabs}
                  ref={ref => this.level_2_tabs = ref}
                >
                  <div className='pane-item'>
                    <div className='body'>
                      <div className='select-items'>
                        {
                          customerType.map((item, index) => (
                            <div className={`option ${item.key === this.state.temp_customerType ? 'selected' : ''}`}
                              key={item.key}
                              onClick={this.clickCustomerTypeHandler.bind(this, item.key)}
                            >
                              <span className='item-name'>{item.value}</span>
                              <i className='item-icon iconfont icon-select'></i>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                  <div className='pane-item'>
                    <div className='body'>
                      <div className='select-items'>
                        {
                          businessChanceType.map(item => (
                            <div className={`option ${item.key === this.state.temp_businessChanceType ? 'selected' : ''}`}
                              key={item.key}
                              onClick={this.clickBusinessTypeHandler.bind(this, item.key)}
                            >
                              <span className='item-name'>{item.value}</span>
                              <i className='item-icon iconfont icon-select'></i>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                  <div className='pane-item more-pane-item'>
                    <div className='body'>
                      <div className='title'>商机状态</div>
                      <div className='options'>
                        {
                          businessStatus.map(item => (
                            <div className={`option ${item.key === this.state.temp_businessStatus ? 'selected' : ''}`}
                              key={item.key}
                              onClick={this.tabChangeHanlder.bind(this, 'temp_businessStatus', item.key)}
                            >
                              {item.value}
                            </div>
                          ))
                        }
                      </div>
                      {
                        this.state.temp_businessStatus === '2' &&
                        <div className='push-state'>
                          <div className='title'>推进状态</div>
                          <div className='options'>
                            {
                              pushStatus.map((item,index) => (
                                <div className={`option ${item.key === this.state.temp_pushStatus ? 'selected' : ''}`}
                                  key={item.key}
                                  onClick={this.tabChangeHanlder.bind(this, 'temp_pushStatus', item.key)}
                                >
                                  {item.value}
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      }
                    </div>
                    <div className='btn-area'>
                      <div className='btn btn-reset' onClick={this.resetHandler}>重置</div>
                      <div className='btn btn-confirm' onClick={this.confirmHandler.bind(this, 'businessStatus')}>确定</div>
                    </div>
                  </div>
                </Tabs>
                <div className='pagination-list-wrapper'>
                  <PaginationList
                    list={list}
                    totalCount={this.state.orgBusinessChanceList.totalElements}
                    onPullUp={this.getMoreData}
                  />
                  {/* <div onClick={this.getMoreData}>获取更多</div> */}
                  <div className='icon-add-chance' onClick={this.jumpCreateBusinessPageHandler}>
                  </div>
                </div>
              </div>
              <div className='area-chance level_2_tabs'>
                <div className='pagination-list-wrapper'>
                  <PaginationList
                    list={list}
                    totalCount={this.state.queryTaskList.totalElements}
                    // totalCount={1000}
                    onPullUp={this.getMoreData}
                  />
                </div>
              </div>
            </Tabs>
          )
        }
        <SearchPage
          searchCancelHandler={this.searchCancelHandler}
          getKeyWordHandler={this.getKeyWordHandler}
          isShow={this.state.isShowSearch}
          inputText={'请输入客户名称'}
          noResultText={'未搜索到相关结果'}
          // historyParam={this.historyParam}
        >
          {list}  {/*自定义搜索结果列表 */}
        </SearchPage>
        <RelateSchedule
          isShow={this.state.isShowRelateSchedulePage}
          goBack={this.toggleRelateScheduleHandler}
          getRelateScheduleId={this.getRelateScheduleIdHandler}
        />
      </div>
    )
  }
}

export default List
