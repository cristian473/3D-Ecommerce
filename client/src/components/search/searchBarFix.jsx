import React from 'react';
import { useDispatch } from "react-redux";
import '../style.css';
import { getSearch } from '../../actions/searchActions';
import {Link} from 'wouter'



const SearchBar = () => {
  const dispatch = useDispatch();
  
  
  const handlerChange = (e) =>{
    dispatch(getSearch(e))
  }


   
        return(
              <div>
                <form>
                  <div className="inline">
                    <input type="text" onChange={(e)=>handlerChange(e.target.value)} id="title" autoComplete="off" placeholder="Buscar producto"/>
                  </div>
                  <Link to={'/products/search'}><button>Buscar</button></Link>
                </form>
    
              </div>
        )
      }

  

export default SearchBar;

