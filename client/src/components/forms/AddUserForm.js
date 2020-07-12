import React, { useState, useEffect, useSelector } from 'react'
import '../style.css';
import { useDispatch } from 'react-redux'
import { addUsers } from '../../actions/crudUserActions'
import { getUsers } from '../../actions/crudUserActions'

const AddUserForm = props => {
	const initialUserState = { userId: null, username: '', password: '', name: '', lastname: '' }
	const [user, setUser] = useState(initialUserState)
	const dispatch = useDispatch();



	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	useEffect(() => dispatch(getUsers()), []);

	return (
		<form className="formAddCategory" onSubmit={event => {
			event.preventDefault()
			if (!user.name) return
			dispatch(addUsers(user))
			setUser(initialUserState)
		}}
		>
			<label>Username:</label>
			<input type="text" name="username" placeholder="Agregar username" value={user.username} onChange={handleInputChange} />
			<label>Password:</label>
			<input type="text" name="password" placeholder="Insertar password" value={user.password} onChange={handleInputChange} />
			<label>Nombre:</label>
			<input type="text" name="name" placeholder="Agregar nombre" value={user.name} onChange={handleInputChange} />
			<label>Apellido:</label>
			<input type="text" name="lastname" placeholder="Agregar apellido" value={user.lastname} onChange={handleInputChange} />

			<button>Agregar nuevo usuario</button>
		</form>
	)
}

export default AddUserForm