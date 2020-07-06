import React, { useState, Fragment, useEffect } from 'react'
import AddProductForm from '../forms/AddProductForm'
import EditProductForm from '../forms/EditProductForm'
import ProductTable from '../tables/ProductTable'
import {connect, useDispatch, useSelector} from 'react-redux'
import {getProducts} from '../../actions/productActions'


// const products=[{
//   name: 'hola'
// }]
const Crud = () => {
  const dispatch = useDispatch();
  const products = useSelector(store => store.products);
 
  useEffect(()=>dispatch(getProducts()),[]);
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
             <Fragment>
              <h2>Agregar productos</h2>
                <AddProductForm/> 
            </Fragment>
          }
        </div>

        <div className="flex-large">
          <h2>Productos</h2>
          <ProductTable products={products} />
        </div>
      </div>
    </div>
  )
}

// const mapStateToProps= state =>({
  
//     products : state.products

// })

// const mapDispatchToProps = (dispatch) => ({
//   getData: () => dispatch(getProducts()),
//   delete: () => delProduct(),
//   // boundExercises: () => dispatch(setExercises()),
// });


export default (Crud)