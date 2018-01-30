import { call, put, takeEvery } from 'redux-saga/effects'
import * as api from '../../api';
import { USER_LOGIN, LOGIN_SUCCEEDED, LOGIN_FAILED } from '../../constants';
import history from '../../history';

function* login(action) {
   try {
      const user = yield call(api.login, action.data);

      yield put({
        type: LOGIN_SUCCEEDED,
        isLoading: !action.isLoading,
        user
      });

      history.push('/dashboard')
   } catch (e) {
      yield put({ type: LOGIN_FAILED, message: e.message });
   }
}

export default function* watchLogin() {
  yield takeEvery(USER_LOGIN, login);
}
