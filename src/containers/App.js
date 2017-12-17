import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions/Actions.js'
import TodoHeader from '../components/TodoHeader/TodoHeader'
import TodoContent from '../components/TodoContent/TodoContent'
import './App.css'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const App = ({ todos, actions }) => (
  <div className="todo-app">
    <TodoHeader onAddTodo={actions.onAddTodo} />
    <TodoContent todos={todos} actions={actions} />
  </div>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
