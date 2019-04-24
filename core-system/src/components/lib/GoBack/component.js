import React from 'react'
import ReactDOM from 'react-dom'
import creatHistory from 'history/createBrowserHistory'
const history = creatHistory()

class GoBack extends React.Component {
  returnHandler() {
    history.goBack()
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener('click', this.returnHandler)
  }
  render () {
    return (
      this.props.children
    )
  }
}

export default GoBack
