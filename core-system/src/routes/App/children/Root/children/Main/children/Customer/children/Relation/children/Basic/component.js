import React from 'react'
import './component.scss'
import { BrowserRouter as Router, Route, Switch, withRouter , HashRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import LandscapePage from 'components/hz/LandscapePage'
import { px2rem } from 'utils'
import Tabs from 'components/hz/Tabs'
import { Force, Tree, Structure, Utils } from "star-graph"
import TabHeader from '../TabHeader'

const tabs = [
  {
    title: '股权结构',
    key: 'stockRight'
  }, {
    title: '公司高管',
    key: 'executive'
  },  {
    title: '投资族谱',
    key: 'invest'
  }
]

class Basic extends React.Component {
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
        var el = document.querySelector(`#${key}`)
        var graphConfig = {
          el,
          isRotate90: true,
          transform: { k: 0.75 },
          data: relationGraph
        }
        if (key === 'stockRight') {
          Utils.traversalTree(relationGraph, function (item) {
            item.name = item.properties.name
            item.value = item.relations && item.relations.tradable_share && item.relations.tradable_share.total_stake_distribution
          })
          chart = new Structure({ ...graphConfig })
        } else {
          chart = new Tree({ ...graphConfig })
        }
        chart.init()
        // el.setAttribute('style', `transform: translate(${px2rem(window.innerWidth, window.innerWidth / 2)}, ${px2rem(window.innerWidth, window.innerWidth / 2)}) rotate(90deg)`)
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
      <div className="basic-component">
          {/* <div className='tab-bar'>
            {

              tabBar.map((item, index) => (
                <div className={`tab-item ${selectedIndex === index ? 'selected' : ''}`}>{ item }</div>
              ))
            }
          </div> */}
        <LandscapePage>
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

export default Basic
