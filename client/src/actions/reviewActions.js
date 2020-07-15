import { GET_REVIEWS, ADD_REVIEWS } from '../constants/crudUserConstants';
import axios from 'axios'

export function addReviews() {
    return (dispatch, getState) => {
        axios.post("http://localhost:3001/product/" + userId + "/review")
            .then(response => {
                console.log(response)
                dispatch({ type: ADD_REVIEWS, payload: response.data })
            })
    };
}

export function getReviews() {
    return (dispatch, getState) => {
        axios.get("http://localhost:3001/product/" + userId + "/review")
            .then(response => {
                console.log(response)
                dispatch({ type: GET_REVIEWS, payload: response.data })
            })
    };
}