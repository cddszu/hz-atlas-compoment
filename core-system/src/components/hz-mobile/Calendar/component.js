import React from 'react'
import './component.scss'
import moment from 'moment'
import holiday from './utils/holiday'
import calendar from './utils/calendar'
import { Picker } from 'antd-mobile'
import LeftArrow from './images/icon-left-arrow@2x.png'

const isObject = (val) => {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
}
class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.today_moment = moment()
    this.today_year = this.today_moment.get('year')
    this.today_month = this.today_moment.get('month')
    this.today_date = this.today_moment.get('date')

    const yearMonth = [[], []]
    for (var i = 1900; i <= 2200; i++) {
      yearMonth[0].push({
        value: i,
        label: i + '年'
      })
    }
    for (var i = 1; i <= 12; i++) {
      yearMonth[1].push({
        value: i,
        label: i + '月'
      })
    }
    this.state = {
      m: this.today_moment,
      selectedIndex: null,
      yearMonth: yearMonth,

      // 支持两种类型，分别是Array（index对应天数，从0开，举例子：[1, 20, 3, ..]）和Object（举例子：{'2019-03-02': 4, ...}）
      events: [], //
      selectedYearMonth: [this.today_year, this.today_month + 1],
      visible: false
    }
    this.holiday = holiday
    this.isLeapYear = this.isLeepYear.bind(this)
    this.isEmptyDayItem = this.isEmptyDayItem.bind(this)
    this.getCurrentDay_weekday = this.getCurrentDay_weekday.bind(this)
    this.isToday = this.isToday.bind(this)
    this.jump2TodayHandler = this.jump2TodayHandler.bind(this)
    this.isShowBtn_jump2Today = this.isShowBtn_jump2Today.bind(this)
    this.setYearMonth = this.setYearMonth.bind(this)
    this.selectedYearMonthHandler = this.selectedYearMonthHandler.bind(this)
    this.ok_selectedYearMonth_handler = this.ok_selectedYearMonth_handler.bind(this)
    this.cancel_selectedYearMonth_handler = this.cancel_selectedYearMonth_handler.bind(this)
    this.updateEventNums = this.updateEventNums.bind(this)
  }

  // 是闰年
  isLeepYear(year) {

    //如果当前年份能被4整除但是不能被100整除或者能被400整除，即可确定为闰年，返回1，否则返回0
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true
    }
    return  false
  }

  isEmptyDayItem(dayNums, first_day_weekday, itemIndex) {
    var first_day_index = first_day_weekday - 1
    var last_day_index = first_day_index + (dayNums - 1)
    if (itemIndex < first_day_index || itemIndex > last_day_index) {
      return true
    } else {
      return false
    }
  }

  getLunarDay(year, month, date) {
    var lundarDayObj = calendar.solar2lunar(1999, 8, 1)
    return lundarDayObj
  }

  getCurrentDay_weekday(currentDate) {
    var dateGap = ((this.date % 7 - currentDate % 7) + 7) % 7
    const currentDate_weekday =  (this.weekday - dateGap + 7) % 7
    return currentDate_weekday
  }

  // 是否是周末
  isWeekend(date) {
    const curr_day_weekday = this.getCurrentDay_weekday(date)
    if (curr_day_weekday === 6 || curr_day_weekday === 0) {
      return true
    } else {
      return false
    }
  }

  isToday(year, month, date) {
    if (this.today_year === year && this.today_month === month && this.today_date === date) {
      return true
    } else {
      return false
    }
  }

  isShowBtn_jump2Today(year, month) {
    if (year === this.today_year && month === this.today_month) {
      return false
    } else {
      return true
    }
  }

  getHolidays(dayItem) {
      //   IDayCn: "廿五"
      //   IMonthCn: "正月"
      //   cDay: 1
      //   cMonth: 3
      const {IDayCn, IMonthCn, cDay, cMonth} = dayItem
      var holidays = []
      var solar_holidays = this.holiday.solar[`${cMonth}-${cDay}`]
      var lunar_holidays = this.holiday.lunar[`${IMonthCn}-${IDayCn}`]
      if (solar_holidays) {
        holidays = holidays.concat(solar_holidays)
      }
      if (lunar_holidays) {
        holidays = holidays.concat(lunar_holidays)
      }
      return holidays
  }
  jump2TodayHandler() {
    this.setState({
      m: moment()
    })
  }
  changeMonthHandler(stepNum) {
    this.state.m.add(stepNum, 'months')
    this.setYearMonth([this.state.m.get('year'), this.state.m.get('month') + 1])
    this.setState({
      selectedIndex: null
    })
  }

  clickHandler(isEmpty, selectedIndex, dayIndex) {
    if (isEmpty) {
      return
    }
    this.setState({
      selectedIndex: selectedIndex
    }, () => {
      if (this.props.onSelectDay) {
        var dateItem = this.dateItems[dayIndex]
        var momentObj = moment([dateItem.cYear, dateItem.cMonth, dateItem.cDay].join('-'))
        this.props.onSelectDay(momentObj, dateItem)
      }
    })

  }
  cancel_selectedYearMonth_handler() {
    this.setState({
      visible: false
    })
  }
  ok_selectedYearMonth_handler(value) {
    this.setYearMonth(value)
    this.cancel_selectedYearMonth_handler()
  }

  /**
   * @desc 设置年月
   * @param { Array } yearMonth, month从1开始
   */
  setYearMonth(yearMonth) {

    const _this = this
    // moment实例化时，month从0开始
    yearMonth[1]--
    this.setState({
      m: moment(yearMonth)
    }, () => {
      _this.getEvents()
    })
  }

  selectedYearMonthHandler() {
    const { m } = this.state
    this.setState({
      selectedYearMonth: [m.get('year'), (m.get('month') + 1)],
      visible: true
    })
  }

  updateEventNums(events) {
    if (events) {
      this.setState({
        events: events
      })
    }
  }
  getEvents() {
    const { m } = this.state
    if (this.props.getEvents) {
      this.props.getEvents({
        year: m.get('year'),
        month: m.get('month') + 1,
        startDate: m.endOf('month').format('YYYY-MM-DD'),
        endDate: m.startOf('month').format('YYYY-MM-DD'),
      }, this.updateEventNums)
    }
  }

  componentWillMount() {
    if (this.props.initYearMonth) {
      this.setYearMonth(this.props.initYearMonth)
    }

  }
  componentDidMount() {
    // this.setState({
    //   visible: true
    // })
    const _this = this
    this.getEvents()
  }

  componentWillReceiveProps() {

  }
  render () {
    const { m, selectedIndex } = this.state
    this.year = this.state.m.get('year')

    // from 0
    this.month = m.get('month')
    this.date = m.get('date')
    this.weekday = m.isoWeekday()
    this.first_day_weekday = this.getCurrentDay_weekday(1)
    const days_per_month = [31, 28 + (this.isLeapYear(this.year) ? 1 : 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const current_month_days = days_per_month[this.month]
    const rowNums = Math.ceil((current_month_days + this.weekday) / 7)
    const rows = []
    let dayIndex = 0
    this.dateItems = []
    for (var i = 0; i < current_month_days; i++) {
      var solar_date = i + 1

      // {
      //   Animal: "猪"
      //   IDayCn: "廿五"
      //   IMonthCn: "正月"
      //   cDay: 1
      //   cMonth: 3
      //   cYear: 2019
      //   Term: null
      //   astro: "双鱼座"

      //   gzDay: "丁酉"
      //   gzMonth: "丙寅"
      //   gzYear: "己亥"
      //   isLeap: false
      //   isTerm: false
      //   isToday: false
      //   lDay: 25
      //   lMonth: 1
      //   lYear: 2019
      //   nWeek: 5
      //   ncWeek: "星期五"
      // }
      var dayItem = calendar.solar2lunar(this.year, this.month + 1, i + 1)
      dayItem.holidays = this.getHolidays(dayItem)
      if (this.state.events) {
        if (isObject(this.state.events)) {
          var dateStr = moment([dayItem.cYear, dayItem.cMonth - 1, dayItem.cDay]).format('YYYY-MM-DD')
          if (this.state.events[dateStr]) {
            dayItem.events = this.state.events[dateStr]
            dayItem.eventNums = this.state.events[dateStr].length
          } else {
            dayItem.eventNums = 0
          }
        }
        if (Array.isArray(this.state.events)) {
          dayItem.eventNums = this.state.events[i] || 0
        }
      }
      this.dateItems.push(dayItem)
    }
    for (var i = 0; i < rowNums; i++) {
      let dayItems = []
      for (var j = 0; j < 7; j++) {
        var isEmpty = this.isEmptyDayItem(current_month_days, this.first_day_weekday, i * 7 + j)
        dayItems.push(
          <div
            className={`day-item
              ${ isEmpty ? 'empty' : ''}
              ${this.isToday(this.year, this.month, dayIndex + 1) ? 'is-today' : ''}
              ${this.isWeekend(dayIndex + 1) ? 'is-weekend' : ''}
              ${selectedIndex === (i * 7 + j) ? 'selected' : ''}`}
            onClick={this.clickHandler.bind(this, isEmpty, i * 7 + j, dayIndex)}
          >
          { isEmpty ? '' :
            <div className='day-item-content'>
              <div className='solar-text'>{ this.dateItems[dayIndex].cDay }</div>
              {
                this.dateItems[dayIndex].holidays.length === 0 ?
                  <div className='lunar-text'>{ this.dateItems[dayIndex].IDayCn === '初一' ? (this.dateItems[dayIndex].IMonthCn) : this.dateItems[dayIndex].IDayCn }</div>
                :
                  <div className='holiday-text'>{ this.dateItems[dayIndex].holidays.join(' ') }</div>
              }
              <div className='event-nums'>
              {
                [...Array(this.dateItems[dayIndex].eventNums)].map((x, index) => (
                  <div className='event-circle' key={index}></div>
                ))
              }
              </div>
            </div>
          }

          </div>
        )
        if (!isEmpty) {
          dayIndex++
        }
      }
      rows.push(
        <div className='row'>
          {
            dayItems
          }
        </div>
      )
    }
    return (
      <div className="calendar-component">
        <div className='date-area'>
          <div
            onClick={this.changeMonthHandler.bind(this, -1)}
            className='icon icon-left-arrow'
          >
            <img src={LeftArrow} />
          </div>
          <div
            className='date'
            onClick={this.selectedYearMonthHandler}
          >{ m.format('YYYY年MM月') }</div>
          <div
            onClick={this.changeMonthHandler.bind(this, 1)}
            className='icon icon-right-arrow'
          >
            <img src={LeftArrow} />
          </div>
          {
            this.isShowBtn_jump2Today(this.year, this.month) && <div className='btn-today' onClick={this.jump2TodayHandler}>今</div>
          }
        </div>
        <div className='weekday-area'>
        {
          ['一', '二', '三', '四', '五', '六', '日'].map(text => (
            <div className='weekday-item' key={text}>{ text }</div>
          ))
        }
        </div>
        <div className='days-area'>
          {
            rows
          }
        </div>
        <Picker
            visible={this.state.visible}
            title='请选择年月'
            data={this.state.yearMonth}
            cols={2}
            value={this.state.selectedYearMonth}
            cascade={false} // 没有这个属性会导致渲染失败（选择项为空）
            onDismiss={this.cancel_selectedYearMonth_handler}
            onOk={this.ok_selectedYearMonth_handler}
          >
          </Picker>

      </div>
    )
  }
}

export default Calendar


// getEvents(timeInfo, callback) {
//   const _this = this
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([this.num++])
//     })
//   }).then(callback)

// }
