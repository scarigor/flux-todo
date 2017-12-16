import React, { Component } from 'react'
import Todo from '../Todo/Todo'
import './TodoContent.css'

const TodoContent = props => {

  const renderTodo = todo => {
    return <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isDone={todo.done}
              onToggle={props.actions.onToggleTodo}
              onDelete={props.actions.onDeleteTodo} />
  }

  return (
    <main className="todo-content">
      <div className="todos uncompleted-todos">
        <ul>
          {props.todos.map(todo => !todo.done ? renderTodo(todo) : null)}
        </ul>
      </div>

      <hr/>

      <div className="todos completed-todos">
        <ul>
          {props.todos.map(todo => todo.done ? renderTodo(todo) : null)}
        </ul>
      </div>
    </main>
  )
}

export default TodoContent
