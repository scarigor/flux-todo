import React from 'react'
import Todo from '../Todo/Todo'
import './TodoContent.css'

import { connect } from "react-redux";
import { getIsLoading, getCompletedTodos, getUnCompletedTodos } from "../../reducers/todosReducer";
import { fetchTodos, removeTodo, toggleTodo } from '../../actions/todos';
import { Divider, Dimmer, Loader } from 'semantic-ui-react'


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
    const { completed, uncompleted, isLoading } = this.props

    return (
      <main className="todo-content">

        { isLoading && <Dimmer active inverted><Loader/></Dimmer>}

        <ul className="todos uncompleted-todos">
          {uncompleted.map(todo => this.renderTodo(todo)).reverse()}
        </ul>

        <Divider horizontal/>

        <ul className="todos completed-todos">
          {completed.map(todo => this.renderTodo(todo)).reverse()}
        </ul>
      </main>
    )
  }
}


const mapStateToProps = state => ({
    completed: getCompletedTodos(state),
    uncompleted: getUnCompletedTodos(state),
    isLoading: getIsLoading(state)
})


export default connect(mapStateToProps, { fetchTodos, removeTodo, toggleTodo })(TodoContent);
