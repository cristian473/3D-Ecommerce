import React, {  Fragment, useEffect } from 'react'
import AddCategoryForm from '../forms/AddCategoryForm'
import CategoryTable from '../tables/CategoryTable'
import { useDispatch, useSelector} from 'react-redux'
import {getCategories} from '../../actions/crudCategoryActions'

const CrudCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector(store => store.categories);

  useEffect(() => dispatch(getCategories()),[]);

  return (
    <div className="containerCategory">
      
      <div className="flex-row">
        <div className="flex-large">
          {
             <Fragment>
              <h2>Agregar Categorias</h2>
              <AddCategoryForm /> 
            </Fragment>
          }
        </div>

        <div className="flex-large">
          <CategoryTable categories={categories} />
        </div>
      </div>
    </div>
  )
}

export default (CrudCategory)