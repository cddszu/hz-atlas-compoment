import React from 'react'
import ReactDOM from 'react-dom'
import './component.scss'
import iScroll from 'iscroll/build/iscroll-probe'
import PropTypes from 'prop-types'

const loadStatusConfig = {
  canLoad: '上拉加载更多',
  canNotLoad: '没有更多数据~',
  willLoad: '松手开始加载',
  loading: '加载中...'
}
class PaginationList extends React.Component {
  static propTypes = {
    list: PropTypes.element,
    totalCount: PropTypes.number,
    distance: PropTypes.number,
    height: PropTypes.string,
    onPullUp: PropTypes.func
  }

  static defaultProps = {
    list: null,
    totalCount: 0,

      // distance表示拉上距离（默认为10px），超过时表示可以加载更多
    distance: 10,

    // 建议不要设置，高度建议由外层的父元素来设置
    height: '100%',

    // 通常对应上拉加载更多处理函数
    onPullUp: null
  }
  constructor(props) {
    super(props)
    if (this.props.list.props.children.length < this.props.totalCount) {
      this.loadStatus = 'canLoad'
    } else {
      this.loadStatus = 'canNotLoad'
    }
    this.options = {
      click: true,
      mouseWheel: true,
      scrollY: true,
      probeType: 1
    }

    this.scrollHandler = this.scrollHandler.bind(this)
    this.scrollEndHandler = this.scrollEndHandler.bind(this)
    this.updateWrapper = this.updateWrapper.bind(this)
    this.clickLoadTipHandler = this.clickLoadTipHandler.bind(this)
    this.state = {
      height: '100%'
    }
  }
  scrollHandler () {
    console.log('scrolling')
    if (this.props.list.props.children.length < this.props.totalCount) {

      // 拉上距离超过10px时，表示可以加载更多
      if (Math.abs(this.iScrollInstance.y) - Math.abs(this.iScrollInstance.maxScrollY) > this.props.distance) {
        this.loadStatus = 'willLoad'
      } else {
        this.loadStatus = 'canLoad'
      }
    } else {
      this.loadStatus = 'canNotLoad'
    }
    this.loadTip.innerHTML = loadStatusConfig[this.loadStatus]
  }
  scrollEndHandler () {
    console.log('scrollend')
    if (this.props.list.props.children.length < this.props.totalCount) {
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
  clickLoadTipHandler() {
    if(this.loadStatus !== 'canNotLoad') {
      this.props.onPullUp()
    }
  }
  updateWrapper() {
    const self = this
    if (!this.props.list.props.children.length) {
      return
    }
    if (!self.iScrollInstance) {
      self.iScrollInstance = new iScroll(self.wrapper, self.options)
      self.iScrollInstance.on('scroll', self.scrollHandler)
      self.iScrollInstance.on('scrollEnd', self.scrollEndHandler)
    } else {
      self.iScrollInstance.refresh()
    }
  }
  componentDidMount() {
    const self = this
    self.wrapper = ReactDOM.findDOMNode(this)
    // var height = window.innerHeight - self.wrapper.offsetTop - px2rem(window.innerWidth, this.props.bottom)
    this.updateWrapper()
  }
  // shouldComponentUpdate({ list }, nextState) {
  //   if (list === this.props.list) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }
  componentDidUpdate() {
    // 刷新iscroller组件
    this.updateWrapper()
  }
  componentWillReceiveProps({ list, totalCount }) {
    if (list !== this.props.list) {
      if (list.props.children.length < totalCount) {
        this.loadStatus = 'canLoad'
      } else {
        this.loadStatus = 'canNotLoad'
      }

      // 有新的list来，则说明数据加载完毕，取消'加载中‘状态
      // this.setState({
      //   loadStatus: loadStatus
      // })
      // this.setState({
      //   loadStatus
      // })
      this.loadTip.innerHTML = loadStatusConfig[this.loadStatus]
    }
  }
  render () {
    return (
      <div className="pagination-list-component iscroll-wrapper" style={{height: this.props.height }}>
        <div className='iscroll-scroller'>
          { this.props.list }
          <div className="data-load-tip" onClick={this.clickLoadTipHandler}>
            {
              (this.loadStatus === 'loading') &&
              <svg className="spinner" viewBox="0 0 50 50">
                <circle className="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
              </svg>
            }
            <span ref={loadTip => { this.loadTip = loadTip}}>
              { loadStatusConfig[this.loadStatus] }
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default PaginationList
