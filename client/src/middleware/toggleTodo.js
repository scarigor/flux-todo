import { call, put, takeEvery } from 'redux-saga/effects'
import ActionTypes from '../constants/ActionTypes';
import * as api from '../api/api';

function* toggleTodo(action) {
   try {
      const id = yield call(api.toggleTodo, action.id);
      yield put({type: ActionTypes.TOGGLE_SUCCEEDED, id});
   } catch (e) {
      yield put({type: ActionTypes.TOGGLE_FAILED, message: e.message});
   }
}

export default function* watchToggleTodo() {
  yield takeEvery(ActionTypes.TOGGLE_TODO, toggleTodo);
}
