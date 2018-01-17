import { call, put, takeEvery } from 'redux-saga/effects'
import * as api from '../../api/api';
import { ADD_TODO, ADD_SUCCEEDED, ADD_FAILED } from '../../constants';

function* addTodo(action) {
   try {
      const todo = yield call(api.addTodo, action.text);
      yield put({
        type: ADD_SUCCEEDED,
        isLoading: !action.isLoading,
        todo
      });
   } catch (e) {
      yield put({type: ADD_FAILED, message: e.message});
   }
}

export default function* watchAddTodo() {
  yield takeEvery(ADD_TODO, addTodo);
}
