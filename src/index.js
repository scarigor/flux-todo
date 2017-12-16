
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import './reset.css'

import reducer from './reducers'

const store = createStore(reducer)
const root = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)

window.store = store
