import { conformsTo, isEmpty, isFunction, isObject, isString } from 'lodash';
import invariant from 'invariant';
import warning from 'warning';
import createReducer from '../rootReducer';
import { history } from '../configStore';


/**
 * 校验传入的store是否合法
 */
export function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    runSaga: isFunction,
    asyncReducer: isObject,
  }
  // invariant(
  //   conformsTo(store, shape),
  //   '(app/utils...) asyncInjectors: Expected a valid redux store(store校验不合法)'
  // );
}
/**
 * 注入异步加载的reducer
 * @export
 * @param {*} store
 * @param {*} isValid
 */
export function injectAsyncReducer(store, isValid) {
  return function injectReducer(name, asyncReducer) {
    if (!isValid) checkStore(store);

    invariant(
      isString(name) && !isEmpty(name) && isFunction(asyncReducer),
      '(app/utils...) injectAsyncReducer: Expected `asyncReducer` to be a reducer function(reducer校验不合法)'
    );
    if (store.asyncReducers[name]) return;
    if (Reflect.has(store.asyncReducers, name)) return;

    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(createReducer(history, store.asyncReducers));
  };
}
/**
 * 注入异步加载的sagas
 * @export
 * @param {*} store
 * @param {*} isValid
 * @returns
 */
export function injectAsyncSagas(store, isValid) {
  return function injectSagas(sagas) {
    if (!isValid) checkStore(store);

    invariant(
      Array.isArray(sagas),
      '(app/utils...) injectAsyncSagas: Expected `sagas` to be an array of generator functions'
    );

    warning(
      !isEmpty(sagas),
      '(app/utils...) injectAsyncSagas: Received an empty `sagas` array'
    );

    sagas.map(store.runSaga);
  }
}

export function getAsyncInjectors(store) {
  checkStore(store);
  return {
    injectReducer: injectAsyncReducer(store, true),
    injectSagas: injectAsyncSagas(store, true),
  }
}