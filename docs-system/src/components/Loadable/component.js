import React from 'react'
import { DatePickerView } from 'antd-mobile'

import styles from './component.module.scss'
import {withRouter} from "react-router"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount() {
  }

  componentWillReceiveProps() {
  }

  render() {
    return (
      <header>
        <div>
          <div class="logo">
            <a href="./index.html"><img src="./images/logo1.png" alt=""></a>
            </div>
            <div class="nav">
              <a href="#">组件</a>
              <a href="#">关于</a>
            </div>
        </div>
    </header>
    )
  }
}

export default withRouter(Header)
