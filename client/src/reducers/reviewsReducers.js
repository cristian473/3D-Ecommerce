import { GET_REVIEWS, ADD_REVIEWS, GET_REVIEWS_BY_PRODUCT } from '../constants/crudUserConstants';
import { store } from '../store/store'

const initialState = [];

function getDataReviews(state = initialState, action) {
  if (action.type === ADD_REVIEWS) {

    return state.concat(action.payload)

  }

  // if (action.type === GET_REVIEWS) {
  //   return state.concat(action.payload)
  // }

  if (action.type === GET_REVIEWS_BY_PRODUCT) {
    return action.payload
  }


  return state;
}

export default getDataReviews;