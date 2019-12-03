/**
 * 权限  
 *   disabled => bread 是否可点击  true false
 *   permission => 是否有菜单权限   true  false
 */
const menuMap = [
  {
    key: 'home', // 唯一key
    path: '/home', // 跳转链接
    route: 'Home', // bread key
    label: '首页', // 名称
    show: true,  // 是否在菜单中显示
    disabled: false, // 面包屑中是否禁止点击
    icon: 'home',  // 菜单图标
    permission: true, // 菜单权限
    child: []
  }, {
    key: 'hi',
    path: '/hi',
    route: 'Hi',
    label: 'hi页面',
    icon: 'smile',
    show: true,
    permission: true, // 菜单权限
    disabled: false, // 面包屑中是否禁止点击
    child: []
  }, {
    key: 'charts',
    path: '/charts',
    route: 'Charts',
    label: '图表',
    icon: 'pie-chart',
    show: true,
    permission: true, // 菜单权限
    disabled: false, // 面包屑中是否禁止点击
    child: []
  }, {
    key: 'hello',
    path: '/hello',
    route: 'Hello',
    label: 'Hello页面',
    icon: 'heart',
    show: true,
    permission: true, // 菜单权限
    disabled: true, // 面包屑中是否禁止点击
    child: [
      {
        key: 'helloList',
        path: '/hello/list',
        route: 'Hello/List',
        label: 'Hello列表页',
        icon: 'dollar',
        show: true,
        permission: true, // 菜单权限
        disabled: false, // 面包屑中是否禁止点击
        child: []
      }, {
        key: 'helloDetail',
        path: '/hello/detail',
        route: 'Hello/Detail',
        label: 'Hello详情页',
        icon: 'file-text',
        show: true,
        permission: true, // 菜单权限
        disabled: false, // 面包屑中是否禁止点击
      }
    ]
  }, {
    key: 'plugins',
    path: '/plugins',
    route: 'Plugins',
    label: '插件集合',
    show: false,
    icon: 'api',
    permission: true, // 菜单权限
    disabled: true, // 面包屑中是否禁止点击
    child: [
      {
        key: 'editor',
        path: '/plugins/editor/edit',
        route: 'Plugins/Editor',
        label: '编辑器',
        show: true,
        icon: 'edit',
        permission: true, // 菜单权限
        disabled: true, // 面包屑中是否禁止点击
        child: [
          {
            key: 'edit',
            path: '/plugins/editor/edit',
            route: 'Plugins/Editor/Edit',
            label: '编辑',
            permission: true, // 菜单权限
            disabled: false, // 面包屑中是否禁止点击
          },
          { 
            key: 'preview',
            path: '/plugins/editor/preview',
            route: 'Plugins/Editor/Preview',
            label: '预览',
            permission: true, // 菜单权限
            disabled: false, // 面包屑中是否禁止点击
          }
        ]
      }
    ]
  }
]

const trashBreadMap = (menu) => {
  const finalMap = {};
  const getNode = (arr) => {
    arr.forEach((item) => {
      finalMap[item.route] = item;
      if (item.child && item.child.length) getNode(item.child);
    })
  }
  getNode(menu);
  return finalMap;
}
const permissionMap = trashBreadMap(menuMap)
export { permissionMap, menuMap };