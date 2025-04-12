import React, { useEffect, useState } from 'react';
// import './Slideshow.css'; // move the CSS styles into this file

const images = [
  { src: 'https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'upto 50% off on clothes' },
  { src: 'https://images.unsplash.com/photo-1607083206325-caf1edba7a0f?q=80&w=1477&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Black Friday sale' },
  { src: 'https://images.unsplash.com/photo-1563357732-31978202a214?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: '80% off on shoes' },
  { src:'https://images.unsplash.com/photo-1571597438372-540dd352bf41?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'take an extra 30% off' },
];

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); // clean up on unmount
  }, []);

  return (
    <div className="slideshow-container" style={{ maxWidth: '100%', overflow: 'hidden' , marginTop:'20px'}}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === slideIndex ? 'active-slide' : ''}`}
          style={{ display: index === slideIndex ? 'block' : 'none' }}
        >
          {/* <div className="numbertext">{index + 1} / {images.length}</div> */}
          <img src={img.src} alt={img.caption} style={{ width: '100%' ,height:'300px' }} />
          {/* <div className="text">{img.caption}</div> */}
        </div>
      ))}

      <div style={{ textAlign: 'center' }}>
        {images.map((_, idx) => (
          <span key={idx} className={`dot ${idx === slideIndex ? 'active' : ''}`}></span>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
