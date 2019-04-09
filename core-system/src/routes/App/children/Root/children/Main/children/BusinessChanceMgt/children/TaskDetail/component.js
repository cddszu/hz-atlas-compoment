import React from 'react'
import './component.scss'
import CustomerList from 'components/CustomerList'
import icon_arrow from './images/icon_arrow@2x.png'
import creatHistory from 'history/createBrowserHistory'

const history = creatHistory();
class TaskDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowDownSendPage: false,
      businessChanceId: '',
      taskBusinessId: '',
    }
    this.toggleDownSendPageHandler = this.toggleDownSendPageHandler.bind(this)
    this.getBusinessChanceId = this.getBusinessChanceId.bind(this)
  }
  getBusinessChanceId(id) {
    this.setState({
      businessChanceId: id
    })
  }
  toggleDownSendPageHandler() {
    this.setState((prevState)=>({
      isShowDownSendPage: !prevState.isShowDownSendPage
    }))
  }
  componentDidMount() {
    let param = window.location.hash.split('?')[1]
    let taskBusinessId = param.split('=')[1]
    this.setState({
      taskBusinessId: taskBusinessId
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.taskBusinessId !== this.state.taskBusinessId) {
      this.props.getQueryBusinessTaskDetail(this.state.taskBusinessId)
    }
    if(prevState.businessChanceId !== this.state.businessChanceId) {
      this.props.getQueryDistributeDetail(this.state.businessChanceId)
    }
  }
  componentWillReceiveProps() {
  }
  render () {
    const {queryBusinessTaskDetail, queryDistributeDetail} = this.props
    return (
      <div className={`task-detail-component`}>
        <div className='task-detail'>
          <div className='task-detail-head'>
            <i className='select-cancel iconfont icon-return' onClick={()=>{history.goBack()}}></i>
            <span className='select-title'>任务详情</span>
            <span className='select-confirm'></span>
          </div>
          <div className='task-detail-container'>
            <div className='detail-content'>
              <div className='content-base'>
                <div className='content-title'>{queryBusinessTaskDetail.taskName}</div>
                <div className='content-time'>
                  <span>创建时间：</span><span>{queryBusinessTaskDetail.createdDt}</span><span className='gap'>|</span><span>最近维护时间：</span><span>{queryBusinessTaskDetail.updatedDt}</span>
                </div>
              </div>
              <div className='content-desc'>
                <div className='content-remark'>{queryBusinessTaskDetail.remark}</div>
                <div className='content-validDate'><span>有效时间：</span>{queryBusinessTaskDetail.validDate}</div>
              </div>
            </div>
            <div className='assigned-customer'>
              <div className='list-title'>已分配客户</div>
              <CustomerList
                customerList={queryBusinessTaskDetail.businessChanceResultVos['已分配客户']}
                noResultTitle='暂无已分配客户'
                togglePage={this.toggleDownSendPageHandler}
                getItemId={this.getBusinessChanceId}
                formData={[
                  {
                    title: '跟进人',
                    label: 'executorName',
                  },{
                    title: '所属机构',
                    label: 'belongOrgName',
                  },{
                    title: '商机状态',
                    label: 'businessStatus',
                  }
                ]}
              />
            </div>
            <div className='unassigned-customer'>
              <div className='list-title'>待分配客户</div>
              <CustomerList
                customerList={queryBusinessTaskDetail.businessChanceResultVos['待分配客户']}
                noResultTitle='暂无待分配客户'
                style={{background:`linear-gradient(315deg,rgba(248,54,0,1) 0%,rgba(249,212,35,1) 100%)`}}
                formData={[
                  {
                    title: '跟进人',
                    label: 'executorName',
                  },{
                    title: '所属机构',
                    label: 'belongOrgName',
                  }
                ]}
              />
            </div>
          </div>
        </div>
        <div className={`down-send-page ${this.state.isShowDownSendPage ? 'show' : 'hide'}`}>
          <div className='down-send-page-head'>
            <i className='select-cancel iconfont icon-return' onClick={this.toggleDownSendPageHandler}></i>
            <span className='select-title'>下发流程</span>
            <span className='select-confirm'></span>
          </div>
          <div className='down-send-container'>
            <div className='card-items'>
              {
                queryDistributeDetail.uglyData.map((item, index)=>(
                  <div className='card-item'>
                    <div className='first-line'>
                      <span className='send-type'>{item.receiveType === '1' ? '机构分配' : '客户经理认领'}</span>
                    </div>
                    <div className='second-line'>
                      <span className='left-org'>{item.processShName}</span>
                      <img className='middle-icon' alt='arrow' src={icon_arrow}/>
                      <span className='right-org'>{item.receiverName}</span>
                    </div>
                    <div className='three-line'>
                      <span className='send-time'>{item.operationDt}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskDetail
