import React, {Component} from 'react';
import './component.scss'
import {Link} from 'react-router-dom'
import { DatePicker, SwipeAction } from 'antd-mobile'
import FadePage from 'components/hz/FadePage'
import CreateItem from 'components/hz/CreateItem'
import InstitutionTree from 'components/InstitutionTree'
import InnerPage from 'components/hz/InnerPage'
import RelateCustomer from 'components/RelateCustomer'
import RelateBusiness from 'components/RelateBusiness'
import RelateSchedule from 'components/RelateSchedule'
import moment from 'moment'


class BaiduMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false
    }
  }

  handlerReturn = () => {
    this.props.goBack()
  }

  componentDidMount () {
    var BMap = window.BMap
    var map = new BMap.Map("allmap"); // 创建Map实例
    // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设    置中心点坐标和地图级别
    // map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    // map.setCurrentCity("武汉"); // 设置地图显示的城市 此项是必须设置的
    // map.centerAndZoom(new BMap.Point(114.43890140728, 30.458888229373), 11);
        // 百度地图API功能
    //GPS坐标
    // var map = new BMap.Map("allmap");
    var point = new BMap.Point();
    map.setCurrentCity("武汉"); // 设置地图显示的城市 此项是必须设置的
    map.centerAndZoom(point,12);

    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() === 0){
        console.log('r.point :', r.point);
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
      }
      else {
        alert('failed'+this.getStatus());
      }
    },{enableHighAccuracy: true})

    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

    // 添加带有定位的导航控件
    var navigationControl = new BMap.NavigationControl({
    // 靠左上角位置
    anchor: 0,
    // LARGE类型
    type: 1,
    // 启用显示定位//
    enableGeolocation: true
    });
    map.addControl(navigationControl);
    // 添加定位控件
    var geolocationControl = new BMap.GeolocationControl();
    geolocationControl.addEventListener("locationSuccess", function(e){
      // 定位成功事件
      var address = '';
      address += e.addressComponent.province;
      address += e.addressComponent.city;
      address += e.addressComponent.district;
      address += e.addressComponent.street;
      address += e.addressComponent.streetNumber;
      console.log("当前定位地址为：" + JSON.stringify(e.addressComponent));
    });
    geolocationControl.addEventListener("locationError",function(e){
    // 定位失败事件
    console.log(e.message);
    });
    map.addControl(geolocationControl);
  }

  render() {
    return (
      <div className={`leg-work-pos ${this.props.isShow ? 'show' : 'hide'}`}>
        <div className='leg-pos-title'>
          <span className='title-left' onClick={this.handlerReturn}><i className='iconfont icon-return'></i></span>
          <span className='title-info'>外勤地点</span>
        </div>
        <div className='baidu-map'>
          <div style={{width:"100%",height:"100%"}} id={"allmap"}></div>
        </div>
      </div>

    )
  }
}


export default class LegCreate extends Component {

    constructor(props) {
      super(props);

      this.postCreateData = {
        title:"",
        longitude:"",			//经度
        latitude:"",			//纬度
        addressName:"",			//地址名称
        startDt:"yyyy-MM-dd HH:mm:ss",		//起始时间
        endDt:"yyyy-MM-dd HH:mm:ss",		//终止时间
        planDesc:"",						//计划描述
        reportToName:"name1,name2,机构1,机构2",					//汇报名称
        reportToId:["10086","org-1111","1231"],			//汇报对象id和机构no
        relationCustomerIds: '',					//关联客户ids
        relationBusinessIds: '',						//关联商机ids
        relationSchedulers: ''
      }

      this.state={
        legWorkDetail : [],        //外勤列表详情
        startTime: '',  //开始时间
        endTime: '',  //结束时间
        followMan: [],   //汇报人
        isShowRelatePage: false, //是否展示relatePage
        isShowRelateCustomerPage: false, //是否展示关联客户页面
        isShowRelateBusinessPage: false, //是否展示关联商机页面
        isShowRelateSchedulePage: false, //是否展示关联日程页面
        isShowBMapPage: false, //是否展示百度地图页面
        relateScheduleId: '',      // 关联日程id
        relateCustomerId: '',      // 关联客户id
        relateBusinessId: '',      // 关联商机id
        customerName: '',          // 客户名称
        legWorkTitle: '',          // 标题
        legDescContent: ''               // 外勤管理描述
      }

      this.followTree = React.createRef()
      this.cooperateTree = React.createRef()

      this.followPersonConfig = {
        treeData: null,
        mode: 'single',
        title: '汇报对象',
        getAsynData: this.props.getUserByInstitutionNo,
        onConfirm: (selectedItems) => {
          this.followPersonPage.hide()
          this.setState({
            followMan: selectedItems
          })
        }
      }
    }




    handlerReturn = () => {
      let {history} = this.props;
      history.goBack();
    }

    //确定按钮提交表单
    handlerSubmit = (value) => {
      //标题
      this.postCreateData.title = this.state.legWorkTitle || ''
      //开始时间
      this.postCreateData.startDt = this.formatDate(this.state.startTime) + ':00' || ''
      //结束时间
      this.postCreateData.endDt = this.formatDate(this.state.endTime) + ':00' || ''
      //负责人
      //汇报人
      this.postCreateData.reportToName = this.state.followMan[0].name || '';
      this.postCreateData.reportToId = [this.state.followMan[0].id] || '';
      //日程关联
      this.postCreateData.relationSchedulers = [this.state.relateScheduleId] || ['']
      //商机关联
      this.postCreateData.relationBusinessIds = [this.state.relateBusinessId] || ['']
      //客户关联
      this.postCreateData.relationCustomerIds = [this.state.relateCustomerId] || ['']
      //外勤备注
      this.postCreateData.planDesc = this.state.legDescContent || ''
      this.props.getLegWorkCreate(this.postCreateData)
    }

    formatDate = (date) => {
      /* eslint no-confusing-arrow: 0 */
      if(date === undefined || date === '') {
        return
      }
      const pad = n => n < 10 ? `0${n}` : n;
      const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
      const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
      return `${dateStr} ${timeStr}`;
    }
    //机构树页面隐藏显示
    showFollowPersonHandler = () => {
      this.followPersonPage.show()
    }
    //底部出现关联隐藏与显示
    clickRelateRightPartHandler = () => {
      this.setState((prevState) => ({
        isShowRelatePage: !prevState.isShowRelatePage,
      }))
    }
    //关联客户
    toggleRelateCustomerHandler = () => {
      this.setState((prevState)=>({
        isShowRelateCustomerPage: !prevState.isShowRelateCustomerPage
      }))
    }
    //关联商机
    toggleRelateBusinessHandler = () => {
      this.setState((prevState)=>({
        isShowRelateBusinessPage: !prevState.isShowRelateBusinessPage
      }))
    }
    //关联日程
    toggleRelateScheduleHandler = () => {
      this.setState((prevState)=>({
        isShowRelateSchedulePage: !prevState.isShowRelateSchedulePage
      }))
    }
    //百度地图是否显示
    toggleBaiduMapHandler = () => {
      this.setState((prevState) => ({
        isShowBMapPage: !prevState.isShowBMapPage
      }))
    }
    //获取商机ID
    getRelateBusinessIdHandler = (id, title) => {
      this.setState({
        relateBusinessId: id,
        relateBusinessTitle: title
      })
    }
    //获取客户ID
    getRelateCustomerIdHandler = (id, title) => {
      this.setState({
        relateCustomerId: id,
        customerName: title
      })
    }
    //获取日程ID
    getRelateScheduleIdHandler = (id, title) => {
      this.setState({
        relateScheduleId: id,
        relateScheduleTitle: title
      })
    }
    //标题输入监听
    changeLegWorkTitle = (e) => {
      this.setState({
        legWorkTitle : e.target.value
      })
    }
    //文本框
    changeLegDescContent = (e) => {
      this.setState({
        legDescContent: e.target.value
      })
    }

    componentWillMount() {
      this.props.getInstitutionTree()
      // this.props.getLegWorkCreate(this.postCreateData)
    }

    componentWillReceiveProps({institutionTree}) {
      if (institutionTree !== this.props.institutionTree) {
        this.followPersonConfig.treeData = institutionTree
      }

    }

    render() {
      return (
        <div className='create-leg-component'>
          <div className='leg-create-title'>
            <span className='title-left' onClick={this.handlerReturn}><i className='iconfont icon-return'></i></span>
            <span className='title-info'>新建外勤</span>
            <span className='title-right' onClick={this.handlerSubmit}>确定</span>
          </div>
          <div className='create-form-container'>
            <InnerPage title='汇报对象' ref={followPersonPage => this.followPersonPage = followPersonPage }>
              <InstitutionTree  {...this.followPersonConfig} />
            </InnerPage>
            {/* 标题表单 */}
            <CreateItem
              type='input'
              rightTitle=''
              isImportant={true}
              leftIcon={'icon-richengzhuti'}
              leftTitle='标题'
              hasTopSpace={true}
            >
              <div className='item-right' >
                <input className='input' placeholder='请输入标题' value={this.state.legWorkTitle} onChange={this.changeLegWorkTitle} />
              </div>
            </CreateItem>
            {/* 地点表单 */}
            <CreateItem
              type='input'
              rightTitle=''
              isImportant={true}
              leftIcon={'icon-dizhi'}
              leftTitle='地点'
              hasTopSpace={true}
              hasBottomLine={true}
            >
              <div className='item-right' onClick={this.toggleBaiduMapHandler}>
                <span className='baidu-map'>请选择地点</span>
                <div className='right-attach'>
                  <i className='item-icon iconfont icon-gengduo'></i>
                </div>
              </div>
            </CreateItem>
            {/* 开始时间 */}
            <div className='date-input'>
              <DatePicker
                mode='datetime'
                title="有效时间"
                value={this.state.startTime}
                onChange={v => this.setState({ startTime: v })}
                onOk={v => this.setState({ startTime: v })}
                className='date-input'
              >
                <CreateItem
                  type='data'
                  rightTitle='请选择有效时间'
                  isImportant={true}
                  leftIcon={'icon-effective-time'}
                  leftTitle='开始时间'
                  hasBottomLine={true}
                >
                  <div className='item-right' >
                    {
                      this.formatDate(this.state.startTime) ? (<span className='data selected'>{this.formatDate(this.state.startTime)}</span>)
                      : (<span className='data'>请选择有效时间</span>)
                    }
                    <div className='right-attach'>
                      <i className='item-icon iconfont icon-calendar'></i>
                    </div>
                  </div>
                </CreateItem>
              </DatePicker>
            </div>
            <div className='date-input'>
              {/* 结束时间 */}
              <DatePicker
                mode='datetime'
                title="有效时间"
                value={this.state.endTime}
                onChange={v => this.setState({ endTime: v })}
                onOk={v => this.setState({ endTime: v })}
              >
                <CreateItem
                  type='data'
                  rightTitle='请选择有效时间'
                  isImportant={true}
                  leftIcon={'icon-effective-time'}
                  leftTitle='结束时间'
                >
                  <div className='item-right' >
                    {
                      this.formatDate(this.state.endTime) ? (<span className='data selected'>{this.formatDate(this.state.endTime)}</span>)
                      : (<span className='data'>请选择有效时间</span>)
                    }
                    <div className='right-attach'>
                      <i className='item-icon iconfont icon-calendar'></i>
                    </div>
                  </div>
                </CreateItem>
              </DatePicker>
            </div>
            {/* 汇报对象 */}
            <CreateItem
              type='input'
              rightTitle=''
              isImportant={true}
              leftIcon={'icon-follow-up'}
              leftTitle='负责人'
              hasTopSpace={true}
            >
              <div className='item-right' >
                <input className='input' placeholder='请选择负责人' />
              </div>
            </CreateItem>

            {/* 负责人 */}
            <CreateItem
              type='org'
              rightTitle='请选择汇报人'
              isImportant={true}
              leftIcon={'icon-follow-up'}
              leftTitle='汇报人'
              hasTopSpace={true}
              hasBottomLine={true}
            >
              <div className='item-right' onClick={this.showFollowPersonHandler}>
                {
                  this.state.followMan.length > 0 ? (<span className='org selected'>{this.state.followMan[0].name}</span>)
                  : (<span className='org'>请选择负责人</span>)
                }
                <div className='right-attach'>
                  <i className='item-icon iconfont icon-gengduo'></i>
                </div>
              </div>
            </CreateItem>

            {/* 关联 */}
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
              this.state.relateBusinessId ? (
                <div className='relate-items'>
                  <div className='relate-item' onClick={()=>{console.log(this.state.relateBusinessId)}}>
                    <i className='left-icon business-icon iconfont icon-guanlianshangji'></i>
                    <span className='relate-title'>关联商机-<span>{this.state.relateBusinessTitle}</span></span>
                    <i className='right-icon iconfont icon-gengduo'></i>
                  </div>
                </div>
              ) : ''
            }
            {
              this.state.relateCustomerId ? (
                <div className='relate-items'>
                  <div className='relate-item' onClick={()=>{console.log(this.state.relateCustomerId)}}>
                    <i className='left-icon customer-icon iconfont icon-guanliankehu'></i>
                    <span className='relate-title'>关联客户-<span>{this.state.customerName}</span></span>
                    <i className='right-icon iconfont icon-gengduo'></i>
                  </div>
                </div>
              ) : ''
            }
            {
              this.state.relateScheduleId ? (
                <div className='relate-items'>
                  <div className='relate-item' onClick={()=>{console.log(this.state.relateScheduleId)}}>
                    <i className='left-icon schedule-icon iconfont icon-richengzhuti'></i>
                    <span className='relate-title'>关联日程-<span>{this.state.relateScheduleTitle}</span></span>
                    <i className='right-icon iconfont icon-gengduo'></i>
                  </div>
                </div>
              ) : ''
            }
            {/* 文本框 */}
            <CreateItem
              type='textArea'
              rightTitle=''
              isImportant={true}
              leftIcon={'icon-business'}
              leftTitle='请输入外勤描述，不超过100字…'
              value={this.state.legDescContent}
              onChange={this.changeLegDescContent}
              hasTopSpace={true}
            >
            </CreateItem>
            <FadePage
              isShow={this.state.isShowRelatePage}
              toggleFadePage={this.clickRelateRightPartHandler}
              position='bottom'
            >
              <div className='relate-page-container'>
                <div className='relate-page-item'>
                  <div className='relate-item relate-customer'
                    onClick={()=>{
                      this.clickRelateRightPartHandler()
                      this.toggleRelateCustomerHandler()
                    }}>
                      <div className='relate-icon'>
                        <i className='customer-icon iconfont icon-guanliankehu'></i>
                      </div>
                    <span className='relate-title'>关联客户</span>
                  </div>
                  <div className='relate-item relate-business'
                    onClick={()=>{
                      this.clickRelateRightPartHandler()
                      this.toggleRelateBusinessHandler()
                    }}>
                      <div className='relate-icon'>
                        <i className='business-icon iconfont icon-guanlianshangji'></i>
                      </div>
                    <span className='relate-title'>关联商机</span>
                  </div>
                  <div className='relate-item relate-schedule'
                    onClick={()=>{
                      this.clickRelateRightPartHandler()
                      this.toggleRelateScheduleHandler()
                    }}>
                      <div className='relate-icon'>
                        <i className='schedule-icon iconfont icon-richengzhuti'></i>
                      </div>
                    <span className='relate-title'>关联日程</span>
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
            <RelateSchedule
              isShow={this.state.isShowRelateSchedulePage}
              goBack={this.toggleRelateScheduleHandler}
              getRelateScheduleId={this.getRelateScheduleIdHandler}
            />
            <BaiduMap
              isShow={this.state.isShowBMapPage}
              goBack={this.toggleBaiduMapHandler}
              data = {this.props}
            ></BaiduMap>
          </div>
        </div>
      )
    }
}
