import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../style.css'
import {getAllUsers, promoteUsers, deleteUsers} from '../../actions/crudUserActions'
import { GET_ALL_USERS } from '../../constants/crudUserConstants'


const UsersTable = props => {

  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  useEffect (()=>{dispatch(getAllUsers())},[])

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const handlerPromoteUser= (user, index) =>{
    
    dispatch(promoteUsers(user, index));

    dispatch(getAllUsers())
  }

  const handlerDeleteUser = event =>{
    var id = event.target.value
    dispatch(deleteUsers(id))

    dispatch(getAllUsers())

  }

  return(
      <table className="tableCategory">
        <thead>
          <tr>
            <th>Username</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Categoria</th>
            <th>Acciones</th>

          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user,index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.username}</td>
                <td>{user.type}</td>

                <td>
                  <button 
                    onClick={() =>handlerPromoteUser(users[index], index)}
                  >
                    Promover
                  </button>

                  <button value={user.userId}
                    onClick={handlerDeleteUser}
                    >
                      Eliminar
                    </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No hay usuarios</td>
            </tr>
          )}
        </tbody>
      </table>
    )
}


export default UsersTable
