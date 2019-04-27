import React from 'react'
import './component.scss'
import { PaginationList } from 'components/lib'
import { Toast, List } from 'antd-mobile'
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
        list: null, // PropTypes.element
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
    let content = list.map(item => <List.Item arrow="horizontal">{ item.name }</List.Item>)
    basicConfig.list = <div>{ content }</div>
    return (
      <div className="paginationList-demo-component">
        基本用法
        <div style={{height: 300, border: '1px solid black'}} >
          <PaginationList { ...basicConfig }/>
        </div>

        无数据时的默认状态
        <div style={{height: 300, border: '1px solid black'}} >
          <PaginationList totalCount={0} />
        </div>


      </div>
    )
  }
}
export default PaginationListDemo
