import React from 'react';
import { connect } from "react-redux";
import './style.css';
import Product from './product'
import { getProducts } from '../actions/searchActions';
import {Link} from 'wouter'


export class SearchBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.getProducts(this.state.title)
    console.log(this.props)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="inline">
            <input type="text" id="title" autoComplete="off" value={title} placeholder="Buscar producto"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <Link to={'/search='+title}><button>Buscar</button></Link>
        </form>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productsLoaded
  };
}

export default connect(mapStateToProps,{getProducts})(SearchBar);