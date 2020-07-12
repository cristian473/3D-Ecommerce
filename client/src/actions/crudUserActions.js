import { GET_USERS, ADD_USERS, DELETE_USERS } from '../constants/crudUserConstants';
import axios from 'axios'

export function getUsers(id) {
  return (dispatch, getState) => {
    axios.get("http://localhost:3001/user/ " + id)
      .then(response => {
        dispatch({ type: GET_USERS, payload: response.data })
      })
  };
}

export function addUsers(user) {
  return (dispatch) => {
    axios.post("http://localhost:3001/user/", user)
      .then(response => {
        dispatch({ type: ADD_USERS, payload: response.data })
      })
  };
}

export function deleteUsers(id) {
  return (dispatch, getState) => {
    axios.delete("http://localhost:3001/user/delete/" + id)
      .then(response => {
        dispatch({ type: DELETE_USERS, payload: id })
      })
  };
}