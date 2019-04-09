import React from 'react'
import './component.scss'
import { Switch, withRouter , HashRouter  } from 'react-router-dom'
import AuthRouter from 'components/AuthRouter'
import List from './children/List'

class Relation extends React.Component {
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

export default Relation
