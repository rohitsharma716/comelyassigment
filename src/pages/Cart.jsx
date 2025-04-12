import React from "react";
import toast, { Toaster } from 'react-hot-toast';

const notify = () =>
  toast.error('Product removed from cart', {
    style: {
      border: '1px solid #f44336',
      padding: '8px 16px',
      color: '#b71c1c',
      background: '#ffebee',
      fontWeight: 'bold',
    },
    iconTheme: {
      primary: '#f44336', 
      secondary: '#fff',
    },
  });



function cart({ cart, setCart }) {

  const handleRemove = (id) => {
    const updatedCart = cart.filter(product => product.id !== id);
    setCart(updatedCart);
  };

  const totalPrice = (cart || []).reduce((total, product) => total + Number(product.price), 0);

  return (
    <div className="cart-container">
      <h2 className="cart-heading" style={{ textAlign: "center" , color: "#3C2F27" ,fontWeight:"bold", marginTop:"20px"}}>Cart</h2>
      <div className="cart-products">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <img src={product.img} alt={product.title} className="product-cart-image" />
            <div className="product-details">
              <p className="product-title">{product.title}</p>
              <button 
                className="remove-button" 
                onClick={() =>{ handleRemove(product.id), notify()}}
              >
                Remove
              </button>
            </div>
            <div className="product-price">
              ${Number(product.price).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>Total</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>

      <button className="checkout-button">Checkout</button>
    </div>
  );
}

export default cart;
