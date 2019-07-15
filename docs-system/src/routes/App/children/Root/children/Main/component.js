import React from 'react'
import './component.scss'
import { BrowserRouter as Router, Route, Switch, withRouter, HashRouter } from 'react-router-dom'
// import Loadable from 'react-loadable'
import Loadable from 'components/Loadable'
const Introduce = Loadable(import('./children/Introduce'))



class Main extends React.Component {
  render() {
    const { match } = this.props
    return (
      <div className="main-component">
        <div className='main-component-router center-docs-area'>
          <HashRouter>
            <Switch>
              <Route
                path={`${match.url}/introduce`}
                component={withRouter(Introduce)}
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
