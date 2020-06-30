import React, { useState, Fragment } from 'react'
import AddProductForm from '../forms/AddProductForm'
import EditProductForm from '../forms/EditProductForm'
import ProductTable from '../tables/ProductTable'
import {connect} from 'react-redux'
import {getProducts} from '../../actions/productActions'
import {delProduct} from '../../actions/productActions'
// const products=[{
//   name: 'hola'
// }]
const Crud = ({products}) => {

  // CRUD operations
  const addProduct = product => {
    // product.id = products.length + 1
    // setProducts([ ...products, product ])
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
      {getProducts()}
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
              <h2>Agregar productos</h2>
                {/* <AddProductForm addProduct={addProduct} /> */}
            </Fragment>
          }
        </div>

        <div className="flex-large">
          <h2>Productos</h2>
          <ProductTable products={products} editRow={editRow} deleteProduct={delProduct} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps= state =>{
  return {
    products : state.products
  }
  
}


// const mapDispatchToProps = dispatch =>{
// }



export default connect (mapStateToProps, {
  getProducts,
  delProduct
})(Crud)