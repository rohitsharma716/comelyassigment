import React from 'react';
import CategoryItem from '../components/CategoriesItem';
import Slider from '../components/Slider';

const categories = [
  { href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
  { href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
  { href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
  { href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
  { href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
  { href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },

];



function HomePage() {
  return (
    <>
     <Slider/>
    <div className="category-grid">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.name} />
      ))}
    </div>
      </>
  );
}

export default HomePage;
