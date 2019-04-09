import React from 'react'
import './component.scss'
import { BrowserRouter as Router, Switch, withRouter , HashRouter  } from 'react-router-dom'
import AuthRouter from 'components/AuthRouter'
import List from './children/List'
import Detail from './children/Detail'
import Create from './children/Create'

class WorkReport extends React.Component {
  componentWillMount() {
  }
  render () {
    const  { match } = this.props
    return (
      <div className="List-component">
        <div className='List-component-router'>
          <HashRouter>
            <Switch>
              <AuthRouter
                path={`${match.url}/list`}
                component={withRouter(List)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/detail`}
                component={withRouter(Detail)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/create`}
                component={withRouter(Create)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/`}
                component={withRouter(List)}
                permissionPath={[]}
              />
            </Switch>
          </HashRouter>
        </div>
      </div>
    )
  }
}

export default WorkReport
