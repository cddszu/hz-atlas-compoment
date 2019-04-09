import React from 'react'
import './component.scss'
import { Switch, withRouter , HashRouter  } from 'react-router-dom'
import AuthRouter from 'components/AuthRouter'
import InBank from './children/InBank'
import Basic from './children/Basic'
import Excavation from './children/Excavation'

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
                path={`${match.url}/inBank`}
                component={withRouter(InBank)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/basic`}
                component={withRouter(Basic)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/excavation`}
                component={withRouter(Excavation)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/`}
                component={withRouter(InBank)}
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
