import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Product from './Component/Product'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ProductDetails } from './Component/ProductDetails'
import { Searchitem } from './Component/Searchitem'
import { Cart } from './Component/Cart'
import { items } from './Component/Data'

const App = () => {

  const[data,setdata] =useState([...items])
  const [cart,setcart]=useState([])
  return (
    <>
     
    <Router>

    <Navbar cart={cart}setdata={setdata}/>


      <Routes>
        <Route path="/" element={<Product cart={cart} setcart={setcart}items={data}/>} />

        <Route path="/product/:id" element={<ProductDetails cart={cart} setcart={setcart} />} />
        <Route path="/search/:item" element={<Searchitem cart={cart} setcart={setcart} />} />
        <Route path="/cart" element={<Cart cart={cart} setcart={setcart} />} />
      </Routes>
      
    </Router>
    
    </>

  )
   
}

export default App