import React from 'react'
import './component.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import GoBack from '../GoBack'

class ReturnHeader extends React.Component {
  // import PropTypes from 'prop-types'
  static propTypes = {
    title: PropTypes.string,
    // {
    //   url: '', link模式
    //   onClick: func, // click模式
    //   styles: {color: '#FFF'}
    // }
    leftBtn: PropTypes.object,
    // {
    //   text: '',
    //   onClick: func,
    //   styles: {color: '#FFF'}
    // }
    rightBtn: PropTypes.object
  }

  static defaultProps = {
    title: '',
    leftBtn: {},
    rightBtn: {}
  }
  constructor(props) {
    super(props)
    this.state = {
    }
    if (!this.props.mode) {
      if (this.props.leftBtn && this.props.leftBtn.url) {
        this.state.mode = 'link'
      } else {
        this.state.mode = 'history'
      }
    } else {
      this.state.mode = this.props.mode
    }

  }

  componentWillReceiveProps({  }) {

  }
  render () {
    const { title, url, leftBtn, rightBtn } = this.props
    let returnIcon = null
    let leftBtnComponent = null
    if (leftBtn && leftBtn.slot) {
      returnIcon = leftBtn.slot
    } else {
      returnIcon = <i className='iconfont icon-return'></i>
    }

    if (this.state.mode === 'link') {
      leftBtnComponent = (<Link to={ leftBtn.url }>{ returnIcon }</Link>)
    } else if (this.state.mode === 'history') {
      leftBtnComponent = <GoBack>{ returnIcon }</GoBack>
    } else {
      leftBtnComponent = returnIcon
    }

    return (
      <div className="return-header-component">
        <div className='header-btn header-left-btn' onClick={leftBtn.onClick} style={leftBtn.styles}>
        { leftBtnComponent }
        </div>
        <span className='header-title'>{ title }</span>
        {
          rightBtn && <div className='header-btn header-right-btn' onClick={ rightBtn.onClick } style={rightBtn.styles}>{ rightBtn.slot }</div>
        }
      </div>
    )
  }
}

export default ReturnHeader
