import React from 'react';
import toast, { Toaster } from 'react-hot-toast';


const notify = () =>
  toast.success('Item added to cart!', {
    style: {
      border: '1px solid #4CAF50',
      padding: '8px 16px',
      color: '#155724',
    },
    iconTheme: {
      primary: '#4CAF50',
      secondary: '#FFFFFF',
    },
  });


const JeansData = [
  {
    id: 31,
    title: "Levi's Slim Fit Jeans",
    img: "https://levi.in/cdn/shop/files/A70870101_01_Front_2af1055e-a416-4173-a692-3e6341850a0d_360x.jpg?v=1740488429",
    description: "Classic blue denim with modern slim fit design",
    rating: 4.5,
    reviews: 1234,
    price: 2299,
  },
  {
    id: 32,
    title: "Spykar Mid-Rise Jeans",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTYCy9_85iY0SOxU-Ffjpfst6qnsb7gL8kro3kpAueg1mYifIpgHKMU0VuQug-rM7gINhOoxl__84WyJ1fVJ4s4ku4xb55bEbaN_5QVSVg",
    description: "Stylish mid-rise jeans with faded wash finish",
    rating: 4.2,
    reviews: 847,
    price: 1899,
  },
  {
    id: 33,
    title: "Roadster Slim Fit  Jeans",
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/d/b/c/42-fmjen2426-flying-machine-original-imagyhg9ryvacaqc.jpeg?q=70&crop=false",
    description: "Trendy black jeans perfect for casual outings",
    rating: 4.0,
    reviews: 658,
    price: 1599,
  },
  {
    id: 34,
    title: "Pepe Jeans  Fit",
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTCECv8vqqSV0kDFdIjVdKeUTwnodTVDSBUSC5VHR8va6xd2wzzS89tFOdFoa1ewXpjmJi1HTB6lyBS9hQmYBqyV6adoWw3sKH4lIdHcZzJ0SWd_86oAkMm",
    description: "Stretchable comfort with premium cotton fabric",
    rating: 4.3,
    reviews: 1010,
    price: 2199,
  },
  {
    id: 35,
    title: "Wrangler Tapered Fit Jeans",
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJs4q8j5kmifWQ9marJbttVgLdup2atrXc6CRnYPbJN57XwMUnfoMEX-a4_id5SMnu4vru6DVRltCUKMlj47Kpi6YMA4iKA1qoToptjGgA98xxWqVGpKm-",
    description: "Durable tapered jeans with unique rugged look",
    rating: 4.1,
    reviews: 539,
    price: 1999,
  },
];

function Jeans({addToCart}) {
  const sizes = [28, 30, 32, 34, 36];

  return (
    <div className="jeans-container" style={{ display: "flex", flexWrap: "wrap" }}>
      {JeansData.map((product) => (
        <div key={product.id} className="product-card">
          <h2 className="product-title">{product.title}</h2>
          <img src={product.img} alt={product.title} className="product-image" />

          <div className="product-rating">
            <span className="stars">⭐ {product.rating}</span>
            <span className="reviews"> ({product.reviews} reviews)</span>
            <span className="price">₹{product.price.toFixed(2)}</span>
          </div>

          <div className="product-size">
            <p style={{ fontWeight: "bold" }}>Size</p>
            <div className="size-buttons">
              {sizes.map((size, index) => (
                <button key={index} className="size-button">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="add-to-cart" onClick={() => {
  addToCart(product);
  notify();
}}>
  Add to Cart
</button>

          <div className="product-description">
            <p style={{ fontStyle: "italic", fontFamily: "serif" ,fontWeight:"bold" }}>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Jeans;
