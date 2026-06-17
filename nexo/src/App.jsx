import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from './paginas/inicio'
import Contacto from './paginas/Contacto'
import Registro from './paginas/Registro'

function App() {
  return (
    <div>
      <Router>
        <Routes>
           <Route path ="/inicio" element={<Inicio />} />   
           <Route path ="/Contacto" element={<Contacto />} />
           <Route path ="/Registro" elemnt={<Registro />} />            
        </Routes>
      </Router> 
    </div>
    
  )
}
export default App
  