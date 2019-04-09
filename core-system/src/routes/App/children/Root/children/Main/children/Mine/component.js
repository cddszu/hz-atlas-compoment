import React from 'react'
import './component.scss'
import { BrowserRouter as Router, Route, Switch, withRouter, HashRouter } from 'react-router-dom'
import HeadIcon from './images/head@2x.png'
class SelectRole extends React.Component {

  loginOut() {
    this.props.loginout()
  }

  componentWillMount() {
    this.props.getLoginUserInfo()
  }
  render () {
    const {loginUserInfo} = this.props
    return (
      <div className="mine-component">
        <div className='mine-header'>
          <div className='mine-head'>
            <div className='left-part'></div>
            <div className='right-part'>
              <div className='mine-name'>{loginUserInfo.name}</div>
              <div className='mine-office'>{loginUserInfo.roleName}</div>
            </div>
          </div>
        </div>
        <div className='mine-container'>
          <div className='info-border'>
            <div className='item'>
              <div className='left-part'>
                <i className='mine-icon mine-userno iconfont icon-wodegonghao'></i>
              </div>
              <div className='right-part'>
                <div className='item-content'>{loginUserInfo.userNo}</div>
                <div className='item-title'>我的工号</div>
              </div>
            </div>
            <div className='item'>
              <div className='left-part'>
                <i className='mine-icon mine-org iconfont icon-suoshujigou'></i>
              </div>
              <div className='right-part'>
                <div className='item-content'>{loginUserInfo.institutionName}({loginUserInfo.institutionCode})</div>
                <div className='item-title'>所属机构</div>
              </div>
            </div>
            <div className='item'>
              <div className='left-part'>
                <i className='mine-icon mine-email iconfont icon-wodeyouxiang'></i>
              </div>
              <div className='right-part'>
                <div className='item-content'>{loginUserInfo.email || '--'}</div>
                <div className='item-title'>我的邮箱</div>
              </div>
            </div>
            <div className='item'>
              <div className='left-part'>
                <i className='mine-icon mine-phone iconfont icon-shoujihaoma'></i>
              </div>
              <div className='right-part'>
                <div className='item-content'>{loginUserInfo.phone || '--'}</div>
                <div className='item-title'>手机号码</div>
              </div>
            </div>
          </div>
          <div className='out-login' onClick={this.loginOut.bind(this)}>退出登录</div>
        </div>
      </div>
    )
  }
}

export default SelectRole
