// ============================
// Componente: Carrito.jsx 
// Funciones disponibles:
// ➤ Mostrar productos del carrito
// ➤ Sumar/restar cantidades
// ➤ Eliminar producto
// ➤ Vaciar carrito
// ➤ Mostrar total final
// ============================

import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext.jsx";
import styles from "./Carrito.module.css";

export default function Carrito() {
  const {
    carrito,
    agregarAlCarrito,
    restarUnidad,
    eliminarDelCarrito,
    vaciarCarrito,
    total,
  } = useContext(CarritoContext);

  return (
    <section className={styles.contenedor}>
      <h2 className={styles.titulo}>🛍 Carrito de compras</h2>

      {/* Si no hay productos */}
      {carrito.length === 0 && (
        <p className={styles.vacio}>Tu carrito está vacío 🐾</p>
      )}

      {/* Render de productos */}
      {carrito.length > 0 && (
        <>
          {carrito.map((item) => (
            <div key={item.id} className={styles.producto}>
              <div className={styles.detalle}>
                <img src={item.image} className={styles.img} alt={item.title} />

                <div className={styles.info}>
                  <h4>{item.title}</h4>
                  <p>
                    💵 Precio unidad: <strong>${item.price}</strong>
                  </p>
                  <p>
                    📦 Subtotal:{" "}
                    <strong>${(item.price * item.cantidad).toFixed(2)}</strong>
                  </p>
                </div>
              </div>

              {/* Controles cantidad */}
              <div className={styles.controles}>
                <button
                  className={styles.btnCantidad}
                  onClick={() => restarUnidad(item.id)}
                >
                  ➖
                </button>

                <span className={styles.cantidad}>{item.cantidad}</span>

                <button
                  className={styles.btnCantidad}
                  onClick={() => agregarAlCarrito(item)}
                >
                  ➕
                </button>
              </div>

              <button
                className={styles.btnEliminar}
                onClick={() => eliminarDelCarrito(item.id)}
              >
                Eliminar ❌
              </button>
            </div>
          ))}

          {/* AREA TOTAL */}
          <div className={styles.totalBox}>
            <p>
              <strong>Total a pagar: ${total.toFixed(2)}</strong>
            </p>
            <button onClick={vaciarCarrito} className={styles.btnVaciar}>
              Vaciar carrito 🧺
            </button>
          </div>
        </>
      )}
    </section>
  );
}
