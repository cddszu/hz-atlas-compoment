import React from 'react'
import './component.scss'
import { Switch, withRouter , HashRouter  } from 'react-router-dom'
import AuthRouter from 'components/AuthRouter'
import Home from './children/Home'
import TabsDemo from './children/TabsDemo'
import CalendarDemo from './children/CalendarDemo'
import TreeSelectDemo from './children/TreeSelectDemo'
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
