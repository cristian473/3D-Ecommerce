import { 
  GET_USERS, 
  ADD_USERS, 
  DELETE_USERS,
  ADD_LOGIN,
  ISLOGGED
} from '../constants/crudUserConstants';

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

export function LoginReducers(state = initialState, action) {
  if (action.type === ADD_LOGIN){
    return action.payload;
  }

  if (action.type === ISLOGGED){
    return action.payload
  }
  return state
}