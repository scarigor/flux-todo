import { combineReducers } from 'redux'
import todosReducer from './todosReducer'
import usersReducer from './usersReducer'
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
  todosReducer,
  usersReducer
})

export default rootReducer
