import React from 'react'
import './component.scss'
import { Link } from 'react-router-dom'
import { CreateItem } from 'components/lib'

class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groupTitle: '', //分组名称
      groupNote: '', //分组备注
    }

    this.roleType = localStorage.getItem('currentRole')

    this.changeGroupTitle = this.changeGroupTitle.bind(this)
    this.changeGroupNote = this.changeGroupNote.bind(this)
    this.createGroupHandler = this.createGroupHandler.bind(this)
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

  createGroupHandler() {
    let bodyData = {
      name: this.state.groupTitle,
      remark: this.state.groupNote,
    }
    let {createGroup, toggleCreateGroupPage, getMyGroupList} = this.props
    createGroup(bodyData, getMyGroupList)
    toggleCreateGroupPage()
  }

  componentWillReceiveProps({ isShow }) {
    if (isShow !== this.props.isShow && isShow) {
      this.setState({
        groupTitle: '',
        groupNote: '',
      })
    }
  }
  render () {
    return (
      <div className={`create-component ${this.props.isShow ? 'show' : 'hide'}`}>
        <div className='create-business-head'>
          <i className='select-cancel iconfont icon-return' onClick={this.props.toggleCreateGroupPage}></i>
          <span className='select-title'>新建分组</span>
          <span className='select-confirm' onClick={this.createGroupHandler}>确定</span>
        </div>
        <div className='create-business-container'>
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

export default Create
