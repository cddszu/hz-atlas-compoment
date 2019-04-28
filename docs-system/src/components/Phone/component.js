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
<<<<<<< HEAD
      <div className='phone-component' draggable>
        <iframe src={`http://192.168.1.43:18004/#/root/demos/${this.props.to}`} scrolling='no'></iframe>
=======
      <div className='phone-component'>
      <Rnd
      >
        <div className='phone-component-content'>
          <iframe src={`http://localhost:18002/#/root/demos/${this.props.to}`}></iframe>
        </div>
      </Rnd>
>>>>>>> c8d2c12d8a263cbe5742a40a92937167fabd5d2f
      </div>

    )
  }
}

export default withRouter(Phone)
