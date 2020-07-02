import React, { useState, Fragment, useEffect } from 'react'
import AddCategoryForm from '../forms/AddCategoryForm'
import EditCategoryForm from '../forms/EditCategoryForm'
import CategoryTable from '../tables/CategoryTable'
import { useDispatch, useSelector} from 'react-redux'
import {getCategories} from '../../actions/crudCategoryActions'

const CrudCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector(store => store.categories);
 
  useEffect(()=>dispatch(getCategories()),[]);
  // CRUD operations
  const addProduct = product => {
    
  }
  const updateProduct = (id, updatedProduct) => {
    // setEditing(false)

    // setProducts(products.map(product => (product.id === id ? updatedProduct : product)))
  }

  const editRow = product => {
    // setEditing(true)

    // setCurrentProduct({ 
    //   id: product.id,
    //   name: product.name,
    //   description: product.description,
    //   category: product.category,
    //   price: product.price,
    //   stock: product.stock,
    //   image: product.image
    // })
  }

  return (
    <div className="container">
      
      <div className="flex-row">
        <div className="flex-large">
          {
            // <Fragment>
            //   <h2>Editar productos</h2>
            //   <EditProductForm
            //     // editing={editing}
            //     // setEditing={setEditing}
            //     // currentProduct={currentProduct}
            //     // updateProduct={updateProduct}
            //   />
            // </Fragment>
             <Fragment>
              <h2>Agregar Categorias</h2>
                <AddCategoryForm/> 
            </Fragment>
          }
        </div>

        <div className="flex-large">
          <h2>Categorias</h2>
          <CategoryTable categories={getCategories} />
        </div>
      </div>
    </div>
  )
}

export default (CrudCategory)