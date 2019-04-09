import React from 'react'
import './component.scss'
import { BrowserRouter as Router, Route, Switch, withRouter , HashRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import LandscapePage from 'components/hz/LandscapePage'
import { px2rem } from 'utils'
import Tabs from 'components/hz/Tabs'
import { Force, Tree } from "star-graph"
import TabHeader from '../TabHeader'

const tabs = [
  {
    title: '集团成员',
    key: 'credit'
  }, {
    title: '担保关系',
    key: 'guarantee'
  },  {
    title: '资金往来',
    key: 'transfer'
  },  {
    title: '银行借贷',
    key: 'borrowing'
  }
]

class InBank extends React.Component {
  static propTypes = {
  }

  static defaultProps = {
  }
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0,
      //url中的objectKey
      name: ''
    }
    this.graphData = {

    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(index, key) {
    let name = this.getUrlParams('name');
    if (!this.graphData[key]) {
      this.props.getRelationGraph(key,name)
    }
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
          transform: { k: 0.75 },
          data: relationGraph
        }
        if (key === 'transfer') {
          chart = new Tree({ ...graphConfig })
        } else {
          chart = new Force({ ...graphConfig })
        }

        chart.init()
      }
    }
  }
  render () {
    const styles = {
      position: 'relative',
      overflow: 'hidden',
      width: px2rem(window.innerWidth, window.innerHeight),
      height: px2rem(window.innerWidth, window.innerWidth)
    }

    return (
      <div className="inBank-component">
        <LandscapePage>
          {/* <div className='tab-bar'>
            {

              tabBar.map((item, index) => (
                <div className={`tab-item ${selectedIndex === index ? 'selected' : ''}`}>{ item }</div>
              ))
            }
          </div> */}

          <Tabs
            component={TabHeader({tabs})}
            className='tabs'
            initialPage={1}
            onChange={this.changeHandler}
          >
            {
              tabs.map(item => (
              <div className='pane-item'>
                <div
                  id={ item.key }
                  key={ item.key }
                  style={styles}
                ></div>
              </div>
              ))
            }
          </Tabs>
        </LandscapePage>
      </div>
    )
  }
}

export default InBank
