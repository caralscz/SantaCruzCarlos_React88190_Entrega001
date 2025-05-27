import { useState } from 'react'
import './App.css'

{  /* The following line can be included in your src/index.js or App.js file */ }
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar />
     <ItemListContainer saludo1="Bienvenido" 
                        saludo2="Pre-entrega 001 de santa Cruz Carlos - Coder ReactJS" 
                        saludo3="Tema: Crea tu landing - base de un e-comerce"            
            />
    </>
  )
}

export default App
