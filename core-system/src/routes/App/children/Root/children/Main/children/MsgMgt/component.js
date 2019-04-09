import React from 'react'
import './component.scss'
import { Switch, withRouter , HashRouter  } from 'react-router-dom'
import AuthRouter from 'components/AuthRouter'
import MsgList from './children/List'
import MsgDetail from './children/Detail'
// import Create from './children/Create'
// import Detail from './children/Detail'

class MsgMgt extends React.Component {
  componentWillMount() {
  }
  render () {
    const  { match } = this.props
    return (
      <div className="msg-mgt-component">
        <div className='component-router'>
          <HashRouter>
            <Switch>
              <AuthRouter
                path={`${match.url}/list`}
                component={withRouter(MsgList)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/detail`}
                component={withRouter(MsgDetail)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/`}
                component={withRouter(MsgList)}
                permissionPath={[]}
              />
            </Switch>
          </HashRouter>
        </div>
      </div>
    )
  }
}

export default MsgMgt
