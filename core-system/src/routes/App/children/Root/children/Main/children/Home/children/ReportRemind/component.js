import React from 'react'
import './component.scss'
import { timestampToDate } from 'utils/timeFormat'

class ReportRemind extends React.Component {
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
      <div className="home-reportRemind-component">
        <div className="reportRemind-list">
          <div className="reportRemind-item">
            <div className="left-part">
              <i className="left-img"></i>
            </div>
            <div className="right-part">
              <div className="first-row">
                <div className="report-name">
                  <span className="name">肖应松</span>提交了汇报
                </div>
                <span className="time">09:30</span>
              </div>
              <div className="title">日报 2018年10月12日 星期五</div>
              <div className="description">今日工作：一，参加信贷风控沟通会议，详细讨论了新讨论了新讨论了新讨论了新</div>
            </div>
          </div>
          <div className="reportRemind-item">
            <div className="left-part">
              <i className="left-img"></i>
            </div>
            <div className="right-part">
              <div className="first-row">
                <div className="report-name">
                  <span className="name">肖应松</span>提交了汇报
                </div>
                <span className="time">09:30</span>
              </div>
              <div className="title">日报 2018年10月12日 星期五</div>
              <div className="description">今日工作：一，参加信贷风控沟通会议，详细讨论了新</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReportRemind
