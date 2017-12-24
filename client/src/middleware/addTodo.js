import api from '../api/api';
import { call, put, takeEvery } from 'redux-saga/effects'
import ActionTypes from '../constants/ActionTypes';

function* addTodo(action) {
   try {
      const todo = yield call(api.todos.addTodo, action.text);
      yield put({type: ActionTypes.ADD_SUCCEEDED, todo});
   } catch (e) {
      yield put({type: ActionTypes.ADD_FAILED, message: e.message});
   }
}

export default function* watchAddTodo() {
  yield takeEvery(ActionTypes.ADD_TODO, addTodo);
}