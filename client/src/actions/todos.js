import api from '../api/api';
import ActionTypes from '../constants/ActionTypes'

// Add new todo item
const onAddTodo = todo => ({ type: ActionTypes.ADD_TODO, todo })

export const addTodo = text => dispatch =>
  api.todos.addTodo(text).then(todo => dispatch(onAddTodo(todo)))


// Get todo items from database
const onFetchTodos = todos => ({ type: ActionTypes.FETCH_TODOS, todos })

export const fetchTodos = () => dispatch =>
  api.todos.fetchTodos().then(todos => dispatch(onFetchTodos(todos)))
