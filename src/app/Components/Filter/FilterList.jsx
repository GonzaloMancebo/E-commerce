"use client";
import React, { useEffect, useState } from "react";
import "./FilterList.css";

const FilterList = ({ selectedCategory, setSelectedCategory }) => {
  const [loadingCategories, setLoadingCategories] = useState(true); // Estado para manejar la carga de categorías
  const [categories, setCategories] = useState([]); // Estado para almacenar las categorías filtradas

  // Lista de categorías que quieres mostrar
  const includedCategories = [
    "Clothes",
    "Furniture",
    "Electronics",
    "Shoes",
    "Miscellaneous",
  ];

  // Función para validar si la URL de la imagen es válida
  const isValidImageUrl = (url) => {
    return url && url.startsWith("http") && url.includes("placeimg.com");
  };

  // Fetch categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/categories");
        const data = await response.json();

        // Cambiar el nombre de la categoría "change" a "Clothes" si se encuentra
        const updatedCategories = data.map((category) =>
          category.name === "change" ? { ...category, name: "Clothes" } : category
        );

        // Filtrar categorías para mostrar solo las deseadas
        const filteredCategories = updatedCategories.filter((category) =>
          includedCategories.includes(category.name)
        );

        // Agregar la categoría "All" al principio
        const finalCategories = [{ name: "All" }, ...filteredCategories];

        setCategories(finalCategories); // Guardar las categorías filtradas en el estado
        setLoadingCategories(false); // Dejar de mostrar el "loading" cuando se obtengan las categorías
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoadingCategories(false);
      }
    };

    fetchCategories(); // Llamar la función para obtener las categorías
  }, []); // El arreglo vacío asegura que la llamada solo se haga una vez al cargar el componente

 

  return (
    <div className="filter-list">
      {loadingCategories ? (  // Si está cargando las categorías, mostrar el mensaje
        <div className="loading-message">Loading categories...</div>
      ) : (
        <div className="category-container">
          <ul className="category-list">
            {categories.map((category) => (
              <li
                key={category.name}
                className={`category-item ${selectedCategory === category.name ? "selected" : ""}`}
                onClick={() => setSelectedCategory(category.name)} // Cambiar la categoría seleccionada
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default FilterList;
