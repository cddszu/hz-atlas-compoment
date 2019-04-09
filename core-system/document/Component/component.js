import React from 'react'
import './component.scss'
import { BrowserRouter as Router, Route, Switch, withRouter , HashRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class XXX extends React.Component {
  // import PropTypes from 'prop-types'
  static propTypes = {
    iconType: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.string,
    isArrowUp: PropTypes.bool,
    desc: PropTypes.string,
  }

  static defaultProps = {
    iconType: '',
    title: 'title',
    amount: '¥0.00',
    isArrowUp: true,
    desc: '0.0%',
  }
  constructor(props) {
    super(props)
    this.state = {
    }
    this.followBusinessChanceList = []
    this.cancelSelectHandler = this.cancelSelectHandler.bind(this)
    this.resetHandler = this.resetHandler.bind(this)
    this.getMoreData = this.getMoreData.bind(this)

  }

  componentWillReceiveProps({ xxx }) {
    if (xxx !== this.props.xxx) {

    }
  }
  render () {
    return (
      <div className="xxx-component">
      </div>
    )
  }
}

export default XXX
