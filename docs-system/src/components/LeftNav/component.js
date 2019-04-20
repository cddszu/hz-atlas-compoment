import React from 'react'
import './component.scss'
import { Menu, Icon } from 'antd'
import {withRouter} from 'react-router'
import { Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const Item = Menu.Item
const nav = [{
  type: 'item', // item、group、menu
}]
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount() {
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
          <Item>介绍</Item>
          <Item>快速上手</Item>
        </SubMenu>
        <SubMenu title='组件'>
          {/* <Item>PaginationList(分页列表)</Item>
          <Item>Tabs(标签)</Item>
          <Item>InnerPage(内页)</Item> */}
          <Item><a href='/#/root/main/tabs'>Tabs(标签)</a></Item>
          <Item><a href='/#/root/main/calendar'>Calendar(日历)</a></Item>
          <Item><a href='/#/root/main/treeSelect'>TreeSelect(树选择)</a></Item>
          <Item><a href='/#/root/main/paginationList'>PaginationList(分页列表)</a></Item>
          <Item><a href='/#/root/main/innerPage'>InnerPage(内页)</a></Item>
        </SubMenu>
      </Menu>
      </div>
    )
  }
}

export default withRouter(Header)
