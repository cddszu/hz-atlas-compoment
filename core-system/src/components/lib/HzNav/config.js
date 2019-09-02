export const platforms = [
  {key: 'DMP', name: '知识构建平台', icon: 'icon-dataplatform'},
  {key: 'GAP', name: '知识分析平台', icon: 'icon-analysisplatform'},
  // {key: 'DIP', name: '挖掘平台', icon: 'icon-miningplatform'},
  {key: 'DAP', name: '应用平台', icon: 'icon-applicationplatform'},
  {key: 'SYS', name: '系统管理', icon: 'icon-systemplatform'},
]

export const urlMap = [
  // 数据平台
  {url: '/root/main/sourceMgt/list', permission: 'data_source_manager', platform: 'DMP', name: '数据源管理'},
  {url: '/root/main/metadata', permission: 'meta_manager', platform: 'DMP', name: '元数据管理'},
  {url: '/root/main/dataAccess', permission: 'data_inboud', platform: 'DMP', name: '数据接入'},
  // 知识分析平台
  {url: '/root/main/projectMgt/list', permission: ['project_manager, owner_project', 'project_manager, other_project'], platform: 'GAP', name: '项目列表'},
  {url: '/root/main/projectAuthorize', permission: 'grant_project', platform: 'GAP', name: '项目授权'},
  {url: `/root/main/projectMgt/manage/detail`, permission: 'manager_project', platform: 'GAP', name: '项目管理'},
  {url: '/root/main/serviceMgt',
    permission: ['gdb_search, gs_service_save', 'gs_sceneExplore, explore_service_save', 'gdb_search, save_search', 'gs_sceneExplore, explore_save_search'],
    platform: 'GAP', name: '服务管理'},
  // {url: '/root/main/serviceMgt', permission: 'manager_project', platform: 'GAP', name: '管理项目'},
  {url: '/graph/search', permission: 'gdb_search', platform: 'GAP', target: '_blank', name: '图查询'},
  {url: '/graph/scene', permission: 'gs_sceneExplore', platform: 'GAP', target: '_blank', name: '场景探索'},
  {url: '/root/main/offlineGraph', permission: 'offline', platform: 'GAP', name: '离线图查询'},
  {url: '/root/main/graphConfig', permission: 'style', platform: 'GAP', name: '可视化配置'},
  {url: '/root/main/hyperlinkConfig', permission: 'detail_hyperlinks', platform: 'GAP', name: '超链接配置'},
  {url: '/root/main/authMap', permission: 'permission_mapping_manger', platform: 'GAP', name: '权限映射'},
  {url: '/root/main/timeline_config', permission: 'timeline', platform: 'GAP', name: '时间轴配置'},
  //应用平台
  {url: '/root/main/searchDoor/listPageConfig', permission: 'portal', platform: 'DAP', name: '搜索门户管理'},
  // 系统平台
  {url: '/root/main/userControl', permission: 'sys_user_manager', platform: 'SYS', name: '用户管理'},
  {url: '/root/main/rolePerssion', permission: 'sys_role_manger', platform: 'SYS', name: '系统角色管理'},
  {url: '/root/main/displaySet', permission: 'display_set', platform: 'SYS', name: '平台展示设置'},
]



export default urlMap
