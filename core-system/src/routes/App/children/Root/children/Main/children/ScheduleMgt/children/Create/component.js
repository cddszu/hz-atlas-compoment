import React from 'react'
import './component.scss'
import { Link } from 'react-router-dom'
import { DatePicker, Switch } from 'antd-mobile'
import CreateItem from 'components/hz/CreateItem'
import FadePage from 'components/hz/FadePage'
import RelateCustomer from 'components/RelateCustomer'
import RelateBusiness from 'components/RelateBusiness'
import creatHistory from 'history/createBrowserHistory'

const history = creatHistory();
class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowRelatePage: false, //是否展示relatePage
      isShowRelateCustomerPage: false, //是否展示关联客户页面
      isShowRelateBusinessPage: false, //是否展示关联商机页面
      scheduleTitle: '', //日程标题
      scheduleAddress: '', //日程地址
      scheduleContent: '', //日程描述
      startTime: '',  //开始时间
      endTime: '',  //结束时间
      remindTime: '',  //提醒时间
      checked: true, //提醒开关
      businessId: '', //关联商机id
      customerId: '',  //关联客户id
      customerName: '', //关联客户名称
      relateBusinessTitle: '', //关联商机title
    }

    this.roleType = localStorage.getItem('currentRole')

    this.formatDate = this.formatDate.bind(this)

    this.changeScheduleTitle = this.changeScheduleTitle.bind(this)
    this.changeScheduleAddress = this.changeScheduleAddress.bind(this)
    this.changeScheduleContent = this.changeScheduleContent.bind(this)

    this.clickRelateRightPartHandler = this.clickRelateRightPartHandler.bind(this)
    this.toggleRelateCustomerHandler = this.toggleRelateCustomerHandler.bind(this)
    this.toggleRelateBusinessHandler = this.toggleRelateBusinessHandler.bind(this)

    this.getRelateBusinessIdHandler = this.getRelateBusinessIdHandler.bind(this)
    this.getRelateCustomerIdHandler = this.getRelateCustomerIdHandler.bind(this)
    this.createScheduleHandler = this.createScheduleHandler.bind(this)
    this.clickCancelButtonHandler = this.clickCancelButtonHandler.bind(this)
  }
  formatDate(date) {
    /* eslint no-confusing-arrow: 0 */
    if(date === undefined || date === '') {
      return
    }
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    return `${dateStr} ${timeStr}`;
  }
  changeScheduleTitle(e) {
    this.setState({
      scheduleTitle: e.target.value
    })
  }
  changeScheduleAddress(e) {
    this.setState({
      scheduleAddress: e.target.value
    })
  }
  changeScheduleContent(e) {
    this.setState({
      scheduleContent: e.target.value
    })
  }

  clickRelateRightPartHandler() {
    this.setState((prevState) => ({
      isShowRelatePage: !prevState.isShowRelatePage,
    }))
  }

  toggleRelateCustomerHandler() {
    this.setState((prevState)=>({
      isShowRelateCustomerPage: !prevState.isShowRelateCustomerPage
    }))
  }

  toggleRelateBusinessHandler() {
    this.setState((prevState)=>({
      isShowRelateBusinessPage: !prevState.isShowRelateBusinessPage
    }))
  }

  getRelateBusinessIdHandler(id, title) {
    this.setState({
      businessId: id,
      relateBusinessTitle: title
    })
  }
  getRelateCustomerIdHandler(id, title) {
    this.setState({
      customerId: id,
      customerName: title
    })
  }
  createScheduleHandler() {
    let bodyData = {
      topic: this.state.scheduleTitle,
      remark: this.state.scheduleContent,
      address: this.state.scheduleAddress,
      schedulerNo: "1111",
      businessId: this.state.businessId,
      customerId: this.state.customerId,
      customerName: this.state.customerName,
      startDt: this.formatDate(this.state.startTime)+ ':00',
      endDt: this.formatDate(this.state.endTime) + ':00',
      remindDt: this.formatDate(this.state.remindTime) + ':00',
      schedulerRemind: this.state.checked ? '1' : '0'
    }
    this.props.createSchedule(bodyData)
    this.clickCancelButtonHandler()
  }
  clickCancelButtonHandler() {
    history.goBack()
  }
  componentWillReceiveProps({ xxx }) {
    if (xxx !== this.props.xxx) {

    }
  }
  render () {
    return (
      <div className='create-component'>
        <div className='create-schedule-head'>
          <span className='create-cancel' onClick={this.clickCancelButtonHandler}>取消</span>
          <span className='create-title'>新建日程</span>
          <span className='create-confirm' onClick={this.createScheduleHandler}>确定</span>
        </div>
        <div className='create-schedule-container'>
          <CreateItem
            type='input'
            leftIcon={'icon-richengzhuti'}
            leftTitle='主题'
            isImportant={true}
            hasTopSpace={true}
            hasBottomLine={true}
          >
            <div className='item-right' >
              <input className='input' placeholder='请输入日程主题' value={this.state.scheduleTitle} onChange={this.changeScheduleTitle}/>
            </div>
          </CreateItem>
          <CreateItem
            type='input'
            leftIcon={'icon-dizhi'}
            leftTitle='地点'
            isImportant={true}
            hasBottomLine={true}
          >
            <div className='item-right' >
              <input className='input' placeholder='请输入地点名称' value={this.state.scheduleAddress} onChange={this.changeScheduleAddress}/>
            </div>
          </CreateItem>
          <DatePicker
            mode='datetime'
            title="开始时间"
            value={this.state.startTime}
            onChange={v => this.setState({ startTime: v })}
            onOk={v => this.setState({ startTime: v })}
          >
            <CreateItem
              type='data'
              leftIcon={'icon-effective-time'}
              leftTitle='开始时间'
              isImportant={true}
              hasBottomLine={true}
            >
              <div className='item-right' >
                {
                  this.formatDate(this.state.startTime) ? (<span className='data selected'>{this.formatDate(this.state.startTime)}</span>)
                  : (<span className='data'>请选择开始时间</span>)
                }
                <div className='right-attach'>
                  <i className='item-icon iconfont icon-calendar'></i>
                </div>
              </div>
            </CreateItem>
          </DatePicker>
          <DatePicker
            mode='datetime'
            title="结束时间"
            value={this.state.endTime}
            onChange={v => this.setState({ endTime: v })}
            onOk={v => this.setState({ endTime: v })}
          >
            <CreateItem
              type='data'
              leftIcon={'icon-effective-time'}
              leftTitle='结束时间'
              isImportant={true}
            >
              <div className='item-right' >
                {
                  this.formatDate(this.state.endTime) ? (<span className='data selected'>{this.formatDate(this.state.endTime)}</span>)
                  : (<span className='data'>请选择结束时间</span>)
                }
                <div className='right-attach'>
                  <i className='item-icon iconfont icon-calendar'></i>
                </div>
              </div>
            </CreateItem>
          </DatePicker>
          <CreateItem
            type='switch'
            leftIcon={'icon-tixing'}
            leftTitle='提醒'
            hasTopSpace={true}
          >
            <div className='item-right'>
              <Switch
                checked={this.state.checked}
                className='switch-item'
                color='#4DD865'
                onChange={() => {
                  this.setState({
                    checked: !this.state.checked,
                  });
                }}
              />
            </div>
          </CreateItem>
          {
            this.state.checked ? (
              <DatePicker
                mode='datetime'
                title="提醒时间"
                value={this.state.remindTime}
                onChange={v => this.setState({ remindTime: v })}
                onOk={v => this.setState({ remindTime: v })}
              >
                <CreateItem
                  type='data'
                  leftIcon={'icon-effective-time'}
                  leftTitle='提醒时间'
                  isImportant={true}
                >
                  <div className='item-right' >
                    {
                      this.formatDate(this.state.remindTime) ? (<span className='data selected'>{this.formatDate(this.state.remindTime)}</span>)
                      : (<span className='data'>请选择提醒时间</span>)
                    }
                    <div className='right-attach'>
                      <i className='item-icon iconfont icon-calendar'></i>
                    </div>
                  </div>
                </CreateItem>
              </DatePicker>
            ) : ''
          }
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
            this.state.customerId ? (
              <div className='relate-items'>
                <div className='relate-item' onClick={()=>{console.log(this.state.customerId)}}>
                  <i className='left-icon relate-customer-icon iconfont icon-guanliankehu'></i>
                  <span className='relate-title'>关联客户-<span>{this.state.customerName}</span></span>
                  <i className='right-icon iconfont icon-gengduo'></i>
                </div>
              </div>
            ) : ''
          }
          {
            this.state.businessId ? (
              <div className='relate-items'>
                <div className='relate-item' onClick={()=>{console.log(this.state.businessId)}}>
                  <i className='left-icon relate-business-icon iconfont icon-guanlianshangji'></i>
                  <span className='relate-title'>关联商机-<span>{this.state.relateBusinessTitle}</span></span>
                  <i className='right-icon iconfont icon-gengduo'></i>
                </div>
              </div>
            ) : ''
          }
          <CreateItem
            type='textArea'
            leftTitle={'请输入日程描述，不超过100字…'}
            value={this.state.scheduleContent}
            onChange={this.changeScheduleContent}
            hasTopSpace={true}
          ></CreateItem>
        </div>
        <FadePage
          isShow={this.state.isShowRelatePage}
          toggleFadePage={this.clickRelateRightPartHandler}
          position='bottom'
        >
          <div className='relate-page-container'>
            <div className='relate-page-item'>
              <div className='relate-item relate-customer'
                onClick={()=>{
                  this.clickRelateRightPartHandler();
                  this.toggleRelateCustomerHandler()
                }}>
                <div className='icon-block'>
                  <i className='relate-icon customer-icon iconfont icon-guanliankehu'></i>
                </div>
                <span className='relate-title'>关联客户</span>
              </div>
              <div className='relate-item relate-business'
                onClick={()=>{
                  this.clickRelateRightPartHandler();
                  this.toggleRelateBusinessHandler()
                }}>
                <div className='icon-block'>
                  <i className='relate-icon business-icon iconfont icon-guanlianshangji'></i>
                </div>
                <span className='relate-title'>关联商机</span>
              </div>
            </div>
            <div className='relate-cancel' onClick={this.clickRelateRightPartHandler}>
              <span className='cancel-title'>取消</span>
            </div>
          </div>
        </FadePage>
        <RelateBusiness
          isShow={this.state.isShowRelateBusinessPage}
          goBack={this.toggleRelateBusinessHandler}
          getRelateBusinessId={this.getRelateBusinessIdHandler}
        />
        <RelateCustomer
          isShow={this.state.isShowRelateCustomerPage}
          goBack={this.toggleRelateCustomerHandler}
          getRelateCustomerId={this.getRelateCustomerIdHandler}
        />
      </div>
    )
  }
}

export default Create
