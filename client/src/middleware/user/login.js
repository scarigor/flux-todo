import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import * as api from '../../api/api';
import { USER_LOGIN, LOGIN_SUCCEEDED, LOGIN_FAILED } from '../../constants';

function* login(action) {
   try {
      const user = yield call(api.login, action.text);
      localStorage.bookwormJWT = user.token;
      // setAuthorizationHeader(user.token);
      yield put({
        type: LOGIN_SUCCEEDED,
        isLoading: !action.isLoading,
        user
      });
   } catch (e) {
      yield put({type: LOGIN_FAILED, message: e.message});
   }
}

export default function* watchLogin() {
  yield takeEvery(USER_LOGIN, login);
}
