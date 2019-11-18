/**
 *  组合所有的reducer并且暴露出组合好的reducers；
 */
import { combineReducers } from 'redux-immutable'; // 他的作用是将整个store都变成immutable对象，而不仅仅是它的值
// import { LOCATION_CHANGE } from 'react-router-redux'; // 通知router改变
import appReducer from './containers/App/reducer';
import { connectRouter } from 'connected-react-router/immutable';
// import history from './utils/history';

// routeReducer 的初始state
// const routeInitialState = fromJS({
//   locationBeforeTransitions: null,
// })
// routeReducer 记录路由信息到store
// function routerReducer(state = routeInitialState, action) {
//   switch (action.type) {
//     case LOCATION_CHANGE:
//       return state.merge({
//         locationBeforeTransitions: action.payload,
//       });
//     default:
//       return state;
//   }
// }

/**
 * @expor
 * @param {*} asyncReducers 异步注入的reducer
 * @returns
 */

const createRootReducer = (history, asyncReducers) => {
  return combineReducers({
    config: appReducer,
    router: connectRouter(history),
    ...asyncReducers
});
}

export default createRootReducer;



