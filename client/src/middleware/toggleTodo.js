import { call, put, takeEvery } from 'redux-saga/effects'
import { TOGGLE_TODO, TOGGLE_SUCCEEDED, TOGGLE_FAILED } from '../constants';
import * as api from '../api/api';

function* toggleTodo(action) {
   try {
      const id = yield call(api.toggleTodo, action.id);
      yield put({
        type: TOGGLE_SUCCEEDED,
        isLoading: !action.isLoading,
        id
      });
   } catch (e) {
      yield put({type: TOGGLE_FAILED, message: e.message});
   }
}

export default function* watchToggleTodo() {
  yield takeEvery(TOGGLE_TODO, toggleTodo);
}
