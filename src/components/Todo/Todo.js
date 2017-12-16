import React from 'react';
import './Todo.css'

const Todo = props => {
  const handleDelete = () => props.onDelete(props.id)
  const handleToggle = () => props.onToggle(props.id)

  return (
    <li className={props.isDone ? 'todo-item completed' : 'todo-item'}>
      <p className="todo-title">{props.text}</p>
      <div className="todo-buttons">
        <button onClick={handleDelete} className="todo-btn close-todo"></button>
        <button onClick={handleToggle} className={!props.isDone ? "todo-btn toggle-todo" : "todo-btn toggle-todo btn-done"}></button>
      </div>
    </li>
  )
}

export default Todo
