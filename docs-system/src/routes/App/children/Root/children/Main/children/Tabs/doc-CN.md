---
Tabs 标签页
---

选项卡切换组件。

## API(props)

### 基本属性
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tabIndex | 当前选中的tab，从0开始 | Number | 0 |
| tabs | 用于配置tab的title（名称），每个数组元素对应一个tab，为对象类型，包含title和key两个属性值 | Array | [] |

### 事件（方法）
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClick | 点击tab时将触发该方法的执行，返回4个参数，分别为tabIndex, tabTitle, tabKey, event对象 | Function | null |

### slot
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| leftSlot | 在tab栏左侧预留的插槽，可用于增加自定义模块 | React Element | null |
| leftSlot | 在tab栏右侧预留的插槽，可用于增加自定义模块 | React Element | null |
| tabsSlot | 用于DIY（替换）整个tab栏，建议最外层div的class命名为diy-tab-header, 第二层预设一个class名为content的div，第三层必须包含一个class名为center的div，这个div即对应tabs的配置，其每一个子元素对应一个tab-item | React Element | null |
