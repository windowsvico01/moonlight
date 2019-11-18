import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Route, Redirect, Switch } from 'react-router-dom';
import { getAsyncInjectors } from '../utils/asyncInjectors';
import queryString from 'query-string';

import hello from './Hello';
import hi from './Hi';
import home from './Home';
import charts from './Charts';
const modules = {
  menus: [
    hello,
    hi,
    home,
    charts,
  ],
  others: []
};

// 为了根据模块名称找到文件
const convFirstChartUpper = (str) => str.substr(0, 1).toUpperCase() + str.substr(1);

export default function CRouter(store) {
  const { injectReducer, injectSagas } = getAsyncInjectors(store);
  const requireAuth = (permission, component) => {
      const { userData } = store.getState().toJS().config;
      const { permissions } = userData;
      // const { auth } = store.getState().httpData;
      if (!permissions || !permissions.includes(permission)) return <Redirect to={'/404'} />;
      return component;
  };
  const requireLogin = (component, permission) => {
      const { userData } = store.getState().toJS().config;
      const { permissions } = userData;
      if (process.env.NODE_ENV === 'production' && !permissions) { // 线上环境判断是否登录
          return <Redirect to={'/login'} />;
      }
      return permission ? requireAuth(permission, component) : component;
  };
  return (
    <Switch>
      {
        modules.menus.map(ele => {
          const route = (ele, parentPath) => {
            const elePath = ele.path ? convFirstChartUpper(ele.path) : '';
            const eleRoute = ele.route ? convFirstChartUpper(ele.route) : '';
            const routePath = `${parentPath || ''}${'/'+eleRoute}`;
            const finalPath = `${parentPath || ''}${'/'+elePath}`;
            const importModules = Promise.all([
              ele.hasReducer && import(`../containers/Pages${finalPath}/reducer`),
              ele.hasSagas && import(`../containers/Pages${finalPath}/sagas`)
            ])
            importModules.then(([reducer, sagas]) => {
              const reducerName = finalPath.substr(1)
              reducer && injectReducer(reducerName, reducer.default);
              sagas && injectSagas(sagas.default);
            })
            const Component = Loadable({
              loader: () => import(`../containers/Pages${finalPath}`),
              loading() {
                return <div>加载中噢......</div>
              },
            }); 
            return (
              <Route
                key={ele.path}
                exact={!(ele.child && ele.child.length > 0)}
                // exact
                path={routePath}
                render={(props) => {
                  console.log(123);
                  const reg = /\?\S*/g;
                  // 匹配?及其以后字符串
                  const queryParams = window.location.hash.match(reg);
                  // 去除?的参数
                  const { params } = props.match;
                  Object.keys(params).forEach(key => {
                      params[key] = params[key] && params[key].replace(reg, '');
                  });
                  props.params = { ...params };
                  const merge = { ...props, query: queryParams ? queryString.parse(queryParams[0]) : {} };
                  console.log(ele.child && ele.child.length > 0)
                  // if ( ele.child && ele.child.length > 0 ) {
                    const finalNode = (
                      <Component {...merge}>
                        <Switch>
                          { ele.child && ele.child.length > 0 && ele.child.map((r) => route(r, props.match.path)) }
                          <Redirect to="/404" />
                        </Switch>
                      </Component>
                    )
                    return requireLogin(finalNode, finalPath.substr(1))
                //   }
                //   console.log(props);
                // return requireLogin(<Component {...props} />, finalPath.substr(1))
                }}
              />
            )
          }
            return route(ele);
          })
      }  
      <Redirect to="/404" />
    </Switch>
  );
}