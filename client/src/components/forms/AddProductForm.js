import React, { useState, useEffect, useRef } from 'react'
import '../style.css';
import { addProduct } from '../../actions/crudActions'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../actions/crudCategoryActions';
import FileBase64 from 'react-file-base64';



const AddProductForm = props => {
	const initialFormState = { id: null, name: '', description: '', category: [], price: '', stock: '', images: '', idCategory: '' }
	const [product, setProduct] = useState(initialFormState)
	const dispatch = useDispatch();
	const categories = useSelector(store => store.categories);
	useEffect(() => dispatch(getCategories()), []);


	const handleInputChange = event => {
		const { name, value } = event.target
		setProduct({ ...product, [name]: value })
	}

	const handleInputChangeOptions = event => {
		if (event.target.checked)
			product.category.push(event.target.value)
		else {
			product.category.splice(product.category.indexOf(event.target.value), 1)
		}
	}



	const handlerImageUploaded = files => {
		product.images = files[0].base64

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
		<form className="formAddProducts"
			onSubmit={event => {
				event.preventDefault()
				if (!product.name || !product.description) return
				console.log(product.category)
				dispatch(addProduct(product, product.category))
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
				<div className="selectBox" onClick={showCheckboxes}>
					<select className="selectCategory">
						<option>Selecciona las categorías</option>
					</select>
					<div className="overSelect"></div>
				</div>
				<div ref={checkboxes} className="dropDown" style={{ display: "none" }}>
					{categories && categories.map((element, index) =>
						<label key={index} className="checkLabel" htmlFor={element.categoryId}>
							<input
								type="checkbox"
								className="checkbox"
								id={element.categoryId}
								key={element.categoryId}
								name="category"
								value={element.categoryId}
								onClick={handleInputChangeOptions}
							/>
							{element.name}
						</label>
					)}
				</div>
				<label>Precio</label>
				<input type="text" name="price" placeholder="Agregar precio" value={product.price} onChange={handleInputChange} />
			</div>
			<div className="wrapperForm3">
				<label>Stock</label>
				<input type="number" name="stock" min='1' placeholder="Agregar stock" value={product.stock} onChange={handleInputChange} />
				<FileBase64
					multiple={true}
					onDone={handlerImageUploaded}

				/>
			</div>
			<button>Agregar nuevo producto</button>
		</form>
	)
}

export default AddProductForm