import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addTodo } from '../../actions/todos';
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
      this.addTodo(this.state.text)
    }
    this.clearInput()
  }

  handleSubmit = (e) => {
    const text = this.state.text,
          isEnter = e.which === 13

    if (text && isEnter) {
      this.addTodo(text)
      this.clearInput()
    }
  }

  addTodo = text => this.props.addTodo(text)

  render() {
    return (
      <header className="todo-header">
        <div className="input-wrapper">
          <input
            className="header-input"
            type="text"
            placeholder='Введите задачу'
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

export default connect(null, { addTodo })(TodoHeader)
