import api from '../api/api';
import ActionTypes from '../constants/ActionTypes'

// Add new todo item
const onAddTodo = todo => ({ type: ActionTypes.ADD_TODO, todo })
export const addTodo = text => dispatch =>
  api.todos.addTodo(text).then(data => dispatch(onAddTodo(data.todo)))


// Remove todo item
const onRemoveTodo = id => ({ type: ActionTypes.REMOVE_TODO, id })
export const removeTodo = id => dispatch =>
  api.todos.removeTodo(id).then(id => dispatch(onRemoveTodo(id)))


// Toggle todo item
const onToggleTodo = id => ({ type: ActionTypes.TOGGLE_TODO, id })
export const toggleTodo = id => dispatch =>
  api.todos.toggleTodo(id).then(id => dispatch(onToggleTodo(id)))


// Get todo items from database
const onFetchTodos = todos => ({ type: ActionTypes.FETCH_TODOS, todos })
export const fetchTodos = () => dispatch =>
  api.todos.fetchTodos().then(todos => dispatch(onFetchTodos(todos)))
