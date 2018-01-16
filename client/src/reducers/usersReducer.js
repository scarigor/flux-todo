import { USER_LOGIN } from '../constants';

const initialState = {
  users: [],
  isLoading: false
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.user

    default:
      return state
  }
}

export const getAllUsers = state => state.usersReducer.users


export default usersReducer;
