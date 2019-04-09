import React from 'react'
import './component.scss'
import { BrowserRouter as Router, Route, Switch, withRouter, HashRouter } from 'react-router-dom'
import HeadIcon from './images/head@2x.png'
class SelectRole extends React.Component {

  selectRoleHandler(roleId, currentRole) {
    this.props.confirmRole(roleId, {
      message: '选择角色成功',
      callback: () => {
        window.location.href = '/#/root/main/home'
        localStorage.setItem('currentRole', currentRole)
      }
    })
  }

  componentWillMount() {
    let roleListStr = localStorage.getItem('roleList')
    this.roleList = roleListStr ? JSON.parse(roleListStr) : []
    if (this.roleList.length === 1) {
      window.location.href = '/#/root/main/home'
    }
  }
  render () {
    return (
      <div className="selectRole-component">
        <div className='header-title'>角色选择</div>
        <div className='role-list'>
          {
            this.roleList.map(roleItem => {
              return (
                <div className='role-item' onClick={this.selectRoleHandler.bind(this, roleItem.id, roleItem.remark)} key={roleItem.id}>
                  <img className='head' src={ HeadIcon }/>
                  <span className='role-name'>{ roleItem.name }</span>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default SelectRole
