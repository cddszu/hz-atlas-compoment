---
InnerPge 内页（隐藏的子页）
---

隐藏在当前页面的子页（内页），进入内页后（切出会遮盖整个父页），可以通过点击头部的返回按钮来回到父页。


## 使用说明
- 内页组件的内容，嵌套在组件标签的开闭区间内，如```<InnerPage>内容</InnerPage >```
- 内页组件默认是隐藏的，该组件暴露出show方法，用于显示内页(先通过组件的ref属性获得组件元素，进而调用其方法)，如```<InnerPage ref={ page => this.page = page } >内容</InnerPage>```然后在事件监听器中使用```this.page.show()```来显示内页

## 实现说明
- 实现原理：隐藏在当前页面的一个块，类似于弹窗，全屏显示，会完全遮盖父页面
- 基于TogglePage组件实现，可以从当前页面的各个方位切出内页
- 默认带一个头部，基于ReturnHeader组件实现，采用的是非link模式
- 通过标签的开闭来包裹内容

## API(props)

### 基本属性
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | ReturnHeader的配置参数，用于配置返回头部的title | String | '' |
| from | ReturnHeader的配置参数，值有top, right, bottom, left，用于配置内页从哪个方向切出 | String | right |

### 事件（方法）
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 用于显示内页 | --- | --- |
| hide | 用于隐藏内页，点击内页自带的ReturnHeader组件，会触发改方法，所以此方法基本极少使用 | --- | --- |

### slot
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| --- | --- | --- | --- |
