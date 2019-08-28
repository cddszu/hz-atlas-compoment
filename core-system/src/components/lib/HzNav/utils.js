export function setMap(arr) {
  let o = {}
  if (Array.isArray(arr)) {
    arr.map(item => {
      o[item.code] = setMap(item.children)
    })
  }
  return o
}
export function authJudge(permission, platform = 'GAP') {
  // return true
  if (!permission) {
    return false
  }
  try {
    let resource = decodeURIComponent(window.localStorage.getItem('RESOURCE'))
    resource = JSON.parse(resource === 'null' ? '{}' : resource)[platform] || []
    let auth = false
    if (Array.isArray(permission)) {
      permission.map(p => {
        let pAuth = false
        p = p.replace(/\s+/g, '').split(',')
        let current = resource
        p.find(item => {
          current = current[item]
          pAuth = !!current
          return !current
        })
        auth = auth || pAuth
      })
    } else {
      let current = resource
      let p = permission.replace(/\s+/g, '').split(',')
      p.find(item => {
        current = current[item]
        auth = !!current
        return !current
      })
    }
    return auth
  } catch (e){
    console.error('权限信息异常，请重新登录')
    return false
  }
}



export const navIconList = [
  {
    mark: 'DMP',
    name: '构建',
    iconName: 'icon-dataplatform'
  },
  {
    mark: 'GAP',
    name: '分析',
    iconName: 'icon-analysisplatform'
  },
  {
    mark: 'DIP',
    name: '挖掘',
    iconName: 'icon-miningplatform'
  },
  {
    mark: 'DAP',
    name: '应用',
    iconName: 'icon-applicationplatform'
  },
  {
    mark: 'SYS',
    name: '系统',
    iconName: 'icon-systemplatform'
  }
]
