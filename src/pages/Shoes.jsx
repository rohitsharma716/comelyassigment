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

const ShoesData = [
    {
      id: 21,
      title: "Nike Air Max 90",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRw-9IY6Yln4IcMNQwEis5OV5udhUnic-iI8LuoWS3ZeM1SJzkIy3z8HGSnncDTvye6LyFFVpycxwptW2nL9QBxt3XbTFM8OlABWlUTyUDKcd8-ggkq6O6XGY4",
      description: "Iconic sneakers with visible Air cushioning and premium comfort",
      rating: 4.8,
      reviews: 2145,
      price: 7999,
    },
    {
      id: 22,
      title: "Adidas Ultraboost 22",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRi_fPhXBE83X9NCdRAXfBQgLoBZSLsqvmeop43siiWB0-X7-RUePsnIxMon3PgHFGXpBn_0wurL1TThzbLpGqb650fkzGVHbVUgpPGfXmLe0C4l-JtC6LIKA",
      description: "High-performance running shoes with Boost midsole technology",
      rating: 4.7,
      reviews: 1832,
      price: 8999,
    },
    {
      id: 23,
      title: "Puma Smash Sneakers",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8FfcDvDCepwWIeopWI_6zERR3Zu6bWOT8vMlRf0loJfk9-nH4jNeDQlcXBCiBXCjh6TUhN7O2KZwjUjbF_3nvZnskLVAP2MC5hUIjM4M",
      description: "Casual sneakers with a timeless tennis-inspired look",
      rating: 4.4,
      reviews: 1120,
      price: 3499,
    },
    {
      id: 24,
      title: "New Balance 574",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTQ2q7xYzdkl2fD6LsluALYV_MOC_oOg8B5-4D0k3G4lqsKMLpoSjWXGKS9bz4GGQ_7slCcIOFtnaoskASouWVy0EzMNtx1ozg24pjcT5w3QSuZjgkIz0_aNBo",
      description: "Classic silhouette with soft cushioning and durable build",
      rating: 4.5,
      reviews: 1376,
      price: 6799,
    },
    {
      id: 25,
      title: "Reebok Zig Kinetica II",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8FfcDvDCepwWIeopWI_6zERR3Zu6bWOT8vMlRf0loJfk9-nH4jNeDQlcXBCiBXCjh6TUhN7O2KZwjUjbF_3nvZnskLVAP2MC5hUIjM4M",
      description: "Futuristic design with responsive Zig Energy technology",
      rating: 4.6,
      reviews: 965,
      price: 7299,
    },
  ];
  

function Shoes({addToCart}) {
    const sizes = [6,7,8,9,10];
  return (
    <div className="shoes-container" style={{ display: "flex", flexWrap: "wrap" }}>
    {ShoesData.map((product) => (
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

export default Shoes