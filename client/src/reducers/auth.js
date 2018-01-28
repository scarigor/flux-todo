import { USER_SIGNUP, SIGNUP_SUCCEEDED, USER_LOGIN, LOGIN_SUCCEEDED, USER_LOGOUT } from '../constants';

const initialState = {
  user: {},
  isLoading: false
}

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_SIGNUP:
    case USER_LOGIN:
      return { ...state, isLoading: action.isLoading }

    case SIGNUP_SUCCEEDED:
      return {
        ...state,
        user: action.user,
        isLoading: action.isLoading
      }

    case LOGIN_SUCCEEDED:
      return action.user;

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
}

export const getLoadingStatus = state => state.auth.isLoading

export default auth;
