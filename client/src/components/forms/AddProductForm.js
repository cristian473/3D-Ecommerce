import React, { useState } from 'react'
import '../style.css';
import {useDispatch} from 'react-redux'
import {addProduct} from '../../actions/crudActions'

const AddProductForm = props => {
	const initialFormState = { id: null, name: '', description: '', category: '', price: '', stock: '', image: '' }
	const [ product, setProduct ] = useState(initialFormState)
	const dispatch = useDispatch();

	const handleInputChange = event => {
		const { name, value } = event.target

		setProduct({ ...product, [name]: value })
	}


	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!product.name || !product.description) return

				dispatch (addProduct(product))
				setProduct(initialFormState)
			}}
		>
			<label>Nombre</label>
			<input type="text" name="name" placeholder="Agregar nombre" value={product.name} onChange={handleInputChange} />
			<label>Descripción</label>
			<input type="text" name="description" placeholder="Agregar descripción" value={product.description} onChange={handleInputChange} />
			<label>Categoria</label>
			<input type="text" name="category" placeholder="Agregar categoria" value={product.category} onChange={handleInputChange} />
			<label>Precio</label>
			<input type="text" name="price" placeholder="Agregar precio" value={product.price} onChange={handleInputChange} />
			<label>Stock</label>
			<input type="text" name="stock" placeholder="Agregar stock" value={product.stock} onChange={handleInputChange} />
			<label>Imagen</label>
			<input type="text" name="image" placeholder="Agregar url de la imagen" value={product.image} onChange={handleInputChange} />
			<div>
				<label>Categorias</label>
				<input type="checkbox" id="Raras" name="categories" value={product.categories} onChange={handleInputChange} />
				<label for="scales">Raras</label>
			</div>
			
			<button>Agregar nuevo producto</button>
		</form>
	)
}

export default AddProductForm