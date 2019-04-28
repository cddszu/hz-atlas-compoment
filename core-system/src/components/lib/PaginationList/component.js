import React from 'react'
import ReactDOM from 'react-dom'
import './component.scss'
import iScroll from 'iscroll/build/iscroll-probe'
import PropTypes from 'prop-types'

const loadStatusConfig = {
  canLoad: '上拉加载更多',
  canNotLoad: '没有更多数据~',
  willLoad: '松手开始加载',
  noData: '暂无数据',
  loading: '加载中...',
  lessThanPageSize: ''   // totalCount少于pageSize时
}
class PaginationList extends React.Component {
  static propTypes = {
    content: PropTypes.element,
    totalCount: PropTypes.number,
    onPullUp: PropTypes.func,
    noDataSlot: PropTypes.element,
    distance: PropTypes.number,
    pageSize: PropTypes.number
  }

  static defaultProps = {
    content: null,
    totalCount: 0,

    // distance表示拉上距离（默认为10px），超过时表示可以加载更多
    distance: 10,

    // 通常对应上拉加载更多处理函数
    onPullUp: null
  }
  constructor(props) {
    super(props)
    this.options = {
      click: true,
      mouseWheel: true,
      scrollY: true,
      probeType: 1
    }
    this.state = {
      loadStateTips: ''
    }
    this.scrollHandler = this.scrollHandler.bind(this)
    this.scrollEndHandler = this.scrollEndHandler.bind(this)
    this.updateWrapper = this.updateWrapper.bind(this)
    this.setLoadStatus = this.setLoadStatus.bind(this)
    this.setTips = this.setTips.bind(this)
  }
  /**
   * @desc 在props数据发生变化时，设置数据的加载状态（静默状态），有四种可能的状态：noData、canLoad、lessThanPageSize和canNotLoad
   * @param {*} content
   * @param {*} totalCount
   * @param {*} pageSize
   */
  setLoadStatus(content, totalCount, pageSize) {
    let contentLength = 0
    if (totalCount === 0) {
      this.loadStatus = 'noData'
    } else {
      contentLength = content.props.children.length
      if (contentLength < totalCount) {
        this.loadStatus = 'canLoad'

        // 拉上距离超过10px时，表示可以加载更多
        if (
          this.iScrollInstance &&
          Math.abs(this.iScrollInstance.y) - Math.abs(this.iScrollInstance.maxScrollY) > this.props.distance
        ) {
          this.loadStatus = 'willLoad'
        } else {
          this.loadStatus = 'canLoad'
        }
      } else {
        if (pageSize !== undefined && (totalCount < pageSize)) {
          this.loadStatus = "lessThanPageSize"
        } else {
          this.loadStatus = 'canNotLoad'
        }
      }
    }
    this.setTips()
  }
  scrollHandler () {
    console.log('scrolling')
    const { content, totalCount, pageSize } = this.props
    this.setLoadStatus(content, totalCount, pageSize)
  }
  scrollEndHandler () {
    console.log('scrollend')
    if (this.loadStatus === 'willLoad') {
      this.loadStatus = 'loading'
      if (this.props.onPullUp) {
        this.props.onPullUp()
      }
    }
  }

  updateWrapper() {
    const self = this
    if (!this.props.totalCount || !this.props.content.props.children.length) {
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
  setTips() {
    if (this.loadStatus === 'noData' && this.props.noDataSlot) {
      this.setState({
        loadStateTips: this.props.noDataSlot
      })
    } else {
      if (this.loadTip) {
        this.loadTip.innerHTML = loadStatusConfig[this.loadStatus]   //TODO: 偶尔报错误信息“TypeError: Cannot set property 'innerHTML' of null”，原因未知
      } else {
        this.setState({
          loadStateTips: loadStatusConfig[this.loadStatus]
        })
      }
    }
  }
  componentWillMount() {
    const { content, totalCount, pageSize } = this.props
    this.setLoadStatus(content, totalCount, pageSize)
  }
  componentDidMount() {
    const self = this
    self.wrapper = ReactDOM.findDOMNode(this)
    // var height = window.innerHeight - self.wrapper.offsetTop - px2rem(window.innerWidth, this.props.bottom)
    this.updateWrapper()
  }
  componentDidUpdate() {
    // 刷新iscroller组件
    this.updateWrapper()
  }
  componentWillReceiveProps({ content, totalCount, pageSize }) {
    if (content !== this.props.content) {
      this.setLoadStatus(content, totalCount, pageSize)
    }
  }
  render () {
    return (
      <div className="pagination-list-component iscroll-wrapper">
        <div className='iscroll-scroller'>
          { this.props.content }
          <div
           className={`${this.loadStatus === "noData" ? "no-data" : "data-load-tip" }`}
          >
              {
                (this.loadStatus === 'loading') &&
                <svg className="spinner" viewBox="0 0 50 50">
                  <circle className="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg>
              }
              <p ref={loadTip => { this.loadTip = loadTip}}>
                { this.state.loadStateTips }
              </p>
          </div>
          </div>
      </div>
    )
  }
}

export default PaginationList
