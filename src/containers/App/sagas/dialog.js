// import { takeEvery } from 'redux-saga';
// import { put, fork } from 'redux-saga/effects';
// // import { notification } from 'antd';
// import { SHOW_DIALOG, HIDE_DIALOG, DIALOG_TYPE } from 'containers/App/actions';

export function* handleShowDialog(action) {
  const duration = action.duration;
  let method;
  switch (action.dialogType) {
    // case DIALOG_TYPE.success:
    //   method = 'success';
    //   break;
    // case DIALOG_TYPE.error:
    //   method = 'error';
    //   break;
    // case DIALOG_TYPE.info:
    //   method = 'info';
    //   break;
    default:
  }
  // notification[method]({
  //   message: '温馨提示',
  //   description: action.messages,
  //   duration,
  // });
  // yield put({ type: HIDE_DIALOG });
}

export default function* dialogWatcher() {
  // yield fork(takeEvery, SHOW_DIALOG, handleShowDialog);
}
