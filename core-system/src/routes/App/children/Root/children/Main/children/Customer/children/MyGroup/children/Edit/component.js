import React from 'react'
import './component.scss'
import { Link } from 'react-router-dom'
import { DatePicker, Switch } from 'antd-mobile'
import CreateItem from 'components/hz/CreateItem'

class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groupTitle: '', //分组名称
      groupNote: '', //分组备注
      groupTime: '',
    }

    this.roleType = localStorage.getItem('currentRole')

    this.changeGroupTitle = this.changeGroupTitle.bind(this)
    this.changeGroupNote = this.changeGroupNote.bind(this)
    this.updateGroupHandler = this.updateGroupHandler.bind(this)
  }

  changeGroupTitle(e) {
    this.setState({
      groupTitle: e.target.value
    })
  }
  changeGroupNote(e) {
    this.setState({
      groupNote: e.target.value
    })
  }

  updateGroupHandler() {
    let bodyData = {
      id: this.props.groupMsg.groupId,
      name: this.state.groupTitle,
      remark: this.state.groupNote,
    }
    let {updateGroup, toggleEditGroupPage, getMyGroupList} = this.props
      updateGroup(bodyData, getMyGroupList)
      toggleEditGroupPage()

  }

  componentWillReceiveProps({ groupMsg, isShow }) {
    if (groupMsg !== this.props.groupMsg && isShow) {
      this.setState({
        groupTitle: groupMsg.groupName,
        groupNote: groupMsg.remark,
        groupTime: groupMsg.createDate,
      })
    }
  }
  render () {
    return (
      <div className={`edit-component ${this.props.isShow ? 'show' : 'hide'}`}>
        <div className='edit-group-head'>
          <i className='select-cancel iconfont icon-return' onClick={this.props.toggleEditGroupPage}></i>
          <span className='select-title'>编辑分组</span>
          <span className='select-confirm' onClick={this.updateGroupHandler}>确定</span>
        </div>
        <div className='edit-group-container'>
          <CreateItem
            type='input'
            leftIcon={'icon-fenzumingcheng'}
            leftTitle='分组名称'
            isImportant={true}
            hasTopSpace={true}
          >
            <div className='item-right' >
              <input className='input' placeholder='请输入分组名称' value={this.state.groupTitle} onChange={this.changeGroupTitle}/>
            </div>
          </CreateItem>
          <CreateItem
            type='text'
            rightTitle='创建时间'
            leftIcon={'icon-effective-time'}
            leftTitle='商机状态'
          >
            <div className='item-right' >
              <span className='text'>{this.state.groupTime}</span>
            </div>
          </CreateItem>
          <CreateItem
            type='textArea'
            leftTitle={'请输入分组备注，不超过100字…'}
            value={this.state.groupNote}
            onChange={this.changeGroupNote}
            hasTopSpace={true}
          ></CreateItem>
        </div>
      </div>
    )
  }
}

export default Edit
