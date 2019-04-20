import React, { PureComponent } from 'react'
import styles from './component.scss'
import PropTypes from 'prop-types'

class Tabs extends PureComponent {
  static propTypes = {
    tabIndex: PropTypes.number,
    tabs: PropTypes.array,
    onClick: PropTypes.func,
    leftSlot: PropTypes.element,
    rightSlot: PropTypes.element,
    tabsSlot: PropTypes.element
  }

  static defaultProps = {
    tabIndex: 0,
    tabs: [],
    onClick: null,
    leftSlot: null,
    rightSlot: null,
    tabsSlot: null
  }
  constructor(props) {
    super(props)
    this.state = {
      currentTabIndex: this.props.tabIndex ? this.props.tabIndex : 0
    }
    this.generateTabList = this.generateTabList.bind(this)
  }

  clickHandler(index, title, key, event) {
    this.setState({
      currentTabIndex: index
    })
    if (this.props.onClick) {
      this.props.onClick(index, title, key)
    }
  }

  cancelSelectHandler() {
    this.setState({
      currentTabIndex: -1
    })
  }
  generateTabList(tabList) {
    return (
      <tabList.type {...tabList.props}>
        {
          tabList.props.children.map((item, index) => {
            return (
              React.cloneElement(item, {
                onClick: this.clickHandler.bind(this, index, item.title, item.key),
                className: item.props.className + ' ' + (index ===  this.state.currentTabIndex ? 'selected' : 'not-selected')
              })
            )
          })
        }
      </tabList.type>
    )
  }
  componentWillReceiveProps({ component }) {
    if (component !== this.props.tabsSlot) {
    }
  }

  render() {
    const { currentTabIndex } = this.state
    let DIYHeader = null
    let DIYHeaderContent = null
    DIYHeader = this.props.tabsSlot
    if (DIYHeader) {
      DIYHeaderContent = DIYHeader.props.children
    }
    return (
      <div className='tabs-component'>
        {
          this.props.tabsSlot ? (
              <DIYHeader.type {...DIYHeader.props}>
                <DIYHeaderContent.type {...DIYHeaderContent.props}>
                  {
                    Array.isArray(DIYHeaderContent.props.children) ?
                    (
                      DIYHeaderContent.props.children.map((item, index) => {
                        if (item.props.className && item.props.className.indexOf('center') > -1) {
                          return this.generateTabList(item)
                        }
                        return item
                      })
                    ) :
                    (
                      this.generateTabList(DIYHeaderContent.props.children)
                    )
                  }
                </DIYHeaderContent.type>
              </DIYHeader.type>
          ) :
          (
            <div className='default-tab-header'>
              <div className='content'>
                <div className='left'>
                  { this.props.leftSlot || null }
                </div>
                <div className='center' style={{width: this.props.leftSlot && this.props.rightSlot  ? 'auto' : '100%'}}>
                  {
                    this.props.tabs.map((item, index) => (
                      <span
                        onClick={this.clickHandler.bind(this, index, item.title, item.key)}
                        className={ 'tab-item ' + (index ===  currentTabIndex ? 'selected' : 'not-selected') }
                      >{ item.title }</span>
                    ))
                  }
                </div>
                <div className='right'>
                  { this.props.rightSlot  || null }
                </div>
              </div>
            </div>
          )
        }
        <div className='tabpane-list'>
          {
            Array.isArray(this.props.children) ? this.props.children.map((item, index) => {
                if (index === currentTabIndex) {
                  return <div className='show'>{ item }</div>
                } else {
                  return <div className='hide'>{ item }</div>
                }
              }
            ) : (this.props.children)
          }
        </div>
      </div>
    )
  }
}
export default Tabs
