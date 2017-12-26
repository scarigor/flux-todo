import { call, put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import ActionTypes from '../constants/ActionTypes';
import * as api from '../api/api';

function* fetchTodos(action) {
   try {
      const todos = yield call(api.fetchTodos);
      yield delay(1000)
      yield put({type: ActionTypes.FETCH_SUCCEEDED, todos});
   } catch (e) {
      yield put({type: ActionTypes.FETCH_FAILED, message: e.message});
   }
}

export default function* watchFetchtodos() {
  yield takeEvery(ActionTypes.FETCH_TODOS, fetchTodos);
}
