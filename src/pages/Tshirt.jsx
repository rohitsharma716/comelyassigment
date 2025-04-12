import React from 'react'
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


const TshirtData = [
    {
      id: 1,
      title: "Nike Sportswear T-Shirt",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRFTkSbbTgdqZaYXfR2lHj1UCBuk63FArrS2BkfLELVFfrEy1e00d1T-npoVrgPZEzkrc4tT561I8iz8aWWrZi5GpYMiShWsLGqCiIDFBU",
      description: "Comfortable cotton T-shirt for active wear",
      rating: 4.7,
      reviews: 2034,
      price: 999,
    },
    {
      id: 2,
      title: "Adidas Originals T-Shirt",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXl1XHPs--3d3k3zkQPww1MLvW_fa38Up57gFst3yOGtGei4JrI4KS2UI8XEgIe7jG5XQI1ZkCxg57XjtXF09Uwc9IXBFbm-IW_XKEEgp-",
      description: "Classic Adidas logo on soft cotton fabric",
      rating: 4.5,
      reviews: 1421,
      price: 1299,
    },
    {
      id: 3,
      title: "Puma Essentials T-Shirt",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQkMmKfUMPbXwbGEdD93nkmo0i1XhUr0wtEQ-OrJKgribInJv8b66tgagtiClu_qR3n_z6OLz_rWrshRbf64duuY_itOPQc7m-tL6Y1bZKUn6YVF1owFA74iQ",
      description: "Puma branding with regular fit for comfort",
      rating: 4.3,
      reviews: 1018,
      price: 899,
    },
    {
      id: 4,
      title: "U.S. Polo Assn. T-Shirt",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRFf_MKVZsOpipfzf-1wLz4TgRrZvYS9O1yCqrKh0BynMOINziVRo7pGzzhSIPzvLRKq0P6o_-tbRlOmDSs8NvHeQ2TdYVJcWQAiEUt8cij7BAnCYyj1NU9mw",
      description: "Premium quality with simple polo logo design",
      rating: 4.6,
      reviews: 1325,
      price: 1199,
    },
    {
      id: 5,
      title: "Tommy Hilfiger Classic T-Shirt",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHoBwnNeFhFMTtn5iPr8v2m9muzF4bkNx4Hk8hRg3tt4I2I7aeri8opickGZyUw01e4k--mGiQY2olDz6cYcvazLdemHdB1PrdiTPEZI-L",
      description: "Timeless design with classic Tommy Hilfiger logo",
      rating: 4.8,
      reviews: 1752,
      price: 1799,
    },
  ];
  

  
function Tshirt({addToCart}) {

    
    const sizes = ["S", "M", "L", "XL", "XXL"];

   

  
    return (
      <div className="tshirt-container" style={{ display: "flex", flexWrap: "wrap" }}>
        {TshirtData.map((product) => (
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
  
  export default Tshirt;
  