import React from 'react'
import './component.scss'
import { timestampToDate } from 'utils/timeFormat'

class LegworkRemind extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }


  render() {
    const {  } = this.state
    const { msgList } = this.props

    return (
      <div className="home-legworkRemind-component">
        <div className="legworkRemind-list">
          <div className="legworkRemind-item">
            <div className="left-part">
              <i className="left-img"></i>
            </div>
            <div className="right-part">
              <div className="first-row">
                <span className="name">肖应松</span>
                <span className="time">09:30</span>
              </div>
              <div className="title">工行总部信贷部沟通贷款事宜</div>
              <div className="location">
                <i className="iconfont icon-waiqindingwei"></i>
                <span>中国北京复兴门大街甲5号</span>
              </div>
            </div>
          </div>
          <div className="legworkRemind-item">
            <div className="left-part">
              <i className="left-img"></i>
            </div>
            <div className="right-part">
              <div className="first-row">
                <span className="name">肖应松</span>
                <span className="time">09:30</span>
              </div>
              <div className="title">工行总部信贷部沟通贷款事宜</div>
              <div className="location">
                <i className="iconfont icon-waiqindingwei"></i>
                <span>中国北京复兴门大街甲5号</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LegworkRemind
