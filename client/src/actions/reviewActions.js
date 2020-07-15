import { GET_REVIEWS, ADD_REVIEWS, GET_REVIEWS_BY_PRODUCT } from '../constants/crudUserConstants';
import axios from 'axios'

export function addReviews(review, idProduct) {
    return (dispatch, getState) => {
        console.log(review)
        console.log(idProduct)
        axios.post("http://localhost:3001/products/" + idProduct + "/review", review)
            .then(response => {
                console.log(response)
                dispatch({ type: ADD_REVIEWS, payload: response.data.review })
            })
    };
}

export function getReviewsByProduct(idProduct) {
    return (dispatch, getState) => {
        axios.get("http://localhost:3001/products/productreviews/" + idProduct)
            .then(response => {
                console.log(response)
                dispatch({ type: GET_REVIEWS_BY_PRODUCT, payload: response.data })
            })
    };
}