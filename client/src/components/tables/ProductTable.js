import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector, Provider } from 'react-redux'
import '../style.css'
import { delProduct, updateProduct } from '../../actions/crudActions'
import { CHANGE_EDIT, EDITING_FALSE } from '../../constants/searchConstants'
import Product from '../catalog/product'
import { getCategories } from '../../actions/crudCategoryActions';

const ProductTable = props => {


  const initialFormState = { id: null, name: '', description: '', category: [], price: '', stock: '', image: '', idCategory: '' }
  const [product, setProduct] = useState(initialFormState)
  const categories = useSelector(store => store.categories);
  useEffect(() => dispatch(getCategories()), []);

  const handleInputChange = event => {

    const { name, value } = event.target
    console.log(value)
    setProduct({ ...product, [name]: value })
  }

  const dispatch = useDispatch();
  const products = useSelector(store => store.products);

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

  const handleInputChangeCheck = event =>{
		if (event.target.checked)
		product.category.push(event.target.value)
		else {
			product.category.splice(product.category.indexOf(event.target.value), 1)
		}
	}


  var expanded = false;
	const checkboxes = useRef();
  
	const showCheckboxes = () => {
	  if (!expanded) {
		checkboxes.current.style.display = "block";
		expanded = true;
	  } else {
		checkboxes.current.style.display = "none";
		expanded = false;
	  }
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
                    <div className="selectBox" onClick={showCheckboxes}>
                      <select className="selectCategory">
                        <option>Selecciona las categorías</option>
                      </select>
                      <div className="overSelect"></div>
                    </div>
                    <div ref={checkboxes} className="dropDown" style={{ display: "none" }}>
                      {categories && categories.map(element => {
                        var encontrado = product.categories.find(elemento => elemento.categoryId == element.categoryId)
                      if ( encontrado){

                        return( <label className="checkLabel" htmlFor={element.categoryId}>
                          <input
                            type="checkbox"
                            className="checkbox"
                            defaultChecked = 'checked'
                            id={element.categoryId}
                            key={element.categoryId}
                            name="category"
                            value={element.categoryId}
                            onClick={handleInputChangeCheck}
                          />
                          {element.name}
                        </label>)

                      }
                      else {
                       return( <label className="checkLabel" htmlFor={element.categoryId}>
                          <input
                            type="checkbox"
                            className="checkbox"
                            id={element.categoryId}
                            key={element.categoryId}
                            name="category"
                            value={element.categoryId}
                            onClick={handleInputChangeCheck}
                          />
                          {element.name}
                        </label>
                       )
                      }
                      }
                    )}
              
                    </div>
                    <td><input placeholder={product.price} name="price" size='1' onChange={handleInputChange}></input></td>
                    <td><input placeholder={product.stock} name="stock" size='1' onChange={handleInputChange}></input></td>
                    <td><img className="image" src={product.image} /></td>
                    <td>
                      <button id={product.id} value={index}
                        onClick={updateProducto}
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
                const categorias = () =>{
                  var cate = []
                  product.categories.map(element => cate.push(element.name + ', '))
                  return cate;
                }
                
    
                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    {product.categories.length > 0 ? (
                      
                    <td>{categorias()}</td>
                    )
                     : 
                     (<td>No se le asignaron categorias</td>)}
                    <td>${product.price}</td>
                    <td>{product.stock}</td>
                    <td><img className="image" src={product.images} /></td>
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


export default ProductTable
