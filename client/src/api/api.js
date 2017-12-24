import axios from "axios";

export default {
  todos: {
    addTodo: (text) => axios.post("/todos/addtodo", { text }).then(res => res.data),
    removeTodo: (id) => axios.delete(`/todos/todo-${id}`).then(res => res.data._id),
    toggleTodo: (id) => axios.patch(`/todos/todo-${id}`).then(res => res.data._id),
    fetchTodos: () => axios.get('/todos').then(res => res.data)
  }
}
