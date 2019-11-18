import { takeEvery } from 'redux-saga';
import { put, fork } from 'redux-saga/effects';
import { SHOW_DIALOG, LOGOUT, AUTHERROR, DIALOG_TYPE } from 'containers/App/actions';
import { Modal } from 'antd';


function addScriptTag(src) {
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.src = src;
  document.body.appendChild(script);
}


/* 用户登录和退出 */
export function* handleLogout() {
  try {
    addScriptTag('http://user.btime.com/logout');
    setTimeout(() => {
      window.location.href = 'http://www.btime.com';
    }, 1000);
  } catch (err) {
    yield put({ type: SHOW_DIALOG, dialogType: DIALOG_TYPE.error, messages: err });
  }
}

export function* handleLogin() {
  const redirectURL = window.encodeURIComponent(window.location.href);
  Modal.info({
    title: '请点击确认，前往主站登录',
    okText: '确认',
    onOk: () => window.location.href = `http://user.btime.com/viewShow?gate=login&jump=${redirectURL}`, // eslint-disable-line
  });
}

export default function* loginOutWatcher() {
  yield fork(takeEvery, AUTHERROR, handleLogin);
  yield fork(takeEvery, LOGOUT, handleLogout);
}
