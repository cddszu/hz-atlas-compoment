import React from 'react'
import './component.scss'
import { BrowserRouter as Router, Route, Switch, withRouter, HashRouter } from 'react-router-dom'
import AuthRoute from 'components/AuthRoute'
import Auth from 'components/Auth'
import LeftNav from 'components/LeftNav'
import Phone from 'components/Phone'
// import Loadable from 'react-loadable'
import Loadable from 'components/Loadable'

const QuickStart = Loadable(import('./children/QuickStart'))
const Tabs = Loadable(import('./children/Tabs'))
const Introduce = Loadable(import('./children/Introduce'))
const TreeSelect = Loadable(import('./children/TreeSelect'))
const Calendar = Loadable(import('./children/Calendar'))
const InnerPage = Loadable(import('./children/InnerPage'))
const GoBack = Loadable(import('./children/GoBack'))
const ReturnHeader = Loadable(import('./children/ReturnHeader'))
const LandscapePage = Loadable(import('./children/LandscapePage'))
const LoadableDoc = Loadable(import('./children/LoadableDoc'))
const TogglePage = Loadable(import('./children/TogglePage'))
const PaginationList = Loadable(import('./children/PaginationList'))

class Main extends React.Component {
  render() {
    const { match } = this.props
    return (
      <div className="main-component">
        <LeftNav />
        <div className='main-component-router center-docs-area'>
          <HashRouter>
            <Switch>
              <Route
                path={`${match.url}/introduce`}
                component={withRouter(Introduce)}
                permissionPath={[]}
              />
              <Route
                path={`${match.url}/quickStart`}
                component={withRouter(QuickStart)}
                permissionPath={[]}
              />
              <Route
                path={`${match.url}/tabs`}
                component={withRouter(Tabs)}
                permissionPath={[]}
              />
              <Route
                path={`${match.url}/calendar`}
                component={withRouter(Calendar)}
                permissionPath={[]}
              />
              <Route
                path={`${match.url}/treeSelect`}
                component={withRouter(TreeSelect)}
                permissionPath={[]}
              />
              <Route
                path={`${match.url}/innerPage`}
                component={withRouter(InnerPage)}
                permissionPath={[]}
              />
              <Route
                path={`${match.url}/returnHeader`}
                component={withRouter(ReturnHeader)}
                permissionPath={[]}
              />
              <Route
                path={`${match.url}/goBack`}
                component={withRouter(GoBack)}
                permissionPath={[]}
              />
              <Route
                path={`${match.url}/landscapePage`}
                component={withRouter(LandscapePage)}
                permissionPath={[]}
              />
              <Route
                path={`${match.url}/loadable`}
                component={withRouter(LoadableDoc)}
                permissionPath={[]}
              />
              <Route
                path={`${match.url}/togglePage`}
                component={withRouter(TogglePage)}
                permissionPath={[]}
              />
              <Route
                path={`${match.url}/paginationList`}
                component={withRouter(PaginationList)}
                permissionPath={[]}
              />

              <Route
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
