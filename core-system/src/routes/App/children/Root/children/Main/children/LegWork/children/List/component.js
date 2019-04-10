import React,{Component} from 'react'
import './component.scss'
import { Switch, withRouter , HashRouter, Link  } from 'react-router-dom'
import AuthRouter from 'components/AuthRouter'
import { DatePicker } from 'antd-mobile'
import PaginationList from 'components/PaginationList'
import SearchPage from 'components/SearchPage'
import { GoBack } from 'components/lib'
import { FadePage } from 'components/lib'
import { CreateItem } from 'components/lib'
import InstitutionTree from 'components/InstitutionTree'
import { InnerPage } from 'components/lib'


// 外勤模块头部选择
const legWorkType = [
  {
    key: '1',
    value: '全部外勤'
  },
  {
    key: '2',
    value: '我发出的'
  },
  {
    key: '3',
    value: '我接收的'
  },
]

class SubTitle extends Component {

  constructor(props) {
    super(props);

    this.getListConfig = {
      //标题名称
      title:"",
      //选择人员ID
      userId: '',
      //开始时间
      startDt: "",
      //结束时间
      endDt: "",
      //外勤类型：1全部 2我发出的 3我接收的
      workOutsideType: "1",
      //页数
      pageNo:1,
      //条数
      pageSize:10,
    }
    this.state = {
      screenTag : true,
      startTime: '',  //开始时间
      endTime: '',  //结束时间
      followMan: [],
    }


    this.followTree = React.createRef()
    this.cooperateTree = React.createRef()

    this.followPersonConfig = {
      treeData: null,
      mode: 'single',
      title: '跟进人',
      getAsynData: this.props.data.getUserByInstitutionNo,
      onConfirm: (selectedItems) => {
        this.followPersonPage.hide()
        this.setState({
          followMan: selectedItems
        })
      }
    }
  }

  subTitleSelectHandler = () => {
    this.setState({
      screenTag : !this.state.screenTag
    })
  }

  resetHandler = () => {
    this.setState({
      // 开始时间
      startTime: '',
      // 结束时间
      endTime: '',
      // 跟进人
      followMan : []
    })
  }

  confirmHandler = () => {
    this.getListConfig.startDt =  this.state.startTime ? this.formatDate(this.state.startTime) + ':00' :  '';
    this.getListConfig.endDt = this.state.endTime ? this.formatDate(this.state.endTime) + ':00' :  '';
    this.getListConfig.userId = this.state.followMan[0] ? this.state.followMan[0].id : '';
    this.getListConfig.title = this.props.title;

    this.props.data.getLegWorkList(this.getListConfig)
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

  componentWillMount() {
    this.props.data.getInstitutionTree()
  }

  componentWillReceiveProps({data: {institutionTree} }) {
    if (institutionTree !== this.props.data.institutionTree) {
      this.followPersonConfig.treeData = institutionTree
    }
  }


  render () {
    return (
      <div className='sub-title'>
        {
          this.state.screenTag ? (
            <div className='sub-select'>
              <span className='out-work'>外勤</span>
              <span className='screen' onClick={this.subTitleSelectHandler}>筛选</span>
            </div>
          ) : (
            <div className='sub-select-form'>
              <InnerPage title='跟进人' ref={followPersonPage => this.followPersonPage = followPersonPage }>
                <InstitutionTree  {...this.followPersonConfig} />
              </InnerPage>
              {/* 负责人 */}
              <CreateItem
                type='org'
                rightTitle='请选择负责人'
                isImportant={true}
                leftIcon={'icon-follow-up'}
                leftTitle='负责人'
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
                    rightTitle='请选择开始时间'
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
                    rightTitle='请选择结束时间'
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
              <div className='btn-area'>
                <div className='btn btn-reset' onClick={this.resetHandler}>重置</div>
                <div className='btn btn-confirm' onClick={this.confirmHandler.bind(this)}>确定</div>
              </div>
            </div>
          )
        }
        </div>
    )
  }
}

export default class LegList extends Component {

    constructor(props) {
      super(props);

      this.getListConfig = {
        //标题名称
        title:"",
        //选择人员ID
        userId: '',
        //开始时间
        startDt: "",
        //结束时间
        endDt: "",
        //外勤类型：1全部 2我发出的 3我接收的
        workOutsideType: "1",
        //页数
        pageNo:1,
        //条数
        pageSize:10,
      }

      this.state = {
        //外勤模块列表数据
        legWorkList: [],
        //搜索页面打开标识
        isShowSearch : false,
        //发出、接入外勤显示
        isShowLegPage : false,
        //外勤类型：1全部 2我发出的 3我接收的
        workOutsideType : this.getListConfig.workOutsideType,
        //搜索关键字
        keyWord: '',
        //筛选中的开始时间
        startTime: '',
        //筛选中的结束时间
        endTime: '',
        //负责人
        followMan: ['']
      };
    }

    handlerReturn = () => {
      this.props.history.goBack();
    }

    // 搜索页面打开
    showSearchHandler = () => {
      this.setState({
        isShowSearch : true
      })
    }

    // 搜索页面关闭
    searchCancelHandler = () => {
      this.setState({
        isShowSearch : false,
      })
    }

    //获取搜索页面的关键字
    getKeyWordHandler = (value='',subState={},tag) => {
      if (tag) {
        this.setState({
          keyWord: '',
          endTime: subState.endTime || '',
          startTime : subState.startTime || '',
          followMan : subState.followMan || ['']
        })
      } else {
        this.setState({
          keyWord: value,
          endTime: subState.endTime || '',
          startTime : subState.startTime || '',
          followMan : subState.followMan || ['']
        })
      }
    }

    //发出显示
    pageSelectHandler = () => {
      this.setState({
        isShowLegPage : !this.state.isShowLegPage
      })
    }

    //全部外勤
    selectListHandler = (value) => {
      this.setState({
        workOutsideType : value.key,
        isShowLegPage : !this.state.isShowLegPage
      },() => {
        this.getListConfig.workOutsideType = this.state.workOutsideType;
        this.props.getLegWorkList(this.getListConfig)
      })
    }

    isScreenShow = () => {
      console.log('1233 :', 1233);
    }

    clickLegRightPartHandler = () => {
      this.setState((prevState) => ({
        isShowLegPage: !prevState.isShowLegPage,
      }))
    }


    componentWillMount() {
      this.tabs = [
        {title : '外勤管理'}
      ]
      this.props.getLegWorkList(this.getListConfig);
    }

    componentWillReceiveProps ({legWorkList}) {
      if (legWorkList !== this.props.legWorkList) {
        this.setState({
          legWorkList: legWorkList
        })
      }
    }

    componentDidUpdate (prevProps,prevState) {
      if(prevState.keyWord !== this.state.keyWord ||
        prevState.startTime !== this.state.startTime ||
        prevState.endTime !== this.state.endTime ||
        prevState.followMan !== this.state.followMan) {
        console.log('this.state :', this.state);
        this.getListConfig.title = this.state.keyWord
        this.getListConfig.startTime = this.state.startTime;
        this.getListConfig.endTime = this.state.endTime;
        this.getListConfig.userId = this.state.followMan.length !== 0 ? this.state.followMan[0].id : '';
        this.props.getLegWorkList(this.getListConfig);
      }
    }

    render() {
      // debugger;
      let {legWorkList,match} = this.props;
      let list = (
        <ul>
        {
          legWorkList.vos.map((item,index) => (
            <Link to={`${match.url}/detail?workOutsideId=${item.workOutsideId}`}><li className='card-item'>
              <div className='card-left'>
                <i className='leg-img'></i>
              </div>
              <div className='card-right'>
                <div className='info'>
                  <span className='info-name'>{item.createName}</span>{
                    item.isNotRead === '1' ? (
                      <span className='red-dot'></span>
                    ) : ('')
                  }
                  <span className='info-time'>{item.startDt}</span>
                </div>
                <div className='main'>
                  <span className='content'>{item.title}</span>
                </div>
                <div className='address'>
                  <span className='address-info'>{item.addressName}</span>
                </div>
              </div>
            </li></Link>
          ))
        }
        </ul>
      )

      return (
        <div className='leg-list-component'>
          <div>
            <div className='leg-title'>
              <span className='btn-return' onClick={this.handlerReturn}>
              <GoBack>
                <i className='iconfont icon-return'></i>
              </GoBack>
              </span>
              <span className='title' onClick={this.pageSelectHandler}>外勤模块<i className='iconfont icon-return'></i></span>
              <span className='btn-search' onClick={this.showSearchHandler}>
                <i className='iconfont icon-sousuo'></i>
              </span>
            </div>

            <div className='choose-leg'>

              </div>
              <div className='leg-list-container'>
                <div style={{height: `100%`}}>
                  <PaginationList
                    list={list}
                    totalCount={1000}
                    // totalCount={1000}
                    // onPullUp={this.getMoreData}
                  />
                  <Link to={`${match.url}/create`}><div className='icon-add-chance'></div></Link>
                </div>
              </div>

            {/* 搜索页面 */}
            <SearchPage
              searchCancelHandler={this.searchCancelHandler}
              getKeyWordHandler={this.getKeyWordHandler}
              isShow={this.state.isShowSearch}
              inputText={'请输入标题或负责人搜索'}
              noResultText={'未搜索到相关结果'}
              historyParam={this.historyParam}
              subSearch = {SubTitle}
              data = {this.props}
              onClick={this.isScreenShow}
            >
              {list}  {/*自定义搜索结果列表 */}
            </SearchPage>
            {/* 头顶弹窗 */}
            <FadePage
              isShow={this.state.isShowLegPage}
              toggleFadePage={this.clickLegRightPartHandler}
              position='top'
            >
              <div className='leg-work-select'>
              {
                legWorkType.map((value,index) => (
                  <div className={`all-list ${value.key === this.state.workOutsideType ? 'select' : ''}`} key={index}  onClick={this.selectListHandler.bind(this,value)}>{value.value}
                      {value.key === this.state.workOutsideType ? <i className='tick-icon'></i> : ''}
                  </div>
                ))
              }
              </div>
            </FadePage>
          </div>
          {/* 搜索页面 */}
          <SearchPage
            searchCancelHandler={this.searchCancelHandler}
            getKeyWordHandler={this.getKeyWordHandler}
            isShow={this.state.isShowSearch}
            inputText={'请输入标题或负责人搜索'}
            noResultText={'未搜索到相关结果'}
            historyParam={this.historyParam}
          >
            {list}  {/*自定义搜索结果列表 */}
          </SearchPage>
        </div>
      )
    }
}
