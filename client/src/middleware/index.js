import { all } from 'redux-saga/effects';

import fetchTodos from './fetchTodos';
import addTodo from './addTodo';
import removeTodo from './removeTodo';
import toggleTodo from './toggleTodo';

export default function* todosSaga() {
  yield all([
    fetchTodos(),
    addTodo(),
    removeTodo(),
    toggleTodo(),
  ])
}
