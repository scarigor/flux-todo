import { FETCH_TODOS, ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../constants';

export const fetchTodos = () => ({
  type: FETCH_TODOS,
  isLoading: true,
})

export const addTodo = text => ({
  type: ADD_TODO,
  isLoading: true,
  text
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  isLoading: true,
  id
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  isLoading: true,
  id
})
