import React from 'react'
import './component.scss'
import {withRouter} from "react-router"
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
        <iframe src="http://localhost:3002" frameborder="0" scrolling="no"></iframe>
      </div>
    )
  }
}

export default withRouter(Phone)
