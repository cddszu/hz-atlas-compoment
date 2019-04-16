import React from 'react'
import './component.scss'
import { BrowserRouter as Router, Route, Switch, withRouter, HashRouter } from 'react-router-dom'
import AuthRouter from 'components/AuthRouter'
import LeftNav from 'components/LeftNav'
import Phone from 'components/Phone'
import Loadable from 'react-loadable'
import RouteLoading from 'components/RouteLoading/index'


const Tabs = Loadable({
  loader: () => import('./children/Tabs'),
  loading: RouteLoading,
})
const QuickStart = Loadable({
  loader: () => import('./children/QuickStart'),
  loading: RouteLoading,
})
const Introduce = Loadable({
  loader: () => import('./children/Introduce'),
  loading: RouteLoading,
})

class Main extends React.Component {
  render() {
    const { match } = this.props

    return (
      <div className="main-component">
        <LeftNav/>
        <Phone />
        <div className='main-component-router center-docs-area'>
          <HashRouter>
            <Switch>
              <AuthRouter
                path={`${match.url}/introduce`}
                component={withRouter(Introduce)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/quickStart`}
                component={withRouter(QuickStart)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/tabs`}
                component={withRouter(Tabs)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/`}
                component={withRouter(Tabs)}
                permissionPath={[]}
              />
            </Switch>
          </HashRouter>
        </div>
      </div>
    )
  }
}

export default Main
