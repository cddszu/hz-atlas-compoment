## 安装

### 使用 npm 或 yarn 安装


```bash
$ npm install hz-react-mobile --save
```

```bash
$ yarn add hz-react-mobile
```


## 示例

```jsx
import React from 'react'
import { Calendar } from 'hz-react-mobile'
class CalendarDemo extends React.Component {
  render () {
    return (
      <div className="calendar-demo-component">
        基础用法
        <Calendar />
      </div>
    )
  }
}
export default CalendarDemo
```

<!-- 引入样式：

```jsx
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
```
 -->


