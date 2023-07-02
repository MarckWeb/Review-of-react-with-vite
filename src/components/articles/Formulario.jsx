import './formulario.css'
import React, { useContext, useState } from 'react'
import AppContext, {usersArray} from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import EditUser from '../EditarUser/EditUser';


const Formulario = () => {
  //se debe obtiene como objeto
  const {user, setUser} = useContext(AppContext)
  
  const navigate = useNavigate()

  const [values, setValues] = useState({
    username: '',
   
    email: '',
    password: '',
  });


  //evento del formualrio 
  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   console.log('formulario enviado')
  //   // Aquí puedes usar values para enviar la información
  //   console.log(values)
  //   setValues({
      
  //     email: '',
  //     password: '',
  //     username: '',
  //   })

  // }

  //evento par avalores de input
  const handleChange = (e) => {
    //donde se ejecuara muchos letra del evento
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const finUser = (e) => {
    e.preventDefault()
    console.log(values)
    let filterUser = usersArray.filter(user => user.username === values.username && user.password === values.password)
    console.log(filterUser)

    if(filterUser.length > 0){
      setUser(filterUser[0])
      alert('Bienvenido...')
      navigate('/servicios')
    }else{
      alert('usuario o contraseña incorrecta')
    }
  }



  return (
    <>
      <div className='formulario'>
        <form className='form' action="" onSubmit={finUser}>
          <div>
            <label htmlFor="username">Nombre</label>
            <input
              id='username'
              name='username'
              type="text"
              value={values.name}
              onChange={handleChange}
            />
          </div>


          <div>
            <label htmlFor="email">Email</label>
            <input
              id='email'
              name='email'
              type="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id='password'
              name='password'
              type="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <button type='submit'>Sing Up</button>
        </form>
      
      </div>
      <EditUser />
    </>
  )
}

export default Formulario