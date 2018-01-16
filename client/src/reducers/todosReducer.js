import {
  FETCH_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  FETCH_SUCCEEDED,
  ADD_SUCCEEDED,
  REMOVE_SUCCEEDED,
  TOGGLE_SUCCEEDED,
} from '../constants';

const initialState = {
  todos: [],
  isLoading: false
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
    case ADD_TODO:
    case REMOVE_TODO:
    case TOGGLE_TODO:
      return { ...state, isLoading: action.isLoading }

    case FETCH_SUCCEEDED:
      return {
        ...state,
        todos: action.todos,
        isLoading: action.isLoading
      }

    case ADD_SUCCEEDED:
      return {
        ...state,
        todos: [...state.todos, action.todo],
        isLoading: action.isLoading
      }

    case REMOVE_SUCCEEDED:
      const filtered = state.todos.filter(todo =>
        todo._id !== action.id
      )

      return {
        ...state,
        todos: filtered,
        isLoading: action.isLoading
      }


    case TOGGLE_SUCCEEDED:
      // НЕ РАБОТАЕТ (Cannot read property 'map' of undefined todo container)
      return state.todos.map(todo =>
        todo._id === action.id ? { ...todo, done: !todo.done } : todo
      )

    default:
      return state
  }
}

//selectors
export const getAllTodos = state => state.todosReducer.todos
export const getIsLoading = state => state.todosReducer.isLoading

export default todosReducer;
