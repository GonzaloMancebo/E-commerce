import React from "react";

function CategoryList({ categories, loading }) {
  return (
    <div className="category-container">
      {loading ? (
        <p className="loading-message">Loading categories...</p>
      ) : (
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category.id} className="category-item">
              {category.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryList;
