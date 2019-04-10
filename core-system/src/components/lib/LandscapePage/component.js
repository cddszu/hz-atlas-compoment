import React from 'react'
import './component.scss'
import { BrowserRouter as Router, Route, Switch, withRouter , HashRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { px2rem } from 'utils'
class LandscapePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      styles: {

      }
    }
    this.detectOrient = this.detectOrient.bind(this)
  }
  detectOrient() {
    let width = window.document.documentElement.clientWidth
    let height =  window.document.documentElement.clientHeight
    let  styles = {}
    // if( width >= height ){ // 横屏
    //     styles.width = px2rem(width)
    //     styles.height = px2rem(height)
    //     styles.transform = ' rotate(0)'
    //     styles.transformOrigin = '0 0'
    // }
    // else{ // 竖屏
    //   styles.width = px2rem(height)
    //   styles.height = px2rem(width)
    //   styles.transform = 'rotate(90deg)'
    //   styles.transformOrigin = `${px2rem(width / 2)} ${px2rem(width / 2)}`
    // }
    styles.width = px2rem(width, height)
    styles.height = px2rem(width, width)
    styles.transform = 'rotate(90deg)'
    styles.transformOrigin = `${px2rem(width, width / 2)} ${px2rem(width, width / 2)}`

    this.setState({
      styles
    })
  }
  componentDidMount() {

      // return
      window.onresize = this.detectOrient.bind(this);
      this.detectOrient()
  }

  componentWillReceiveProps({ LandscapePage }) {
    if (LandscapePage !== this.props.LandscapePage) {

    }
  }
  render () {
    return (
      <div className="landscape-page-component" style={this.state.styles}>
          {
            this.props.children
          }
      </div>
    )
  }
}

export default LandscapePage
