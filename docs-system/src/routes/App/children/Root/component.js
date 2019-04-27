import React from 'react'
import PropTypes from 'prop-types'
import './component.scss'
import AuthRoute from 'components/AuthRoute/index.js'
import Loadable from 'components/Loadable'
import Header from 'components/Header'

import { BrowserRouter as Router, Route, Switch, withRouter , HashRouter  } from 'react-router-dom'

const Home = Loadable(import('./children/Home'))
const Main = Loadable(import('./children/Main'))

class Root extends React.Component {
  componentWillMount() {
  }
  render () {
    const { match } = this.props
    return (
      <div className='root-component'>
        <Header />
        <div className='root-component-router'>
          <HashRouter>
            <Switch>
              <Route  path={`${match.url}/home`} component={withRouter(Home)} />
              <Route  path={`${match.url}/main`} component={Main} />
              <Route exact path={'/'} component={withRouter(Home)} />
            </Switch>
          </HashRouter>
        </div>
      </div>
    )
  }
}

Root.propTypes = {
  children: PropTypes.node,
}

export default Root
