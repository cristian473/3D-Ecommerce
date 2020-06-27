import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';

export default function AddCategory({onSearch}) {
  const [newCategory, setNewCategory] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(newCategory);
    }}>
      <input
      	className="AddCategory"
        type="text"
        placeholder="Agregar categoria..."
      	value={newCategory}
        onChange={e => setNewCategory(e.target.value)}
      />
      <input className="button" type="submit" value="Agregar" />
    </form>
  );
}