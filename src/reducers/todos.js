import ActionTypes from '../constants/ActionTypes'
import Counter from '../utilis/Counter'

const initialState = [
  {
    id: Counter.increment(),
    done: false,
    text: 'Learn express server'
  },
  {
    id: Counter.increment(),
    done: false,
    text: 'Finish my diploma'
  },
  {
    id: Counter.increment(),
    done: false,
    text: 'Buy awesome car'
  }
]

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

//selectors

export const getAllTodos = state => state.todos


export default todos
