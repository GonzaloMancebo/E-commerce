"use client";
import { useState, useEffect, useCallback } from "react";
import Header from "../Components/Header/Header";
import ProductList from "../Components/ProductList/ProductList"; // Importar el componente de productos
import "./products.css";
import FilterList from "../Components/Filter/FilterList"; // Filtro de categorías

function Products() {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [categories, setCategories] = useState([]); // Estado para almacenar las categorías
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de productos
  const [loadingCategories, setLoadingCategories] = useState(true); // Estado para manejar la carga de categorías
  const [selectedCategory, setSelectedCategory] = useState("All"); // Estado para manejar la categoría seleccionada

  // Función para validar si una URL de imagen es válida
  const isValidImageUrl = (url) => {
    return url && url.startsWith("http") && url.includes("placeimg.com");
  };

  // Función para crear la categoría "All" solo si no existe
  const createAllCategory = useCallback(async () => {
    try {
      // Verificar si la categoría "All" ya existe
      const existingCategory = categories.find((category) => category.name === "All");
      if (existingCategory) {
        return; // Si ya existe, no hacer nada
      }

      const response = await fetch("https://api.escuelajs.co/api/v1/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "All",
          image: "https://placeimg.com/640/480/any",
        }),
      });

      if (!response.ok) {
        throw new Error("Error creating category");
      }

      const newCategory = await response.json();
      console.log("New 'All' category:", newCategory);

      // Agregar la nueva categoría "All" a las categorías existentes
      setCategories((prevCategories) => [...prevCategories, newCategory]);
    } catch (error) {
      console.error("Error creating category 'All':", error);
    }
  }, [categories]); // Dependemos de 'categories' para actualizarla solo cuando cambie

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/categories");
        const data = await response.json();
        setCategories(data); // Guardar todas las categorías en el estado
        setLoadingCategories(false);

        // Crear la categoría "All" si no existe
        createAllCategory();
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoadingCategories(false);
      }
    };

    fetchCategories(); // Llamar la función para obtener las categorías
  }, [createAllCategory]); // Ahora 'createAllCategory' está en las dependencias, pero no cambiará entre renders

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await response.json();
        setProducts(data); // Guardar todos los productos en el estado
        setLoading(false); // Dejar de mostrar el "loading" cuando se obtengan los productos
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts(); // Llamar la función para obtener los productos
  }, []); // El arreglo vacío asegura que la llamada solo se haga una vez al cargar el componente

  // Filtrar productos cuando se cambia la categoría seleccionada
  const filteredProducts = products.filter((product) => {
    if (!product.category || !product.category.name) return false;

    // Validar que al menos una de las imágenes del producto sea válida
    const hasValidImage = product.images && product.images.some(image => isValidImageUrl(image));

    if (!hasValidImage) return false; // Si no tiene imagen válida, no lo mostramos

    // Si se selecciona "All", mostrar todos los productos
    if (selectedCategory === "All") return true;

    return product.category.name === selectedCategory; // Filtrar productos por la categoría seleccionada
  });

  return (
    <div>
      <Header />
      <h1>Products</h1>

      {/* Filtro de categorías */}
      {!loadingCategories && (
        <FilterList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory} // Pasamos la función para actualizar la categoría seleccionada
          categories={categories} // Pasamos las categorías obtenidas
        />
      )}

      {/* Mostrar productos filtrados */}
      <ProductList products={filteredProducts} loading={loading} />
    </div>
  );
}

export default Products;
