---
TreeSelect 树选择
---

适用于具有树结构类型数据的浏览及选择（单选、多选、怪异单选），支持异步拉取数据模式。

## API(props)

### 基本属性
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| treeData | 树形数据，格式为{name: '全部', id: '0000', children: \[......\]} | Object | 0 |
| mode | 支持四种选择模式：single（单选）、multi（多选）、view（不可选）、quirks-single（怪异单选），分别为 | String | view |
| asynFetchDepth | 表示异步向下拉取几层数据，值大于1时，会隐藏搜索功能，该参数仅在配置onAsynFetch后放生效 | Number | 1 |

### 事件（方法）
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onAsynFetch | 配置该参数时，会开启组件的异步模式（此时asynFetchDepth属性生效），该参数需要传入一个id，用于获取下一层数据 | Function | null |
| onAsynSearch | 异步搜索，异步模式下，当且仅当asynFetchDepth值为1时，搜索框才显示（异步搜索2层及以上时，会导致搜索列表的item无法和本地的树数据准确同步选中状态，故不显示搜索功能） | Function | null |


