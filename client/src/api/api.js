import axios from "axios";

export const addTodo = text => {
  return axios.post("/todos/addtodo", { text }).then(res => res.data)
}

export const removeTodo = id => {
  return axios.delete(`/todos/todo-${id}`).then(res => res.data._id)
}

export const toggleTodo = id => {
  return axios.patch(`/todos/todo-${id}`).then(res => res.data._id)
}

export const fetchTodos = () => axios.get('/todos').then(res => res.data)
