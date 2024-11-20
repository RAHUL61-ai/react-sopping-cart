import React from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import { useState,useEffect } from 'react'
import Product from './Product'
import { Bounce } from 'react-toastify';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductDetails = ({cart,setcart}) => {




  const {id} =useParams()


  const[ products,setproducts]=useState({});
  const[relatedproducts,setrelatedproducts]=useState([])

   useEffect(()=>{ 

    const filterproduct = items.filter((products)=>products.id==id

  
    )
 
    setproducts(filterproduct[0])

    const relatedproducts= items.filter((suman)=>suman.category ===products.category)

    setrelatedproducts(relatedproducts)

   },[id,products.category])

   const  addToCart =(id,price,title,description,imgSrc)=>{

    const obj={
  
      id,price,title,description,imgSrc
    }
    setcart([...cart,obj]);
    console.log("cart element=",cart)
  
    toast.success('Item added', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }

  return (
    <>

    
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition:Bounce
/>

    <div className='container con'>

      <div className='img'>

      <img src={products.imgSrc}/>
        
      </div>

      <div className='text-center'>
        

        <h1 className="card-title">{products.title}</h1>
    <p className="card-text">{products.description}</p>
    <button className='btn btn-primary mx-3'>{products.price}₹</button>
    <button onClick={()=>addToCart(products.id,products.price,products.title,products.description,products.imgSrc)} className='btn btn-warning'>add to cart</button>
    </div>
        
      </div>
    

    <h1 className='text-center'>Related Products</h1>
    <Product cart={cart} setcart={setcart}items={relatedproducts}/>
    </>
  )
}