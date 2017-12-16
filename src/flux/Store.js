import { EventEmitter } from 'events'
import ActionTypes from './ActionTypes'
import TodoItem from './TodoItem'
import Counter from './generatorID'

class Store extends EventEmitter {
  constructor(dispatcher) {
    super()
    this.todos = []

    this.dispatcher = dispatcher
    this.handle = this.handle.bind(this)
    this.dispatcher.register(this.handle)
  }

  addTodo(title) {
    if (title) {
      const id = Counter.increment(),
            todo = new TodoItem(id, title)

      this.todos.push(todo)
    }
    this.printTodos(this.todos)
    this.emit('change')
  }

  deleteTodo(title) {
    if (title) {
      const todos = this.todos
      this.todos = todos.filter(todo => todo.title !== title)
    }
    this.printTodos(this.todos)
    this.emit('change')
  }

  toggleTodo(title) {
    if (title) {
      const todo = this.todos.find(todo => todo.title === title)
      todo.done = !todo.done
    }
    this.printTodos(this.todos)
    this.emit('change')
  }

  handle(action) {
    switch (action.type) {
      case ActionTypes.ADD_TODO:
        this.addTodo(action.title)
        break;
      case ActionTypes.DEL_TODO:
        this.deleteTodo(action.title)
        break;
      case ActionTypes.TOGGLE_TODO:
        this.toggleTodo(action.title)
        break;

      default:
        break;
    }
  }

  printTodos(todos) {
    console.log('-----------------------------------------')
    todos.forEach(todo => console.log(`${todo.id}. Todo: ${todo.title} \n   Status: ${todo.done ? 'done' : 'not done'}`))
  }
}

export default Store
