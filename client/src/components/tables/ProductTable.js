import React from 'react'
import '../style.css';

const ProductTable = props => (
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
      {props.products.length > 0 ? (
        props.products.map(product => (
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
                  props.editRow(product)
                }}
              >
                Editar
              </button>
              <button
                onClick={() => props.deleteProduct(product.id)}
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



export default ProductTable
