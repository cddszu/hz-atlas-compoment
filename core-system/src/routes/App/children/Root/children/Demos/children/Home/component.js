import React from 'react'
import './component.scss'
import { List } from 'antd-mobile'
import { Link } from 'react-router-dom'
const demos = [
  {title: 'Tabs 标签页', to: 'tabs'},
  {title: 'Calendar 日历', to: 'calendar'},
  {title: 'TreeSelect 树选择', to: 'treeSelect'},
]
class Home extends React.Component {
  render () {
    return (
      <div className="main-component">
        <div className='main-component-router'>
            <List renderHeader={() => '数据展示'} className="my-list">
            {
              demos.map(item => (
                <Link to={ item.to }>
                <List.Item arrow="horizontal">{ item.title }</List.Item>
              </Link>
              ))
            }
            </List>

        </div>
      </div>
    )
  }
}
export default Home
