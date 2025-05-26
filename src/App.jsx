import { useState } from 'react'
import './App.css'
import ButtonMultiuso  from './examples/ButtonMultiuso'
import Contador from './examples/Contados'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar />
     <ItemListContainer saludo="¡Hola.  Entrega 001!" />
    </>
  )
}

export default App
