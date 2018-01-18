import { call, put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { FETCH_TODOS, FETCH_SUCCEEDED, FETCH_FAILED } from '../../constants';
import * as api from '../../api';

import { showLoading, hideLoading } from 'react-redux-loading-bar'

function* fetchTodos(action) {
   try {
      yield put(showLoading())
      const todos = yield call(api.fetchTodos);
      yield delay(1000)
      yield put({
        type: FETCH_SUCCEEDED,
        isLoading: !action.isLoading,
        todos
      });
   } catch (e) {
      yield put({type: FETCH_FAILED, message: e.message});
   } finally {
    yield put(hideLoading())
  }
}

export default function* watchFetchtodos() {
  yield takeEvery(FETCH_TODOS, fetchTodos);
}
