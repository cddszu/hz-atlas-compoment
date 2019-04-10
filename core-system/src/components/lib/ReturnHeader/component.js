import React from 'react'
import './component.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { GoBack } from 'components/lib'

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
    rightBtn: null
  }
  constructor(props) {
    super(props)
    this.state = {
    }
    if (this.props.leftBtn.url) {
      this.state.mode = 'link'
    } else {
      this.state.mode = 'click'
    }
  }

  componentWillReceiveProps({  }) {

  }
  render () {
    const { title, url, rightBtn } = this.props
    const returnBtn = <i className='iconfont icon-return'></i>
    // const GoBack = <GoBack><i className='iconfont icon-return'></i></GoBack>
    return (
      <div className="return-header-component">
        {
          this.state.mode === 'link' ?
            <Link to={ this.props.leftBtn.url }>
              { returnBtn }
            </Link>
          :
          <div onClick={this.props.leftBtn.onClick}>
            { returnBtn }
          </div>
        }

        <span className='header-title'>{ title }</span>
        {
          rightBtn && <span className='header-btn' onClick={ rightBtn.onClick } style={rightBtn.styles}>{ rightBtn.text }</span>
        }

      </div>
    )
  }
}

export default ReturnHeader
