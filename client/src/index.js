
import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import todosSaga from './middleware';

import App from './containers/App'

import './reset.css'
import 'semantic-ui-css/semantic.min.css';
import './index.css'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware))

sagaMiddleware.run(todosSaga)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

window.store = store
