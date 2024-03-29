import React from 'react'
import { Menu } from 'antd'
import {urlMap, platforms} from './config'
import './component.less'
import axios from 'axios'
import ThemePicker from '../ThemePicker'
import {setMap, authJudge, navIconList} from './utils'


export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeProject: '',
      expandSubNav: false,
      sysListMap: null,
      urlMap: urlMap,
      hashUrl: '',
      projectInfo: {},
      fixPrefix: props.prefix || ''
    }
    this.currentSysMap = urlMap.filter((item) => window.location.hash.includes(item.url))
    this.currentSys = this.currentSysMap.length > 0 ? this.currentSysMap[0].platform : ''
  }
  componentDidMount () {
    axios({
      url: '/middle/gap/api/user/getRoleAndProject',
      method: 'get'
    }).then(res => {
      if (res.data.success) {
        const content = res.data.payload.data
        this.setState({
          projectInfo: content
        })
      }
    })

    axios({
      url: '/middle/api/auth/findLoginUser',
      method: 'get'
    }).then(res => {
      if (res.data.success) {
        const content = res.data.payload.data
        const data = content.resourceTrees
        // 权限树处理
        const resourceTrees = {}
        Object.keys(data).map(key => {
          resourceTrees[key] = setMap(data[key])
        })

        window.localStorage.setItem('RESOURCE', encodeURI(JSON.stringify(resourceTrees)))
        this.setState({
          urlMap: urlMap.filter(item => authJudge(item.permission, item.platform)),
          sysListMap: content.resourceTrees,
        })
      }
    })


    this.setState({
      expandSubNav: this.currentSys !== '',
      activeProject: this.currentSys,
      hashUrl: window.location.hash,
    }, () => {
      this.handlePropExpand()
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.expandSubNav !== this.state.expandSubNav) {
      this.handlePropExpand()
    }
  }

  // 向父组件传递是否展开参数
  handlePropExpand = () => {
    this.props.expandSubNav && this.props.expandSubNav(this.state.expandSubNav)
  }

  onProjectClick = (project) => {
    const { activeProject, expandSubNav } = this.state
    this.setState({
      activeProject: project,
      expandSubNav: activeProject === project ? !expandSubNav : true
    })
  }

  getSysNav = () => {
    const { activeProject, sysListMap } = this.state
    const { theme, saveTheme, themeMap, isThemePickerVisible } = this.props
    const navMarks = sysListMap && Object.keys(sysListMap)
    const navList = navIconList.filter((item) => {
      if (navMarks) {
        return navMarks.includes(item.mark)
      }
    })
    return (
      <div className='project-nav'>
        <ul>
          {
            navList.length > 0 && navList.map((item) => {
              return <li className={'project-icon' + (activeProject === item.mark ? ' active' : '')} key={item.mark}
                onClick={this.onProjectClick.bind(this, item.mark)}>
                <i className={`iconfont ${item.iconName}`} />
                <span>{item.name}</span>
              </li>
            })
          }
        </ul>
        {
          isThemePickerVisible
          ?
            <ThemePicker
              className="project-nav-themepicker"
              theme={theme}
              saveTheme={saveTheme}
              themeMap={themeMap}
              />
          : null
        }
      </div>
    )
  }
  getSubNav = () => {
    const { expandSubNav, activeProject } = this.state
    let title = platforms.find(item => item.key === activeProject) || {}
    return (
      <div className={'sub-nav' + (expandSubNav ? '' : ' shrink')}>
        <div className='sub-nav-header'>
          <h1 className='sub-nav-title'>
            {title.name || ''}
            <span className={expandSubNav ? 'back-btn' : 'back-btn open-btn'} onClick={() => { this.setState({ expandSubNav: false }) }}></span>
          </h1>
        </div>
        <div className='menu-container'>
          {this.getSubMenus()}
        </div>
      </div>
    )
  }
  getSubMenus = () => {
    const { activeProject, selectedKeys, urlMap, hashUrl, projectInfo } = this.state
    let newUrlMap = [...urlMap]
    if (projectInfo && projectInfo.projectId) {
      newUrlMap.forEach(item => {
        if (item.url === '/root/main/projectMgt/manage/detail') {
          item.url = `/root/main/projectMgt/manage/detail?projectId=${projectInfo.projectId}&name=${projectInfo.projectName}`
        }
      })
    } else {
      newUrlMap = newUrlMap.filter(item => item.url !== '/root/main/projectMgt/manage/detail')
    }

    const prefix = {
      DMP: '/atlasDmp/',
      GAP: '/atlasGap/',
      SYS: '/atlasSys/',
      DAP: '/atlasDap/'
    }
    return (
      <Menu
        mode="inline"
        theme='dark'
      >
        {
          newUrlMap.filter(item => item.platform === activeProject).map(item => {
            return <Menu.Item
              key={item.name}
              onClick={() => this.setState({hashUrl: `#${item.url}`})}
              className={hashUrl.includes(`#${item.url}`) && hashUrl !== '#/' ? 'active' : ''}>
                <a href={`${this.state.fixPrefix}${prefix[item.platform]}#${item.url}`} target={item.target || ''}
                  className={hashUrl.includes(`#${item.url}`) && hashUrl ? 'active' : ''}
                >{item.name}</a>
            </Menu.Item>
          })
        }
      </Menu>
    )
  }

  render () {
    return (
      <div className='nav-container'>
        {this.getSysNav()}
        {this.getSubNav()}
      </div>
    )
  }
}
