import React from 'react'
import Todo from '../Todo/Todo'
import './TodoContent.css'
import { connect } from "react-redux";
import { getAllTodos } from "../../reducers/todosReducer";
import { fetchTodos } from '../../actions/todos';


class TodoContent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => this.onInit(this.props);

  onInit = props => props.fetchTodos()

  renderTodo = (todo) => {
    return <Todo
              key={todo._id}
              text={todo.text}
              isDone={todo.done} />
  }

  render() {
    console.log(this.props.todos)
    return (
      <main className="todo-content">
        <ul className="todos uncompleted-todos">
          {this.props.todos.map(todo => !todo.done ? this.renderTodo(todo) : null).reverse()}
        </ul>

        <hr/>

        {/* <ul className="todos completed-todos">
          {this.props.todos.map((todo, i) => todo.done ? this.renderTodo(todo, i) : null).reverse()}
        </ul> */}
      </main>
    )
  }
}


function mapStateToProps(state) {
  return {
    todos: getAllTodos(state)
  };
}

export default connect(mapStateToProps, { fetchTodos })(TodoContent);
