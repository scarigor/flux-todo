import ActionTypes from '../constants/ActionTypes'

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return action.todos

    case ActionTypes.ADD_TODO:
      return [...state, action.todo]

    default:
      return state
  }
}

//selectors
export const getAllTodos = state => state.todosReducer

export default todosReducer;
