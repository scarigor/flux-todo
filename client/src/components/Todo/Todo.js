import React from 'react';
import classNames  from 'classnames';
import { connect } from "react-redux";
import './Todo.css'

const Todo = props => {
  const handleRemove = () => props.onRemove(props.id),
        handleToggle = () => props.onToggle(props.id)

  const todoItemClass = classNames('todo-item', {'completed': props.isDone}),
        closeBtnClass = classNames('todo-btn', 'close-todo'),
        doneBtnClass = classNames('todo-btn', 'toggle-todo', {'btn-done': props.isDone})

  return (
    <li className={todoItemClass}>
      <p className="todo-title">{props.text}</p>
      <div className="todo-buttons">
        <button onClick={handleRemove} className={closeBtnClass}></button>
        <button onClick={handleToggle} className={doneBtnClass}></button>
      </div>
    </li>
  )
}

export default Todo
