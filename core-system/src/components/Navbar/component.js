import React from 'react'
import styles from './component.module.scss'
import {withRouter} from "react-router"
import {Link} from 'react-router-dom'

class BottomNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHome: false,
      navList: []
    }
  }

  componentWillMount() {
  }

  componentWillReceiveProps({ userPermission }) {
  }

  render() {

    return (
      <div className={`${styles['navbar-component']}`}>
        <Link className={`${styles['nav-item']} ${styles['home']}`} to={'/root/main/home'}>
          <i className={`${styles['iconfont']} iconfont icon-shouye`}></i>
          <span>首页</span>
        </Link>
        <Link className={`${styles['nav-item']} ${styles['customer']}`} to={'/root/main/customer'}>
          <i className={`${styles['iconfont']} iconfont icon-kehu`}></i>
          <span>客户</span>
        </Link>
        <Link className={`${styles['nav-item']} ${styles['mine']}`} to={'/root/main/mine'}>
          <i className={`${styles['iconfont']} iconfont icon-wode`}></i>
          <span>我的</span>
        </Link>
      </div>
    )
  }
}

export default withRouter(BottomNav)
