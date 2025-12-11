// ============================
// Contexto: ProductoContext
// ============================

import { createContext, useState, useEffect } from "react";

export const ProductoContext = createContext();

// 🔹 Exporto la URL para usarla también en AdminProductos
export const API_URL = "https://693126fb11a8738467cd71ac.mockapi.io/mivet/Productos";

export function ProductoProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //  función reutilizable para cargar/recargar productos
  const recargarProductos = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Error al cargar productos");

      const data = await res.json();

      //  Filtrar productos basura / incompletos 
      const filtrados = data.filter((p) => {
        if (!p.id) return false;

        const titulo = (p.title || p.nombre || "").toLowerCase();
        const descripcion = (p.description || p.descripcion || "").toLowerCase();

        const esBasuraMockApi =
          titulo.startsWith("title ") &&
          descripcion.startsWith("description ");

        if (esBasuraMockApi) return false;

        if (!p.title && !p.nombre) return false;
        if (!p.price && !p.precio) return false;
        if (!p.image && !p.imagen) return false;

        return true;
      });

      setProductos(filtrados);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Cargar al inicio
  useEffect(() => {
    recargarProductos();
  }, []);

  return (
    <ProductoContext.Provider
      value={{
        productos,
        loading,
        error,
        recargarProductos, 
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
}
