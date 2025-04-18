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

const JacketData = [
    {
      id: 41,
      title: "Wildcraft Men's Winter Jacket",
      img: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/superdry/M5011729ARXG/0/A9w2VKV5Dk-410408513001_1.jpg",
      description: "Windproof and waterproof winter jacket for extreme cold",
      rating: 4.6,
      reviews: 998,
      price: 2999,
    },
    {
      id: 42,
      title: "Woodland Puffer Jacket",
      img: "data:image/jpeg;base64,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",
      description: "Padded puffer jacket with insulated thermal layer",
      rating: 4.4,
      reviews: 785,
      price: 3599,
    },
    {
      id: 43,
      title: "Allen Solly Casual Bomber Jacket",
      img: "data:image/jpeg;base64,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",
      description: "Stylish bomber jacket for casual and semi-formal wear",
      rating: 4.2,
      reviews: 652,
      price: 2499,
    },
    {
      id: 44,
      title: "Adidas Performance Sports Jacket",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFgayyu0UqMVhEiRCHWohVQmNWNyAkPiUOA&s",
      description: "Lightweight and breathable track jacket for workouts",
      rating: 4.5,
      reviews: 1190,
      price: 2799,
    },
    {
      id: 45,
      title: "North Face Insulated Jacket",
      img: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/superdry/M5011729A27E/0/vnqyxw5GAp-410408513007_1.jpg?dpr=1",
      description: "Premium insulated jacket with excellent heat retention",
      rating: 4.8,
      reviews: 1321,
      price: 4799,
    },
  ];
  

function Jackets({addToCart}) {
    const sizes = ["S", "M", "L", "XL", "XXL"];
  return (
    <div className="glasses-container" style={{ display: "flex", flexWrap: "wrap" }}>
    {JacketData.map((product) => (
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

  )
}

export default Jackets