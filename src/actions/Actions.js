import ActionTypes from '../constants/ActionTypes'
// import TodoApi from '../api/TodoApi'

export const onAddTodo = text => ({ type: ActionTypes.ADD_TODO, text })
export const onDeleteTodo = id => ({ type: ActionTypes.DEL_TODO, id })
export const onToggleTodo = id => ({ type: ActionTypes.TOGGLE_TODO, id })

// export const onFetchSuccess = text => ({ type: ActionTypes.FETCH_SUCCESS, text })
//
// export function onFetchTodo() {
//   return function(dispatch) {
//     return TodoApi.getTodo().then(todo => {
//       dispatch(onFetchSuccess(todo));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }
