import { GET_SEARCH } from '../constants/searchConstants';
import axios from 'axios'

export function getSearch (searchKey){
  return (dispatch) => {
    axios.get("http://localhost:3001/products/search?keyword="+searchKey)
        .then (response =>{
            console.log(response)
            dispatch ({type: GET_SEARCH, payload: response.data})
        })
  };
}

export function searchForCategories(category){
  return (dispatch) => {
    axios.get("http://localhost:3001/products/search?keyword="+category)
        .then (response =>{
            console.log(response)
            dispatch ({type: GET_SEARCH, payload: response.data})
        })
  };
}