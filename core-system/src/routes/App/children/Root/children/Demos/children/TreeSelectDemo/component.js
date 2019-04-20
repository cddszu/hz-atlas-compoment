import React from 'react'
import './component.scss'
import { TreeSelect, InnerPage } from 'components/lib'
import { areaTree, areaTreeOnlyProvinces, areaTreeWithoutCountries, getAreaById, getCountryByNameKey } from 'components/lib/TreeSelect/metaData/area'
import { Toast, List } from 'antd-mobile'
const showTime = .4

// 非异步模式
const synConfig = [
  {key: 'view'},
  {key: 'multi'},
  {key: 'single'},
  {key: 'quirks-single'}
]


/// 异步模式
const asynConfig = [
  {title: '异步拉取一级：带搜索', key: 'one', asynFetchDepth: 1},
  {title: '异步拉取一级以上：搜索自动隐藏', key: 'moreThanOne', asynFetchDepth: 3}
]

const multiColumns = {
  mode: 'view',
  column: '3',
}

class TreeSelectDemo extends React.Component {

  showPageHanddler(page) {
    this[page].show()
  }
  componentDidMount() {
    // this.multiPage.show()
  }
  render () {
    return (
      <div className="-demo-component">
        <List key='list-1' renderHeader={() => '同步模式下（一次加载所有数据）'} className="my-list">
          {
            synConfig.map(item => (
              <List.Item arrow="horizontal" key={item.key}>
                <div onClick={this.showPageHanddler.bind(this, `${item.key}Page`)}>{ `${item.key}模式` }</div>
              </List.Item>
            ))
          }
        </List>
        {
          synConfig.map(item => (
              <InnerPage
                title={`${item.key}模式`}
                ref={(page) => this[`${item.key}Page`] = page }
              >
                <TreeSelect mode={item.key} treeData={areaTree} column={item.column}/>
              </InnerPage>
          ))
          }
        <List key='list-2' renderHeader={() => '异步模式下（按层加载所有数据）'} className="my-list">
          {
            asynConfig.map(item => (
              <List.Item arrow="horizontal" key={item.key}>
                <div onClick={this.showPageHanddler.bind(this, `${item.key}Page`)}>{ item.title }</div>
                <InnerPage
                  title={ item.title }
                  ref={(page) => this[`${item.key}Page`] = page }
                >
                  {/* view模式(浏览模式) */}
                  <TreeSelect
                    mode='multi'
                    treeData={areaTreeOnlyProvinces}
                    asynFetchDepth={item.asynFetchDepth}
                    onAsynFetch={getAreaById}
                    onAsynSearch={getCountryByNameKey} // 测试异步模式
                  />
                </InnerPage>
              </List.Item>
            ))
          }
        </List>
        {
          asynConfig.map(item => (
              <InnerPage
                title={ item.title }
                ref={(page) => this[`${item.key}Page`] = page }
              >
                {/* view模式(浏览模式) */}
                <TreeSelect
                  mode='multi'
                  treeData={areaTreeOnlyProvinces}
                  asynFetchDepth={item.asynFetchDepth}
                  onAsynFetch={getAreaById}
                  onAsynSearch={getCountryByNameKey} // 测试异步模式
                />
              </InnerPage>
          ))
          }
      </div>
    )
  }
}
export default TreeSelectDemo
