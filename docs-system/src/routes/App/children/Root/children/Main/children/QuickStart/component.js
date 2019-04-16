import React from 'react'
import './component.scss'
import ReactMarkdown from 'react-markdown'
import  mdPth from './button.md'
class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }

  }

  componentWillMount() {
    fetch(mdPth).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='home-component'>
        <ReactMarkdown className='markdown' source={ this.state.terms }   escapeHtml={ false }/>
      </div>
    )
  }
}

export default Home
