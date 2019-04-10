import React from 'react'
import './component.scss'
import { BrowserRouter as Router, Route, Switch, withRouter , HashRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { LandscapePage } from 'components/lib'
import { Tabs } from 'components/lib'
import { Force, Tree } from "star-graph"

const tabs = [
  {
    title: '一致行动人',
    key: 'concert'
  }, {
    title: '实际控制人',
    key: 'actual_controller'
  },  {
    title: '上下游关系',
    key: 'upAndDown'
  },  {
    title: '泛集团派系关系',
    key: 'faction'
  },  {
    title: '异常担形态',
    key: 'exceptionGuarantee'
  },  {
    title: '企业受益人',
    key: 'beneficiary'
  },

]
const TabHeader = (
  <div className='content'>
    <div className='center'>
    {
      tabs.map(item => (
        <div className='tab-item' key={item.key}>{ item.title }</div>
      ))
    }
    </div>
  </div>
)
class Excavation extends React.Component {
  static propTypes = {
  }

  static defaultProps = {
  }
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }
    this.graphData = {

    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  getUrlParams = (keyName) => {
    let param = window.location.hash.split('?')[1]
    let hashArr = param.split('&')
    for(let item in hashArr) {
      let key = hashArr[item].split('=')[0]
      let value = hashArr[item].split('=')[1]
      if (keyName === key) {
        return value;
      }
    }
  }

  changeHandler(index, key) {
    let name = this.getUrlParams('name');
    if (!this.graphData[key]) {
      this.props.getRelationGraph(key,name)
    }
  }
  componentDidMount() {
    let name = this.getUrlParams('name');
    this.props.getRelationGraph(tabs[0].key,name)
  }

  componentWillReceiveProps({ relationGraph }) {
    if (relationGraph !== this.props.relationGraph) {
      var key = relationGraph.extendData.key
      if (!this.graphData[key]) {
        this.graphData[key] = relationGraph
        var chart = null
        var graphConfig = {
          el: document.querySelector(`#${key}`),
          isRotate90: true,
          width: window.document.documentElement.clientHeight,
          height: window.document.documentElement.clientWidth,
          data: relationGraph
        }
        if (key === 'actual_controller' || key === 'concert') {
          chart = new Tree({ ...graphConfig })
        } else {
          chart = new Force({ ...graphConfig })
        }

        chart.init()
      }
    }
  }
  render () {
    return (
      <div className="excavation-component">
        <LandscapePage>
          {/* <div className='tab-bar'>
            {

              tabBar.map((item, index) => (
                <div className={`tab-item ${selectedIndex === index ? 'selected' : ''}`}>{ item }</div>
              ))
            }
          </div> */}

          <Tabs
            component={TabHeader}
            className='tabs'
            initialPage={1}
            onChange={this.changeHandler}
          >
            {
              tabs.map(item => (
                <div className='pane-item'>
                <div id={ item.key } key={ item.key }></div>
              </div>
              ))
            }
          </Tabs>
        </LandscapePage>
      </div>
    )
  }
}

export default Excavation
