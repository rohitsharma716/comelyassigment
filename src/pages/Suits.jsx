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
const SuitData = [
    {
      id: 11,
      title: "Raymond Classic Fit Suit",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRj6Q9oDsO2yZWZKrkYrm8iu3wApLjLVkahRK-HXMHH6JTrJn0w3_5PA_oeBUV5t7O9Qhqe94jet0Vu0E6ROY8Qq7mgN-jYomXQVLCys8-KQp2wOt9gWxbu",
      description: "Classic two-piece suit with premium wool blend fabric",
      rating: 4.7,
      reviews: 860,
      price: 6999,
    },
    {
      id: 12,
      title: "Van Heusen Slim Fit Suit",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSu8kB8RU8NlnZKIqZb5MsHpaMY8u9pCHcT6PC1vYHt6k7B4nr8zj79LJOIQT0gNxjDTL0r4c7mzO2m6quVnN4XuSWXNyec1B-LsbXpzsRXLRVDerUGoqJZ",
      description: "Elegant slim-fit suit designed for modern professionals",
      rating: 4.5,
      reviews: 645,
      price: 7499,
    },
    {
      id: 13,
      title: "Blackberrys Men’s Formal Suit",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQwjBfxDo76OnuS78nR5jYzoqxzMdS89b0fsLk-LEbVsyBtGxD0rj5EOnkDUWKTVmxcKAmLpiLypwlX9kszZnXAHUD2GwaV1EwoqxWn-7u-",
      description: "Stylish formal suit with sharp cuts and breathable lining",
      rating: 4.4,
      reviews: 522,
      price: 6499,
    },
    {
      id: 14,
      title: "Peter England Tuxedo Suit",
      img: "https://delightonlinestore.in/wp-content/uploads/2024/06/51Jv2RGHNL._UY741_.jpg",
      description: "Perfect tuxedo for formal events and parties",
      rating: 4.6,
      reviews: 720,
      price: 7999,
    },
    {
      id: 15,
      title: "Louis Philippe 3-Piece Suit",
      img: "https://delightonlinestore.in/wp-content/uploads/2024/06/51Jv2RGHNL._UY741_.jpg",
      description: "Luxurious 3-piece suit with waistcoat and premium finish",
      rating: 4.8,
      reviews: 1054,
      price: 8999,
    },
  ];
  

function Suits({addToCart}) {
    const sizes = ["S", "M", "L", "XL", "XXL"];

  
    return (
      <div className="suit-container" style={{ display: "flex", flexWrap: "wrap" }}>
        {SuitData.map((product) => (
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

export default Suits