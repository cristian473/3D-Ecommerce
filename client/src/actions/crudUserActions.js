import { GET_USERS, ADD_USERS, DELETE_USERS, ADD_LOGIN } from '../constants/crudUserConstants';
import axios from 'axios'
import { Redirect } from "wouter";


export function getUsers(id) {
  return (dispatch) => {
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
  return (dispatch) => {
    axios.delete("http://localhost:3001/user/delete/" + id)
      .then(response => {
        dispatch({ type: DELETE_USERS, payload: id })
      })
  };
}

// LOGIN
export function addLogin(login) {
  return (dispatch) => {
    axios.post("http://localhost:3001/auth/login/", login)
      .then(response => {
       
        
        dispatch({ type: ADD_LOGIN, payload: response.data });
        window.location = "http://localhost:3000/cart"
        
      })
  };
}