import { GET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORY } from '../constants/crudCategoryConstants';
import axios from 'axios'

export function getCategories() {
  return (dispatch, getState) => {
    axios.get("http://localhost:3001/category/")
    .then (response =>{
      dispatch ({type: GET_CATEGORIES, payload: response.data})
    })
  };
}

export function addCategory(category) {
  return (dispatch) => {
    axios.post("http://localhost:3001/category/", category)
    .then(response => {
      dispatch({type: ADD_CATEGORY, payload: response.data})
    })
  };
}

export function deleteCategory(id) {
  console.log(id);
  return (dispatch, getState) => {
    axios.delete("http://localhost:3001/category/delete/" + id)
    .then (response => {
      dispatch ({type: DELETE_CATEGORY, payload: id})
    })
  };
}