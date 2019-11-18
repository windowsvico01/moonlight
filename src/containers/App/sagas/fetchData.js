import { put, call } from 'redux-saga/effects';
import request from 'utils/request';
import { DIALOG_TYPE, AUTHERROR, showDialog, loading, loaded } from 'containers/App/actions';
import { message as messageIndicator } from 'antd';

let indicator;

class APIError extends Error {
  constructor(message) {
    super(message);
    this.message = message || '服务器错误';
    this.name = 'APIError';
  }
}

// export const delay = (ms) => new Promise((resolve) => setTimeout(resolve({ code: 0, test: 'test' }), ms));

/*
  参数url和api的区别，传api时，会请求后端api代理地址。传url时，请求url的地址
 */
export default function* fetchData({ url, api, apiV2, options, successMessage, loadIndentify = 'global', mapResult, hideSpinning }) {
  let data;
  let finalURL;
  if (api) {
    finalURL = `/index.php?ro=api&ra=call&api=${api}`;
  } else if (apiV2) {
    finalURL = `/index.php?ro=api&ra=proxy${apiV2}`;
  } else {
    finalURL = url;
  }
  try {
    yield put(loading(loadIndentify));
    if (typeof indicator !== 'function' && !hideSpinning) {
      indicator = messageIndicator.loading('加载中...');
      setTimeout(() => { indicator = indicator(); }, 1500);
    }
    let result = yield call(request, finalURL, { credentials: 'include', ...options });
    result = mapResult ? mapResult(result) : result;
    const errno = result.errno === undefined ? result.code : result.errno;
    const msg = result.msg || result.errmsg;
    if (errno !== 0) {
      if ([6].indexOf(errno) !== -1) {
        yield put({ type: AUTHERROR, message: result.errmsg });
      } else {
        const error = new APIError(result);
        error.code = errno;
        error.msg = msg || result.message || '';
        error.data = result.data;
        throw error;
      }
    }
    if (successMessage) {
      yield put(showDialog(DIALOG_TYPE.success, successMessage));
    }
    data = result.data || {};
  } catch (error) {
    console.warn('APIError: %O', error); // eslint-disable-line
    yield put(showDialog(DIALOG_TYPE.error, error.code ? `【错误码：${error.code}】：${error.msg}` : '系统错误，请联系管理员'));
    if (error.code === 16) {
      data = error.data;
    }
  } finally {
    yield put(loaded(loadIndentify));
  }
  return data;
}
