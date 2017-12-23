
import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from './reducers'
import thunk from "redux-thunk";

import App from './containers/App'

import './reset.css'
import 'semantic-ui-css/semantic.min.css';
import './index.css'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

window.store = store
