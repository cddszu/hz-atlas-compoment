import React from 'react'
import './component.scss'
import { ListView } from 'antd-mobile'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll/build/iscroll-probe'

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];


const loadStatusConfig = {
  canLoad: '上拉加载更多',
  canNotLoad: '没有更多数据~',
  willLoad: '松手开始加载',
  loading: '加载中...'
}

class XXX extends React.Component {
  constructor(props) {
    super(props)
    this.msgs = []
    this.totalCount = 1000
    let loadStatus = ''
    if (this.msgs.length < this.totalCount) {
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
    let self = this
    // console.log(Math.abs(iScrollInstance.y))
    // console.log(Math.abs(iScrollInstance.maxScrollY))
    if (self.msgs.length < self.totalCount) {

      if (Math.abs(iScrollInstance.y) - Math.abs(iScrollInstance.maxScrollY) > 10) {
        self.loadStatus = 'willLoad'
      } else {
        self.loadStatus = 'canLoad'
      }
    } else {
      self.loadStatus = 'canNotLoad'
    }
    this.footerText.innerHTML = loadStatusConfig[self.loadStatus]
  }
  scrollEndHandler (iScrollInstance) {
    let self = this
    console.log('scrollend')

    if (self.msgs.length < self.totalCount) {
      if (self.loadStatus === 'willLoad') {
        self.loadStatus = 'loading'
        // self.getNextPageData()
      } else {
        self.loadStatus = 'canLoad'
      }
    } else {
      self.loadStatus = 'canNotLoad'
    }
    this.footerText.innerHTML = loadStatusConfig[self.loadStatus]
    // this.setState({
    //   loadStatus: self.loadStatus
    // })
  }

  componentDidMount() {

  }

  render () {

    // 在list生成之后，再对iScroll进行初始化
    var contentList = (
      <ul>
        {
          data.map(item => (
            <li>
              <img src={item.img}/>
              <span>{item.title}</span>
              <span>{item.desc}</span>
            </li>
          ))
        }
        <div className="data-load-tips" ref={footerText => { this.footerText = footerText}}>
          { loadStatusConfig[this.state.loadStatus] }
        </div>
      </ul>
    )

    return (
      <div className="xxx-component">
        <ReactIScroll
          iScroll={iScroll}
          options={this.options}
          onScroll={this.scrollHandler.bind(this)}
          onScrollEnd={this.scrollEndHandler.bind(this)}
        >
          { contentList }
        </ReactIScroll>
      </div>
    )
  }
}

export default XXX
