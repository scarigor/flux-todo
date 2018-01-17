import { USER_LOGIN, USER_LOGOUT, USER_SIGNUP } from '../constants';

export const userLogin = credentials => ({
  type: USER_LOGIN,
  isLoading: true,
  credentials
})

export const userLogout = () => ({
  type: USER_LOGOUT,
  isLoading: true,
})

export const userSignUp = credentials => ({
  type: USER_SIGNUP,
  isLoading: true,
  credentials
})
