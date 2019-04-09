import React from 'react'
import './component.scss'
import { Link } from 'react-router-dom'

class Member extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groupTitle: '', //分组名称
      groupNote: '', //分组备注
      groupTime: '',
    }

    this.roleType = localStorage.getItem('currentRole')
  }

  componentWillMount() {
    let bodyData = {
      groupId: this.props.groupMsg.groupId,
      pageNo: 1,
      pageSize: 10
    }
    this.props.getMyGroupList(bodyData)
  }
  componentWillReceiveProps() {
  }
  render () {
    const {myGroupList} = this.props
    return (
      <div className={`member-component ${this.props.isShow ? 'show' : 'hide'}`}>
        <div className='group-member-head'>
          <i className='select-cancel iconfont icon-return' onClick={this.props.togglePage}></i>
          <span className='select-title'>{this.props.groupMsg.groupName}</span>
          <span className='select-confirm'>添加</span>
        </div>
        <div className='group-member-container'>

        </div>
      </div>
    )
  }
}

export default Member
