import React from 'react'
import './component.scss'
import { Calendar } from 'components/lib'
import { Toast } from 'antd-mobile'
import moment from 'moment'
const showTime = .4
const basicConfig = {
  onSelectDay(momentObj, dateItem) {
    Toast.info(momentObj.format('YYYY-MM-DD'), showTime)
  },
  getEvents(timeInfo, callback) {
    return getEventsNumFromServer(timeInfo.startDate, timeInfo.endDate, (eventsNum) => {
      /**
       * @desc 更新日历当月每一天对应的事件数
       *
       * @param eventsNum { Array or Object } 为Array时，数组长度为当月的总天数，第一个数组元素对应当月第一天的事件数，以此类推，如[1, 0, 4, 0, ..]
       *                                      为Object时，每个key对应某一天的日期，格式为'YYYY-MM-DD', value为事件数，如{'2019-03-02': 4, ...}
       */
       // 可以在此处调整数据格式
      callback(eventsNum)
    })
  }
}

/**
 * @desc 模拟访问数据库，获取某个日期区间的每一天对应的事件数目
 *
 * @param startDate { String } 起始日期，格式为'YYYY-MM-DD'
 * @param ndDate { String } 结束日期，格式为'YYYY-MM-DD'
 * @param callback
 */
const getEventsNumFromServer = (startDate, endDate, callback) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      let eventsNum = {'2019-04-05': 3, [moment().add(-1, 'days').format('YYYY-MM-DD')]: 2, [moment().format('YYYY-MM-DD')]: 4, [moment().add(1, 'days').format('YYYY-MM-DD')]: 3}
      // let eventsNum = [1, 2, 4, 5, 3, 0, 5]
      resolve(eventsNum)
    }, 2000)
  }).then(callback)
}
class CalendarDemo extends React.Component {
  render () {
    return (
      <div className="calendar-demo-component">
        基础用法
        <Calendar {...basicConfig} />
      </div>
    )
  }
}
export default CalendarDemo
