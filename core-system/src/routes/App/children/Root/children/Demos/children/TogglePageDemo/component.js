import React from 'react'
import './component.scss'
import { InnerPage } from 'components/lib'
import { Toast, List, Button } from 'antd-mobile'
const showTime = .4
const basicConfig = {
  from: 'right'
}

const extendConfig = {
}

const advancedConfig = {
}
const fromConfig = [
  {from: 'top', desc: '顶'},
  {from: 'right', desc: '右'},
  {from: 'bottom', desc: '底'},
  {from: 'left', desc: '左'},
]

class TogglePageDemo extends React.Component {
  constructor(props) {
    super(props)
    this.showTogglePageHandler = this.showTogglePageHandler.bind(this)
  }
  showTogglePageHandler(pageName) {
    this[pageName].show()
  }
  render () {
    return (
      <div className="togglePage-demo-component">
      说明：InnerPage就是基于TogglePage实现，只不过默认带了一个非link模式的返回头ReturnHeader，这里以InnerPage演示
      {
        fromConfig.map(item => (
          <div key={item.from}>
            <Button onClick={this.showTogglePageHandler.bind(this, item.from + 'Page')}>click me, 从{item.desc}侧切出内页</Button>
            <InnerPage
              ref={page => this[`${item.from}Page`] = page}
              from={item.from}
            >
              <p>可以在这里编写内页</p>
            </InnerPage>
          </div>
        ))
      }
      </div>
    )
  }
}
export default TogglePageDemo
