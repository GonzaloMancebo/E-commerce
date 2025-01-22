"use client";
import { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import ProductList from "../Components/ProductList/ProductList"; // Importar el componente de productos
import FilterList from "../Components/Filter/FilterList"; // Filtro de categorías
import SearchBar from "../Components/SearchBar/SearchBar"; // Barra de búsqueda
import "./products.css";


function Products() {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de productos
  const [selectedCategory, setSelectedCategory] = useState("All"); // Establecer la categoría predeterminada como "All"
  const [filteredProducts, setFilteredProducts] = useState([]); // Estado para productos filtrados

  // Foto predeterminada si no hay imagen válida
  const defaultImage = "/comming-soon.jpg"; // Puedes cambiar esta URL por una imagen predeterminada

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await response.json();
        // Si el producto no tiene una imagen válida, asignamos una imagen predeterminada
        const updatedProducts = data.map((product) => {
          const validImage =
            product.images &&
            product.images.length > 0 &&
            !product.images.some((image) => image.includes('"'));
          return {
            ...product,
            images: validImage ? product.images : [defaultImage], // Asignar imagen predeterminada si no es válida
          };
        });
        setProducts(updatedProducts); // Guardar todos los productos en el estado
        setFilteredProducts(updatedProducts); // Establecer los productos filtrados inicialmente
        setLoading(false); // Dejar de mostrar el "loading" cuando se obtengan los productos
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts(); // Llamar la función para obtener los productos
  }, []); // El arreglo vacío asegura que la llamada solo se haga una vez al cargar el componente

  // Filtrar productos por categoría seleccionada
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products); // Mostrar todos los productos si la categoría es "All"
    } else {
      const filtered = products.filter(
        (product) =>
          product.category &&
          product.category.name === selectedCategory // Comparar con la categoría seleccionada
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]); // Ejecutar cuando cambie la categoría o los productos

  return (
    <div>
      <Header />
      
      {/* Conectar SearchBar para filtrar productos */}
      <SearchBar 
        products={products} 
        setFilteredProducts={setFilteredProducts} 
      />

      {/* Filtro de categorías */}
      <FilterList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory} // Pasamos la función para actualizar la categoría seleccionada
      />

      {/* Mostrar productos filtrados */}
      <ProductList products={filteredProducts} loading={loading} />
    </div>
  );
}

export default Products;
