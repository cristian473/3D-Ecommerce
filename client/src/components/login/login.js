import React, { useState } from 'react';
import { addLogin } from '../../actions/crudUserActions'
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Redirect} from 'wouter'

const Login = props => {

  const initialLoginState = { id: null, username: '', password: '' };
  const [login, setLogin] = useState(initialLoginState)
  const dispatch = useDispatch();
  const isLogin = useSelector(store => store.login)
  

  
  const handleInputChange = event => {
    const { name, value } = event.target
    setLogin({ ...login, [name]: value })
  }
  if (isLogin.login === true){
    localStorage.setItem('isLogin', JSON.stringify(isLogin));
  }


  return (
    <div className="loginScreen">
      <div className="wrapper">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={event => {
          event.preventDefault()
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