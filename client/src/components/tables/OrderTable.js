import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../style.css'
import { delProduct, updateProduct } from '../../actions/crudActions'
import { CHANGE_EDIT } from '../../constants/searchConstants'


const OrderTable = props => {

  // Desde aca traigo las ordenes del store //

  const dispatch = useDispatch();
  const order = useSelector(store => store.orders);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);


  const updateProducto = event => {
    const id = event.target.id;
    const index = event.target.value;
    const categoryId = product.category
    dispatch(updateProduct(id, product, index, categoryId))
    forceUpdate();



  }

  const isEdit = event => {
    const indexProductEdit = event.target.value
    dispatch({ type: CHANGE_EDIT, payload: indexProductEdit })
    forceUpdate();

  }


  return (
    <table className="tableProducts">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Categoria</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {



          products.length > 0 ? (
            products.map((product, index) => {
              if (product.isEditing == true) {

                return (
                  <tr key={product.id}>
                    <td><input placeholder={product.name} name="name" onChange={handleInputChange} ></input></td>
                    <td><textarea placeholder={product.description} name="description" onChange={handleInputChange}></textarea></td>
                    <td><select onChange={handleInputChangeOptions} className='categorySelect' >
                      {categories && categories.map(element =>
                        <option key={element.categoryId} name='category' value={element.categoryId}>{element.name} </option>
                      )}
                    </select></td>
                    <td><input placeholder={product.price} name="price" size='1' onChange={handleInputChange}></input></td>
                    <td><input placeholder={product.stock} name="stock" size='1' onChange={handleInputChange}></input></td>
                    <td><img className="image" src={product.image} /></td>
                    <td>
                      <button id={product.id} value={index}
                        onClick={updateProducto, updateProducto}
                      >
                        Confirmar
                      </button>
                      <button
                        onClick={() => dispatch(delProduct(product.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>)
              }

              else {

                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    {product.categories.length >= 0 ? (<td>{product.categories[0].name}</td>) : (<td>No se le asignaron categorias</td>)}
                    <td>${product.price}</td>
                    <td>{product.stock}</td>
                    <td><img className="image" src={product.image} /></td>
                    <td>
                      <button value={index} id={product.id}
                        onClick={isEdit}
                      >
                        Editar
                  </button>
                      <button
                        onClick={() => dispatch(delProduct(product.id))}
                      >
                        Eliminar
                  </button>
                    </td>
                  </tr>)
              }


            })
          ) : (
              <tr>
                <td colSpan={7}>No hay productos</td>
              </tr>
            )}
      </tbody>
    </table>
  )
}


export default OrderTable
