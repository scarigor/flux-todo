import React from 'react';
import './Todo.css'

const Todo = props => {
  const isDone = props.isDone
  const handleDelete = () => props.onDelete(props.id)
  const handleToggle = () => props.onToggle(props.id)

  return (
    <li className={isDone ? 'todo-item completed' : 'todo-item'}>
      <p className="todo-title">{props.text}</p>
      <div className="todo-buttons">
        <button onClick={handleDelete} className="todo-btn close-todo"></button>
        <button onClick={handleToggle} className={!isDone ? "todo-btn toggle-todo" : "todo-btn toggle-todo btn-done"}></button>
      </div>

    </li>
  )
}

export default Todo
