import React from 'react';
import { Link } from 'react-router-dom';

export const Cart = ({ cart, setcart }) => {
  return (
    <>
      <div className="container my-5 text-center" style={{ width: '38%' }}>
        {cart.length === 0 ? (
          <>
            <div>
              <h1>Your cart is empty</h1>
              <Link to="/" className="btn btn-warning">
                Continue shopping...
              </Link>
            </div>
          </>
        ) : (
          cart.map((products) => (
            <div className="card mb-3 my-5" style={{ width: '700px' }} key={products.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={products.imgSrc} className="img-fluid rounded-start" alt={products.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-center my-5">
                    <h5 className="card-title">{products.title}</h5>
                    <p className="card-text">{products.description}</p>
                    <button className="btn btn-primary mx-3">{products.price}₹</button>
                    <button className="btn btn-warning">BUY NOW</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {
        cart.length!==0 &&(  <div className='container text-center my-5 'style={{
          display:'flex',
          justifyContent: 'center',
          alignItems:'center'
        }}>
  
          <button className='btn btn-warning mx-5'>CheackOut</button>
          <button onClick={()=>setcart("")}className='btn btn-danger'>Clear Cart</button>
        </div>)
      }
    
    </>
  );
};
