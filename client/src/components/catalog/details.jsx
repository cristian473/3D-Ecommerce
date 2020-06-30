import React from 'react'
import {Link} from 'wouter'
// import Catalog from './catalog/catalog'  
import axios from 'axios'


export default class Product extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            product:[]
        }
        
    }

    getProducts(id){   
        axios.get("https://jsonplaceholder.typicode.com/posts/"+ id)
        .then (response =>{
            this.setState({
                product: response.data,
            })
            console.log(this.state)
            
        })

        .catch(error => {
            console.log(error)
        })

    }
    

    render(){
        const id=this.props.params.id;
        const getProducts = this.getProducts(id)
        return (
        <div >
            <div >
                {getProducts}
                <img width="60px" src = {this.state.image}></img>
                <h2>{this.state.product.title}</h2>
                <p>{this.state.product.body}</p>
                <h4>Precio: ${this.state.product.id}</h4>
                <p>Stock: {this.props.stock}</p>
                <button>Comprar</button>
            </div>
        </div>
        );
    }
}