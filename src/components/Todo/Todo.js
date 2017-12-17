import React from 'react';
import classNames  from 'classnames';
import './Todo.css'

const Todo = props => {
  const handleDelete = () => props.onDelete(props.id),
        handleToggle = () => props.onToggle(props.id)

  const closeBtnClass = classNames('todo-btn', 'close-todo'),
        doneBtnClass = classNames('todo-btn', 'toggle-todo', {'btn-done': props.isDone}),
        todoItemClass = classNames('todo-item', {'completed': props.isDone})

  return (
    <li className={todoItemClass}>
      <p className="todo-title">{props.text}</p>
      <div className="todo-buttons">
        <button onClick={handleDelete} className={closeBtnClass}></button>
        <button onClick={handleToggle} className={doneBtnClass}></button>
      </div>
    </li>
  )
}

export default Todo
