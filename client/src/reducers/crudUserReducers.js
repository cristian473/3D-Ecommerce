import { GET_USERS, ADD_USERS, DELETE_USERS } from '../constants/crudUserConstants';

const initialState = [];

function getDataUser(state = initialState, action) {
  if (action.type === GET_USERS) {
    return action.payload
  }

  if (action.type === ADD_USERS) {
    return state.concat(action.payload)
  }

  if (action.type === DELETE_USERS) {
    return state.filter(userId => userId.userId !== action.payload)
  }
  return state;
}
export default getDataUser;