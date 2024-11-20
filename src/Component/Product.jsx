import React from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Product = ({ items, cart, setcart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = { id, price, title, description, imgSrc };
    setcart([...cart, obj]);
    toast.success('Item added', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
    });
  };

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
        transition={Bounce}
      />
      <div className="Container-center text-center my-5 p-5">
        <div className="row">
          {items.map((products) => (
            <div key={products.id} className="col-lg-4 my-3 col-md-6 text-center">
              <div className="card" style={{ width: '18rem' }}>
                <Link
                  to={`/product/${products.id}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img src={products.imgSrc} className="card-img-top" alt={products.title} />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{products.title}</h5>
                  <p className="card-text">{products.description}</p>
                  <button className="btn btn-primary mx-3">{products.price}₹</button>
                  <button
                    onClick={() =>
                      addToCart(products.id, products.price, products.title, products.description, products.imgSrc)
                    }
                    className="btn btn-warning"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
