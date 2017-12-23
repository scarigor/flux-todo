import api from '../api/api';
import ActionTypes from '../constants/ActionTypes'

export const onAddTodo = (text) => ({
  type: ActionTypes.ADD_TODO,
  text
})

export const addTodo = (text) => (dispatch) =>
  api.user.addTodo(text).then(todo => dispatch(onAddTodo(todo)))

  // export const onAddTodo = text => ({ type: ActionTypes.ADD_TODO, text })
  // export const onDeleteTodo = id => ({ type: ActionTypes.DEL_TODO, id })
  // export const onToggleTodo = id => ({ type: ActionTypes.TOGGLE_TODO, id })
