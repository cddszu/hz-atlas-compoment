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
    let initX = (window.document.documentElement.clientWidth - 256 ) * 0.7
    let initY = window.document.documentElement.clientHeight  - 10
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
