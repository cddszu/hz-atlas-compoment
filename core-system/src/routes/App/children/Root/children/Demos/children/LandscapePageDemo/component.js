import React from 'react'
import './component.scss'
import { LandscapePage } from 'components/lib'
import { Toast } from 'antd-mobile'
const showTime = .4
const basicConfig = {
}

const extendConfig = {
}

const advancedConfig = {
}

class Demo extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className="landscapePage-demo-component">
        基本用法
        <LandscapePage>
          横屏显示
        </LandscapePage>
      </div>
    )
  }
}
export default Demo
