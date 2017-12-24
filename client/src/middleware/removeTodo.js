import api from '../api/api';
import { call, put, takeEvery } from 'redux-saga/effects'
import ActionTypes from '../constants/ActionTypes';

function* removeTodo(action) {
   try {
      const id = yield call(api.todos.removeTodo, action.id);
      yield put({type: ActionTypes.REMOVE_SUCCEEDED, id});
   } catch (e) {
      yield put({type: ActionTypes.REMOVE_FAILED, message: e.message});
   }
}

export default function* watchRemoveTodo() {
  yield takeEvery(ActionTypes.REMOVE_TODO, removeTodo);
}
