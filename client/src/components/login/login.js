import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';

const Login = () => {

  const initialFormState = { id: null, email: '', password: '' };
	const [ user, setUser ] = useState(initialFormState)
  const dispatch = useDispatch();
  
	const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
	}
    
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.description)
          return
            console.log(user.category)
            setUser(initialFormState)
          }
        }
      >
        <label>Dirección de correo electrónico</label>
        <input type="text" name="email" placeholder="Escribe tu correo electrónico" value={user.email} onChange={handleInputChange} />
        <label>Password</label>
        <input type="pass" name="password" placeholder="Escribe tu password" value={user.password} onChange={handleInputChange} />
        
        <button>Continuar</button>
      </form>
      <h2>¿Eres nuevo en 3D-Models?</h2>
      <button>Crea tu cuenta de Amazon</button>
    </div>
  )
}
    
export default Login