import { fork } from 'redux-saga/effects';

import dialog from './sagas/dialog';
// import loginFlow from './sagas/loginFlow';
// import profile from './sagas/profile';

export default function* root() {
  yield fork(dialog);
  // yield fork(loginFlow);
  // yield fork(profile);
}
