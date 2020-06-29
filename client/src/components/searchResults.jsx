import React from 'react'
import Product from './product'
import axios from 'axios'

export default class Results extends React.Component{

    constructor (props){
        super (props);
        this.state = {
            results:[]
        }
        
    }

    getProducts(search){   
        axios.get("http://www.omdbapi.com/?apikey=20dac387&s="+ search)
        .then (response =>{
            this.setState({
                results: response.data,
            })
            console.log(this.state)
            
        })

        .catch(error => {
            console.log(error)
        })

    }

    render(){
        const search = this.props.params.search
        const searchResults = this.getProducts(search)
        return (
            
            <div className="result">
                {searchResults}
                {console.log(this.state.results.Search)}
                
                <ul className="wrapper">
                    {this.state.results.Search && this.state.results.Search.map((element, i) => (
                        <div key={i}>
                            {console.log(element.Title)}
                            <Product
                                image = {element.Poster}
                                name = {element.Title}
                                description = {element.description}
                                price = {element.Year}
                                stock = {element.id}
                            />
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}
