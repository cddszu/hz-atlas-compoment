import React from 'react'
import './component.scss'
import { GoBack } from 'components/lib'
import { Toast, Button } from 'antd-mobile'
const showTime = .4
const basicConfig = {
}

const extendConfig = {
}

const advancedConfig = {
}

class GoBackDemo extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className="goBack-demo-component">
        基础用法
        <GoBack>
          <Button size="small">click me, 可以返回上一级</Button>
        </GoBack>
      </div>
    )
  }
}
export default GoBackDemo
