import { GET_CATEGORIES , ADD_CATEGORY, DELETE_CATEGORY} from '../constants/crudCategoryConstants';
import { initialState } from '../store/store'

function getData(state = initialState, action) {
  if (action.type === GET_CATEGORIES) {
    return {
      ...state,
      categories: action.payload
    }                
  }
  
  if (action.type === ADD_CATEGORY){
    return {
      ...state,
      categories: action.payload
    }
  }

  if (action.type === DELETE_CATEGORY){
    return {
      ...state,
      categories: state.categories.filter(categoryId => categoryId.id !== action.payload)
    }
  }

  return state;
}

export default getData;