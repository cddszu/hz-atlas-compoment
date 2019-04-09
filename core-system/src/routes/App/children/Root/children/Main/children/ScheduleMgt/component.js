import React from 'react'
import './component.scss'
import { Switch, withRouter , HashRouter  } from 'react-router-dom'
import AuthRouter from 'components/AuthRouter'
import Home from './children/Home'
import Create from './children/Create'
import Detail from './children/Detail'

class ScheduleMgt extends React.Component {
  componentWillMount() {
  }
  render () {
    const  { match } = this.props
    return (
      <div className="schedule-mgt-component">
        <div className='component-router'>
          <HashRouter>
            <Switch>
              <AuthRouter
                path={`${match.url}/home`}
                component={withRouter(Home)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/create`}
                component={withRouter(Create)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/detail`}
                component={withRouter(Detail)}
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

export default ScheduleMgt
