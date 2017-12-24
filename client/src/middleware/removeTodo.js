import { call, put, takeEvery } from 'redux-saga/effects'
import ActionTypes from '../constants/ActionTypes';
import * as api from '../api/api';

function* removeTodo(action) {
   try {
      const id = yield call(api.removeTodo, action.id);
      yield put({type: ActionTypes.REMOVE_SUCCEEDED, id});
   } catch (e) {
      yield put({type: ActionTypes.REMOVE_FAILED, message: e.message});
   }
}

export default function* watchRemoveTodo() {
  yield takeEvery(ActionTypes.REMOVE_TODO, removeTodo);
}
