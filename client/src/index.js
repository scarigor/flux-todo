
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import todosSaga from './middleware';
import App from './containers/App';
import history from './history';
import decode from "jwt-decode";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";

import './reset.css';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { LOGIN_SUCCEEDED } from './constants';
const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware))

sagaMiddleware.run(todosSaga)

// Authorization
if (localStorage.JWT) {
  const payload = decode(localStorage.JWT);

  const user = {
    email: payload.email,
    isAdmin: payload.isAdmin,
    token: localStorage.JWT
  };

  setAuthorizationHeader(localStorage.JWT);

  store.dispatch({
    type: LOGIN_SUCCEEDED,
    isLoading: false,
    user
  });
}

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)

window.store = store
