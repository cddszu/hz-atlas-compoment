import React from 'react'
import './component.scss'
import { ReturnHeader } from 'components/lib'
import { Toast, List } from 'antd-mobile'
const showTime = .4
const linkMode = {
  leftBtn: {
    url: '/root/demos' // 通过链接跳转返回上一级页面
  },
  title: '内页1'
}
const defaultMode = {
  title: '内页2', //通过事件（控制当前子页面的消失）来返回上一级页面
  onClick: () => {
    Toast.info('')
  }
}


class ReturnHeaderDemo extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className="returnHeader-demo-component">
        {/* 基础用法
        <List key='list-1' renderHeader={() => '同步模式下（一次加载所有数据）'} className="my-list">
          <List.Item arrow="horizontal" key={item.key}>
                <div onClick={this.showPageHanddler.bind(this, `${item.key}Page`)}>{ `${item.key}模式` }</div>
              </List.Item>
          </List> */}
        <ReturnHeader {...linkMode}/>
        <ReturnHeader {...defaultMode}/>
      </div>
    )
  }
}
export default ReturnHeaderDemo
