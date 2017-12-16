import ActionTypes from './ActionTypes'

class Actions {
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }

  onAddTodo(title) {
    this.dispatcher.dispatch({
      type: ActionTypes.ADD_TODO,
      title
    })
  }

  onDeleteTodo(title) {
    this.dispatcher.dispatch({
      type: ActionTypes.DEL_TODO,
      title
    })
  }

  onToggleTodo(title) {
    this.dispatcher.dispatch({
      type: ActionTypes.TOGGLE_TODO,
      title
    })
  }
}

export default Actions
