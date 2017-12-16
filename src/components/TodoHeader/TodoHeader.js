import React, { Component } from 'react'
import './TodoHeader.css'

class TodoHeader extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '' }
  }

  clearInput = () => this.setState({ title: '' })

  handleChange = (e) => this.setState({ title: e.target.value })

  handleClick = () => {
    if (this.state.title) {
      this.props.onAddTodo(this.state.title)
    }
    this.clearInput()
  }

  handleSubmit = (e) => {
    const text = this.state.title,
          isEnter = e.which === 13

    if (text && isEnter) {
      this.props.onAddTodo(text)
      this.clearInput()
    }
  }

  render() {
    return (
      <header className="todo-header">
        <div className="input-wrapper">
          <input
            className="header-input"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            onKeyPress={this.handleSubmit}
           />
          <button onClick={this.handleClick} className="header-btn">+</button>
        </div>
      </header>
    )
  }
}

export default TodoHeader
