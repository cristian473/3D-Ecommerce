import React from 'react';
import { connect } from "react-redux";
import './style.css';
import Product from './product'
import { getProducts } from '../actions/searchActions';

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
          <button type="submit">Buscar</button>
        </form>
        <ul className="wrapper">
          {this.props.products && this.props.products.map((el, i) => (
            <div key={i}>
              <Product 
                name = {el.Title}
                image = {el.Poster}
              />
            </div>
          ))}
        </ul>
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