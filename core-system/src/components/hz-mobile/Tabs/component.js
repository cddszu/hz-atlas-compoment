import React, { PureComponent } from 'react'
import styles from './component.scss'
import PropTypes from 'prop-types'

class Tabs extends PureComponent {
  static propTypes = {
    initialPage: PropTypes.number,
    tabs: PropTypes.object,
    onChange: PropTypes.func
  }

  static defaultProps = {
    initialPage: 0,
    tabs: null,
    component: null,
    onChange: null
  }
  constructor(props) {
    super(props)
    this.state = {
      currentPage: this.props.initialPage ? this.props.initialPage : 0
    }
  }

  clickHandler(index,e) {
    this.setState({
      currentPage: index + 1
    })
    if (this.props.onChange) {
      this.props.onChange(index,e)
    }
  }

  cancelSelectHandler() {
    this.setState({
      currentPage: 0
    })
  }

  componentWillMount() {
  }
  componentDidMount() {
  }
  componentWillReceiveProps({ component }) {
    if (component !== this.props.component) {
    }
  }

  render() {
    const { currentPage } = this.state
    return (
      <div className='tabs-component'>
        <div className='tab-header'>
          {
            this.props.component ? (
              <div className='diy-tab-header'>
                <this.props.component.type {...this.props.component.props}>
                  {
                    this.props.component.props.children.length ?
                    (
                      this.props.component.props.children.map((item, index) => {
                        if (item.props.className && item.props.className.indexOf('center') > -1) {
                          return (
                            <div  {...item.props}>
                              {
                                item.props.children.map((item, index) => (
                                  <div
                                    onClick={this.clickHandler.bind(this, index, item.key)}
                                    className={ index + 1 ===  currentPage ? 'selected' : 'not-selected' }
                                  >{ item }</div>
                                ))
                              }
                            </div>
                          )
                        }
                        return item
                      })
                    ) :
                    (
                      <this.props.component.props.children.type {...this.props.component.props.children.props}>
                        {
                          this.props.component.props.children.props.children.map((item, index) => {
                            return (
                              <div
                                onClick={this.clickHandler.bind(this, index, item.key)}
                                className={ index + 1 ===  this.state.currentPage ? 'selected' : 'not-selected' }
                              >{ item }</div>
                            )
                          })
                        }
                      </this.props.component.props.children.type>
                    )

                  }
                </this.props.component.type>
              </div>
            ) :
            (
              <div className='default-tab-header'>
                <div className='content'>
                  <div className='left' onClick={this.props.leftHandler}>
                    { this.props.left || null }
                  </div>
                  <div className='center' style={{width: this.props.left && this.props.right ? 'auto' : '100%'}}>
                    {
                      this.props.tabs.map((item, index) => (
                        <span
                          onClick={this.clickHandler.bind(this, index, item.key)}
                          className={ 'tab-item ' + (index + 1 ===  this.state.currentPage ? 'selected' : 'not-selected') }
                        >{ item.title }</span>
                      ))
                    }
                  </div>
                  <div className='right' onClick={this.props.rightHandler}>
                    { this.props.right || null }
                  </div>
                </div>
              </div>
            )
          }
        </div>
        <div className='tabpane-list'>
          {
            Array.isArray(this.props.children) ? this.props.children.map((item, index) => {
                if (index + 1 === this.state.currentPage) {
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
