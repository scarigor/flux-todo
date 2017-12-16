import ActionTypes from '../constants/ActionTypes'
import Counter from '../utilis/generatorID'

const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: Counter.increment(),
          done: false,
          text: action.text
        }
      ]

    case ActionTypes.DEL_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case ActionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          {...todo, done: !todo.done} :
          todo
      )
      
    default:
      return state
  }
}

export default todos
