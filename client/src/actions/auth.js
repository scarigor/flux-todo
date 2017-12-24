import api from '../api/api';
import ActionTypes from '../constants/ActionTypes';

export const userLoggedIn = (user) => ({
  type: ActionTypes.USER_LOGGED_IN,
  user
})

export const login = (credentials) => (dispatch) =>
  api.users.login(credentials).then(user => dispatch(userLoggedIn(user)))
