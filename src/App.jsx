import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppContext from './context/AppContext'

import Formulario from './components/articles/Formulario'
import Header from './pages/header/Header'
import Footer from './pages/footer/Footer'
import Servicios from './pages/servicios/Servicios'
import Blog from './pages/Blog/Blog'

function App() {
  const [user, setUser] = useState('')
  
  return (
    // debemos colocar dentro del appContext todo.. y con el value nos permitira acceder a esos valores
    //si el valor de  provider cambia, cambiaran tambien en los hijos
    <AppContext.Provider value = {{user, setUser}}>
      <BrowserRouter>
      <div className='container'>
       <Header />
        <Routes>
          <Route path='/' element={<Formulario />}/>
          <Route path='/servicios' element = {<Servicios />}/>
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </AppContext.Provider>
    

  )
}

export default App
