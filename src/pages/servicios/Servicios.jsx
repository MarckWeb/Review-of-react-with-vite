import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { Link } from 'react-router-dom'


const Servicios = () => {
  

  const {user} = useContext(AppContext)
  console.log(user)

  return (
    <div>

      <h2>User Data</h2>
      <h4>{user.name}</h4>
      <h5>{user.lastname}</h5>
      <p>{user.birth}</p>

      <Link to='/'>Actualizar Datos</Link>
      <h1>TODOS LOS SERVICIOS</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dolores nostrum maiores alias odio et aliquid ullam qui molestias commodi, deserunt, earum aperiam nobis excepturi laboriosam neque saepe quas debitis?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dolores nostrum maiores alias odio et aliquid ullam qui molestias commodi, deserunt, earum aperiam nobis excepturi laboriosam neque saepe quas debitis?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dolores nostrum maiores alias odio et aliquid ullam qui molestias commodi, deserunt, earum aperiam nobis excepturi laboriosam neque saepe quas debitis?</p>

      
    </div>
  )
}

export default Servicios