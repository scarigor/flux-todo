import ActionTypes from '../constants/ActionTypes'

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGGED_IN:
      return action.user

    default:
      return state
  }
}

export const getAllUsers = state => state.usersReducer


export default usersReducer;
