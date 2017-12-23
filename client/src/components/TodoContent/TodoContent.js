import React from 'react'
import Todo from '../Todo/Todo'
import './TodoContent.css'
import { connect } from "react-redux";
import { getAllTodos } from "../../reducers/todosReducer";


class TodoContent extends React.Component {
  constructor(props) {
    super(props)
  }

  renderTodo = (todo) => {
    return <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isDone={todo.done}
            />
  }

  render() {
    return (
      <main className="todo-content">
        <ul className="todos uncompleted-todos">
          {this.props.todos.map(todo => !todo.done ? this.renderTodo(todo) : null).reverse()}
        </ul>

        <hr/>

        <ul className="todos completed-todos">
          {/* {todos.map(todo => todo.done ? renderTodo(todo) : null)} */}
        </ul>
      </main>
    )
  }
}


function mapStateToProps(state) {
  return {
    todos: getAllTodos(state)
  };
}

export default connect(mapStateToProps, null)(TodoContent);
