import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../style.css'
import {delProduct} from '../../actions/crudActions'

const ProductTable = props => {


  const dispatch = useDispatch();
  const products = useSelector(store => store.products);
  console.log(products)
  return(
      <table className="table">
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
          {products.length > 0 ? (
            products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td><img className="image" src={product.image}/></td>
                <td>
                  <button
                    onClick={() => {
                      // () => dispatch((product.id))
                    }}
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => dispatch(delProduct(product.id))}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No hay productos</td>
            </tr>
          )}
        </tbody>
      </table>
    )
}


export default ProductTable
