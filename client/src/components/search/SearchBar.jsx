import React from 'react';
import { connect } from "react-redux";
import '../style.css';
import { getProducts } from '../../actions/searchActions';
import {Link} from 'wouter'

export class SearchBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  
  handleSubmit(event) {
    // event.preventDefault();
    // this.props.getProducts()
    console.log('this.props')
  }

  render(){   
    return(
          <div>
            <form onSubmit={()=>{console.log('hola')}}>
              <div className="inline">
                <input type="text" id="title" autoComplete="off" placeholder="Buscar producto"
                />
              </div>
              <button onClick={()=>this.handleSubmit()}>Buscar</button>
            </form>

          </div>
    )
  }

 
 }

 const mapStateToProps= state =>{
  return {
    products: state.products
  };
}

  

