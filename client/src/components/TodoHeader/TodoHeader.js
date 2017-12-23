import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './TodoHeader.css'

class TodoHeader extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  clearInput = () => this.setState({ text: '' })

  handleChange = (e) => this.setState({ text: e.target.value })

  handleClick = () => {
    if (this.state.text) {
      this.props.onAddTodo(this.state.text)
    }
    this.clearInput()
  }

  handleSubmit = (e) => {
    const text = this.state.text,
          isEnter = e.which === 13

    if (text && isEnter) {
      this.props.onAddTodo(text)
      this.clearInput()
    }
  }

  render() {
    return (
      <header className="todo-header">
        <Link to='/login'>Login</Link>
        <div className="input-wrapper">
          <input
            className="header-input"
            type="text"
            placeholder='What do you need to do?'
            value={this.state.text}
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
