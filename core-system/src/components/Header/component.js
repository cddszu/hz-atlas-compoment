import React from 'react'
import { DatePickerView } from 'antd-mobile'

import styles from './component.module.scss'
import {withRouter} from "react-router"

const baseAppConfig = [
  {
    title: '新建外勤',
    key: 'legwork',
    url: '/#/root/main/legwork/create'
  }, {
    title: '新建汇报',
    key: 'report',
    url: '/#/root/main/workReport/create'
  }, {
    title: '新建日程',
    key: 'schedule',
    url: '/#/root/main/scheduleMgt/create'
  }, {
    title: '新建商机',
    key: 'chance',
    url: '/#/root/main/chanceMgt/create'
  },
]
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHome: false,
      navList: [],
      isClicked: false,
    }
  }
  clickFadeHandler(e) {
    e.nativeEvent.stopImmediatePropagation();
    this.newOperationHandler()
  }
  newOperationHandler() {
    this.setState({
      isClicked: !this.state.isClicked,
    })
  }

  componentWillMount() {
    this.props.getLoginUserInfo()
  }

  componentWillReceiveProps({ userPermission }) {
  }

  render() {


    return (
      <div className={styles['header-component']}>
        <div className={styles['title']}>智能营销作业平台</div>
        <div className={`${styles['btn-add']} ${styles['icon']} ${styles[this.state.isClicked ? 'icon-close' : 'icon-add']}`} onClick={this.newOperationHandler.bind(this)}></div>
        <div className={`${styles['new-operation-board']} ${styles[this.state.isClicked ? 'show' : 'hide']}`}>
          <div className={styles['fade-out']} onClick={this.clickFadeHandler.bind(this)}></div>
          <div className={styles['filter-cont']}></div>
          <div className={styles['operation-list']}>
            {
              baseAppConfig.map( (item, index) => (
                <div className={`${styles['nav-item']}`} key={index} onClick={()=>{if(item.url) window.location.href=item.url}}>
                  <i className={`${styles['icon']} ${styles[`icon-${item.key}`]}`}></i>
                  <div className={styles['nav-title']}>{item.title}</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
