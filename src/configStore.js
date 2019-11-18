import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
// 如果不想开生产环境使用开发者工具，可以使用redux-devtools-extension/developmentOnly
import createRootReducer from './rootReducer';
import history from './utils/history';

const sagaMiddleware = createSagaMiddleware({});
export { history };
export default function configureStore(initialState = {}) {
  // 创建的store包含的middleware：
  // 1.sagaMiddleware
  // 2.routerMiddleware: 异步的将location/URL添加到state
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];
  
  const store = createStore(
    createRootReducer(history),
    fromJS(initialState),
    composeWithDevTools(...enhancers),
  );
  // 自定义的一些扩展
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {};  // 异步注入的reducers

  if (module.hot) { // 热更新
    module.hot.accept('./rootReducer', () => {
      import('./rootReducer').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);

        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
}