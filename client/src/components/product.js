import React from 'react'

export default class Product extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            name: this.props.name,
            decription: this.props.decription,
            category: this.props.category,
            price: this.props.price,
            stock: this.props.stock,
            image: this.props.image
        }
    }

    render(){
        return (
        <div>
            <img src = {this.state.image}></img>
            <h2>{this.state.name}</h2>
            <p>{this.state.description}</p>
            <h4>{this.state.price}</h4>
            <p>{this.state.stock}</p>
            <button>Comprar</button>
        </div>
        );
    }
}