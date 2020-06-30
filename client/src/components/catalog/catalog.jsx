import React, { useState }from 'react'
import axios from 'axios'
import Product from './product'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/productActions';




const Catalog = ({products, categories, getData}) =>(

    // constructor(props){
    //     super(props)
    //      this.state={
    //         products: [],
    //         category: [],
    //         actualCategory: ''
    //     }
        
    //     // this.showProducts = this.showProducts.bind(this)
    //     // this.showCategories = this.showCategories.bind(this)
    //     // this.getProducts = this.getProducts.bind(this)
        
        
    // }

    // componentDidMount(){
    //     console.log('entre')
    //     axios.get("http://localhost:3001/products")
    //         .then(response =>{
    //             this.setState({
    //                 products: response.data,
    //                 category: response.data
                    
    //             })
    //             console.log(response);
                
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    // getProducts(e){   
    //     axios.get("http://localhost:3001/products/category/"+ e.target.value)
    //     .then (response =>{
    //         this.setState({
    //             products: response.data,
    //         })
    //         console.log(this.state)
            
    //     })

    //     .catch(error => {
    //         console.log(error)
    //     })

    // }
    
        
          
        
    
    

    // render(){
    //     const showCategories = this.showCategories()
    //     const showProducts = this.showProducts()
    //     return (
            <section >
                <div className='shopSection'><h3>Categorias:</h3>
                {()=>getProducts()}
                {console.log(products)}
                
                <select onClick={()=>console.log('hola')} className='categorySelect' onChange={(e)=>this.getProducts(e)}>
                {categories.map(element => 
                    <option key = {element.id} value = {element.name}>{element.name} </option>
                    )}
                    </select>
                </div>
                {products.map(element => 
                    <Product
                        image = {element.images}
                        name = {element.name}
                        description = {element.description}
                        price = {element.price}
                        stock = {element.id}
                    />
                )}
            </section>
           
    )
    

    const mapStateToProps = state =>({
        products: state.products,
        categories: state.categories
    })
    // const mapDispatchToProps = dispatch => (
        
    // )


    export default connect(mapStateToProps, getProducts)(Catalog)

