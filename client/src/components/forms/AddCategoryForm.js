import React, { useState } from 'react'
import '../style.css';
import { useDispatch } from 'react-redux'
import { addCategory } from '../../actions/crudCategoryActions'

const AddCategoryForm = props => {
	const initialFormState = { id: null, name: '' }
	const [ category, setCategory ] = useState(initialFormState)
	const dispatch = useDispatch();

	const handleInputChange = event => {
		const { name, value } = event.target

		setCategory({ ...category, [name]: value })
	}

	return (
		<form onSubmit={event => {
			event.preventDefault()
			if (!category.name) return
				dispatch (addCategory(category))
				setCategory(initialFormState)
			}}
		>
			<label>Nombre</label>
			<input type="text" name="name" placeholder="Agregar nombre" value={category.name} onChange={handleInputChange}/>
			
			<button>Agregar nueva categoría</button>
		</form>
	)
}

export default AddCategoryForm