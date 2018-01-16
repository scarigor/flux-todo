import React from 'react'
import Todo from '../Todo/Todo'
import './TodoContent.css'

import { connect } from "react-redux";
import { getAllTodos, getIsLoading } from "../../reducers/todosReducer";
import { fetchTodos, removeTodo, toggleTodo } from '../../actions/todos';


class TodoContent extends React.Component {
  componentDidMount = () => this.onInit(this.props);

  onInit = props => props.fetchTodos()

  renderTodo = (todo) => {
    return <Todo
              key={todo._id}
              id={todo._id}
              text={todo.text}
              isDone={todo.done}
              onToggle={this.props.toggleTodo}
              onRemove={this.props.removeTodo}
             />
  }

  render() {
    const { isLoading } = this.props 
    if (isLoading) {
      return <h1>lol</h1>
    }
    return (
      <main className="todo-content">
        <ul className="todos uncompleted-todos">
          {this.props.todos.map(todo => !todo.done ? this.renderTodo(todo) : null).reverse()}
        </ul>

        <hr className='separator'/>

        <ul className="todos completed-todos">
          {this.props.todos.map(todo => todo.done ? this.renderTodo(todo) : null).reverse()}
        </ul>
      </main>
    )
  }
}


function mapStateToProps(state) {
  return {
    todos: getAllTodos(state),
    isLoading: getIsLoading(state)
  }
}

export default connect(mapStateToProps, { fetchTodos, removeTodo, toggleTodo })(TodoContent);
