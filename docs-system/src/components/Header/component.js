import React from 'react'
import './component.scss'
import {withRouter} from "react-router"
import Logo from './images/nav-bar-logo.svg'
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
      <header className='header-component'>
        <div className='container'>
            <div className="logo-area">
              <a href="./index.html"><img src={ Logo } /></a>
            </div>
            <div className="nav-area">
              <a href="#">组件</a>
              <a href="#">关于</a>
            </div>
        </div>
      </header>
    )
  }
}

export default withRouter(Header)
