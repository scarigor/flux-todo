import api from '../api/api';
import { call, put, takeEvery } from 'redux-saga/effects'
import ActionTypes from '../constants/ActionTypes';

function* toggleTodo(action) {
   try {
      const id = yield call(api.todos.toggleTodo, action.id);
      yield put({type: ActionTypes.TOGGLE_SUCCEEDED, id});
   } catch (e) {
      yield put({type: ActionTypes.TOGGLE_FAILED, message: e.message});
   }
}

export default function* watchToggleTodo() {
  yield takeEvery(ActionTypes.TOGGLE_TODO, toggleTodo);
}
