// ============================
// Contexto: CarritoContext
// Maneja el estado global del carrito de compras.
// ============================


import { createContext, useState } from "react";

// Cree el contexto del carrito para poder usarlo en toda la app
export const CarritoContext = createContext();

// Componente proveedor que envuelve a toda la aplicación
export function CarritoProvider({ children }) {
   // Estado donde se guardan los productos del carrito
  const [carrito, setCarrito] = useState([]);

  // Agrega un producto nuevo al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };
// Elimina un producto según su posición (índice)
  const eliminarDelCarrito = (indice) => {
    setCarrito((prevCarrito) => prevCarrito.filter((_, i) => i !== indice));
  };

    // Vacía todo el carrito
  const vaciarCarrito = () => setCarrito([]);

  // Calcula el total sumando los precios de todos los productos
  const total = carrito.reduce((acc, producto) => acc + producto.price, 0);
// Mensaje para verificar que el contexto funciona (solo visible en consola)
  console.log("✅ CarritoContext cargado correctamente"); // para verificar

  // Retorna el proveedor con los valores y funciones disponibles para toda la app
  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, total }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
