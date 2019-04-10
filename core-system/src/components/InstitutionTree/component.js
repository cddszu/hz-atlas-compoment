import React from 'react'
import './component.scss'
import { SearchBar } from 'antd-mobile'
import PropTypes from 'prop-types'

class InstitutionTree extends React.Component {
    static propTypes = {
      treeData: PropTypes.object,
      mode: PropTypes.string,
      isShowRootNode: PropTypes.bool,
      getAsynData: PropTypes.func,
      onConfirm: PropTypes.func,
      zIndex: PropTypes.number
    }

    static defaultProps = {
      treeData: null,

      // 组件支持三种选择模式：single（单选）、multi（多选）、view（不可选）
      mode: 'view',
      // 折叠层是否展示根节点，默认不展示
      isShowRootNode: false,
      getAsynData: null,
      onConfirm: null,
      zIndex: 1
    }
  constructor(props) {
    super(props)
    this.state = {
      breadcrumbList: [],
      testMode: false,
      isShow: true,
      isShowRootNode: this.props.isShowRootNode || false,
      selectedItems: [],
      isShowSearchResultList: false
    }
    // this.state.searchResultList = {"success":true,"payload":[{"id":3,"userNo":"004","name":"wenzhi1","sex":null,"institutionCode":null,"institutionName":null,"email":null,"phone":null,"isCustomerManager":null,"roleName":null,"orgNo":"010100","roleRemark":"customer","birthDt":null},{"id":5,"userNo":"005","name":"wenzhi4","sex":null,"institutionCode":null,"institutionName":null,"email":null,"phone":null,"isCustomerManager":null,"roleName":null,"orgNo":"010100","roleRemark":"customer","birthDt":null}]}.payload
    // this.state.searchResultList = {"success":true,"payload":[{"id":3,"userNo":"004","password":"SHA-1$1000$LzvYyGfS$a83f2a7dc6eea77a8f3556f7c0506cedf7ce0cf3","name":"wenzhi1","sex":"1","status":"1","emplyPos":null,"emplyPost":null,"superEmplyNum":null,"idNumber":"421222222222222222","phone":"15927041111","email":null,"birthDt":"2018-10-15","inPosDt":"2018-10-17 20:32:31","belongOrgNum":"010100","belongOrg":"总行","belongDeptNum":"D01","belong_dept":"1","cont_addr":null,"leavePosDt":"2018-10-11 20:32:27","enabledFlag":null,"updatedBy":"1","createdBy":null,"updatedDt":"2018-11-27 09:59:59","createdDt":"2018-10-17 20:30:48","orgId":2,"orgNo":"010100"},{"id":5,"userNo":"005","password":"SHA-1$1000$LzvYyGfS$a83f2a7dc6eea77a8f3556f7c0506cedf7ce0cf3","name":"wenzhi4","sex":"1","status":"1","emplyPos":null,"emplyPost":null,"superEmplyNum":null,"idNumber":"421222222222222222","phone":"15927041111","email":null,"birthDt":"2018-10-15","inPosDt":"2018-10-17 20:32:31","belongOrgNum":"010100","belongOrg":"总行","belongDeptNum":"D01","belong_dept":"1","cont_addr":null,"leavePosDt":"2018-10-11 20:32:27","enabledFlag":null,"updatedBy":"1","createdBy":null,"updatedDt":"2018-11-27 10:04:58","createdDt":"2018-10-17 20:30:48","orgId":2,"orgNo":"010100"},{"id":14,"userNo":"014","password":"SHA-1$1000$LzvYyGfS$a83f2a7dc6eea77a8f3556f7c0506cedf7ce0cf3","name":"test6","sex":"1","status":"1","emplyPos":null,"emplyPost":null,"superEmplyNum":null,"idNumber":null,"phone":null,"email":null,"birthDt":"2019-01-15","inPosDt":null,"belongOrgNum":"010101","belongOrg":"测试机构","belongDeptNum":"D01","belong_dept":"3","cont_addr":null,"leavePosDt":null,"enabledFlag":null,"updatedBy":"1","createdBy":null,"updatedDt":null,"createdDt":null,"orgId":2,"orgNo":"010100"}]}.payload
    // this.personList = {"success":true,"payload":[{"id":3,"userNo":"004","password":"SHA-1$1000$LzvYyGfS$a83f2a7dc6eea77a8f3556f7c0506cedf7ce0cf3","name":"wenzhi1","sex":"1","status":"1","emplyPos":null,"emplyPost":null,"superEmplyNum":null,"idNumber":"421222222222222222","phone":"15927041111","email":null,"birthDt":"2018-10-15","inPosDt":"2018-10-17 20:32:31","belongOrgNum":"010100","belongOrg":"总行","belongDeptNum":"D01","belong_dept":"1","cont_addr":null,"leavePosDt":"2018-10-11 20:32:27","enabledFlag":null,"updatedBy":"1","createdBy":null,"updatedDt":"2018-11-27 09:59:59","createdDt":"2018-10-17 20:30:48","orgId":2,"orgNo":"010100"},{"id":5,"userNo":"005","password":"SHA-1$1000$LzvYyGfS$a83f2a7dc6eea77a8f3556f7c0506cedf7ce0cf3","name":"wenzhi4","sex":"1","status":"1","emplyPos":null,"emplyPost":null,"superEmplyNum":null,"idNumber":"421222222222222222","phone":"15927041111","email":null,"birthDt":"2018-10-15","inPosDt":"2018-10-17 20:32:31","belongOrgNum":"010100","belongOrg":"总行","belongDeptNum":"D01","belong_dept":"1","cont_addr":null,"leavePosDt":"2018-10-11 20:32:27","enabledFlag":null,"updatedBy":"1","createdBy":null,"updatedDt":"2018-11-27 10:04:58","createdDt":"2018-10-17 20:30:48","orgId":2,"orgNo":"010100"},{"id":14,"userNo":"014","password":"SHA-1$1000$LzvYyGfS$a83f2a7dc6eea77a8f3556f7c0506cedf7ce0cf3","name":"test6","sex":"1","status":"1","emplyPos":null,"emplyPost":null,"superEmplyNum":null,"idNumber":null,"phone":null,"email":null,"birthDt":"2019-01-15","inPosDt":null,"belongOrgNum":"010101","belongOrg":"测试机构","belongDeptNum":"D01","belong_dept":"3","cont_addr":null,"leavePosDt":null,"enabledFlag":null,"updatedBy":"1","createdBy":null,"updatedDt":null,"createdDt":null,"orgId":2,"orgNo":"010100"}]}.payload

    // 所有人节点
    this.id_map_person = []

    this.id_map_orgObj = {}
    this.state.searchResultList = []
    this.generateTree = this.generateTree.bind(this)
    this.formatTree = this.formatTree.bind(this)
    this.updatePersonChildrenCheckedStatus = this.updatePersonChildrenCheckedStatus.bind(this)
    this.updateParentsPersonCheckedStatus = this.updateParentsPersonCheckedStatus.bind(this)
    this.updateCurrentCheckedStatus = this.updateCurrentCheckedStatus.bind(this)
    this.deleteSelectedItems = this.deleteSelectedItems.bind(this)
    this.showChildren = this.showChildren.bind(this)
    this.confirmHandler = this.confirmHandler.bind(this)
    this.backToParent = this.backToParent.bind(this)
    this.setPersonChildren = this.setPersonChildren.bind(this)
    this.onFocusHandler = this.onFocusHandler.bind(this)
    this.nameChangeHandler = this.nameChangeHandler.bind(this)
    this.getOrgObj = this.getOrgObj.bind(this)
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
  initData(treeData) {
    if (treeData) {
      if (!this.state.isShowRootNode) {
        this.showChildren(treeData)
      }
      this.formatTree(treeData, null)
      // this.props.getAsynData(null, null, 'we')
    }
  }
  onFocusHandler(value) {
    if (value) {

    }
  }
  nameChangeHandler(value) {
    var resultList = []
    var isShowSearchResultList = false
    if (value) {
      isShowSearchResultList = true
      if (this.props.getAsynData) { // 需要异步拉取搜索结果
        this.props.getAsynData(null, (value) => {

          // 设置选中状态
          value.uglyData.forEach((personObj, index) => {
            var orgObj = this.getOrgObj(personObj.orgNo)
            personObj.isPerson = true
            if (orgObj && orgObj.personChecked) {
              personObj.personChecked = true
            } else {
              personObj = this.id_map_person[personObj.id]
              if(personObj) {
                value.uglyData[index] = personObj
              }
            }
          })

          this.setState({
            searchResultList: value.uglyData
          })
        }, value)
      } else { // 树结构已经包含所有叶子节点
        this.personList.forEach(item => {
          if (item.name.indexOf(value) > -1) {
            resultList.push(item)
          }
        })
        this.setState({
          searchResultList: resultList
        })
      }
    } else {
      isShowSearchResultList = false
    }

    this.setState({
      searchResultList: resultList,
      isShowSearchResultList
    })
  }

  confirmHandler() {
    var selectedItems = this.state.selectedItems
    if (this.props.onConfirm) {
      this.props.onConfirm(selectedItems)
    }
  }
  jumpTo(item, index) {
    index++
    const closeItems = this.state.breadcrumbList.splice(index)
    closeItems.map(item => {
      item.isShowChildren = false
    })
    this.forceUpdate()
  }
  /**
   * @desc selectedItems，如果当前项的所在机构已经出现在列表中或当前项不被选中态时，则将其删除
   */
  deleteSelectedItems() {
    const { selectedItems } = this.state
    for (var i = 0; i < selectedItems.length; i++) {
      var item = selectedItems[i]
      if ((item.parentNode && item.parentNode.personChecked) || !item.personChecked) {
        selectedItems.splice(i, 1)
        i--
      }
    }
  }
  /**
   * @desc 格式化数据
   */
  formatTree(treeNode, parentNode) {
    if (treeNode) {
      treeNode.isInstitution = true
      treeNode.selectedPersonNum = 0
      treeNode.personChecked = false
      const hasChildren = treeNode && treeNode.children.length !== 0
      this.id_map_orgObj[treeNode.orgNo] = treeNode
      if (hasChildren) {
        treeNode.children.map(node => {
          this.formatTree(node, treeNode)
        })
      }
    }
  }
  getOrgObj(orgNo) {
    return this.id_map_orgObj[orgNo]
  }
  updatePersonChildrenCheckedStatus(treeNode) {
    var checked = treeNode.personChecked
    if (treeNode && treeNode.personChildren) {
      treeNode.personChildren.map(childNode => {
        var childNode_old_checked = childNode.personChecked
        if (childNode_old_checked !== checked) {
          childNode.personChecked = checked
          if (checked) {
            childNode.selectedPersonNum =  childNode ? childNode.length : 0
          } else {
            childNode.selectedPersonNum = 0
          }
          this.updatePersonChildrenCheckedStatus(childNode)
        }
      })
    }
  }
  updateCurrentCheckedStatus(treeNode) {
    var checked = !treeNode.personChecked
    treeNode.personChecked = checked
    if (!checked) {
      treeNode.selectedPersonNum = 0
    } else {
      if (treeNode.personChildren) {
        treeNode.selectedPersonNum = treeNode.personChildren.length
      }
    }
  }
  updateParentsPersonCheckedStatus(treeNode) {
    var checked = treeNode.personChecked
    var parentNode = treeNode.parentNode
    if (treeNode) {
      if (parentNode) {
        var parentNode_old_checked = parentNode.personChecked
        if (checked) {
          parentNode.selectedPersonNum++
        } else {
          parentNode.selectedPersonNum--
        }
        if (parentNode.selectedPersonNum ===  parentNode.personChildren.length) {
          parentNode.personChecked = true
        } else {
          parentNode.personChecked = false
        }

        // 当前元素状态变化引起父元素的状态变化：只有父元素状态发生改变时，才需要往下更新更上一层的状态
        if (parentNode_old_checked !== parentNode.personChecked) {

          // 当前元素的父元素由选中态变为非选中态时：兄弟元素需要加入到选中队列中
          if (!parentNode.personChecked) {
            parentNode.personChildren.map(item => {
              if (item.name !== treeNode.name) {
                this.state.selectedItems.push(item)
              }
            })
          }

          // 更新父元素的父元素的选中状态
          this.updateParentsPersonCheckedStatus(parentNode)
        } else { // 没有引起父元素状态发生变化
          this.state.selectedItems.push(treeNode)
        }
      } else {
        if (checked && !parentNode) {
          this.state.selectedItems.push(treeNode)
        }
      }
    }
  }

  chooseRadioHandler(treeNode) {
    this.state.selectedItems.forEach(item => (item.personChecked = false))

    // 单选项支持反选
    if (this.state.selectedItems[0] === treeNode) {
      treeNode.personChecked = false
      this.state.selectedItems.pop()
    } else {
      treeNode.personChecked = true
      this.state.selectedItems.pop()
      this.state.selectedItems.push(treeNode)
    }

    this.forceUpdate()
  }
  chooseCheckboxHandler(treeNode) {
    this.updateCurrentCheckedStatus(treeNode)
    this.updateParentsPersonCheckedStatus(treeNode)
    this.updatePersonChildrenCheckedStatus(treeNode)
    this.deleteSelectedItems()
    this.forceUpdate()
  }
  selectHandler(treeNode) {
    if (treeNode.isInstitution || (treeNode.isPerson && treeNode.parentNode)) {
      if (this.props.mode === 'single') {
        this.chooseRadioHandler(treeNode)
      } else {
        this.chooseCheckboxHandler(treeNode)
      }
    } else { // 如果是搜索列表中的人节点

        // 当前人找到所在机构
        treeNode.parentNode = this.getOrgObj(treeNode.orgNo)

        // 如果所在机构还没有异步拉取所有人
        if (treeNode.parentNode && (!treeNode.parentNode.personChildren || !treeNode.parentNode.personChildren.length)) {
          if (this.props.getAsynData) {
            this.props.getAsynData(treeNode.orgNo, (value) => {
              this.setPersonChildren(treeNode.parentNode, value)
              this.backToParent(treeNode)
              this.selectHandler(treeNode)
            })
          }
        } else { // 已经拉取所有人
          this.backToParent(treeNode)
          this.selectHandler(treeNode)
        }
    }


  }
  generateTree(treeNode, level) {
    if (treeNode) {
      const childDoms = []
      const childPersonDoms = []
      const hasChildren = treeNode.children && treeNode.children.length !== 0
      treeNode.zIndex = level
      if (hasChildren) {
        treeNode.children.map(treeNode => {
          childDoms.push(this.generateTree(treeNode, level + 1))
        })
      }
      const gap = <div className='gap'></div>
      const hasPersonChildren = treeNode.personChildren && treeNode.personChildren.length !== 0
      if (hasPersonChildren) {
        treeNode.personChildren.map(treeNode => {
          childPersonDoms.push(this.generateTree(treeNode, level + 1))
        })
      }
      if (childDoms.length && childPersonDoms.length) {
        childDoms.push(gap)
      }
      const cardItem = (
        <div className={`card-item ${ treeNode.isPersonInstitution ? 'leaf-institution' : ''}`}>
          <div className='card-item-header'>
          {
            this.props.mode === 'multi' &&
            <div
              className={`card-item-radio ${treeNode.personChecked && 'checked'}`}
              onClick={this.selectHandler.bind(this, treeNode)}
            />
          }
          {
            (this.props.mode === 'single' && treeNode.isPerson) &&
            <div
              className={`card-item-radio ${treeNode.personChecked && 'checked'}`}
              onClick={this.selectHandler.bind(this, treeNode)}
            />
          }
          <div className='name'>
            <div className='portrait'>{ treeNode.name.charAt(0) }</div>
            { treeNode.name }
            {
              treeNode.isPerson && <span className='id'>{ ' ' + treeNode.userNo }</span>
            }
          </div>

            {
              (!treeNode.isPerson) && (
                <div
                  className={`arrow ${this.state.testMode && 'test-mode'}`}
                  onClick={ this.showChildren.bind(this, treeNode) }></div>
              )
            }
          </div>
          <div className={`card-item-children card-item-list level-${ level + 1 }`}
            style={{zIndex: level + 1, display: treeNode.isShowChildren ? 'block' : 'none' }}
          >
            <div className='list-content'>
            {
              [...childDoms, ...childPersonDoms]
            }
            </div>
          </div>
        </div>
      )
      return cardItem
    }
  }

  /**
   * @desc 将离线的人，回归到所在机构的personChildren数组
   *
   * @param { Object } parentNode
   */
  backToParent(personNode) {
    var parentNode = personNode.parentNode
    if (parentNode && Array.isArray(parentNode.personChildren)) {
      parentNode.personChildren.map((childNode, index) => {
        if (childNode.id === personNode.id) {
            parentNode.personChildren[index] = personNode
        }
      })
    }
  }

  setPersonChildren(parentNode, value) {
    const _this =this
    parentNode.personChildren = value.uglyData || []
    parentNode.personChildren.forEach(childNode => {
      this.id_map_person[childNode.id] = childNode
      childNode.isPerson = true
      childNode.parentNode = parentNode
      if (parentNode.personChecked) {
        childNode.personChecked = true
        parentNode.selectedPersonNum = parentNode.personChildren.length
      }
    })
    _this.forceUpdate()
  }
  showChildren(treeNode) {
    treeNode.isShowChildren = true
    if (!treeNode.personChildren || !treeNode.personChildren.length) {
      this.props.getAsynData(treeNode.orgNo, (value) => {
        this.setPersonChildren(treeNode, value)
      }, '')
    }
    this.state.breadcrumbList.push(treeNode)
    this.forceUpdate()
  }
  componentWillMount() {
    var treeData = this.props.treeData
    this.initData(treeData)
  }
  componentDidMount() {
  }

  componentWillReceiveProps({ treeData }) {
    if (treeData !== this.props.treeData) {
      this.initData(treeData)
    }
  }
  render () {
    const list = this.state.searchResultList.map(treenNode => this.generateTree(treenNode, treenNode.zIndex))
    if (!this.props.treeData) {
      return null
    }
    console.log(this.state.selectedItems)
    return (
      <div
        className="institution-tree-component"
        style={{display: this.state.isShow ? 'block' : 'none', zIndex: this.props.zIndex}}>
        <div className='top-area'>
          <SearchBar className='search-input' placeholder='搜索'
            onFocus={this.onFocusHandler}
            onChange={this.nameChangeHandler}
          />
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
        <div className='card-item-list level-1'>
          <div className='list-content'>
            { this.generateTree(this.props.treeData, this.props.zIndex) }
          </div>
          <div className='person-list'>

          </div>
        </div>

        {
          this.state.isShowSearchResultList && (
            <div
              className={`card-item-list search-result-list ${this.state.testMode && 'test-mode'}`}
            >
            {
              list
            }
          </div>
          )
        }
        <div className='confirm-area'>
          <div className='selected-items'>
            <div className='content'>
              {
                this.state.selectedItems.map((item, index) => (
                  <div
                    key={index}
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
          <div className='btn-confirm' onClick={this.confirmHandler}>确定({ this.state.selectedItems.length })</div>
        </div>
      </div>
    )
  }
}

export default InstitutionTree
