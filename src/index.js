import React from 'react'
import ReactDOM from 'react-dom'

import './reset.css'

import TodoApp from './components/TodoApp/TodoApp'

import Dispatcher from './flux/Dispatcher'
import Store from './flux/Store'
import Actions from './flux/Actions'

// Model
const dispatcher = new Dispatcher()
const store = new Store(dispatcher)
const actions = new Actions(dispatcher)

// View
const root = document.getElementById('root')
ReactDOM.render(<TodoApp store={store} actions={actions}/>, root)

window.d = dispatcher
