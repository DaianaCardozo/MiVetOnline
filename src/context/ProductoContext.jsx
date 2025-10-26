
// ============================
// Contexto: ProductoContext
// Se encarga de traer y compartir la lista de productos
// desde la API a toda la aplicación.
// ============================

import { createContext, useState, useEffect } from "react";

// Creo el contexto de productos para poder usarlo en cualquier componente
export const ProductoContext = createContext();

// Componente proveedor que envuelve a toda la app
export function ProductoProvider({ children }) {
   // Estado que guarda los productos
  const [productos, setProductos] = useState([]);
   // Estado para mostrar si los productos se están cargando
  const [loading, setLoading] = useState(true);
  // Estado para guardar posibles errores al cargar los productos
  const [error, setError] = useState(null);


   // useEffect se ejecuta una sola vez al montar el componente
  useEffect(() => {
        // Llamada a la API para obtener los productos

    fetch("https://fakestoreapi.com/products")
      .then((res) => {
         // Si la respuesta no es correcta, lanzo un error
        if (!res.ok) throw new Error("Error al cargar productos");
        return res.json();
      })
      // Si todo sale bien, guardo los productos en el estado
      .then((data) => setProductos(data))
       // Si hay un error, lo guardo en el estado "error"
      .catch((err) => setError(err.message))
       // Finalmente, sea éxito o error, dejo de mostrar el "loading"
      .finally(() => setLoading(false));
  }, []);
 // Mensaje para comprobar que el contexto se cargó correctamente
  console.log("✅ ProductoContext cargado correctamente");

   // Retorno el proveedor con los valores que podrán usar los demás componentes
  return (
    <ProductoContext.Provider value={{ productos, loading, error }}>
      {children}
    </ProductoContext.Provider>
  );
}

