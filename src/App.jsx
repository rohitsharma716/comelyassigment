
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import { Navigate, Route, Routes } from "react-router-dom";
import Jeans from './pages/jeans'
import Tshirt from './pages/Tshirt'
import Shoes from './pages/Shoes'
import Glasses from './pages/Glasses'
import Jackets from './pages/Jackets'
import Suits from './pages/Suits'
import Cart from './pages/Cart'
import { useState } from 'react'



function App() {

  // const [show , setShow ] = useState(true)
  const [cart, setCart] = useState([]);
   const addToCart = (product) => {
      let isPresent = false;
      cart.forEach((item) => {
        if (item.id === product.id) {
          isPresent = true;
        }
      });
      if(isPresent){
        console.log("Item is already present in cart");
      }
      if (!isPresent) {
        setCart([...cart, product]);
      }
      console.log(cart);
   }

  return (

    <>
   
  <Navbar size={cart.length}/>
      <Routes>
    
        <Route path="/" element={<HomePage />} />
        <Route path="/category/jeans" element={<Jeans  addToCart={addToCart}/>} />
        <Route path="/category/t-shirts" element={<Tshirt addToCart={addToCart} />} />
        <Route path="/category/shoes" element={<Shoes  addToCart={addToCart}/>} />
        <Route path="/category/glasses" element={<Glasses addToCart={addToCart}/>} />
        <Route path='/category/jackets' element={<Jackets addToCart={addToCart}/>} />
        <Route path='/category/suits' element={<Suits addToCart={addToCart}/>} />
        <Route path='/cart' element={<Cart   cart={cart} setCart={setCart}/>} />
      </Routes>
      <Footer/>

       
    </>
  )
}

export default App
