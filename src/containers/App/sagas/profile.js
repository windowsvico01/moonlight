import { takeLatest } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import fetchData from './fetchData';

import { LOAD_PROFILE, profileLoaded } from '../actions';

/* 获取个人信息的异步流程 */
export function* handleProfileLoad() {
  const results = yield call(fetchData, { url: '/index.php?ro=user&ra=getuser' });
  if (results) {
    const formData = new FormData();
    formData.append('appkey', 'mis');
    const options = {
      method: 'POST',
      body: formData,
    };
    const menu = yield call(fetchData, { url: '/index.php?ro=access&ra=showusermenu', options });
    yield put(profileLoaded(results, menu));
  }
}

export default function* profileWatcher() {
  yield fork(takeLatest, LOAD_PROFILE, handleProfileLoad);
}
