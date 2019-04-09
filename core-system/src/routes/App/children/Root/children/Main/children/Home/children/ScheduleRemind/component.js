import React from 'react'
import './component.scss'
import { timestampToDate } from 'utils/timeFormat'

class ScheduleRemind extends React.Component {
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
      <div className="home-scheduleRemind-component">
        <div className="scheduleRemind-list">
          {
            msgList.content.map((item, index) => {
              return (
                <div className="scheduleRemind-item" key={item.id}>
                  {
                    index && item.pushDate === msgList.content[index - 1].pushDate
                    ?
                    null
                    : <div className="date">{item.pushDate === timestampToDate(Date.now()) ? '今天' : item.pushDate}</div>
                  }
                  <div className="content">
                    <div className="title">
                      <span className="msgTitle">{item.msgTitle}</span>
                      <span className="msgTime">{item.pushDate}</span>
                    </div>
                    <div className="second-row">
                      <span className="companyName">{item.companyName ? item.companyName : '--'}</span>
                    </div>
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

export default ScheduleRemind
