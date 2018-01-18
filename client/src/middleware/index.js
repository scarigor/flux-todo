import { all } from 'redux-saga/effects';

import fetchTodos from './todos/fetchTodos';
import addTodo from './todos/addTodo';
import removeTodo from './todos/removeTodo';
import toggleTodo from './todos/toggleTodo';

import login from './user/login';
import logout from './user/logout';
import signup from './user/signup';

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
