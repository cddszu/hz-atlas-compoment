import React from 'react'
import './component.scss'

class HangWai extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentChance: true,
      currentRisk: false,
    }
    this.currentStyle= {
      background: '#D40001',
      borderRadius: '29px',
      color: '#FFF'
    }
    this.clickToggleTabs = this.clickToggleTabs.bind(this)
  }

  clickToggleTabs(flag) {
    flag === 'chance'
    ?
    this.setState({
      currentChance: true,
      currentRisk: false
    })
    :
    this.setState({
      currentChance: false,
      currentRisk: true
    })
  }

  render() {
    const { currentChance, currentRisk } = this.state
    const { customerOutevet } = this.props
    let chanceEventList = []
    let riskEventList = []
    customerOutevet.content.map((item) => {
      if (['1','2','3','4'].indexOf(item.type) !== -1) {
        chanceEventList.push(item)
      } else {
        riskEventList.push(item)
      }
    })

    return (
      <div className="customer-detail-hangwai-component">
        <div className="hangwai-tabs">
          <div className="tabs-pane" style={currentChance ? this.currentStyle : null} onClick={this.clickToggleTabs.bind(this, 'chance')}>机会事件</div>
          <div className="tabs-pane" style={currentRisk ? this.currentStyle : null} onClick={this.clickToggleTabs.bind(this, 'risk')}>风险事件</div>
        </div>
        <div className="hangwai-list">
          {
            this.state.currentChance
            ?
            chanceEventList.map((item) => {
              return (
                <div className="hangwai-item" key={item.objectKey}>
                  <div className="title">{item.name}</div>
                  <div className="second-row">
                    <span className={`eventType ${item.typeColor}`}>{item.typeStr}</span>
                    <span className="eventTime">{item.time}</span>
                  </div>
                </div>
              )
            })
            :
            riskEventList.map((item) => {
              return (
                <div className="hangwai-item" key={item.objectKey}>
                  <div className="title">{item.name}</div>
                  <div className="second-row">
                    <span className={`eventType ${item.typeColor}`}>{item.typeStr}</span>
                    <span className="eventTime">{item.time}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default HangWai
