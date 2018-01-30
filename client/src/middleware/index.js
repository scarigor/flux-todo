import { all } from 'redux-saga/effects';

import fetchTodos from './todos/fetchTodos';
import addTodo from './todos/addTodo';
import removeTodo from './todos/removeTodo';
import toggleTodo from './todos/toggleTodo';

import login from './auth/login';
import logout from './auth/logout';
import signup from './auth/signup';

export default function* todosSaga() {
  yield all([
    login(),
    logout(),
    signup(),
    fetchTodos(),
    addTodo(),
    removeTodo(),
    toggleTodo(),
  ])
}
