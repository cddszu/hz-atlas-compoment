import React from 'react'
import './component.scss'
import { GoBack } from 'components/lib'

function TabHeader(props) {
  return (
    <div className='content'>
      <div className='center'>
      {
        props.tabs.map(item => (
          <div className='tab-item' key={item.key}>{ item.title }</div>
        ))
      }
      </div>
      <div className='right-part'>
        <GoBack>
            <i className='iconfont icon-tuichu'></i>
        </GoBack>
      </div>
    </div>
  )
}
export default TabHeader
