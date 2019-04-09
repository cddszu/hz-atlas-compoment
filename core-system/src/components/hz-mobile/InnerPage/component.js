import React from 'react'
import './component.scss'
import PropTypes from 'prop-types'
import ReturnHeader from 'components/hz/ReturnHeader'
import TogglePage from '../TogglePage/component';

class InnerPage extends React.Component {
  // import PropTypes from 'prop-types'
  static propTypes = {
    title: PropTypes.string,
    // {
    //   url: '', link模式
    //   onClick: func, // click模式
    //   styles: {color: '#FFF'}
    // }
    // {
    //   text: '',
    //   onClick: func,
    //   styles: {color: '#FFF'}
    // }
  }

  static defaultProps = {
    title: ''
  }

  constructor(props) {
    super(props)
    this.state = {
    }
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  }
  show() {
    this.togglePage.show()
  }
  hide() {
    this.togglePage.hide()
  }

  componentWillMount() {
  }
  componentWillReceiveProps({ title }) {
    if (title !== this.props.title) {
    }
  }
  render () {
    var leftBtn = {
      onClick: this.hide
    }
    return (
      <div className="inner-page-component">
        <TogglePage {...this.props} ref={togglePage => this.togglePage = togglePage}>
          <ReturnHeader {...this.props}  leftBtn={leftBtn} />
          {
            this.props.children
          }
        </TogglePage>
      </div>
    )
  }
}

export default InnerPage
