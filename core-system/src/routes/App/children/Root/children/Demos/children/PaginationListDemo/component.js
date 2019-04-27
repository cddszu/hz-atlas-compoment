import React from 'react'
import './component.scss'
import { PaginationList } from 'components/lib'
import { Toast, List } from 'antd-mobile'
import NoDataImg from './images/icon-no-data@2x.png'
const showTime = .4
const PAGE_SIZE = 10

const extendConfig = {
}

const advancedConfig = {
}

const getListData = (params) => {
  let list = []
  let fromIndex = params.pageNo * params.pageSize
  for (let i = fromIndex; i < fromIndex + params.pageSize; i++) {
    list.push({name: 'item' + (i + 1), key: i + 1})
  }
  return list
}

class PaginationListDemo extends React.Component {
  constructor(props) {
    super(props)
    this.params = {
      pageNo: 0, // 0表示第一页
      pageSize: PAGE_SIZE,
      type: "my",
      title: '',
      pubdate: '',
      endDate: ''
    }
    this.state = {
      list: [],
      basicConfig: {
        content: null, // PropTypes.element
        totalCount: 0, //PropTypes.number
        onPullUp: null, // PropTypes.func
        distance: null, // PropTypes.number
        pageSize: 10, // PropTypes.number

      }
    }
    this.getMoreData = this.getMoreData.bind(this)
  }
  getMoreData() {
    this.params.pageNo += 1
    let newList = [...this.state.list, ...getListData(this.params)]
    this.setState({
      list: newList
    })
  }

  componentWillMount() {
    const { basicConfig } = this.state
    basicConfig.totalCount = 30
    if (basicConfig.totalCount) {
      this.setState({
        list: getListData(this.params)
      })
    }
    basicConfig.onPullUp = this.getMoreData
  }
  render () {
    const { basicConfig, list  } = this.state
    basicConfig.content = <div>{ list.map(item => <List.Item arrow="horizontal">{ item.name }</List.Item>) }</div>
    return (
      <div className="paginationList-demo-component">
        基本用法
        <div style={{height: 300, border: '1px solid black'}} >
          <PaginationList
            key='p1'
            { ...basicConfig }
          />
        </div>
         {/* to-fix: 滚动第一个分页列表时，会影响到第二个分页列表的内容，从‘暂无数据'变为第三个分页列表的noDataSlot */}
        无数据时的默认状态
        <div style={{height: 300, border: '1px solid black'}} >
          <PaginationList
            key='p2'
            totalCount={0}
          />
        </div>
        无数据时的自定义状态(noDataSlot)
        <div style={{height: 300, border: '1px solid black'}} >
          <PaginationList
            key='p3'
            totalCount={0}
            noDataSlot={<img className='icon-no-data' src={NoDataImg}/>}
          />
        </div>
        totalCount（10）大于0小于pageSize（20）时的情况（列表尾部不显示提示语）
        <div style={{height: 100, border: '1px solid black'}} >
          <PaginationList
            content={basicConfig.content}
            totalCount={10}
            pageSize={20}
          />
        </div>
      </div>
    )
  }
}
export default PaginationListDemo
