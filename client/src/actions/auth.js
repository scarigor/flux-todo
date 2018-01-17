import { USER_LOGIN, USER_LOGOUT } from '../constants';

export const userLogin = user => ({
  type: USER_LOGIN,
  isLoading: true,
  user
})

export const userLogout = () => ({
  type: USER_LOGOUT,
  isLoading: true,
})
