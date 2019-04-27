import React from 'react'
import './component.scss'
import ReactMarkdown from 'react-markdown'
import  mdPth from './doc-CN.md'
import Phone from 'components/Phone'

// import { importMDX } from 'mdx.macro'
// const Content = importMDX('./content.mdx')

class Introduce extends React.Component {

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
      <div className='Introduce-component'>
        <Phone to='Introduce' />
        {/* <Content/> */}
        <ReactMarkdown className='markdown' source={ this.state.terms }   escapeHtml={ false }/>
      </div>
    )
  }
}

export default Introduce
