import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'
import todos from './todos'
import user from './user'

const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
  todos,
  user
})

export default rootReducer
