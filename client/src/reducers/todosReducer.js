import ActionTypes from '../constants/ActionTypes'

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return action.todos

    case ActionTypes.ADD_TODO:
      return [...state, action.todo]

    case ActionTypes.REMOVE_TODO:
      console.log(action)
      return state.filter(todo =>
        todo._id !== action.id
      )

    case ActionTypes.TOGGLE_TODO:
      console.log(action)
      return state.map(todo =>
        todo._id === action.id ?
          { ...todo, done: !todo.done } :
          todo
      )

    default:
      return state
  }
}

//selectors
export const getAllTodos = state => state.todosReducer

export default todosReducer;
