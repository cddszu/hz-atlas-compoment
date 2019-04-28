import React from 'react'
import './component.scss'
import {withRouter} from 'react-router'
import { Rnd } from 'react-rnd'
class Phone extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount() {
  }

  componentWillReceiveProps() {
  }

  render() {
    return (
      <div className='phone-component'>
      <Rnd
      >
        <div className='phone-component-content'>
          <iframe src={`http://localhost:18002/#/root/demos/${this.props.to}`}></iframe>
        </div>
      </Rnd>
      </div>

    )
  }
}

export default withRouter(Phone)
