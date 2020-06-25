import React, { useState } from 'react';
import './style.css';

export default function SearchBar({onSearch}) {
	const [product, setProduct] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(product);
    }}>
      <input
      	className="SearchBar"
        type="text"
        placeholder="Buscar producto..."
      	value={product}
        onChange={e => setProduct(e.target.value)}
      />
      <input className="button" type="submit" value="Buscar" />
    </form>
  );
}