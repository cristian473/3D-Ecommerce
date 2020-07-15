import React, { useState, useEffect } from 'react';
import { addLogin } from '../../actions/crudUserActions'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = props => {

  const initialLoginState = { id: null, username: '', password: '' };
  const [login, setLogin] = useState(initialLoginState)
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target
    setLogin({ ...login, [name]: value })
  }

  return (
    <div className="loginScreen">
      <div className="wrapper">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={event => {
          event.preventDefault()
          // (!login.name)
          dispatch(addLogin(login))
          setLogin(initialLoginState)
        }}
        >
          <label>Dirección de correo electrónico</label>
          <input type="text" name="username" placeholder="Escribe tu correo electrónico" value={login.username} onChange={handleInputChange} />
          <label>Password</label>
          <input type="password" name="password" placeholder="Escribe tu password" value={login.password} onChange={handleInputChange} />

          <button>Continuar</button>
        </form>
        <h3>¿Eres nuevo en 3D-SHOP?</h3>
        <Link to="/newUser" className="button buttonGreyBorder">Crea tu cuenta de 3D-SHOP</Link>
      </div>
    </div>
  )
}

export default Login