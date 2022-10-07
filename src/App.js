import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Header } from './components/Header/Header';
import  NavBar2  from './components/NavBar/NavBar2';
import Tienda from './components/Tienda';
import Contacto from './components/Contacto';


function App() {
  const bienvenidas = {
    nombre: 'ku-donuts'
  }
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Header nombre={bienvenidas.nombre} />} />
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categorias/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/tienda' element={<Tienda />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <NavBar2></NavBar2>
    </BrowserRouter>
  );
}

export default App;