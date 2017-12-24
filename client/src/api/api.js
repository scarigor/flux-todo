import axios from "axios";

export default {
  todos: {
    addTodo: (text) => {
      return axios.post("/todos/addtodo", { text }).then(res => res.data)
    },

    removeTodo: (id) => {
      return axios.delete(`/todos/todo-${id}`).then(res => res.data._id)
    },

    toggleTodo: (id) => {
      return axios.patch(`/todos/todo-${id}`).then(res => res.data._id)
    },

    fetchTodos: () => axios.get('/todos').then(res => res.data)
  },

  users: {
    login: (credentials) => {
      return axios.post('/login', {credentials}).then(res => res.data)
    }
  }
}
