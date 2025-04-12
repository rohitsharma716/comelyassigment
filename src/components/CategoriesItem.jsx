import { Link } from "react-router-dom";


const CategoryItem = ({ category }) => {
  return (
    <div className="category-card">
      <Link to={"/category" + category.href}>
        <div className="category-inner">
          <div className="category-overlay" />
          <img
            src={category.imageUrl}
            alt={category.name}
            className="category-img"
            loading="lazy"
          />
          <div className="category-content">
            <h3>{category.name}</h3>
            <p>Explore {category.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
