import ActionTypes from '../constants/ActionTypes'
import Counter from '../utilis/Counter'

const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const todo = {
        id: Counter.increment(),
        done: false,
        text: action.text
      }

      return [...state, todo]

    case ActionTypes.DEL_TODO:
      return state.filter(todo => todo.id !== action.id)

    case ActionTypes.TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id) ?
          {...todo, done: !todo.done} :
          todo
      )

    default:
      return state
  }
}


export default todos
