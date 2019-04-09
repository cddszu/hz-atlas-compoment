import React from 'react'
import './component.scss'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll/build/iscroll-probe'
import PaginationList from 'components/PaginationList'
import PaginationListBKK from 'components/PaginationListBKK'
import { SwipeAction } from 'antd-mobile'

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
  componentDidMount() {
  }
  render () {
    const list = (
      <ul>
        {
          data.map(item => (
            <SwipeAction
              style={{ backgroundColor: 'gray' }}
              autoClose
              right={[
                {
                  text: 'Cancel',
                  onPress: () => console.log('cancel'),
                  style: { backgroundColor: '#ddd', color: 'white' },
                },
                {
                  text: 'Delete',
                  onPress: () => console.log('delete'),
                  style: { backgroundColor: '#F4333C', color: 'white' },
                },
              ]}
              onOpen={() => console.log('global open')}
              onClose={() => console.log('global close')}
            >
              <li>
                <img src={item.img} />
                <span>{item.title}</span>
                <span>{item.desc}</span>
              </li>
            </SwipeAction>

          ))
        }
      </ul>
    )
    return (
      <div className="xxx-component">
        <PaginationList
          list={list}
          totalCount={1000}
          onPullUp={() => { alert('pull up')}}
        />
      </div>
    )
  }
}

export default XXX
