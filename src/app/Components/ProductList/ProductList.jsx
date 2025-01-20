import React from "react";
import ProductCard from "../ProductCard/ProductCard"; // Importamos el componente de producto

function ProductList({ products, loading }) {
  return (
    <div className="products-container">
      {loading ? (
        <p className="loading-message">Loading products...</p>
      ) : (
        products.map((product) => <ProductCard key={product.id} product={product} />)
      )}
    </div>
  );
}

export default ProductList;
