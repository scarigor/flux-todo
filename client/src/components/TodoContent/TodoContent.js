import React from 'react'
import Todo from '../Todo/Todo'
import './TodoContent.css'

import { connect } from "react-redux";
import {
  getLoadingStatus,
  getCompletedTodos,
  getUnCompletedTodos
} from "../../reducers/todos";
import { fetchTodos, removeTodo, toggleTodo } from '../../actions/todos';
import { Divider, Dimmer, Loader } from 'semantic-ui-react'
import LoadingBar from 'react-redux-loading-bar'

class TodoContent extends React.Component {
  componentDidMount = () => this.props.fetchTodos()

  renderTodoItem = todo => {
    return <Todo
              key={todo._id}
              id={todo._id}
              text={todo.text}
              isDone={todo.done}
              onToggle={this.props.toggleTodo}
              onRemove={this.props.removeTodo} />
  }

  render() {
    const { completed, uncompleted, isLoading } = this.props

    return (
      <main className="todo-content">
        <LoadingBar className='loading-bar'/>
        {/* { isLoading && <Dimmer active inverted><Loader/></Dimmer>} */}

        <ul className="todos uncompleted-todos">
          {uncompleted.map(todo => this.renderTodoItem(todo)).reverse()}
        </ul>

        <Divider />

        <ul className="todos completed-todos">
          {completed.map(todo => this.renderTodoItem(todo)).reverse()}
        </ul>
      </main>
    )
  }
}

const mapStateToProps = state => ({
    completed: getCompletedTodos(state),
    uncompleted: getUnCompletedTodos(state),
    isLoading: getLoadingStatus(state)
});

const mapDispatchToProps = { fetchTodos, removeTodo, toggleTodo }

export default connect(mapStateToProps, mapDispatchToProps)(TodoContent);
