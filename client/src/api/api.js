import axios from 'axios';

const path = 'api/todos'

export const addTodo = text =>
  axios.post(path, { text }).then(res => res.data)


export const removeTodo = id =>
  axios.delete(path + `/${id}`).then(res => res.data._id)


export const toggleTodo = id =>
  axios.patch(path + `/${id}`).then(res => res.data._id)


export const fetchTodos = () => axios.get(path).then(res => res.data)

export const login = credentials =>
  axios.post('/auth', { credentials }).then(res => res.data.user)

export const signup = user =>
  axios.post('/auth', { user }).then(res => res.data.user)
