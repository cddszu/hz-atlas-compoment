import React from 'react'
import './component.scss'
import { Link } from 'react-router-dom'
import { DatePicker, Switch } from 'antd-mobile'
import { CreateItem } from 'components/lib'
import { FadePage } from 'components/lib'
import RelateCustomer from 'components/RelateCustomer'
import RelateBusiness from 'components/RelateBusiness'
import RelateSchedule from 'components/RelateSchedule'
import { InnerPage } from 'components/lib'
import InstitutionTree from 'components/InstitutionTree'
import { GoBack } from 'components/lib'

class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowRelatePage: false, //是否展示relatePage
      isShowRelateCustomerPage: false, //是否展示关联客户页面
      isShowRelateBusinessPage: false, //是否展示关联商机页面
      isShowRelateSchedulePage: false, //是否展示关联商机页面

      reportType: '日报', //汇报类型
      reportTime: '',  //汇报日期
      reportStartTime: '', //汇报开始日期
      reportEndTime: '', //汇报结束日期
      reportContent: '', //汇报内容
      businessId: '', //关联商机id
      customerId: '',  //关联客户id
      scheduleId: '',  //关联日程id
      customerName: '', //关联客户名称
      businessName: '', //关联商机名称
      scheduleName: '', //关联日程名称
      option: {   // selectPage配置
        type: '',
        title: '',
        content: []
      },
      inputFileData: '',
      reportTargetList: [],  //汇报对象
      isFile: false, //是否有上传文件
      fileName: '', //上传文件名字
    }
    this.reportManConfig = {
      treeData: null,
      mode: 'single',
      title: '汇报对象',
      getAsynData: this.props.getUserByInstitutionNo,
      onConfirm: (selectedItems) => {
        // let list = []
        // for(let item in selectedItems) {
        //   list.push(selectedItems[item].id)
        // }
        this.reportManPage.hide()
        this.setState({
          reportTargetList: selectedItems
        })
      }
    }
    this.roleType = localStorage.getItem('currentRole')
    this.fileInput = React.createRef();

    this.changeReportContent = this.changeReportContent.bind(this)
    this.clickRelateRightPartHandler = this.clickRelateRightPartHandler.bind(this)

    this.toggleRelateCustomerHandler = this.toggleRelateCustomerHandler.bind(this)
    this.toggleRelateBusinessHandler = this.toggleRelateBusinessHandler.bind(this)
    this.toggleRelateScheduleHandler = this.toggleRelateScheduleHandler.bind(this)

    this.getRelateBusinessIdHandler = this.getRelateBusinessIdHandler.bind(this)
    this.getRelateCustomerIdHandler = this.getRelateCustomerIdHandler.bind(this)
    this.getRelateScheduleIdHandler = this.getRelateScheduleIdHandler.bind(this)

    this.createReportHandler = this.createReportHandler.bind(this)

    this.showSelectPageHandler = this.showSelectPageHandler.bind(this)
    this.showReportManHandler = this.showReportManHandler.bind(this)
    this.clickSelectRightPartHandler = this.clickSelectRightPartHandler.bind(this)
  }
  showSelectPageHandler() {
    this.selectPage.show()
  }
  showReportManHandler() {
    this.reportManPage.show()
  }

  changeReportContent(e) {
    this.setState({
      reportContent: e.target.value
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

  toggleRelateScheduleHandler() {
    this.setState((prevState)=>({
      isShowRelateSchedulePage: !prevState.isShowRelateSchedulePage
    }))
  }
  getRelateBusinessIdHandler(id, title) {
    this.setState({
      businessId: id,
      businessName: title
    })
  }
  getRelateCustomerIdHandler(id, title) {
    this.setState({
      customerId: id,
      customerName: title
    })
  }
  getRelateScheduleIdHandler(id, title) {
    this.setState({
      scheduleId: id,
      scheduleName: title
    })
  }
  getSelectValueHandler(type, value, key) {
    if(type === 'reportType') {
      this.setState({
        reportType: value,
        reportTime: ''
      })
      this.selectPage.hide()
    } else {
      let timeArr = key.split(',')
      this.setState({
        reportTime: value,
        reportStartTime: timeArr[0],
        reportEndTime: timeArr[1]
      })
      this.selectPage.hide()
    }
  }
  clickSelectRightPartHandler(type) {
    let daily = [], weekly = [], monthly = []
    let currentTimestamp = new Date().setHours(0, 0, 0, 0)
    let oneDayTime = 24 * 60 * 60 * 1000;
    // + 86400000
    let zeroize = function (value) {
      value = String(value);
      for (var i = 0, zeros = ''; i < (2 - value.length); i++) {
        zeros += '0';
      }
      return zeros + value;
    };

    //处理日报时间
    for (let index = 0; index < 7; index++) {
      let currentDt = new Date(currentTimestamp - (index * oneDayTime))
      let year = currentDt.getFullYear()
      let month = currentDt.getMonth() + 1
      let day = currentDt.getDate()
      let newDateString = year + '-' +
        zeroize(month) + '-' +
        zeroize(day)
      let obj = { key: newDateString + ',' + newDateString, value: newDateString }
      daily.push(obj)
    }

    //处理周报时间
    for (let index = 0; index < 4; index++) {
      let now = new Date(currentTimestamp - (index * oneDayTime * 7));
      let nowTime = now.getTime();
      let day = now.getDay();
      day = day == 0 ? 7 : day; // 如果是周日，就变成周七
      let MondayTime = nowTime - (day - 1) * oneDayTime;
      let SundayTime = nowTime + (7 - day) * oneDayTime;
      let monday = new Date(MondayTime);
      let sunday = new Date(SundayTime);
      let startYear = monday.getFullYear()
      let startMonth = monday.getMonth() + 1
      let startDay = monday.getDate()
      let startString = startYear + '年' +
        zeroize(startMonth) + '月' +
        zeroize(startDay) + '日'
      let startTime = startYear + '-' +
        zeroize(startMonth) + '-' +
        zeroize(startDay)
      let endYear = sunday.getFullYear()
      let endMonth = sunday.getMonth() + 1
      let endDay = sunday.getDate()
      let endString = endYear + '年' +
        zeroize(endMonth) + '月' +
        zeroize(endDay) + '日'
      let endTime = endYear + '-' +
        zeroize(endMonth) + '-' +
        zeroize(endDay)
      let obj = { key: startTime + ',' + endTime, value: startString + ' - ' + endString }
      weekly.push(obj)
    }

    //处理月报时间
    for (let index = 0; index < 4; index++) {
      //获取当前时间
      var currentDate = new Date(currentTimestamp - (index * oneDayTime * 31))
      //获得当前月份0-11
      var currentMonth = currentDate.getMonth();
      //获得当前年份4位年
      var currentYear = currentDate.getFullYear();
      //求出本月第一天
      var firstDay = new Date(currentYear, currentMonth, 1);
      //求出本月最后一天
      var lastDay = new Date(currentYear, currentMonth + 1, 0);
      //当为12月的时候年份需要加1
      //月份需要更新为0 也就是下一年的第一个月
      if (currentMonth == 11) {
        currentYear++;
        currentMonth = 0; //就为
      } else {
        //否则只是月份增加,以便求的下一月的第一天
        currentMonth++;
      }
      //求出第一天的日期yyyy-mm-dd
      let startYear = firstDay.getFullYear()
      let startMonth = firstDay.getMonth() + 1
      let startDay = firstDay.getDate()
      let startTime = startYear + '-' +
        zeroize(startMonth) + '-' +
        zeroize(startDay)
      //求出最后一天的日期yyyy-mm-dd
      let endYear = lastDay.getFullYear()
      let endMonth = lastDay.getMonth() + 1
      let endDay = lastDay.getDate()
      let endTime = endYear + '-' +
        zeroize(endMonth) + '-' +
        zeroize(endDay)
      let obj = { key: startTime + ',' + endTime, value: firstDay.getFullYear() + '年' + (firstDay.getMonth() + 1) + '月' }
      monthly.push(obj)
    }

    if(type === 'reportType') {
      this.setState({
        option: {
          type: 'reportType',
          title: '汇报类型',
          content:[{
            key: '日报',
            value: '日报'
          },{
            key: '周报',
            value: '周报'
          },{
            key: '月报',
            value: '月报'
          }]
        }
      })
    } else if(type === '日报') {
      this.setState({
        option: {
          type: 'dayType',
          title: '日期',
          content: daily
        }
      })
    } else if(type === '周报') {
      this.setState({
        option: {
          type: 'weekType',
          title: '日期',
          content: weekly
        }
      })
    } else if(type === '月报') {
      this.setState({
        option: {
          type: 'MonthType',
          title: '日期',
          content: monthly
        }
      })
    }
    this.showSelectPageHandler()
  }
  createReportHandler() {
    let reportTargetList = []
    this.state.reportTargetList.map((item, index)=>{
      reportTargetList.push(item.id)
    })
    let bodyData = {
      relevanceBusinessList: [this.state.businessId],
      relevanceCustomerList: [this.state.customerId],
      relevanceScheduleList: [this.state.scheduleId],
      relevanceFileList: null,
      reportContent: this.state.reportContent,
      reportTargetList: reportTargetList,
      reportDateStart: this.state.reportStartTime,
      reportDateEnd: this.state.reportEndTime,
      reportType: this.state.reportType === '日报' ? '1' : (this.state.reportType === '周报' ? '2' : '3')
    }
    this.props.createReport(bodyData)
  }
  //附件上传
  inputUploadHandler = (e) => {
    const file = e.target.files[0];
    const fileName = e.target.files[0].name;
    if (!file) {
        return;
    }
    this.setState ({
      inputFileData: file,
      isFile: true,
      fileName: fileName
    },() => {
      const form = new FormData();
      form.append('file', this.state.inputFileData);
      this.props.upFileReport(form)
    })
  }
  //删除附件上传
  deleteFileHandler = () => {
    this.setState({
      isFile: false,
    })
  }
  //下载附件
  downLoadFileHandler = () => {
    const downloadUrl = 'http://localhost:3000/crm-jj/api/file/fileDown?fileId=113928';
    fetch(downloadUrl, {
        method: 'get',
        credentials: 'include',
    }).then((response) => {
       console.log('response :', response);
        response.blob().then( blob => {
          console.log('blob :', blob);
          var fileName = response.headers.get('Content-Disposition').split('=')[1];
          var reader = new FileReader()
          reader.readAsDataURL(blob)
          reader.onload = function (e) {
            let a = document.getElementById('a_id');
            console.log('value :', fileName);
            a.download = '123123.jpg'  //设置文件格式
            a.href = e.target.result
            // debugger;
            document.body.appendChild(a);
            a.click();
          }
        });
    }).catch((error) => {
        console.log(error);
    });
    // this.props.getDownFileReport('113928',this.downLoadFile)
  }
  downLoadFile = () => {
    console.log('123123 :', 123123);
    let value = "32位精度.jpg";
    let formData = new FormData();
    for (let i in value) {
      formData.append(i, value[i]);
    }
  }
  componentWillMount() {
    this.props.getInstitutionTree()
  }
  componentWillReceiveProps({ institutionTree }) {
    if (institutionTree !== this.props.institutionTree) {
      this.reportManConfig.treeData = JSON.parse(JSON.stringify(institutionTree))
    }
  }
  render () {
    return (
      <div className='create-report-component'>
        <div className='create-report-head'>
          <GoBack>
            <i className='create-cancel iconfont icon-return'></i>
          </GoBack>
          <span className='create-title'>新建汇报</span>
          <span className='create-confirm' onClick={this.createReportHandler}>发送</span>
        </div>
        <div className='create-report-container'>
          <CreateItem
            type='input'
            leftIcon={'icon-huibaoleixing'}
            leftTitle='汇报类型'
            isImportant={true}
            hasTopSpace={true}
            hasBottomLine={true}
          >
            <div className='item-right' onClick={this.clickSelectRightPartHandler.bind(this, 'reportType')}>
              {
                this.state.reportType ? (<span className='customer-type selected'>{this.state.reportType}</span>)
                : (<span className='customer-type'>请选择汇报类型</span>)
              }
              <div className='right-attach'>
                <i className='item-icon iconfont icon-gengduo'></i>
              </div>
            </div>
          </CreateItem>
          <CreateItem
            type='org'
            leftIcon={'icon-follow-up'}
            leftTitle='汇报对象'
            isImportant={true}
            hasBottomLine={true}
          >
            <div className='item-right' onClick={this.showReportManHandler}>
              {
                this.state.reportTargetList.length > 0 ? (
                  <span className='org selected'>
                    {
                      this.state.reportTargetList.map((item, index)=>(
                        this.state.reportTargetList.length === index+1 ?
                        <span key={item.id}>{item.name}</span> : <span key={item.id}>{item.name+','}</span>
                      ))
                    }
                  </span>
                ) : (<span className='org'>请选择汇报对象</span>)
              }
              <div className='right-attach'>
                <i className='item-icon iconfont icon-gengduo'></i>
              </div>
            </div>
          </CreateItem>
          <CreateItem
            type='data'
            leftIcon={'icon-effective-time'}
            leftTitle='日期'
            isImportant={true}
          >
            <div className='item-right' onClick={this.clickSelectRightPartHandler.bind(this, this.state.reportType)}>
              {
                this.state.reportTime ? (<span className='data selected'>{this.state.reportTime}</span>)
                : (<span className='data'>请选择汇报日期</span>)
              }
              <div className='right-attach'>
                <i className='item-icon iconfont icon-gengduo'></i>
              </div>
            </div>
          </CreateItem>
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
                  <span className='relate-title'>关联商机-<span>{this.state.businessName}</span></span>
                  <i className='right-icon iconfont icon-gengduo'></i>
                </div>
              </div>
            ) : ''
          }
          {
            this.state.scheduleId ? (
              <div className='relate-items'>
                <div className='relate-item' onClick={()=>{console.log(this.state.scheduleId)}}>
                  <i className='left-icon relate-schedule-icon iconfont icon-related-schedule'></i>
                  <span className='relate-title'>关联日程-<span>{this.state.scheduleName}</span></span>
                  <i className='right-icon iconfont icon-gengduo'></i>
                </div>
              </div>
            ) : ''
          }
          <div className='report-content'>
            <div className='content-head'>
              <span>汇报内容</span>
              <label for="inputFile" class="button">
                <i className='iconfont icon-fujian'></i>
              </label>
              <input type="file" id="inputFile"   ref={this.fileInput} onChange={this.inputUploadHandler}/>
            </div>
            <textarea className='report-textarea' value={this.state.reportContent} onChange={this.changeReportContent}></textarea>
            {
              this.state.isFile ? (
                <div className='upfile-show'>
                  <i className='iconfont icon-fujian'></i>
                  <span onClick={this.downLoadFileHandler}>{this.state.fileName}</span>
                  <i className='iconfont icon-delete icon-del' onClick={this.deleteFileHandler}></i>
                </div>
              ) : ('')
            }
          </div>
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
              <div className='relate-item relate-business'
                onClick={()=>{
                  this.clickRelateRightPartHandler();
                  this.toggleRelateScheduleHandler()
                }}>
                <div className='icon-block'>
                  <i className='relate-icon schedule-icon iconfont icon-related-schedule'></i>
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
        <InnerPage
          ref={selectPage => this.selectPage = selectPage }
          title={this.state.option.title}
        >
          <div className='select-page-container'>
            <div className='select-items'>
              {
                this.state.option.content.map(item => (
                  <div className='select-item' key={item.key} onClick={this.getSelectValueHandler.bind(this, this.state.option.type, item.value, item.key)}>
                    <span className='item-name'>{item.value}</span>
                    <i className='item-icon iconfont icon-select'></i>
                  </div>
                ))
              }
            </div>
          </div>
        </InnerPage>
        <InnerPage title='汇报对象' ref={reportManPage => this.reportManPage = reportManPage }>
          <InstitutionTree  {...this.reportManConfig} />
        </InnerPage>
        <a id='a_id'></a>
      </div>
    )
  }
}

export default Create
