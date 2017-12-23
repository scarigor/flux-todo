import ActionTypes from '../constants/ActionTypes'

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN_REQUEST:
      return action.user

    case ActionTypes.USER_LOGIN_SUCCESS:
      return action.user

    case ActionTypes.USER_LOGIN_ERROR:
      return action.user

    default:
      return state
  }
}

export const getAllUsers = state => state.usersReducer


export default usersReducer;
