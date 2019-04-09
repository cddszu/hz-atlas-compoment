import React from 'react'
import './component.scss'
import { Link } from 'react-router-dom'
import { DatePicker } from 'antd-mobile'
import CreateItem from 'components/hz/CreateItem'
import FadePage from 'components/hz/FadePage'
import RelateSchedule from 'components/RelateSchedule'
import creatHistory from 'history/createBrowserHistory'
import InstitutionTree from 'components/InstitutionTree'
import InnerPage from 'components/hz/InnerPage'
import ReturnHeader from 'components/hz/ReturnHeader'
const history = creatHistory();
class FollowBusiness extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowSelectPage: false,  //是否展示selectPage
      isShowSearchPage: false, //是否展示searchPage
      isShowRelatePage: false, //是否展示relatePage
      isShowRelateSchedulePage: false, //是否展示关联日程页面
      businessTitle: '', //商机标题
      businessContent: '', //商机描述
      businessStatus: '', //商机状态
      pushStatus: '', //推进状态
      stopMark: '', //终止说明
      customerType: '',  //客户类型
      possibleValue: '未知',  //可能性
      followMan: [],   //跟进人   TODO: 跟进人格式
      followManName: '',
      collaborator: [],  //协同人
      validTime: new Date(),  //有效时间
      option: {   // selectPage配置
        type: '',
        title: '',
        content: []
      },
      searchValue: '',  //搜索关键字，客户名
      customerId: '',  //客户id
      relateScheduleId: '',  //关联日程id
      relateScheduleTitle: '', //关联日程title


    }

    this.followTreeConfig = {
      treeData: null,
      mode: 'single',
      title: '跟进人',
      getAsynData: this.props.getUserByInstitutionNo,
      onConfirm: (selectedItems) => {
        this.followPersonPage.hide()
        this.setState({
          followManName: selectedItems.length > 0 ? selectedItems[0].name : '',
          followMan: selectedItems
        })
      }
    }
    this.cooperateTreeConfig = {
      treeData: null,
      mode: 'single',
      title: '协同人',
      getAsynData: this.props.getUserByInstitutionNo,
      onConfirm: (selectedItems) => {
        this.cooperatePage.hide()
        this.setState({
          collaborator: selectedItems
        })
      }
    }
    this.roleTyle = localStorage.getItem('currentRole')
    this.userId = localStorage.getItem('userId')
    this.todayTime = this.formatDate(new Date())

    this.formatDate = this.formatDate.bind(this)
    this.toggleSelectItemHandler = this.toggleSelectItemHandler.bind(this)
    this.getOptionHandler = this.getOptionHandler.bind(this)
    this.getSelectValueHandler = this.getSelectValueHandler.bind(this)
    this.clickSelectRightPartHandler = this.clickSelectRightPartHandler.bind(this)
    this.changeSearchValueHandler = this.changeSearchValueHandler.bind(this)
    this.changeBusinessTitle = this.changeBusinessTitle.bind(this)
    this.changeBusinessContent = this.changeBusinessContent.bind(this)
    this.changeStopMark = this.changeStopMark.bind(this)
    this.getSearchValueHandler = this.getSearchValueHandler.bind(this)
    this.clickRelateRightPartHandler = this.clickRelateRightPartHandler.bind(this)
    this.toggleRelateScheduleHandler = this.toggleRelateScheduleHandler.bind(this)
    this.getRelateScheduleIdHandler = this.getRelateScheduleIdHandler.bind(this)
    this.updateBusinessChanceHandler = this.updateBusinessChanceHandler.bind(this)
    this.showFollowTree = this.showFollowTree.bind(this)
    this.showCooperateTree = this.showCooperateTree.bind(this)
  }
  formatDate(date) {
    /* eslint no-confusing-arrow: 0 */
    if(date === undefined) {
      return
    }
    if(typeof(date) == 'string') {
      return date
    }
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    return `${dateStr} ${timeStr}`;
  }
  showFollowTree() {
    this.followPersonPage.show()
  }
  showCooperateTree() {
    this.cooperatePage.show()
  }
  changeBusinessTitle(e) {
    this.setState({
      businessTitle: e.target.value
    })
  }
  changeStopMark(e) {
    this.setState({
      stopMark: e.target.value
    })
  }
  changeBusinessContent(e) {
    this.setState({
      businessContent: e.target.value
    })
  }
  changeSearchValueHandler(event) {
    if(event.target.value !== '') {
      this.props.getCustomerSearchResult(event.target.value)
      this.setState({
        searchValue: event.target.value,
        isShowSearchPage: true
      })
    } else {
      this.setState({
        searchValue: event.target.value,
        isShowSearchPage: false
      })
    }
  }
  clickSelectRightPartHandler(type) {
    this.toggleSelectItemHandler()
    if(type === 'businessStatus') {
      // 区分当前为 创建人还是中间人
      if(this.props.businessMsg.createdById === this.userId) {
        this.setState({
          option: {
            type: 'businessStatus',
            title: '商机状态',
            content:[{
              key: '新建',
              value: '新建',
              enableClick: false
            },{
              key: '沟通',
              value: '沟通'
            },{
              key: '完成',
              value: '完成'
            },{
              key: '终止',
              value: '终止'
            }]
          }
        })
      } else {
        this.setState({
          option: {
            type: 'businessStatus',
            title: '商机状态',
            content:[{
              key: '新建',
              value: '新建',
              enableClick: false
            },{
              key: '沟通',
              value: '沟通'
            },{
              key: '完成',
              value: '完成'
            }]
          }
        })
      }
    } else if(type === 'pushStatus') {
      this.setState({
        option: {
          type: 'pushStatus',
          title: '推进状态',
          content:[
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
        }
      })
    } else {
      this.setState({
        option: {
          type: 'possiblity',
          title: '可能性',
          content:[{
            key: '未知',
            value: '未知'
          },{
            key: '高',
            value: '高'
          },{
            key: '中',
            value: '中'
          },{
            key: '低',
            value: '低'
          }]
        }
      })
    }
  }
  clickRelateRightPartHandler() {
    this.setState((prevState) => ({
      isShowRelatePage: !prevState.isShowRelatePage,
    }))
  }
  toggleSelectItemHandler() {
    this.setState((prevState) => ({
      isShowSelectPage: !prevState.isShowSelectPage,
    }))
  }
  toggleRelateScheduleHandler() {
    this.setState((prevState)=>({
      isShowRelateSchedulePage: !prevState.isShowRelateSchedulePage
    }))
  }
  getOptionHandler(option) {
    this.setState({
      option: option
    })
  }
  getSelectValueHandler(type, value) {
    this.toggleSelectItemHandler()
    if(type === 'businessStatus') {
      this.setState({
        businessStatus: value
      })
    } else if(type === 'pushStatus'){
      this.setState({
        pushStatus: value
      })
    } else{
      this.setState({
        possibleValue: value
      })
    }
  }
  getSearchValueHandler(id, name) {
    this.setState({
      searchValue: name,
      customerId: id,
      isShowSearchPage: false
    })
  }
  getRelateScheduleIdHandler(id, title) {
    this.setState({
      relateScheduleId: id,
      relateScheduleTitle: title
    })
  }
  updateBusinessChanceHandler() {
    let possibleKey = ''
    let businessStatus = ''
    let pushStatus = ''
    switch (this.state.possibleValue)
    {
      case '未知':
      possibleKey = '4';
      break;
      case '高':
      possibleKey = '3';
      break;
      case '中':
      possibleKey = '2';
      break;
      case '低':
      possibleKey = '1';
      break;
      default:
      break;
    }
    switch (this.state.businessStatus)
    {
      case '终止':
      businessStatus = '4';
      break;
      case '完成':
      businessStatus = '3';
      break;
      case '沟通':
      businessStatus = '2';
      break;
      case '新建':
      businessStatus = '1';
      break;
      default:
      break;
    }
    switch (this.state.pushStatus)
    {
      case '目标客户':
      pushStatus = '1';
      break;
      case '首次拜访':
      pushStatus = '2';
      break;
      case '跟进':
      pushStatus = '3';
      break;
      case '达成意向':
      pushStatus = '4';
      break;
      case '已开户':
      pushStatus = '5';
      break;
      case '已入账':
      pushStatus = '6';
      break;
      case '业务尽调':
      pushStatus = '7';
      break;
      case '上报审批':
      pushStatus = '8';
      break;
      case '等待审批':
      pushStatus = '9';
      break;
      case '审批通过':
      pushStatus = '10';
      break;
      case '审批未通过':
      pushStatus = '11';
      break;
      case '发放授信':
      pushStatus = '12';
      break;
      default:
      break;
    }
    let cooperators = []
    this.state.collaborator.map((item, index) => {
      let object = {}
      object.id = item.id
      object.name = item.name
      cooperators.push(object)
    })
    let bodyData = {
      id: this.props.businessMsg.id, //商机id
      businessStatus: businessStatus,  //商机状态 1:新建,2:沟通,3:完成,4:终止 ,
      cooperators: cooperators,  //协同人
      customerId: this.state.customerId,  //客户id
      customerName: this.state.searchValue,   //客户名
      customerType: this.state.customerType === '行内' ? '1' : '0',  //客户类型
      enable: possibleKey,   //可能性
      executor: this.state.followMan.length > 0 ? this.state.followMan[0].id : '',   //跟进人
      executor_org: this.state.followMan.length > 0 ? this.state.followMan[0].institutionCode : '',  //跟进机构 ，和跟进人互斥
      name: this.state.businessTitle,  //商机名称
      remark: this.state.businessContent,  //商机备注
      schedulerDateIds: [this.state.relateScheduleId],  //关联日程id，单选
      validDt: this.formatDate(this.state.validTime) + ':00',  //有效时间
      pushStatus: pushStatus,  //推进状态
      reason: this.state.stopMark,  //终止说明
    }
    let {updateBusinessChance, toggleFollowBusiness, getQueryBusinessChanceDetail}= this.props
    updateBusinessChance(bodyData)
    this.props.leftBtn()
  }

  componentWillMount() {
    this.props.getInstitutionTree()
  }
  componentWillReceiveProps({ businessMsg , institutionTree}) {
    if (businessMsg !== this.props.businessMsg) {
      this.setState({
        businessTitle: businessMsg.name || '',
        searchValue: businessMsg.customerName || '',
        customerType: businessMsg.customerType || '',
        followManName: businessMsg.executorName || businessMsg.executorOrgName || '',   //跟进人
        collaborator: businessMsg.cooperators,  //协同人
        validTime: new Date(businessMsg.validDt.substr(0,16)),
        businessStatus: businessMsg.businessStatus === '新建' ? '沟通' : businessMsg.businessStatus,
        possibleValue: businessMsg.enable || '',
        businessContent: businessMsg.remark || '',
        customerId: businessMsg.customerId || '',  //客户id
        relateScheduleId: (businessMsg.schedulerVos && businessMsg.schedulerVos.length > 0) ? businessMsg.schedulerVos[0].id : '',  //关联日程id
        relateScheduleTitle: (businessMsg.schedulerVos && businessMsg.schedulerVos.length > 0) ? businessMsg.schedulerVos[0].topic : '', //关联日程title
        pushStatus: businessMsg.pushStatus || '',  //推进状态
        stopMark: businessMsg.reason || '',  //终止说明
      })
    }
    if (institutionTree !== this.props.institutionTree) {
      this.followTreeConfig.treeData = JSON.parse(JSON.stringify(institutionTree))
      this.cooperateTreeConfig.treeData = JSON.parse(JSON.stringify(institutionTree))
    }
  }
  render () {
    const {customerSearchResult ,businessMsg} = this.props
    return (
      <div className={`follow-business-component`} >
        <div className='follow-business-head'>
          <i className='follow-cancel iconfont icon-return' onClick={this.props.leftBtn}></i>
          <span className='follow-title'>跟进商机</span>
          <span className='follow-confirm' onClick={this.updateBusinessChanceHandler}>保存</span>
        </div>
        <div className='follow-business-container'>
          <CreateItem
            type='input'
            leftIcon={'icon-business'}
            leftTitle='商机名称'
            hasTopSpace={true}
          >
            <div className='item-right' >
              <span className='text'>{this.state.businessTitle}</span>
            </div>
          </CreateItem>
          <CreateItem
            type='search'
            leftIcon={'icon-customer'}
            leftTitle='客户名称'
            hasTopSpace={true}
            hasBottomLine={true}
          >
            <div className='item-right' >
              <span className='text'>{this.state.searchValue}</span>
            </div>
          </CreateItem>
          <CreateItem
            type='select'
            rightTitle='全部'
            leftIcon={'icon-type'}
            leftTitle='客户类型'
          >
            <div className='item-right' >
              <span className='text'>{this.state.customerType}</span>
            </div>
          </CreateItem>
          {
            this.roleTyle === 'customer' ? (
              <CreateItem
                type='org'
                leftIcon={'icon-follow-up'}
                leftTitle='跟进人'
                hasTopSpace={true}
                hasBottomLine={true}
              >
                <div className='item-right' >
                  <span className='text'>{this.state.followManName}</span>
                </div>
              </CreateItem>
            ) : (
              <CreateItem
                type='org'
                isImportant={true}
                leftIcon={'icon-follow-up'}
                leftTitle='跟进人'
                hasTopSpace={true}
                hasBottomLine={true}
              >
                <div className='item-right' onClick={this.showFollowTree}>
                  {
                    this.state.followMan ? (<span className='org selected'>{this.state.followManName}</span>)
                    : (<span className='org'>请选择跟进人</span>)
                  }
                  <div className='right-attach'>
                    <i className='item-icon iconfont icon-gengduo'></i>
                  </div>
                </div>
              </CreateItem>
            )
          }

          {
            this.userId !== businessMsg.createdById ? (
              <div>
                <CreateItem
                  type='org'
                  leftIcon={'icon-synergetic'}
                  leftTitle='协同人'
                  hasTopSpace={true}
                >
                  <div className='item-right' >
                    <span className='text'>{
                      this.state.collaborator.map((item, index)=>(
                        this.state.collaborator.length === index+1 ?
                        <span key={item.id}>{item.name}</span> : <span key={item.id}>{item.name+','}</span>
                      ))
                    }</span>
                  </div>
                </CreateItem>
                <CreateItem
                  type='data'
                  leftIcon={'icon-effective-time'}
                  leftTitle='有效时间'
                  hasTopSpace={true}
                >
                  <div className='item-right' >
                    <span className='text'>{businessMsg.validDt}</span>
                  </div>
                </CreateItem>
              </div>
            ) : (
              <div>
                <CreateItem
                  type='org'
                  leftIcon={'icon-synergetic'}
                  leftTitle='协同人'
                >
                  <div className='item-right' onClick={this.showCooperateTree}>
                    {
                      this.state.collaborator.length > 0 ? (
                        <span className='org selected'>
                          {
                            this.state.collaborator.map((item, index)=>(
                              this.state.collaborator.length === index+1 ?
                              <span key={item.id}>{item.name}</span> : <span key={item.id}>{item.name+','}</span>
                            ))
                          }
                        </span>
                      ) : (<span className='org'>请选择协同人</span>)
                    }
                    <div className='right-attach'>
                      <i className='item-icon iconfont icon-gengduo'></i>
                    </div>
                  </div>
                </CreateItem>
                <DatePicker
                  mode='datetime'
                  title="有效时间"
                  value={this.state.validTime}
                  onChange={v => this.setState({ validTime: v })}
                  onOk={v => this.setState({ validTime: v })}
                >
                  <CreateItem
                    type='data'
                    isImportant={true}
                    leftIcon={'icon-effective-time'}
                    leftTitle='有效时间'
                    hasTopSpace={true}
                  >
                    <div className='item-right' >
                      {
                        this.formatDate(this.state.validTime) ? (<span className='data selected'>{this.formatDate(this.state.validTime)}</span>)
                        : (<span className='data'>请选择有效时间</span>)
                      }
                      <div className='right-attach'>
                        <i className='item-icon iconfont icon-calendar'></i>
                      </div>
                    </div>
                  </CreateItem>
                </DatePicker>
              </div>
            )
          }
          <CreateItem
            type='select'
            isImportant={true}
            leftIcon={'icon-possibility'}
            leftTitle='可能性'
            hasTopSpace={true}
            hasBottomLine={true}
          >
            <div className='item-right' onClick={this.clickSelectRightPartHandler.bind(this, 'possiblity')}>
              <span className='selected'>{this.state.possibleValue || '未知'}</span>
              <div className='right-attach'>
                <i className='item-icon iconfont icon-gengduo'></i>
              </div>
            </div>
          </CreateItem>
          <CreateItem
            type='select'
            leftIcon={'icon-business-opportunity'}
            leftTitle='商机状态'
          >
            <div className='item-right' onClick={this.clickSelectRightPartHandler.bind(this, 'businessStatus')}>
              <span className='selected'>{this.state.businessStatus}</span>
              <div className='right-attach'>
                <i className='item-icon iconfont icon-gengduo'></i>
              </div>
            </div>
          </CreateItem>
          {
            this.state.businessStatus === '沟通' ? (
              <CreateItem
                type='select'
                leftIcon={'icon-propulsion-state'}
                leftTitle='推进状态'
              >
                <div className='item-right' onClick={this.clickSelectRightPartHandler.bind(this, 'pushStatus')}>
                  {
                    this.state.pushStatus ? (<span className='select selected'>{this.state.pushStatus}</span>)
                    : (<span className='select'>请选择推进状态</span>)
                  }
                  <div className='right-attach'>
                    <i className='item-icon iconfont icon-gengduo'></i>
                  </div>
                </div>
              </CreateItem>
            ) : (
              this.state.businessStatus === '终止' ? (
                <CreateItem
                  type='input'
                  leftIcon={'icon-termination-instruct'}
                  leftTitle='终止说明'
                >
                  <div className='item-right' >
                    <input className='input' placeholder='请输入终止说明' value={this.state.stopMark} onChange={this.changeStopMark}/>
                  </div>
                </CreateItem>
              ) : ''
            )
          }

          {
            this.roleType === 'customer' ? (
              <div>
                <CreateItem
                  type='relate'
                  rightTitle='添加关联'
                  leftIcon={'icon-relation'}
                  leftTitle='关联'
                  hasTopSpace={true}
                >
                  <div className='item-right' onClick={this.clickRelateRightPartHandler}>
                    <span className='relate'>添加关联</span>
                    <div className='right-attach'>
                      <i className='item-icon iconfont icon-xinjian'></i>
                    </div>
                  </div>
                </CreateItem>
                {
                  this.state.relateScheduleId ? (
                    <div className='relate-items'>
                      <div className='relate-item' onClick={()=>{console.log(this.state.relateScheduleId)}}>
                        <i className='left-icon iconfont icon-related-schedule'></i>
                        <span className='relate-title'>关联日程-<span>{this.state.relateScheduleTitle}</span></span>
                        <i className='right-icon iconfont icon-gengduo'></i>
                      </div>
                    </div>
                  ) : ''
                }
              </div>
            ) : ''
          }
          <CreateItem
            type='textArea'
            leftTitle={'请输入商机描述，不超过100字…'}
            value={this.state.businessContent}
            onChange={this.changeBusinessContent}
            hasTopSpace={true}
          ></CreateItem>
        </div>
        <div className={`select-page ${this.state.isShowSelectPage ? 'show' : 'hide'}`}>
          <div className='select-page-head'>
            <i className='select-cancel iconfont icon-return' onClick={this.toggleSelectItemHandler}></i>
            <span className='select-title'>{this.state.option.title}</span>
            <span className='select-confirm'></span>
          </div>
          <div className='select-page-container'>
            <div className='select-items'>
              {
                this.state.option.content.map(item => (
                  <div className={`select-item ${item.enableClick !== false ? '' : 'grey'}`} key={item.key} onClick={item.enableClick !== false ? this.getSelectValueHandler.bind(this, this.state.option.type, item.value) : ''}>
                    <span className='item-name'>{item.value}</span>
                    <i className='item-icon iconfont icon-select'></i>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className={`search-page ${this.state.isShowSearchPage ? 'show' : 'hide'}`}>
          <div className='search-page-container'>
            {
              customerSearchResult.uglyData.map((item, index) => (
                <div className='search-item' key={index} onClick={this.getSearchValueHandler.bind(this, item.id, item.companyName)}>
                  <span className='search-name'>{item.companyName}</span>
                </div>
              ))
            }
          </div>
          <div className='fade-out'></div>
        </div>
        <FadePage
          isShow={this.state.isShowRelatePage}
          toggleFadePage={this.clickRelateRightPartHandler}
          position='bottom'
        >
          <div className='relate-page-container'>
            <div className='relate-page-item'>
              <div className='relate-schedule'
                onClick={()=>{
                  this.clickRelateRightPartHandler();
                  this.toggleRelateScheduleHandler()
                }
              }>
                <div className='icon-block'>
                  <i className='schedule-icon iconfont icon-related-schedule'></i>
                </div>
                <span className='schedule-title'>关联日程</span>
              </div>
            </div>
            <div className='relate-cancel' onClick={this.clickRelateRightPartHandler}>
              <span className='cancel-title'>取消</span>
            </div>
          </div>
        </FadePage>
        <RelateSchedule
          isShow={this.state.isShowRelateSchedulePage}
          goBack={this.toggleRelateScheduleHandler}
          getRelateScheduleId={this.getRelateScheduleIdHandler}
        />
        <InnerPage title='跟进人' ref={followPersonPage => this.followPersonPage = followPersonPage }>
          <InstitutionTree  {...this.followTreeConfig} />
        </InnerPage>
        <InnerPage title='协同人' ref={cooperatePage => this.cooperatePage = cooperatePage }>
          <InstitutionTree  {...this.cooperateTreeConfig} />
        </InnerPage>
      </div>
    )
  }
}

export default FollowBusiness
