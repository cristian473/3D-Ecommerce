import { 
  GET_USERS, 
  GET_ALL_USERS,
  ADD_USERS, 
  DELETE_USERS,
  ADD_LOGIN,
  ISLOGGED,
  PROMOTE_USER
} from '../constants/crudUserConstants';

const initialState = [];

export function getDataUser(state = initialState, action) {
  if (action.type === GET_USERS) {
    return action.payload
  }

  if (action.type === ADD_USERS) {

    return state.concat(action.payload)
  }

  if (action.type === DELETE_USERS) {
    console.log(action.payload)
    return state.filter(user => user.userId !== action.payload)
  }

  if(action.type === GET_ALL_USERS){
    return action.payload
  }


  return state;
}


export function LoginReducers(state = initialState, action) {
  if (action.type === ADD_LOGIN){
    return action.payload;
  }

  if (action.type === ISLOGGED){
    return action.payload
  }
  return state
}