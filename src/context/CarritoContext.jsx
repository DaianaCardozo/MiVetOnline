// ========================================
// CONTEXTO: CarritoContext
// ========================================
// Funciones disponibles:
// ☑ agregarAlCarrito(producto)
// ☑ restarUnidad(id)
// ☑ eliminarDelCarrito(id)
// ☑ vaciarCarrito()
// ☑ total (dinámico)
// ☑ carrito guardado en localStorage automáticamente
// ========================================

import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {

  //  Cargar carrito desde localStorage si existe
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("carritoVet");
    return guardado ? JSON.parse(guardado) : [];
  });

  //  Guardar cambios automáticamente
  useEffect(() => {
    localStorage.setItem("carritoVet", JSON.stringify(carrito));
  }, [carrito]);


  //  AGREGAR (si existe ↗ suma cantidad)
  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find(item => item.id === producto.id);

      if (existe) {
        return prev.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...prev, { ...producto, cantidad: 1 }];
    });
  };


  //  RESTAR cantidad (si queda en 0 → lo elimina)
  const restarUnidad = (id) => {
    setCarrito(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter(item => item.cantidad > 0)
    );
  };


  // ❌ ELIMINAR producto completo del carro
  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };


  //  VACIAR carrito
  const vaciarCarrito = () => setCarrito([]);


  //  TOTAL general calculado dinámicamente
  const total = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);


  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        restarUnidad,
        eliminarDelCarrito,
        vaciarCarrito,
        total
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
