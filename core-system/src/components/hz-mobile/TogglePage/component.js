import React from 'react'
import './component.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const config = {
  default: '-100%',
  active: '0'
}

class TogglePage extends React.Component {
  // import PropTypes from 'prop-types'
  static propTypes = {
    from: PropTypes.string
  }

  static defaultProps = {
    from: 'right'
  }
  constructor(props) {
    super(props)
    this.state = {
      isShow: false
    }
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  }
  show() {
    this.setState({
      isShow: true
    })
  }
  hide() {
    this.setState({
      isShow: false
    })
  }
  componentDidUpdate() {
  }
  componentWillReceiveProps({ from }) {
  }
  render () {

    var styles = {
    }
    if (['top', 'right', 'left'].indexOf(this.props.from) > -1) {
      styles[this.props.from] = this.state.isShow ? 0 : '-100%'
    } else { // bottom
      styles.top = this.state.isShow ? '0' : '100%'
    }
    return (
      <div className="toggle-page-component" style={styles}>
        {
          this.props.children
        }
      </div>
    )
  }
}

export default TogglePage
