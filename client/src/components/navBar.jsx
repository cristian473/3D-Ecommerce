import React from 'react'
import {Link} from 'wouter'
import Catalog from './catalog'  


  export default class Navbar extends React.Component{

    constructor(props) {
        super (props)
        this.state={

        }
    }


    render(){
        return(
            <div>
                <div className='navBar'>
                    <a href="/" ><h1 >3D-Shop</h1></a>
                    <div className='navBarButtons'>
                        <Link className='navLink' to='/'>Inicio</Link> 
                        <Link className='navLink' to='/Catalogo'>Catalogo</Link> 
                    </div>
                </div>

            </div>
        )
    }
  }
