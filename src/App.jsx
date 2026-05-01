import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import NavBar from './components/NavBar'
import AuthProvider from './context/AuthContext'
import Footer from './components/Footer'
import ProductDetails from './pages/ProductDetails'
import CartProvider from './context/CartContext'

function App() {

  return (
  <AuthProvider><CartProvider><div className="app">
    <NavBar/>
    <Routes>
      <Route path= "/" element={<Home />}/>
      <Route path= "/auth" element={<Auth/>}/>
      <Route path= "/checkout" element={<Checkout/>}/>
       <Route path= "/product/:id" element={<ProductDetails/>}/>
    </Routes>
    <Footer /> 
  </div></CartProvider></AuthProvider>
  )
}

export default App
