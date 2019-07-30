import React from 'react'
import './component.less'
import { Modal, Form, Input,Button } from 'antd'
import { removeCookie } from 'utils/cookie'
import RoleSelect from './RoleSelect'
import axios from 'axios'
import { get } from './request'


const FormItem = Form.Item
const type = 'SYS'
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasLogin: false,         // 是否登录
      userInfo: {},
      showChangePwdModal: false,
      newPw: {},
      canOperation: true,
      roleAndProject: {}
    }
  }
  setModalVisable(key, value){
    this.setState({
      [key] : value,
      newPw: {}
    })
  }

  logoJumpTo() {
  let appFront = JSON.parse(sessionStorage.getItem('appFront'))
  let host = appFront[type]
    window.location.href = host
  }
  componentDidMount () {
    // todo
    // 这里需要抽离的干净一些
    get({
      url: `/middle/gap/api/user/getRoleAndProject`,
      successConfig: {
        callback: res => {
          this.setState({
            roleAndProject: res.data
          })
        }
      }
    })()
    get({
      url: `/middle/api/auth/findLoginUser`,
      successConfig: {
        callback: res => {
          this.setState({
            userInfo: res.data
          })
        }
      }
    })()
  }
  componentWillReceiveProps({userInfo}){
    if (userInfo !== this.props.userInfo) {
      this.setState({
        userInfo: userInfo.data
      })
    }
  }

  changePassword () {
    this.setModalVisable('showChangePwdModal', true)
  }

  loginOut() {
    let _this = this
    get({
      url: '/middle/api/auth/logout',
      successConfig: {
        callback: (res) => {
          if(res.success) {
            removeCookie('JSESSIONID')
            setTimeout(() => {
              _this.logoJumpTo()
            })
          }
        }
      }
    })
  }
  submitHandler() {
    let {userInfo, form} = this.props
    form.validateFields((err, values) => {
      if (!err) {
        let {newPw} = this.state
        let {userNo}= userInfo.data
        let {password, passwordOld} = newPw
        let data = {
          password, passwordOld, userNo
        }
        this.props.changePassword(data, () => {
          setTimeout(() => {
            this.logoJumpTo()
          }, 1000)

        })
      }
    });

  }
  cancelHandler() {
    // 初始化
    this.setModalVisable('showChangePwdModal', false)
  }
  valueChangeHandler(type, e) {
    // 类型判断逻辑处理
    let {newPw} = this.state
    newPw[type] = e.target.value
    let result = this.checkData(newPw)
    this.setState({newPw, canOperation: result})
  }
  checkData(data) {
    if(!data['password'] || !data['passwordOld'] || !data['confirmPassword']) {
      return true
    } else if( !/^[a-zA-Z0-9_.-@!#$%&*?<>/~,+=]{5,15}$/g.test(data['password'])) {
      return true
    } else if (data['password'] !== data['confirmPassword']) {
      return true
    } else {
      return false
    }
  }
  // 校验密码
  checkConfirmPassword(rule, value, callback) {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致，请重新输入');
    } else {
      callback();
    }
  }
  checkNextConfirm(rule, value, callback) {
    let { form } = this.props;
    if (value && form.getFieldValue('confirmPassword')) {
      form.validateFields(['confirmPassword'], { force: true });
    }
    callback();
  }
  showRoleSelect (isShow){
    this.props.showRoleSelect(isShow)
  }
  render () {
    const { getFieldDecorator } = this.props.form
    let {roleAndProject} = this.state
    const colProps = {
      labelCol: { span: 5 },
      wrapperCol: { span: 18 }
    }
    let {showChangePwdModal, newPw, userInfo, canOperation} = this.state
    return (
      <div className='hz-atlas-header'>
        {/* <RoleSelect /> */}
        <span onClick={this.logoJumpTo.bind(this)}><i className='logo' /><i className='logo_title'>知识图谱平台</i></span>
        <span className="header_role" onClick={this.showRoleSelect.bind(this, true)}>{ roleAndProject.projectName || '角色选择'}</span>
        {
          userInfo.userName ?
            <div className='header-right'>
              <div className='account-box'>
                <span className='account-portrait iconfont icon-personal'></span>
                <span className='account-name' title={userInfo.userName}>{userInfo.userName}</span>
                <span className='arrow-down'></span>
                <ul className='pop-ul'>
                  <li className='pop-li'><span className='pop-li-a' onClick={this.changePassword.bind(this)}>修改密码</span></li>
                  <li className='pop-li'><span className='pop-li-a' onClick={this.loginOut.bind(this)}>退出登录</span></li>
                </ul>
              </div>
            </div>
            :
            <div className='nologin'>
              <h1 onClick={this.logoJumpTo.bind(this)}>登录</h1>
            </div>
        }
        {showChangePwdModal && <Modal title='修改密码'  className='password_box'
          visible={true}
          okText={'确定'}
          width={418}
          onOk={this.submitHandler.bind(this)}
          onCancel={this.cancelHandler.bind(this)}
          footer={[
            <Button key="back" onClick={this.cancelHandler.bind(this)}>
              取消
            </Button>,
            <Button key="submit" type="primary" disabled={canOperation}
            onClick={this.submitHandler.bind(this)} >
              确定
            </Button>
          ]}
        >
          <FormItem
            label="旧密码"
            {...colProps}
          >
            {getFieldDecorator('passwordOld',
            {
              initialValue: newPw.passwordOld,
              rules: [{ required: true, message: '请输入旧密码!' }],
            })(
              <Input placeholder='请输入旧密码' type='password' className='password_input'
                onChange={this.valueChangeHandler.bind(this, 'passwordOld')}
              />
            )}
          </FormItem>
          <FormItem
              label="新密码"
              {...colProps}
              className='newPass-form-item'
          >
            {getFieldDecorator('password', {
              initialValue: newPw.password,
              rules: [{ required: true,message: '请输入新密码'},
              { pattern: /^[a-zA-Z0-9_.-@!#$%&*?<>/~,+=]{5,20}$/g ,message: '请使用6-20个英文字母、数字或符号' },
              { validator: this.checkNextConfirm.bind(this) }
            ],
            })(
              <Input placeholder='请输入新密码 (必须是6-20个英文字母、数字或符号)' type='password'
                className='password_input'
                onChange={this.valueChangeHandler.bind(this, 'password')}
              />
            )}
          </FormItem>
          <FormItem
              label="确认新密码"
              {...colProps}
          >
            {getFieldDecorator('confirmPassword', {
              initialValue: newPw.confirmPassword,
              rules: [
                { required: true,message: '请再次输入新密码' },
                { pattern: /^[a-zA-Z0-9_.-@!#$%&*?<>/~,+=]{5,20}$/g ,message: '请使用6-20个英文字母、数字或符号' },
                { validator: this.checkConfirmPassword.bind(this) }
              ],
              validateFirst: true
            })(
              <Input placeholder='请再次输入新密码' type='password'
                className='password_input'
                onChange={this.valueChangeHandler.bind(this, 'confirmPassword')}
              />
            )}
          </FormItem>
        </Modal>}
      </div>
    )
  }
}

const HeaderForm = Form.create()(Header)
export default HeaderForm
