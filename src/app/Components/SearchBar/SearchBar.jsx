import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"; // Importamos el ícono de lupa
import "./SearchBar.css";

function SearchBar({ products, setFilteredProducts }) {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const [loading, setLoading] = useState(false); // Estado de carga para la búsqueda

  // Filtrar los productos según el término de búsqueda
  useEffect(() => {
    const fetchFilteredProducts = async () => {
      if (!searchTerm) {
        setFilteredProducts(products); // Si no hay búsqueda, mostrar todos los productos
        return;
      }

      setLoading(true); // Mostrar el cargando mientras hacemos la búsqueda

      try {
        // Llamada a la API para obtener productos filtrados por título
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${searchTerm}`);
        const data = await response.json();
        setFilteredProducts(data); // Actualizar los productos filtrados
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Terminar el estado de carga
      }
    };

    fetchFilteredProducts(); 
  }, [searchTerm, products, setFilteredProducts]); 

  return (
    <div className="search-bar">
      <input
        className="search-bar-input"
        type="text"
        placeholder="Filter by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FaSearch className="search-icon" /> 
    </div>
  );
}

export default SearchBar;
