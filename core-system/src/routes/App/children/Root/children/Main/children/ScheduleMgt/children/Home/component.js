import React from 'react'
import './component.scss'
import { Modal } from 'antd-mobile'
import {Link} from 'react-router-dom'
// import { Tabs } from 'antd-mobile'
import { Calendar } from 'components/lib'
import NO_DATA_IMG from './images/icon-no-data@2x.png'
import { formatMsgDate } from 'utils/timeFormat'
import { GoBack } from 'components/lib'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.num = 1
    this.state = {
      someday_schedule_list: []
    }
    this.onSelectDay = this.onSelectDay.bind(this)
    this.getEvents = this.getEvents.bind(this)
  }
  onSelectDay(momentObj, dateItem) {
    this.props.get_someday_schedule_list(momentObj.format('YYYY-MM-DD'))
  }
  getEvents(timeInfo, callback) {
    return this.props.get_date_range_schedule_list(timeInfo.startDate, timeInfo.endDate, (value) => {
      callback(value)
    })
  }
  componentDidMount() {
    let today = formatMsgDate('today')
    this.props.get_someday_schedule_list(today)
  }
  componentWillReceiveProps({ someday_schedule_list }) {
    if (someday_schedule_list !== this.props.someday_schedule_list) {
      delete someday_schedule_list.extendData
      var temp = []
      for (let key in someday_schedule_list) {
        temp = temp.concat(someday_schedule_list[key])
      }
      this.setState({
        someday_schedule_list: [...temp]
      })
    }
  }
  render () {
    let today = formatMsgDate('today')
    const { someday_schedule_list } = this.state
    return (
      <div className='my-schedule-component'>
        <div className='my-schedule-head'>
          <GoBack><i className='schedule-cancel iconfont icon-return'></i></GoBack>
          <span className='schedule-title'>我的日程</span>
          <span className='schedule-confirm'></span>
        </div>
        <div className='schedule-container'>
          <Calendar onSelectDay={this.onSelectDay} getEvents={this.getEvents}/>
          {
            someday_schedule_list.length !== 0 ?
              <div className='schedule-list'>
                {
                  someday_schedule_list.map((item, index) => (
                    <Link className={`schedule-item ${item.endDt < today ? 'grey' : ''}`} key={index} to={'/root/main/scheduleMgt/detail?scheduleId=' + item.id}>
                      <div className='first-row clearfix'>
                        <div className='title'>{ item.topic }</div>
                        <div className='time'>{ `${item.startDt && item.startDt.split(' ')[1]}-${item.endDt && item.endDt.split(' ')[1]}`}</div>
                      </div>
                      <div className='second-row'>
                        <div className='content'>{item.companyVo ? (item.companyVo.companyName || '--') : '--'}</div>
                      </div>
                    </Link>
                  ))
                }
              </div>
            :
              <div className='no-data-area'>
                <img src={NO_DATA_IMG} />
                <div className='tips-text'>今日没有日程安排哦～</div>
              </div>
          }
          <Link className='icon-add-chance' to={'/root/main/scheduleMgt/create'}></Link>
        </div>
      </div>
    )
  }
}

export default Home
