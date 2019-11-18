export default {
  path: 'hello',
  label: 'Hello页面',
  route: 'hello',
  child: [
    {
      path: 'list',
      route: 'list',
      label: 'Hello列表页',
      hasReducer: true,
      hasSaga: true,
      child: []
    }, {
      path: 'detail',
      route: 'detail',
      label: 'Hello详情页',
      hasReducer: true,
      hasSaga: true,
    }
  ]
}