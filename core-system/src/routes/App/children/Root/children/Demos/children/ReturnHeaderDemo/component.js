import React from 'react'
import './component.scss'
import { ReturnHeader } from 'components/lib'
import { Toast, List } from 'antd-mobile'
const showTime = .4

const defaultMode = {
  title: 'click模式(默认)', //通过事件（控制当前子页面的消失）来返回上一级页面
  rightBtn: {
    slot: '保存',
    styles: {
      color: 'red',
    },
    onClick: () => {
      Toast.info('触发rightBtn的click事件监听器')
    }
  },
}
const linkMode = {
  leftBtn: {
    url: '/root/demos', // 通过链接跳转返回上一级页面
    onClick: () => {
      Toast.info('触发leftBtn的click事件监听器')
    }
  },
  rightBtn: {
    slot: '保存',
    styles: {
      color: 'green',
    },
    onClick: () => {
      Toast.info('触发rightBtn的click事件监听器')
    }
  },
  title: 'link模式(url="/root/demos")'
}

const diyConfig = {
  leftBtn: {
    slot: <i className='iconfont icon-suoshuhangye'></i>,
    onClick: () => {
      Toast.info('触发leftBtn的click事件监听器')
    }
  },
  rightBtn: {
    slot: <i className='iconfont icon-tuichu'></i>,
    styles: {
      color: 'green',
    },
    onClick: () => {
      Toast.info('触发rightBtn的click事件监听器')
    }
  },
  title: 'diy左、右侧按钮'
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
        <ReturnHeader {...defaultMode}/>
        <ReturnHeader {...linkMode}/>
        <ReturnHeader {...diyConfig}/>
      </div>
    )
  }
}
export default ReturnHeaderDemo
