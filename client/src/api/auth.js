import axios from 'axios';

const path = 'api/auth'

export const login = credentials =>
  axios.post(path + '/login', { credentials }).then(res => res.data)

export const signup = data => {
  axios.post(path + '/signup', { data }).then(res => console.log(res))
}
