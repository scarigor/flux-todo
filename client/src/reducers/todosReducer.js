import ActionTypes from '../constants/ActionTypes'

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCEEDED:
      return action.todos

    case ActionTypes.ADD_SUCCEEDED:
      return [...state, action.todo]

    case ActionTypes.REMOVE_SUCCEEDED:
      return state.filter(todo =>
        todo._id !== action.id
      )

    case ActionTypes.TOGGLE_SUCCEEDED:
      return state.map(todo =>
        todo._id === action.id ? { ...todo, done: !todo.done } : todo
      )

    default:
      return state
  }
}

//selectors
export const getAllTodos = state => state.todosReducer

export default todosReducer;
