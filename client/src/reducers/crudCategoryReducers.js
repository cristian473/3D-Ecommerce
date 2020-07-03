import { GET_CATEGORIES , ADD_CATEGORY, DELETE_CATEGORY} from '../constants/crudCategoryConstants';

const initialState = [];

function getDataCategories(state = initialState, action) {
  if (action.type === GET_CATEGORIES) {
    return action.payload
  }
  
  if (action.type === ADD_CATEGORY){
    return state.concat (action.payload)
  }

  if (action.type === DELETE_CATEGORY){
    return state.filter(category => category.categoryId !== action.payload)
  }

  return state;
}

export default getDataCategories;