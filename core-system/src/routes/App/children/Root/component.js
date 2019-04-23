import React from 'react'
import PropTypes from 'prop-types'
import './component.scss'
import AuthRouter from 'components/AuthRouter'

import Login from './children/Login'
import Test from './children/Test'
import Demos from './children/Demos'
import { BrowserRouter as Router, Route, Switch, withRouter , HashRouter  } from 'react-router-dom'

class Root extends React.Component {

  // 声明需要使用的Context属性
  static contextTypes = {
    reduxStore: PropTypes.object
  }

  componentWillMount() {

  }

  render () {
    const { match } = this.props
    return (
      <div className='root-component'>
       {/*
          todo 切换路由的时候会初始化header，导致权限接口重复调用
        */}
        <div className='root-component-router'>
          <HashRouter>
            <Switch>
              <Route path={`${match.url}/login`} component={Login}></Route>
              <Route path={`${match.url}/demos`} component={Demos}></Route>
              <Route path={'/'} component={Demos}></Route>
            </Switch>
          </HashRouter>
        </div>
      </div>
    )
  }
}

Root.propTypes = {
  children: PropTypes.node,
}

export default Root
