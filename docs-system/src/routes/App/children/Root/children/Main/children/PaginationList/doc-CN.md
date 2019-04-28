---
PaginationList 分页列表
---

平滑滚动的分页列表

## 实现说明
- 基于Iscroll实现

## 使用说明
- 高度的设置，在该组件外层，再包裹一个div，通过设置该div来设置当前组件的高度，如```<div styles={{height: 300}}><PaginationList /></div>```

## API(props)

### 基本属性
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| totalCount | 查询结果的总条数 | Number | 0 |
| content | 列表集合，为一个元素，通常是ul或div，其包含n个列表item | Component | 0 |
| distance | 可选，用于设置上拉高度的边界值（单位为px），当大于该边界值时，表示可以执行onPullUp对应的监听器 | 10 | 0 |
| pageSize | 可选，一般可忽略，用于组件内部判断totalCount小于pageSize时的情况，默认情况下，当0 < totalCount < pageSize时，列表尾部会显示'没有更多数据～'，但设计师要求不作状态提醒，此处增加pageSize，即用于在0 < totalCount < pageSize时，列表尾部为空，不作状态提醒 | Number | undefined |

### 事件（方法）
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onPullUp | 上拉时一定高度时，会触发该hook的执行 | --- | --- |

### slot
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| noDataSlot | 当totalCount为0时，需显示暂无数据，该slot参数可用于自定义暂无数据状态的显示样式 | Component | '暂无数据' |


