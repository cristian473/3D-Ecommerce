import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../style.css'
import {deleteCategory} from '../../actions/crudCategoryActions'

const CategoryTable = props => {

  const dispatch = useDispatch();
  const categories = useSelector(store => store.categories);

  return(
      <table className="tableCategory">
        <thead>
          <tr>
            <th>Categorias</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((category,index) => (
              <tr key={index}>
                <td>{category.name}</td>
                <td>
                  {/* <button onClick={() => {
                      // () => dispatch((category.id))
                    }}
                  >
                    Editar
                  </button> */}
                  <button
                    onClick={() => dispatch(deleteCategory(category.categoryId))}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No hay categorías</td>
            </tr>
          )}
        </tbody>
      </table>
    )
}


export default CategoryTable
