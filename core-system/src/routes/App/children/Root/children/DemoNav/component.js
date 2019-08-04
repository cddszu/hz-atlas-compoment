import React from 'react'
import './component.less'
import {Link} from 'react-router-dom'

class nullComponent extends React.Component {
  constructor() {
    super()
    this.state = {}
  }


  componentDidMount() {}

  componentWillMount() {}

  componentWillReceiveProps() {}

  render () {
    console.log(123)
    return (
      <div>
        <Link to='/root/Header'>头部</Link>
        <Link to='/root/HzNav'>左侧导航</Link>
      </div>
  )}
}

export default nullComponent
