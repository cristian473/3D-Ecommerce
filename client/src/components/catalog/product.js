import React from 'react'
import {Link} from 'wouter'

export default class Product extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            name: this.props.name,
            description: this.props.description,
            category: this.props.category,
            price: this.props.price,
            stock: this.props.stock,
            image: this.props.image
        }
    }

    render(){
        return (
        <div className ='Product'>
            <div className='divProduct'>
            <Link to={'/producto/'+ this.props.id} ><img width="60px" src = {this.props.image}></img>
            <h2>{this.props.name}</h2></Link>
            <p>{this.props.description}</p>
            <h4>Precio: ${this.props.price}</h4>
            <p>Stock: {this.props.stock}</p>
            <button>Comprar</button>
            </div>
        </div>
        );
    }
}