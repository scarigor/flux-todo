import React, { Component } from 'react';
import Todo from '../Todo/Todo'
import './TodoApp.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }

    this.updateView = this.updateView.bind(this)
  }

  updateView() {
    this.setState({})
  }

  componentDidMount() {
    this.props.store.on('change', this.updateView)
  }

  componentWillUnmount() {
    this.props.store.off('change', this.updateView)
  }


  addTodo = (title) => {
    this.props.actions.onAddTodo(title)
  }

  toggleTodo = (title) => {
    this.props.actions.onToggleTodo(title)
  }

  deleteTodo = (title) => {
    this.props.actions.onDeleteTodo(title)
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
              title={todo.title}
              isDone={todo.done}
              onToggle={this.toggleTodo}
              onDelete={this.deleteTodo}/>
  }


  render() {
    const store = this.props.store,
          todos = store.todos

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

export default App;
