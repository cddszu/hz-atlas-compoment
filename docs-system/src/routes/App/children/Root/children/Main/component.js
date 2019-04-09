import React from 'react'
import './component.scss'
import { BrowserRouter as Router, Route, Switch, withRouter, HashRouter } from 'react-router-dom'
import AuthRouter from 'components/AuthRouter'
import LeftNav from 'components/LeftNav'
import Phone from 'components/Phone'
import Loadable from 'react-loadable'
import RouteLoading from 'components/RouteLoading/index'


const Home = Loadable({
  loader: () => import('./children/Home/index'),
  loading: RouteLoading,
})

class Main extends React.Component {
  render() {
    const { match } = this.props

    return (
      <div className="main-component">
        <LeftNav/>
        <Phone />
        <div className='main-component-router'>
          <HashRouter>
            <Switch>
              <AuthRouter
                path={`${match.url}/home`}
                component={withRouter(Home)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/`}
                component={withRouter(Home)}
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
