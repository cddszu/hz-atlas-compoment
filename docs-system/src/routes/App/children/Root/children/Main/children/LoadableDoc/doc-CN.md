---
Loadable 分割加载
---

用于分割代码（分割粒度为组件），实现按需加载，减少每一次加载的文件大小，以提高页面的加载速度

## 实现说明
- 基于react-loadable实现
## 使用说明
- 需要配合import一起使用，具体如下
```
import { Loadable } from 'hz-react-mobile'
const LandscapePageDemo = Loadable(import('./children/LandscapePageDemo'))

<LandscapePageDemo />

```



