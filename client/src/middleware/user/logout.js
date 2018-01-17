import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import * as api from '../../api/api';
import { USER_LOGOUT, LOGOUT_SUCCEEDED, LOGOUT_FAILED } from '../../constants';

function* logout(action) {
   try {
     localStorage.removeItem("bookwormJWT");
     // setAuthorizationHeader();
      yield put({
        type: LOGOUT_SUCCEEDED,
        isLoading: !action.isLoading,
      });
   } catch (e) {
      yield put({type: LOGOUT_FAILED, message: e.message});
   }
}

export default function* watchLogout() {
  yield takeEvery(USER_LOGOUT, logout);
}
