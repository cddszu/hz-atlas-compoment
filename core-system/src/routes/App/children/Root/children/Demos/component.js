import React from 'react'
import './component.scss'
import { Switch, withRouter , HashRouter  } from 'react-router-dom'
import Loadable from 'components/lib/Loadable'
import AuthRouter from 'components/AuthRouter'
import Home from './children/Home'
import TabsDemo from './children/TabsDemo'
import CalendarDemo from './children/CalendarDemo'
import TreeSelectDemo from './children/TreeSelectDemo'
import InnerPageDemo from './children/InnerPageDemo'
const ReturnHeaderDemo = Loadable(import('./children/ReturnHeaderDemo'))
const GoBackDemo = Loadable(import('./children/GoBackDemo'))

class ComponentList extends React.Component {
  render () {
    const  { match } = this.props
    return (
      <div className="main-component">
        <div className='main-component-router'>
          <HashRouter>
            <Switch>
              <AuthRouter
                path={`${match.url}/home`}
                component={withRouter(Home)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/tabs`}
                component={withRouter(TabsDemo)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/calendar`}
                component={withRouter(CalendarDemo)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/treeSelect`}
                component={withRouter(TreeSelectDemo)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/innerPage`}
                component={withRouter(InnerPageDemo)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/returnHeader`}
                component={withRouter(ReturnHeaderDemo)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/goBack`}
                component={withRouter(GoBackDemo)}
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
export default ComponentList
