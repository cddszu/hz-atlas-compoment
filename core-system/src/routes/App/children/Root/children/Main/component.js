import React from 'react'
import './component.scss'
import { BrowserRouter as Router, Route, Switch, withRouter , HashRouter  } from 'react-router-dom'
import AuthRouter from 'components/AuthRouter'
import Home from './children/Home'
import SelectRole from './children/SelectRole'
import ChanceMgt from './children/BusinessChanceMgt'
import ScheduleMgt from './children/ScheduleMgt'
import LegWork from './children/LegWork'
import AfficheMgt from './children/AfficheMgt'
import Customer from './children/Customer'
import WorkReport from './children/WorkReport'
import MsgMgt from './children/MsgMgt'
import Mine from './children/Mine'
class Main extends React.Component {
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
                path={`${match.url}/selectRole`}
                component={withRouter(SelectRole)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/chanceMgt`}
                component={withRouter(ChanceMgt)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/legWork`}
                component={withRouter(LegWork)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/afficheMgt`}
                component={withRouter(AfficheMgt)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/scheduleMgt`}
                component={withRouter(ScheduleMgt)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/customer`}
                component={withRouter(Customer)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/workReport`}
                component={withRouter(WorkReport)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/msgMgt`}
                component={withRouter(MsgMgt)}
                permissionPath={[]}
              />
              <AuthRouter
                path={`${match.url}/mine`}
                component={withRouter(Mine)}
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
