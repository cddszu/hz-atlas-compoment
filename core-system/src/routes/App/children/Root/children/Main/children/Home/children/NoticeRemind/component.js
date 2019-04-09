import React from 'react'
import './component.scss'
import { timestampToDate } from 'utils/timeFormat'

class NoticeRemind extends React.Component {
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
      <div className="home-noticeRemind-component">
        <div className="noticeRemind-list">
          <div className="noticeRemind-item">
            <div className="left-part">
              <i className="left-img"></i>
            </div>
            <div className="right-part">
              <div className="first-row">
                <div className="notice-name">
                  <span className="name">肖应松</span> 至 海致星图
                </div>
                <div className="time">09:30</div>
              </div>
              <div className="title">新人介绍————占兰梅</div>
              <div className="description">小伙伴们，大家好。很高兴为大家介绍一位新同事，入新同事同事同事同事</div>
            </div>
          </div>
          <div className="noticeRemind-item">
            <div className="left-part">
              <i className="left-img"></i>
            </div>
            <div className="right-part">
              <div className="first-row">
                <div className="notice-name">
                  <span className="name">肖应松</span> 至 海致星图
                </div>
                <div className="time">09:30</div>
              </div>
              <div className="title">新人介绍————占兰梅</div>
              <div className="description">小伙伴们，大家好。很高兴为大家介绍一位新同事，入新同事同事同事同事</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NoticeRemind
