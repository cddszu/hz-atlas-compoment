import React from 'react'
import './component.scss'
import { Tabs } from 'components/lib'
import { Toast } from 'antd-mobile'
const showTime = .4
const basicConfig = {
  tabs: [
    {title: 'tab 1', key: '1' },
    {title: 'tab 2', key: '1' },
    {title: 'tab 3', key: '1' }
  ],
  tabIndex: 0,
  onChange: (index, title) => {
    Toast.info(index + ':' + title, showTime)
  }
}

const extendConfig = {
  ...basicConfig,
  leftSlot: (
    <div className='btn-return' onClick={() => Toast.info('click left part', showTime)}>
      <i className='iconfont icon-return'></i>
    </div>
  ),
  rightSlot: (
    <div className='btn-search' onClick={() => Toast.info('click right part', showTime)}>
      <i className='iconfont icon-sousuo'></i>
    </div>
  ),
}

const advancedConfig = {
  headerSlot: (
    <div className='diy-tab-header'>
      <div className='content'>
        {
          extendConfig.leftSlot
        }
        <div className='center'>
          <div className='tab-item'>
            <span className='tab-name'>客户类型</span>
            <i className='iconfont icon-down'></i>
          </div>
          <div className='tab-item'>
            <span className='tab-name'>商机类型</span>
            <i className='iconfont icon-down'></i>
          </div>
          <div className='tab-item'>
            <span className='tab-name'>更多</span>
            <i className='iconfont icon-down'></i>
          </div>
        </div>
        {
          extendConfig.rightSlot
        }
      </div>
    </div>
  )
}

class TabsDemo extends React.Component {
  render () {
    return (
      <div className="tabs-demo-component">
        基础用法
        <Tabs { ...basicConfig }>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Tabs>
        拓展用法
        <Tabs { ...extendConfig }>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Tabs>

        纯DIY用法
        <Tabs { ...advancedConfig }>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Tabs>

      </div>
    )
  }
}
export default TabsDemo
