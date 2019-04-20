import React from 'react'
import './component.scss'
import { SearchBar } from 'antd-mobile'
import PropTypes from 'prop-types'
import { areaTree, areaTreeOnlyProvinces, areaTreeWithoutCountries, getAreaById, getCountryByNameKey } from './metaData/area/index'
const testMode = false
var treeNode = {
  id: PropTypes.string,
  name: PropTypes.string,
  isChecked: PropTypes.bool,
  isSelected: PropTypes.bool,

  // true时为叶子节点，false为非叶子节点
  isLeaf: PropTypes.bool,
  isLeafParent: PropTypes.bool,
  children: PropTypes.array,
  hasFetched: PropTypes.bool, // 对于叶子节点的父节点，如果在异步模式下已经拉取数据，则增加该标记位(以后children为空数组也不再拉取数据)
  checkedNum: PropTypes.number,
  parentNode: PropTypes.object,

  // 主要用于异步拉取的数据寻找其父元素
  parentNodeId: PropTypes.string,
}


class TreeSelect extends React.Component {

  static propTypes = {
    treeData: PropTypes.object,
    mode: PropTypes.string,
    treeType: PropTypes.string,

    type: PropTypes.string,
    isShowRootNode: PropTypes.bool,
    isShowSearchBar: PropTypes.bool,

    // 异步向下拉取深度，为1时，初始化树的叶子节点，实际为叶子节点的父节点；大于1时，搜索得到的数据不能同步状态（无法确定父节点），取消搜索功能
    asynFetchDepth: PropTypes.number,

    //
    isSelectedAllInChildren: PropTypes.bool,
    isShowBreadcrumb: PropTypes.bool,

    // 不为空时，表示所有叶子节点都是通过异步的方式来获取，一开始展示的树都是非叶子节点
    onAsynSearch: PropTypes.func,
    onAsynFetch: PropTypes.func,
    onConfirm: PropTypes.func,
    zIndex: PropTypes.number,
    column: PropTypes.number,
  }
  static defaultProps = Object.assign({
    treeData: null,
    // 组件支持四种选择模式：single（单选）、multi（多选）、view（不可选）、quirks-single(怪异模式的single)
    mode: 'view',
    treeType: '', // area(省市县)、industry(行业)
    // 折叠层是否展示根节点，默认不展示
    isShowRootNode: false,
    isShowSearchBar: true,

    // 设置为false时，当前非叶子节点只能通过全部按钮选中
    isSelectedAllInChildren: false,
    isShowBreadcrumb: true,
    asynFetchDepth: 1,
    onAsynSearch: null,
    onAsynFetch: null, // 根据唯一标识id拉取下一级数据

    onConfirm: null,
    zIndex: 1,
    column: 1
  }, testMode ? {
    mode: 'quirks-single',
    /**
    treeData: areaTreeWithoutCountries,
    asynFetchDepth: 1,
    */
    treeData: areaTreeOnlyProvinces, // 测试模式
    asynFetchDepth: 3,
    column: 3,
    onAsynSearch: getCountryByNameKey, // 测试异步模式
    onAsynFetch: getAreaById,  // 测试异步模式
  } : {})

  constructor(props) {
    super(props)
    this.state = {
      breadcrumbList: [],

      // 用于搜索列表的展示：数组元素为每一列对应的父元素，特别地，第一列（搜索结果）的父元素为虚拟元素
      breadcrumbList_searching: [],
      isShow: true,
      selectedTreeNodes: [],
      isShowSearchResultList: false,

      // 二维数据
      treeNodeColumns: []
    }

    this.rootNodeColumnIndex = this.props.isShowRootNode ? 0 : -1
    this.share = window.innerWidth / this.props.column

    // 所有节点
    this.id_map_all_node = {}

    this.state.searchResultList = []
    // this.generateTree = this.generateTree.bind(this)
    this.generateColumns = this.generateColumns.bind(this)
    this.formatTree = this.formatTree.bind(this)
    this.updateChildrenCheckedStatus = this.updateChildrenCheckedStatus.bind(this)
    this.updateParentsCheckedStatus = this.updateParentsCheckedStatus.bind(this)
    this.updateCurrentCheckedStatus = this.updateCurrentCheckedStatus.bind(this)
    this.deleteSelectedItems = this.deleteSelectedItems.bind(this)
    this.showChildren = this.showChildren.bind(this)
    this.confirmHandler = this.confirmHandler.bind(this)
    this.linkAsynChildToParent = this.linkAsynChildToParent.bind(this)
    this.addAsynChildren = this.addAsynChildren.bind(this)
    this.nameChangeHandler = this.nameChangeHandler.bind(this)
    this.getNodeByNameKey = this.getNodeByNameKey.bind(this)
    this.getNodeById = this.getNodeById.bind(this)
    this.canFetch = this.canFetch.bind(this)
    this.isLeaf = this.isLeaf.bind(this)
    // this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
    this.initData = this.initData.bind(this)
  }
  show() {
    this.setState({
      isShow: true
    })
  }
  hide() {
    this.setState({
      isShow: false
    })
  }
  initData(initData) {
    var treeData = null
    if (testMode) {
      treeData = this.props.treeData
    } else {
      if (this.props.treeType === 'area') {
        treeData = areaTreeOnlyProvinces
      } else {
        treeData = initData
      }
    }

    if (treeData) {
      this.formatTree(treeData, null, this.rootNodeColumnIndex, 0)
      if (this.props.isShowRootNode) {
        var fakeRoot = {
          id: 'xxxxxx',
          name: '',
          children: [
            treeData
          ]
        }
        this.setState({
          breadcrumbList: [fakeRoot]
        })
      } else {
        this.setState({
          // treeNodeColumns: [treeData.children],
          breadcrumbList: [treeData]
        })
      }
      // this.props.onAsynSearch(null, null, 'we')
    }
  }

  getNodeByNameKey(nameKey) {
    var resultList = []
    for (var key in this.id_map_all_node) {
      var treeNode = this.id_map_all_node[key]
      if (treeNode.name.indexOf(nameKey) > -1) {
        resultList.push(treeNode)
      }
    }
    return resultList
  }
  nameChangeHandler(value) {
    var resultList = []
    var isShowSearchResultList = false
    const _this = this
    if (value) { // 输入项非空
      isShowSearchResultList = true

      // 1. 先本地查询，得到列表A，加入到resultList
      resultList = [...this.getNodeByNameKey(value)]

      // 2. 异步查询，得到列表B，剔除列表B的在本地已经存在的项，得到列表C，加入到resultList
      if (this.props.onAsynSearch && !(this.isFinish =  false)) { // 需要异步拉取搜索结果
        this.props.onAsynSearch(value, (value) => {

          // 设置选中状态
          value.forEach((leafNode, index) => {
            leafNode.isLeaf = this.isLeaf(leafNode)
            if (!_this.getNodeById(leafNode.id)) { //  不存在的点加入到resultList中
              resultList.push(leafNode)

              // 对不存在的点进行加工
              var leafParentNode = _this.getNodeById(leafNode.parentNodeId)
              if (!leafParentNode) {
                console.error('当前叶子节点找不到匹配的父节点，数据有问题，当前叶子节点为',leafNode)
                return
              }

              // 设置不存在的点的选中状态
              if (leafParentNode.checked) { // 通过父元素来判断
                leafNode.checked = true
              }
            } else { // 已存在的点，不做任何操作
              return
            }
          })
          _this.setState({
            breadcrumbList_searching: [{children: resultList}],
            isShowSearchResultList
          })
        }, value)
      } else { // 树结构已经包含所有叶子节点

        this.setState({
          breadcrumbList_searching: [{children: resultList}],
          isShowSearchResultList
        })
      }
    } else {
      isShowSearchResultList = false
      this.setState({
        breadcrumbList_searching: [{children: resultList}],
        isShowSearchResultList
      })
    }

  }

  confirmHandler() {
    var selectedTreeNodes = this.state.selectedTreeNodes
    var selectedLeafNodes = []
    for(let key in this.id_map_all_node) {
      var treeNode = this.id_map_all_node[key]
      if (treeNode.checked && treeNode.isLeaf) {
        selectedLeafNodes.push(treeNode)
      }
    }
    if (this.props.onConfirm) {
      this.props.onConfirm(selectedTreeNodes, selectedLeafNodes)
    }
    this.hide()
  }
  isLeaf(treeNode) {
    return (treeNode.isLeaf || (treeNode.asynFetchDepth === this.props.asynFetchDepth))
  }
  jumpTo(item, index) {
    index++
    const closeItems = this.state.breadcrumbList.splice(index)
    closeItems.map(item => {
      item.isShowChildren = false
    })
    this.setState({
      breadcrumbList: [...this.state.breadcrumbList]
    })
  }
  /**
   * @desc selectedTreeNodes，如果当前项的所在机构已经出现在列表中或当前项不被选中态时，则将其删除
   */
  deleteSelectedItems() {
    const { selectedTreeNodes } = this.state
    for (var i = 0; i < selectedTreeNodes.length; i++) {
      var item = selectedTreeNodes[i]
      if ((item.parentNode && item.parentNode.checked) || !item.checked) {
        selectedTreeNodes.splice(i, 1)
        i--
      }
    }
  }
  /**
   * @desc 格式化数据
   */
  formatTree(treeNode, parentNode, columnIndex, treeDepth) {
    if (treeNode) {
      treeNode.columnIndex = columnIndex
      treeNode.treeDepth = treeDepth
      treeNode.selectedNum = 0
      treeNode.checked = false
      treeNode.parentNode = parentNode
      this.id_map_all_node[treeNode.id] = treeNode
      const hasChildren = (treeNode.children && treeNode.children.length !== 0)
      if (hasChildren) {
        treeNode.children.map(node => {
          this.formatTree(node, treeNode, columnIndex + 1, treeDepth + 1)
        })
      } else {
        if (this.props.onAsynFetch) { // 异步时，初始树数据的叶子节点，实际上是叶子节点的父节点
          if (this.props.asynFetchDepth === 1) {
            treeNode.isLeafParent = true
          }
        } else { // 非异步时，初始树数据的叶子节点，才是叶子节点
          treeNode.isLeaf = true
          // this.id_map_leaf_node[treeNode.id] = treeNode
          treeNode.parentNode.isLeafParent = true
        }
      }
    }
  }
  getNodeById(nodeId) {
    var node = this.id_map_all_node[nodeId]
    // if (!node) debugger
    return node
  }
  updateChildrenCheckedStatus(treeNode) {
    var checked = treeNode.checked
    if (this.props.mode === 'multi' && treeNode && treeNode.children) {
      treeNode.children.map(childNode => {
        var childNode_old_checked = childNode.checked
        if (childNode_old_checked !== checked) {
          childNode.checked = checked
          if (checked) {
            childNode.selectedNum =  childNode ? childNode.length : 0
          } else {
            childNode.selectedNum = 0
          }
          this.updateChildrenCheckedStatus(childNode)
        }
      })
    }
  }
  updateCurrentCheckedStatus(treeNode) {
    var checked = !treeNode.checked
    treeNode.checked = checked
    if (!checked) {
      treeNode.selectedNum = 0
    } else {
      if (treeNode.children) {
        treeNode.selectedNum = treeNode.children.length
      }
    }
  }
  updateParentsCheckedStatus(treeNode) {
    var checked = treeNode.checked
    var parentNode = treeNode.parentNode
    if (treeNode) {
      if (parentNode) {
        var parentNode_old_checked = parentNode.checked
        if (checked) {
          parentNode.selectedNum++
        } else {
          parentNode.selectedNum--
        }
        if (parentNode.selectedNum ===  parentNode.children.length) {
          parentNode.checked = true
        } else {
          parentNode.checked = false
        }

        // 当前元素状态变化引起父元素的状态变化：只有父元素状态发生改变时，才需要往下更新更上一层的状态
        if (parentNode_old_checked !== parentNode.checked) {

          // 当前元素的父元素由选中态变为非选中态时：兄弟元素需要加入到选中队列中
          if (!parentNode.checked) {
            parentNode.children.map(item => {
              if (item.name !== treeNode.name) {
                this.state.selectedTreeNodes.push(item)
              }
            })
          }

          // 更新父元素的父元素的选中状态
          this.updateParentsCheckedStatus(parentNode)
        } else { // 没有引起父元素状态发生变化
          this.state.selectedTreeNodes.push(treeNode)
        }
      } else {
        if (checked && !parentNode) {
          this.state.selectedTreeNodes.push(treeNode)
        }
      }
    }
  }

  chooseRadioHandler(treeNode) {
    this.state.selectedTreeNodes.forEach(item => (item.checked = false))

    // 单选项支持反选
    if (this.state.selectedTreeNodes[0] === treeNode) {
      treeNode.checked = false
      this.state.selectedTreeNodes.pop()
    } else {
      treeNode.checked = true
      this.state.selectedTreeNodes.pop()
      this.state.selectedTreeNodes.push(treeNode)
    }

    this.forceUpdate()
  }
  chooseCheckboxHandler(treeNode) {
    this.updateCurrentCheckedStatus(treeNode)
    this.updateParentsCheckedStatus(treeNode)
    this.updateChildrenCheckedStatus(treeNode)
    this.deleteSelectedItems()
    this.forceUpdate()
  }
  canFetch(treeNode) {
    return (this.props.onAsynFetch && // 需要异步拉取所有叶子节点
      !treeNode.isLeaf && // 非叶子节点
      !treeNode.hasFetched && // 未拉取过
      ((treeNode.children && treeNode.children.length === 0) || !treeNode.children) // 叶子节点为空时
    )
  }
  selectHandler(treeNode, isAllBtn) {
    if (this.props.isSelectedAllInChildren) {
      if (!treeNode.isLeaf && !isAllBtn) {
        return
      }
    }
    if (!treeNode.isLeaf || (treeNode.isLeaf && treeNode.parentNode)) {
      if (this.props.mode === 'single' || this.props.mode === 'quirks-single') {
        this.chooseRadioHandler(treeNode)
      } else {
        this.chooseCheckboxHandler(treeNode)
      }
    } else { // 如果是搜索列表中的人节点

        // 当前节点的父节点
        var parentNode = this.getNodeById(treeNode.parentNodeId)

        // 如果所在叶子节点的父节点还没有拉取子节点
        if (this.canFetch(parentNode)) {
          this.props.onAsynFetch(parentNode.id, (value) => {
            this.addAsynChildren(parentNode, value)
            this.linkAsynChildToParent(parentNode, treeNode)
            this.selectHandler(treeNode)
          })
        } else { // 已经拉取所有人
          this.linkAsynChildToParent(parentNode, treeNode)
          this.selectHandler(treeNode)
        }
    }


  }
  // generateTree(treeNode, level) {
  //   if (treeNode) {
  //     const childDoms = []
  //     const childDoms = []
  //     const hasChildren = treeNode.children && treeNode.children.length !== 0
  //     treeNode.zIndex = level
  //     if (hasChildren) {
  //       treeNode.children.map(treeNode => {
  //         childDoms.push(this.generateTree(treeNode, level + 1))
  //       })
  //     }

  //   }
  // }
  generateColumns(array) {
    var columns = array.map((outerItem, index) => {
      // var column = outerItem.map(innerItem => {
      var children = []
      if (this.props.isSelectedAllInChildren) {
        children = [outerItem, ...outerItem.children]
      } else {
        children = outerItem.children
      }
      var column = children.map((innerItem, index) => {
        var isAllBtn = (this.props.isSelectedAllInChildren && index === 0)
        const cardItem = (
          <div
            style={{width: this.share}}
            key={'treeNode_' + innerItem.id}
            className={`card-item ${ innerItem.selected ? 'selected' : ''}`}
          >
            <div
              className='card-item-header'
            >
              {
                ((this.props.mode === 'single' && innerItem.isLeaf) || this.props.mode ==='quirks-single') &&
                <div
                  className={`card-item-radio ${innerItem.checked && 'checked'}`}
                  onClick={this.selectHandler.bind(this, innerItem, isAllBtn)}
                />
              }
              {
                (this.props.mode === 'multi') &&
                <div
                  className={`card-item-checkbox ${innerItem.checked && 'checked'}`}
                  onClick={this.selectHandler.bind(this, innerItem, isAllBtn)}
                />
              }
              <div className='name'>

                { isAllBtn ? '全部' : innerItem.name }
                {/* {
                  innerItem.isLeaf && <span className='id'>{ ' ' + innerItem.id }</span>
                } */}
              </div>
              {
              (!innerItem.isLeaf && !isAllBtn) && (
                <div
                  className={`arrow`}
                  onClick={ this.showChildren.bind(this, innerItem, (this.props.isSelectedAllInChildren && index === 0)) }></div>
              )
              }
              {/* {
                innerItem.checked &&
                <div className='selected iconfont icon-select'></div>
              } */}
            </div>

          </div>
        )
        return cardItem
      })
      return (
        <div className='column'
          key={column + index}
          style={{
            width: this.share,
            zIndex: index + 1,
            left: this.props.column === 1 ? 0 : index * this.share
          }}
        >
          { column }
        </div>
      )
    })
    return columns
  }

  /**
   * @desc 将离线的人，回归到所在机构的children数组
   *
   * @param { Object } parentNode
   */
  linkAsynChildToParent(parentNode, leafNode) {
    if (parentNode && Array.isArray(parentNode.children)) {
      leafNode.parentNode = parentNode
      parentNode.children.map((childNode, index) => {
        if (childNode.id === leafNode.id) {
            parentNode.children[index] = leafNode
            this.id_map_all_node[leafNode.id] = leafNode
            // this.id_map_leaf_node[leafNode.id] = leafNode
        }
      })
    }
  }

  addAsynChildren(parentNode, value) {
    const _this =this
    parentNode.children = value || []
    parentNode.hasFetched = true
    parentNode.children.forEach(childNode => {
      // this.id_map_leaf_node[childNode.id] = childNode
      this.id_map_all_node[childNode.id] = childNode
      childNode.parentNode = parentNode
      childNode.treeDepth = parentNode.treeDepth + 1
      childNode.asynFetchDepth = (!parentNode.asynFetchDepth ? 0 : parentNode.asynFetchDepth) + 1
      childNode.isLeaf = this.isLeaf(childNode)
      if (this.props.mode !== 'quirks-single') {
        if (parentNode.checked) {
          childNode.checked = true
          parentNode.selectedNum = parentNode.children.length
        }
      }
    })
    _this.forceUpdate()
  }
  showChildren(treeNode) {
    var breadcrumbListKey = this.state.isShowSearchResultList ? 'breadcrumbList_searching' : 'breadcrumbList'
    treeNode.isShowChildren = true
    while(this.state[breadcrumbListKey].length > treeNode.columnIndex + 1) {
      this.state[breadcrumbListKey].pop()
    }
    if (treeNode.parentNode) {
      treeNode.parentNode.children.forEach(childNode => childNode.selected = false)
    }
    treeNode.selected = true
    this.state[breadcrumbListKey].push(treeNode)

    if (this.canFetch(treeNode)) {
        this.props.onAsynFetch(treeNode.id, (value) => {
          this.addAsynChildren(treeNode, value)
        }, '')
    } else {
      this.setState({
        [breadcrumbListKey]: [...this.state[breadcrumbListKey]]
      })
    }
  }
  componentWillMount() {
    this.initData(this.props.treeData)
  }
  componentDidMount() {
    var topAreaHeight = 0
    if(this.topArea) {
      var topAreaHeight = this.topArea.clientHeight || 0
    }
    this.columnsArea.style.top = topAreaHeight + 'px'
  }

  componentWillReceiveProps({ treeData }) {
    if (treeData !== this.props.treeData) {
      this.initData(treeData)
    }
  }
  render () {
    return (
      <div
        className="tree-select-component"
        style={{display: this.state.isShow ? 'block' : 'none', zIndex: this.props.zIndex}}>
        {
          this.props.isShowBreadcrumb &&
          <div className='top-area' ref={topArea => this.topArea = topArea}>
            {
              (this.props.isShowSearchBar && (this.props.asynFetchDepth === 1)) &&
              <SearchBar className='search-input' placeholder='搜索'
                onChange={this.nameChangeHandler}
              />
            }
            <div className='bread'>
              <div className='bread-content'>
              {
                this.state.breadcrumbList.map((item, index) => (
                  <span
                    key={index}
                    className={`bread-item ${this.state.breadcrumbList.length -1 === index && 'current-item'}`}
                    onClick={this.jumpTo.bind(this, item, index)}
                  >{ item.name }</span>
                ))
              }
              </div>
            </div>
          </div>
        }
        <div className='columns' ref={columnsArea => this.columnsArea = columnsArea}>
          {
            // this.generateColumns(this.state.treeNodeColumns)
            this.generateColumns(this.state.breadcrumbList)
          }
        </div>

       {
         this.state.isShowSearchResultList && (
           <div
             className={`search-list columns`}
           >
           {
            this.generateColumns(this.state.breadcrumbList_searching)
           }
         </div>
         )
       }
        <div className='confirm-area'>
          <div className='selected-items'>
            <div className='content'>
              {
                this.state.selectedTreeNodes.map((item, index) => (
                  <div
                    key={'selectedItem_' + index}
                    className='select-item'
                    onClick={this.selectHandler.bind(this, item)}
                  >
                    <div className='portrait'> { item.name.charAt(0) }</div>
                    <div className='name'>{ item.name }</div>
                  </div>

                ))
              }
            </div>
          </div>
          <div className='btn-confirm' onClick={this.confirmHandler}>确定({ this.state.selectedTreeNodes.length })</div>
        </div>
      </div>
    )
  }
}

export default TreeSelect
