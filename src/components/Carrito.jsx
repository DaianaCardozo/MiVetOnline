// ============================
// Componente: Carrito.jsx
// Descripción: Muestra los productos agregados al carrito,
// permite eliminar ítems individuales, vaciar el carrito completo
// y ver el total del pedido.
// ============================


import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext"; //importo el contexto global del carrito // 
import styles from "./Carrito.module.css";    // Importo los estilos del carrito

// ============================
// Componente principal
// ============================

function Carrito() {
   // Traigo desde el contexto los datos y funciones del carrito //
  const { carrito, eliminarDelCarrito, vaciarCarrito, total } =
    useContext(CarritoContext);

  return (
    <div className={styles.contenedor}>
      {/* Título del carrito */}
      <h2 className={styles.titulo}>🛒 Carrito de Compras</h2>

     {/* Si el carrito está vacío, muestro un mensaje */}
      {carrito.length === 0 ? (
        <p className={styles.vacio}>Tu carrito está vacío 😿</p>
      ) : (
        <>
         {/* Recorro los productos del carrito y los muestro */}
          {carrito.map((producto, indice) => (
            <div key={indice} className={styles.producto}>
              <div className={styles.detalle}>
                 {/* Imagen y descripción del producto */}
                <img
                  src={producto.image}
                  alt={producto.title}
                  className={styles.img}
                />
                <div className={styles.info}>
                  <h4>{producto.title}</h4>
                  <p>💰 <strong>${producto.price}</strong></p>
                </div>
              </div>
               
                 {/* Botón para eliminar este producto */}

              <button
                onClick={() => eliminarDelCarrito(indice)}
                className={styles.btnEliminar}
              >
                Eliminar
              </button>
            </div>
          ))}
         {/* Parte final: total del carrito y botón para vaciar todo */}
          <div className={styles.totalBox}>
            <p>
              💵 Total: <strong>${total.toFixed(2)}</strong>
            </p>
            <button onClick={vaciarCarrito} className={styles.btnVaciar}>
              Vaciar carrito 🧺
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
