import React from 'react';
import './Todo.css'

const Todo = props => {
  const isDone = props.isDone
  const handleDelete = () => props.onDelete(props.title)
  const handleToggle = () => props.onToggle(props.title)

  return (
    <li className='todo-item'>
      <p className="todo-title">{props.title}</p>
      <div className="todo-buttons">
        <button onClick={handleDelete} className="todo-btn close-todo"></button>
        <button onClick={handleToggle} className={!isDone ? "todo-btn toggle-todo" : "todo-btn toggle-todo done"}></button>
      </div>

    </li>
  )
}

export default Todo
