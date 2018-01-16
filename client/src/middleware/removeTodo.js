import { call, put, takeEvery } from 'redux-saga/effects'
import { REMOVE_TODO, REMOVE_SUCCEEDED, REMOVE_FAILED } from '../constants';
import * as api from '../api/api';

function* removeTodo(action) {
   try {
      const id = yield call(api.removeTodo, action.id);
      yield put({
        type: REMOVE_SUCCEEDED,
        isLoading: !action.isLoading,
        id
      });
   } catch (e) {
      yield put({type: REMOVE_FAILED, message: e.message});
   }
}

export default function* watchRemoveTodo() {
  yield takeEvery(REMOVE_TODO, removeTodo);
}
