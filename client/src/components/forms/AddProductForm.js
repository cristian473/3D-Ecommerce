import React, { useState, useEffect } from 'react'
import '../style.css';

import {addProduct} from '../../actions/crudActions'
import {  useDispatch, useSelector } from 'react-redux';

import { getCategories } from '../../actions/crudCategoryActions';
import {updateProduct} from '../../actions/crudActions'

const AddProductForm = props => {
	const initialFormState = { id: null, name: '', description: '', category: '', price: '', stock: '', image: '', idCategory: '' }
	const [ product, setProduct ] = useState(initialFormState)
	const dispatch = useDispatch();
	const categories = useSelector(store => store.categories);
	useEffect(() => dispatch(getCategories()),[]);

	
	const handleInputChange = event => {
		const { name, value } = event.target
		setProduct({ ...product, [name]: value })
	
		
	}
	const handleInputChangeOptions = event =>{
		product.category = event.target.value
	}


	return (
		<form class="formAddProducts"
			onSubmit={event => {
				event.preventDefault()
				if (!product.name || !product.description) return
				console.log(product.category)
				dispatch (addProduct(product, product.category))
				setProduct(initialFormState)
			}}
		>
      <div className="wrapperForm1">
        <label>Nombre</label>
        <input type="text" name="name" placeholder="Agregar nombre" value={product.name} onChange={handleInputChange} />
        <label>Descripción</label>
        <input type="text" name="description" placeholder="Agregar descripción" value={product.description} onChange={handleInputChange} />
      </div> 
      <div className="wrapperForm2">  
        <label>Categorias</label>
        <select onChange={handleInputChangeOptions} className='categorySelect'>
          {categories && categories.map(element =>
            <option key={element.categoryId}  name= 'category' value = {element.categoryId}>{element.name} </option>
          )}
        </select>
        <label>Precio</label>
        <input type="text" name="price" placeholder="Agregar precio" value={product.price} onChange={handleInputChange} />
      </div>
      <div className="wrapperForm3">  
        <label>Stock</label>
        <input type="number" name="stock" min='1' placeholder="Agregar stock" value={product.stock} onChange={handleInputChange} />
        <label>Imagen</label>
        <input type="text" name="image" placeholder="Agregar url de la imagen" value={product.image} onChange={handleInputChange} />
      </div>
			<button>Agregar nuevo producto</button>
		</form>
	)
}

export default AddProductForm