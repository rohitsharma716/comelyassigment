import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ size }) {
  const navigate = useNavigate();

  return (
    <div className='navbar'  >
      <h1 onClick={() => navigate('/')}  style={{ backgroundColor: '#C4A484', fontFamily: 'Poppins' , fontWeight: 'bold', marginLeft: '20px', cursor: 'pointer'  }}>Shop.</h1>
      
     
      
      <ul className='icons' style={{ backgroundColor: '#C4A484' }}>
      
        <li onClick={() => navigate('/cart')} className='cart' style={{ cursor: 'pointer' }}>
          <span>
            <img style={{ width: '30px', height: '30px' }} src="https://cdn-icons-png.flaticon.com/128/9219/9219671.png" alt="cart" />
          </span>
          <span>{size}</span>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
