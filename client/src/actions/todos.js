import ActionTypes from '../constants/ActionTypes'

export const onAddTodo = text => ({ type: ActionTypes.ADD_TODO, text })
export const onDeleteTodo = id => ({ type: ActionTypes.DEL_TODO, id })
export const onToggleTodo = id => ({ type: ActionTypes.TOGGLE_TODO, id })
