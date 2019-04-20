import React from 'react'
import './component.scss'
import { SwipeAction, Modal } from 'antd-mobile'
import creatHistory from 'history/createBrowserHistory'
import CreateGroup from '../Create'
import EditGroup from '../Edit'
import MemberList from '../Member'

const history = creatHistory();
class MyGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowCreateGroupPage: false,
      isShowEditGroupPage: false,
      isShowGroupMemberPage: false,
      groupMsg: {},
    }
    this.toggleCreateGroupPageHandler = this.toggleCreateGroupPageHandler.bind(this)
    this.toggleEditGroupPageHandler = this.toggleEditGroupPageHandler.bind(this)
    this.toggleGroupMemberPageHandler = this.toggleGroupMemberPageHandler.bind(this)
    this.openEditPageHandler = this.openEditPageHandler.bind(this)
    this.openMemberPageHandler = this.openMemberPageHandler.bind(this)
  }
  toggleCreateGroupPageHandler() {
    this.setState((prevState)=>({
      isShowCreateGroupPage: !prevState.isShowCreateGroupPage
    }))
  }
  toggleEditGroupPageHandler() {
    this.setState((prevState)=>({
      isShowEditGroupPage: !prevState.isShowEditGroupPage
    }))
  }
  toggleGroupMemberPageHandler() {
    this.setState((prevState)=>({
      isShowGroupMemberPage: !prevState.isShowGroupMemberPage
    }))
  }
  openEditPageHandler(item) {
    this.setState({
      groupMsg: item
    })
    this.toggleEditGroupPageHandler()
  }
  openMemberPageHandler(item) {
    this.setState({
      groupMsg: item
    })
    this.toggleGroupMemberPageHandler()
  }
  componentWillMount() {
    this.props.getMyGroupList()
  }
  componentDidUpdate(prevProps, prevState) {

  }
  componentWillReceiveProps() {
  }
  render () {
    const {myGroupList} = this.props
    return (
      <div className={`my-group-component`}>
        <div className='my-group-head'>
          <i className='select-cancel iconfont icon-return' onClick={()=>{history.goBack()}}></i>
          <span className='select-title'>我的分组</span>
          <i className='select-confirm iconfont icon-xinjianfenzu' onClick={this.toggleCreateGroupPageHandler}></i>
        </div>
        <div className='my-group-container'>
          <div className='group-items'>
            {
              myGroupList.uglyData.map((item)=>(
                <SwipeAction
                  className='swiper-item'
                  autoClose
                  key={item.groupId}
                  right={[
                    {
                      text: '编辑',
                      onPress: () => {
                        this.openEditPageHandler(item)
                      },
                      style: {
                        width:'1.6533rem',
                        height:'100%',
                        background:'#FF9D13',
                        color: '#FFF',
                        fontSize: '0.4267rem',
                      },
                    },
                    {
                      text: '删除',
                      onPress: () => {
                        this.props.deleteGroup(item.groupId, this.props.getMyGroupList())
                      },
                      style: {
                        width:'1.6533rem',
                        height:'100%',
                        background:'#F4333C',
                        color: '#FFF',
                        fontSize: '0.4267rem',
                      },
                    },
                  ]}
                >
                  <div className='group-item' onClick={this.openMemberPageHandler.bind(this, item)}>
                    <div className='left-part'>
                      <i className='group-icon iconfont icon-kehuzutubiao'></i>
                      <span className='group-title'>{item.groupName}</span>
                    </div>
                    <div className='right-part'>
                      <div className='person-num'>
                        <i className='preson-icon iconfont icon-zurenshu'></i>
                        <span className='num'>{'123'}</span>
                      </div>
                      <div className='create-time'>
                        <i className='time-icon iconfont icon-effective-time'></i>
                        <span className='time'>{item.createDate}</span>
                      </div>
                    </div>
                  </div>
                </SwipeAction>
              ))
            }
          </div>
        </div>
        <CreateGroup
          isShow={this.state.isShowCreateGroupPage}
          toggleCreateGroupPage={this.toggleCreateGroupPageHandler}
        />
        <EditGroup
          isShow={this.state.isShowEditGroupPage}
          toggleEditGroupPage={this.toggleEditGroupPageHandler}
          groupMsg={this.state.groupMsg}
        />
        <MemberList
          isShow={this.state.isShowGroupMemberPage}
          togglePage={this.toggleGroupMemberPageHandler}
          groupMsg={this.state.groupMsg}
        />
      </div>
    )
  }
}

export default MyGroup
