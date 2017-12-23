import axios from "axios";

export default {
  user: {
    login: credentials => axios.post("/api/auth", {credentials}).then(res => res.data.user)
  },
  todos: {
    addTodo: (text) => axios.post("/newtodo", {text}).then(res => res.data.todo)
  }
}
