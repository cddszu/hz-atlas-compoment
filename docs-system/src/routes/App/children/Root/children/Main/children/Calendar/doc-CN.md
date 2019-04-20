---
Calendar 日历
---

此日历包含公历，农历，假日，日程数（即事件数，用点表示）。

### 特殊说明
1. 组件内部集成[momentJs](https://momentjs.com/)，方便进行日期处理；
2. 组件内部集成了ant-mobile的滚动选择器[picker](https://mobile.ant.design/components/picker-cn/)，用于年和月的滚动选择；
3. 组件内部集成了[calendar.js](https://github.com/jjonline/calendar.js)，用于实现公历和农历的互转；

## API(props)

### 基本属性
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| initYearMonth | 初始年月，月份从1开始，2019年1月用\[2019, 1\]表示 | Array() | null |


### 事件（方法）
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| getEvents | 如果日历需要显示每天的日程数（事件数，即对应小圆圈），需要从外部通过此hook传入一个方法（通常是异步的），用于拉取本月的日程数据（事件数据），此方法接受3个参数(starDate, endDate, callback)，前两个参数格式为'YYYY-MM-DD'，分别对应当月的第一天和最后一天，callback为组件的内部处理函数，当成功获取当月的日程数（事件数）时，该callback会执行，用于给组件渲染日程数（事件数）的小圆圈样式，callback接受一个参数eventsNum，该参数可为Array或Object类型，详见后面；日历每显示一页时（每一页对应一个月），此方法都会在组件内调用一次 | Function | null |
| onSelectDay |点击某一天时，触发此监听器的执行，返回2个参数(momentObj, dateItem)，第一个参数momentObj对应改天的moment对象，第二个参数dateItem，对应该天对象，该对象的字段如下显示 | Function | null |
```
// eventsNum为Array类型时，第一个数组元素对应第一天的日程数（事件数）
[2, 3, 1, 3, 0, 4，......]

// eventsNum为Object类型时，key为日期，value为日程数（事件数）
{
  '2019-04-05': 4
  '2019-04-21': 3
}
```

```
// dateItem对象包含的字段
{
  "lYear":2019,
  "lMonth":3,
  "lDay":9,
  "Animal":"猪",
  "IMonthCn":"三月",
  "IDayCn":"初九",
  "cYear":2019,
  "cMonth":4,
  "cDay":13,
  "gzYear":"己亥",
  "gzMonth":"戊辰",
  "gzDay":"庚辰",
  "isToday":false,
  "isLeap":false,
  "nWeek":6,
  "ncWeek":"星期六",
  "isTerm":false,
  "Term":null,
  "astro":"白羊座",
  "holidays":[
  ],
  "eventNums":0
}
```
