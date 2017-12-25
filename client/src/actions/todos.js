import ActionTypes from '../constants/ActionTypes'

export const fetchTodos = () => ({ type: ActionTypes.FETCH_TODOS })
export const addTodo = text => ({ type: ActionTypes.ADD_TODO, text })
export const toggleTodo = id => ({ type: ActionTypes.TOGGLE_TODO, id })
export const removeTodo = id => ({ type: ActionTypes.REMOVE_TODO, id })
