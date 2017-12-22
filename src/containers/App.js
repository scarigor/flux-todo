import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route } from "react-router-dom";
import * as Actions from '../actions/Actions.js'
import LoginPage from '../components/pages/LoginPage'
import HomePage from '../components/pages/HomePage'
import './App.css'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const App = ({ todos, actions }) => (
  <div>
    <Route path='/' exact component={HomePage} />
    <Route path='/login' exact component={LoginPage} />
  </div>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
