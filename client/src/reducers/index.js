import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'
import todos from './todos'
import auth from './auth'

const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
  todos,
  auth
})

export default rootReducer
