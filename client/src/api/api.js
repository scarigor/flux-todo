import axios from "axios";

export default {
  todos: {
    // addTodo: (text) => axios.post("/addtodo", {text}).then(res => res.data.todo),
    fetchTodos: () => axios.get('/todos').then(res => res.data)
  }
}
