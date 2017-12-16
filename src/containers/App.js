import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions/Actions.js'
import Todo from '../components/Todo/Todo'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  addTodo = (text) => {
    this.props.actions.onAddTodo(text)
  }

  deleteTodo = (id) => {
    this.props.actions.onDeleteTodo(id)
  }

  toggleTodo = (id) => {
    this.props.actions.onToggleTodo(id)
  }

  handleInput = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  clearInput = () => {
    this.setState({title: ''})
  }

  handleSubmit = (e) => {
    const value = e.target.value,
          isEnter = e.key === 'Enter'

    if (isEnter && value) {
      this.addTodo(value)
      this.clearInput()
    }
  }

  renderTodo(todo) {
    return <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isDone={todo.done}
              onToggle={this.toggleTodo}
              onDelete={this.deleteTodo}/>
  }


  render() {
    const todos = this.props.todos
    console.log(this.props)

    return (
      <div className="todo-app">
        <header className="todo-header">
          <div className="input-wrapper">
            <input
              className="header-input"
              type="text"
              value={this.state.title}
              onChange={this.handleInput}
              onKeyPress={this.handleSubmit}
             />
            <button className="header-btn">+</button>
          </div>
        </header>

        <main className="todo-content">
          <div className="todos uncompleted-todos">
            <ul>
              {todos.map(todo => !todo.done ? this.renderTodo(todo) : null)}
            </ul>
          </div>

          <hr/>

          <div className="todos completed-todos">
            <ul>
              {todos.map(todo => todo.done ? this.renderTodo(todo) : null)}
            </ul>
          </div>
        </main>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
