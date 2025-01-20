import React from "react";
import Image from "next/image"; // Importar el componente Image de Next.js

// Función para limpiar y validar las URLs de las imágenes
const cleanAndValidateImageUrl = (url) => {
  if (url && !url.includes('\"')) {
    return url;
  }
  return "/coming-soon.jpg"; // Ruta a una imagen predeterminada
};

function ProductCard({ product }) {
  return (
    <div className="product" key={product.id}>
      <Image
        src={cleanAndValidateImageUrl(product.images[0])} // Limpiar y validar la URL
        alt={product.title}
        width={200} // Establecer un ancho fijo
        height={200} // Establecer un alto fijo
      />
      <h3>{product.title}</h3>
      <h4>{product.category.name}</h4>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
