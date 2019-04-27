import React from 'react'
import './component.scss'
import {withRouter} from 'react-router'
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
      <div className='phone-component' draggable>
        <iframe src={`http://localhost:18002/#/root/demos/${this.props.to}`}></iframe>
      </div>
    )
  }
}

export default withRouter(Phone)
