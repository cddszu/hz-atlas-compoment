import React from 'react'
import './component.scss'
import { Link } from 'react-router-dom'
import { DatePicker } from 'antd-mobile'
import CreateItem from 'components/hz/CreateItem'
import FadePage from 'components/hz/FadePage'
import RelateSchedule from 'components/RelateSchedule'
import creatHistory from 'history/createBrowserHistory'
import InstitutionTree from 'components/InstitutionTree'
import TreeSelect from 'components/hz/TreeSelect'
import InnerPage from 'components/hz/InnerPage'
import ReturnHeader from 'components/hz/ReturnHeader'

const history = creatHistory()

class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowSelectPage: false,  //是否展示selectPage
      isShowSearchPage: false, //是否展示searchPage
      isShowRelatePage: false, //是否展示relatePage
      isShowRelateSchedulePage: false, //是否展示关联日程页面
      businessTitle: '', //商机标题
      businessContent: '', //商机描述
      customerType: '',  //客户类型
      possibleValue: '未知',  //可能性
      followMan: [],   //跟进人
      Collaborator: [],  //协同人
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

    this.followPersonConfig = {
      treeData: null,
      mode: 'single',
      title: '跟进人',
      treeType: 'area',
      // getAsynData: this.props.getUserByInstitutionNo,
      onConfirm: (selectedNodes, selectedLeafNodes) => {
        // this.followPersonPage.hide()
        this.setState({
          followMan: selectedLeafNodes
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
          Collaborator: selectedItems
        })
      }
    }

    this.roleType = localStorage.getItem('currentRole')

    this.formatDate = this.formatDate.bind(this)
    this.toggleSelectItemHandler = this.toggleSelectItemHandler.bind(this)
    this.getOptionHandler = this.getOptionHandler.bind(this)
    this.getSelectValueHandler = this.getSelectValueHandler.bind(this)
    this.clickSelectRightPartHandler = this.clickSelectRightPartHandler.bind(this)
    this.changeSearchValueHandler = this.changeSearchValueHandler.bind(this)
    this.changeBusinessTitle = this.changeBusinessTitle.bind(this)
    this.changeBusinessContent = this.changeBusinessContent.bind(this)

    this.getSearchValueHandler = this.getSearchValueHandler.bind(this)
    this.clickRelateRightPartHandler = this.clickRelateRightPartHandler.bind(this)
    this.toggleRelateScheduleHandler = this.toggleRelateScheduleHandler.bind(this)
    this.getRelateScheduleIdHandler = this.getRelateScheduleIdHandler.bind(this)
    this.createBusinessChanceHandler = this.createBusinessChanceHandler.bind(this)
    this.clickCancelButtonHandler = this.clickCancelButtonHandler.bind(this)
    this.showFollowPersonHandler = this.showFollowPersonHandler.bind(this)
    this.showCooperateHandler = this.showCooperateHandler.bind(this)
  }
  formatDate(date) {
    /* eslint no-confusing-arrow: 0 */
    if(date === undefined) {
      return
    }
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    return `${dateStr} ${timeStr}`;
  }
  changeBusinessTitle(e) {
    this.setState({
      businessTitle: e.target.value
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
    if(type === 'customerType') {
      this.setState({
        option: {
          type: 'customerType',
          title: '客户类型',
          content:[{
            key: '行内',
            value: '行内'
          },{
            key: '行外',
            value: '行外'
          }]
        }
      })
    } else {
      this.setState({
        type: 'possiblity',
        option: {
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
    if(type === 'customerType') {
      this.setState({
        customerType: value
      })
    } else {
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
  createBusinessChanceHandler() {
    let possibleKey = ''
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

    let cooperators = []
    this.state.Collaborator.map((item, index) => {
      let object = {}
      object.id = item.id
      object.name = item.name
      cooperators.push(object)
    })
    let bodyData = {
      businessStatus: '1',  //商机状态 1:新建,2:沟通,3:完成,4:终止 ,
      cooperators: cooperators,  //协同人
      customerId: this.state.customerId,  //客户id
      customerName: this.state.searchValue,   //客户名
      customerType: this.state.customerType === '行内' ? '1' : '0',  //客户类型
      enable: possibleKey,   //可能性
      executor: this.state.followMan.length > 0 ? this.state.followMan[0].id : '',   //跟进人
      executor_org: this.state.followMan.length > 0 ? this.state.followMan[0].belongOrgNum : '',  //跟进机构 ，和跟进人互斥
      name: this.state.businessTitle,  //商机名称
      remark: this.state.businessContent,  //商机备注
      schedulerDateIds: [this.state.relateScheduleId],  //关联日程id，单选
      validDt: this.formatDate(this.state.validTime) + ':00',  //有效时间
    }
    this.props.createBusinessChance(bodyData)
    // this.clickCancelButtonHandler()
  }
  clickCancelButtonHandler() {
    history.goBack()
  }
  showFollowPersonHandler() {
    // this.tree.show()
    this.followPersonPage.show()
  }
  showCooperateHandler() {
    this.cooperatePage.show()
  }
  componentWillMount() {
    // this.props.getInstitutionTree()
  }
  componentDidMount() {
  }
  componentWillReceiveProps({ institutionTree }) {
    if (institutionTree !== this.props.institutionTree) {
      this.followPersonConfig.treeData = JSON.parse(JSON.stringify(institutionTree))
      this.cooperateTreeConfig.treeData = JSON.parse(JSON.stringify(institutionTree))
      // this.followPersonConfig = Object.assign({}, this.fsollowPersonConfig, {treeData: institutionTree})
    }
  }
  render () {
    const {customerSearchResult} = this.props
    return (
      <div className='create-component'>
        <TreeSelect />
      </div>
    )
  }
}

export default Create
