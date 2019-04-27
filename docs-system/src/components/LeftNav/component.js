import React from 'react'
import './component.scss'
import { Menu, Icon } from 'antd'
import {withRouter} from 'react-router'
import { Link } from 'react-router-dom'
import HzLink from 'components/HzLink'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const Item = Menu.Item
const nav = [{
  type: 'item', // item、group、menu
}]
class LeftNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount() {
  }
  componentDidMount() {
  }
  componentWillReceiveProps() {
  }

  render() {
    return (
      <div className='left-nav-component'>
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
      >
        <SubMenu title='概述'>
          <Item><Link to='/root/main/introduce'>介绍</Link></Item>
          <Item><Link to='/root/main/quickStart'>快速上手</Link></Item>
        </SubMenu>
        <SubMenu title='组件'>
          {/* <Item>PaginationList(分页列表)</Item>
          <Item>Tabs(标签)</Item>
          <Item>InnerPage(内页)</Item> */}
          <Item><Link to='/root/main/tabs'>Tabs(标签)</Link></Item>
          <Item><Link to='/root/main/calendar'>Calendar(日历)</Link></Item>
          <Item><Link to='/root/main/treeSelect'>TreeSelect(树选择)</Link></Item>
          <Item><Link to='/root/main/paginationList'>PaginationList(分页列表)</Link></Item>
          <Item><Link to='/root/main/innerPage'>InnerPage(内页)</Link></Item>
          <Item><Link to='/root/main/landscapePage'>LandscapePage(横屏页)</Link></Item>
          <Item><Link to='/root/main/loadable'>Loadable(分割加载)</Link></Item>
          <Item><Link to='/root/main/returnHeader'>ReturnHeader(返回头)</Link></Item>
          <Item><Link to='/root/main/togglePage'>TogglePage(切页)</Link></Item>
          <Item><Link to='/root/main/goBack'>GoBack(返回)</Link></Item>
        </SubMenu>
      </Menu>
      </div>
    )
  }
}

export default withRouter(LeftNav)
