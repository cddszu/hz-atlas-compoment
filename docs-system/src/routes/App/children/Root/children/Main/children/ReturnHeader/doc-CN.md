---
ReturnHeader 返回头
---

通用的返回头，包括左侧按钮、中间title、右侧按钮，右侧按钮默认为空，可以根据需要自定义配置

## 实现说明
- 在link模式下，基于Link组件实现，可以通过链接跳转返回上一层
- 在history模式下，基于GoBack组件实现，可以通过history.goBack()返回上一层
- 在cancel模式下，表示取消返回功能，但是可以通过onClick来增加相关的监听处理
## API(props)

### 基本属性
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 有三个值（仅在cancel模式需要配置该参数）：history（默认值）、link（leftBtn配置url属性自动启动）、cancel（需要取消返回功能时放配置，在cancel之后，仍能通过leftBtn.onClick来增加事件监听） | Object | {} |
| title | ReturnHeader的配置参数，用于配置返回头部的title | String | '' |
| leftBtn | 左侧按钮的配置对象，包含的属性有url（String，配置了用于启动link模式，不配置默认为history模式）、slot（Component，自定义组件，可以直接为文字）、styles（Object，用于配置css）、onClick（为按钮添加click监听处理） | Object | {} |
| rightBtn | 右侧按钮的配置对象，包含的属性有slot（同上）、styles（同上）、onClick（同上） | Object | {} |

### 事件（方法）
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| --- | --- | --- | --- |


### slot
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| --- | --- | --- | --- |

