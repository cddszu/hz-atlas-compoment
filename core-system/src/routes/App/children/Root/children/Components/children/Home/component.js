import React from 'react'
import './component.scss'
import { List } from 'antd-mobile'
import { Link } from 'react-router-dom'
const Item = List.Item
class Home extends React.Component {
  render () {
    return (
      <div className="main-component">
        <div className='main-component-router'>
          <Link className='schedule-header' to='/root/components/tabs'>
            <List renderHeader={() => '数据展示'} className="my-list">
              <Item arrow="horizontal" multipleLine onClick={() => {}}>Tabs 标签页</Item>
            </List>
          </Link>
        </div>
      </div>
    )
  }
}
export default Home
