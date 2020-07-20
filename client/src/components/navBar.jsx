import React from 'react'
import {Link} from 'wouter'
import SearchBar from './search/searchBarFix'


  const Navbar = ()=>{

    var user =  JSON.parse(localStorage.getItem('isLogin') || "[]");

    const handlerLogout = () => {
        localStorage.removeItem('isLogin')
        window.location = "http://localhost:3000/login"
    }

    if(user.login === true && user.type === 'client' ){
        return(
            <div>
                <div className='navBar'>
                    <a href="/"><h1>3D-Shop</h1></a>
                    <SearchBar />
                    <div className='navBarButtons'>
                        <Link className='navLink' to='/cart'>Carrito</Link>
                        <Link className='navLink' to='/'>Inicio</Link> 
                        <Link className='navLink' to='/Catalogo'>Catalogo</Link>
                        <button onClick={handlerLogout}>Log out</button> 
                    </div>
                </div>

            </div>
        )
    
    }

    if(user.login === true && user.type === 'admin' ){
    return(
        <div>
            <div className='navBar'>
                <a href="/"><h1>3D-Shop</h1></a>
                <SearchBar />
                <div className='navBarButtons'>
                    <Link className='navLink' to='/cart'>Carrito</Link>
                    <Link className='navLink' to='/'>Inicio</Link> 
                    <Link className='navLink' to='/Catalogo'>Catalogo</Link>
                    <Link className='navLink' to='/admin'>Admin</Link>
                    <button onClick={handlerLogout}>Log out</button>  
                </div>
            </div>

        </div>
    )
    }

    return(
        <div>
            <div className='navBar'>
                <a href="/"><h1>3D-Shop</h1></a>
                <SearchBar />
                <div className='navBarButtons'>
                    <Link className='navLink' to='/cart'>Carrito</Link>
                    <Link className='navLink' to='/'>Inicio</Link> 
                    <Link className='navLink' to='/Catalogo'>Catalogo</Link>
                    
                    <Link className='navLink' to='/login'>Login</Link> 
                </div>
            </div>

        </div>
    )

        
  }

  export default Navbar
