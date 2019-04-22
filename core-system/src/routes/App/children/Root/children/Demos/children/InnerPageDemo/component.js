import React from 'react'
import './component.scss'
import { InnerPage } from 'components/lib'
import { Toast, List } from 'antd-mobile'
const showTime = .4
const basicConfig = {
  from: 'right',
  title: '内页头'
}

const extendConfig = {
}

const advancedConfig = {
}

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.showInnerPageHandler = this.showInnerPageHandler.bind(this)
  }
  showInnerPageHandler() {
    this.page.show()
  }
  render () {
    return (
      <div className="innerPage-demo-component">
        <div onClick={this.showInnerPageHandler}>click me, 从右侧切出内页</div>
        <InnerPage
          ref={page => this.page = page}
          {...basicConfig}
        >
          <p>可以在这里编写内页</p>
        </InnerPage>
      </div>
    )
  }
}
export default Demo
