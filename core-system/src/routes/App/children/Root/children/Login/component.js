import React from 'react'
import './component.scss'
import { Button } from 'antd-mobile'
import { commonChangeHandler } from 'utils/antd'
import Logo from './images/logo.png'
const height = document.body.clientHeight
class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      formDatas: {
        username: '',
        password: ''
      },
      isShowfoot: true,
    }
    this.submitHandler = this.submitHandler.bind(this)
    this.resize = this.resize.bind(this)
  }
  resize() {
    let clientHeight = document.body.clientHeight
    if(clientHeight === height) {
      this.setState({
        isShowfoot: true
      })
    } else {
      this.setState({
        isShowfoot: false
      })
    }
  }
  submitHandler() {
    this.props.login(this.state.formDatas)
  }
  changeHandler(key, value) {
    commonChangeHandler(this, 'formDatas', key, value)
  }
  // 监控屏幕高度，解决fixed定位 键盘会顶起该fixed定位块
  screenChange() {
    window.addEventListener('resize', this.resize);
  }
  componentDidMount() {
    this.screenChange()
  }
  componentWillUnmount() {
    window.removeEventListener('resize',this.resize);
  }

  render () {
    return (
      <div className='login-component'>
        <div className='login-component-content'>
          <div className="logo-area">
            <img alt='logo' src={Logo} />
            <p className='bank-name'>对公智能CRM平台</p>
          </div>
          <form autoComplete='off'>
            <input
              className="input-username"
              autoComplete='off'
              type="text"
              placeholder="请输入手机号或工号"
              ref="bodyBox"
              onChange={this.changeHandler.bind(this, 'username')}
            />
            <input
              className="input-password"
              autoComplete='off'
              type="password"
              placeholder="请输入密码"
              onChange={this.changeHandler.bind(this, 'password')}
            />
          </form>
          {/* <div className="validation-tips">6-20位字符，区分大小写</div> */}
          <div className="login-btn" onClick={this.submitHandler}>登录</div>
          <div className={`copyright ${this.state.isShowfoot ? 'show' : 'hide'}`}>
            <p>版权所有：北京海致星图科技网络有限公司</p>
            <p>备案号：京ICP备18015014号</p>
          </div>
        </div>
      </div>
    )
  }
}

const Login = LoginForm

export default Login
