import React from 'react'
import './component.scss'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll/build/iscroll-probe'

const loadStatusConfig = {
  canLoad: '上拉加载更多',
  canNotLoad: '没有更多数据~',
  willLoad: '松手开始加载',
  loading: '加载中...'
}

class XXX extends React.Component {
  constructor(props) {
    super(props)
    let loadStatus = ''
    this.listLength = this.props.list.props.children.length

    if (this.listLength < this.props.totalCount) {
      loadStatus = 'canLoad'
    } else {
      loadStatus = 'canNotLoad'
    }
    this.options = {
      click: true,
      mouseWheel: true,
      scrollY: true,
      bounce: true,
      probeType: 1
    }
    this.state = {
      loadStatus: loadStatus
    }
  }
  scrollHandler (iScrollInstance) {
    console.log('scrolling')
    if (this.listLength < this.props.totalCount) {
      if (Math.abs(iScrollInstance.y) - Math.abs(iScrollInstance.maxScrollY) > 10) {
        this.loadStatus = 'willLoad'
      } else {
        this.loadStatus = 'canLoad'
      }
    } else {
      this.loadStatus = 'canNotLoad'
    }
    this.loadTip.innerHTML = loadStatusConfig[this.loadStatus]
  }
  scrollEndHandler (iScrollInstance) {
    console.log('scrollend')
    if (this.listLength < this.props.totalCount) {
      if (this.loadStatus === 'willLoad') {
        this.loadStatus = 'loading'
        if (this.props.onPullUp) {
          this.props.onPullUp()
        }
      } else {
        this.loadStatus = 'canLoad'
      }
    } else {
      this.loadStatus = 'canNotLoad'
    }
    this.loadTip.innerHTML = loadStatusConfig[this.loadStatus]
  }
  componentDidMount() {
  }
  render () {
    const content = (
      <div>
        { this.props.list }
        <div className="data-load-tip" ref={loadTip => { this.loadTip = loadTip}}>
          { loadStatusConfig[this.state.loadStatus] }
        </div>
      </div>
    )
    // sleep(800)
    return (
      <div className="xxx-component">
        <ReactIScroll
          iScroll={iScroll}
          options={this.options}
          onScroll={this.scrollHandler.bind(this)}
          onScrollEnd={this.scrollEndHandler.bind(this)}
        >
         { content }
        </ReactIScroll>
      </div>
    )
  }
}

export default XXX
