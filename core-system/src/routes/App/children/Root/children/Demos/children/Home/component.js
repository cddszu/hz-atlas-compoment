import React from 'react'
import './component.scss'
import { List } from 'antd-mobile'
import { Link } from 'react-router-dom'
const demos = [
  {title: 'Tabs 标签页', to: 'tabs'},
  {title: 'InnerPage 内页', to: 'innerPage'},
  {title: 'TogglePage 切页', to: 'togglePage'},
  {title: 'LandscapePage 横屏页', to: 'landscapePage'},
  {title: 'PaginationList 分页列表', to: 'paginationList'},
  {title: 'GoBack 返回', to: 'goBack'},
  {title: 'Calendar 日历', to: 'calendar'},
  {title: 'TreeSelect 树选择', to: 'treeSelect'},
  {title: 'ReturnHeader 返回头', to: 'returnHeader'},
  {title: 'Loadable 分割加载(暂无演示例子)', to: 'loadable'},
]
class Home extends React.Component {
  render () {
    return (
      <div className="main-component">
        <div className='main-component-router'>
            <List renderHeader={() => '数据展示'} className="my-list">
            {
              demos.map(item => (
                <Link to={ `/root/demos/${item.to}` }>
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
