import React, { useState } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { items } from './Data'


function Navbar({cart,setdata}) {

  const location =useLocation();
const navigate =useNavigate();
const [search,setsearch]=useState('')
  const filterByCategory = (category)=>{

    const element =items.filter((product)=>product.category ===category)
    setdata(element)

    
  }

  const filterPrice= (price)=>{
     
    const Prices= items.filter((product)=>product.price >=price)
    setdata(Prices);
  }

  const handlesubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${search}`)
  }
   
  return (
    <header className='sticky-top'>

        <div className='nav-bar'>
            

            <Link to={'/'} className='brand'> E-cart</Link>
            <form
            
            onSubmit={handlesubmit }
            className='search-bar'>
                <input
                value={search}
                onChange={(e)=>setsearch(e.target.value)}
                
                type="text" placeholder='search products'></input>
            </form>
            <Link to={'/cart'}className='cart'><button type="button" className="btn btn-primary position-relative">
  Cart
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button></Link>
        </div>

    {
      location.pathname=='/'&&(<div className='nav-bar-wrapper'>
   
        <div classNameName="items">Filterby{"->"}</div>
        <div onClick={()=>setdata(items)}className="items">No-Filter</div>
        <div onClick ={()=>filterByCategory('mobiles')}className="items">Mobile</div>
        <div onClick ={()=>filterByCategory('laptops')}className="items">Laptops</div>
        <div onClick ={()=>filterByCategory('tablets')}className="items">Tablets</div>
        <div onClick={()=>filterPrice(29999)} className="items">{">="}29999</div>
        <div onClick={()=>filterPrice(49999)}className="items">{">="}49999</div>
        <div onClick={()=>filterPrice(69999)}className="items">{">="}69999</div>
        <div onClick={()=>filterPrice(89999)}className="items">{">="}89999</div>
        </div>)
    }

    

    </header>
  )
}

export default Navbar