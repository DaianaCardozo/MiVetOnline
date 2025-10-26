// ============================
// Componente: DetalleProducto.jsx
// Muestra el detalle de un producto seleccionado,
// con su imagen, descripción, precio y un botón para agregarlo al carrito.
// ============================

import { useParams } from "react-router-dom"; // Hook para obtener el ID desde la URL
import { useContext } from "react";
import { ProductoContext } from "../context/ProductoContext";  // Contexto de productos
import { CarritoContext } from "../context/CarritoContext"; // Contexto del carrito
import styles from "./DetalleProducto.module.css"; // Importo los estilos del componente

function DetalleProducto() {
    // Obtengo el ID del producto actual desde la URL
  const { id } = useParams();
  // Traigo la lista de productos del contexto
  const { productos } = useContext(ProductoContext);
  // Traigo la función que permite agregar un producto al carrito
  const { agregarAlCarrito } = useContext(CarritoContext);
 // Busca el producto correspondiente al ID (convierto el id de string a número)
  const producto = productos.find((p) => p.id === parseInt(id));

  // Si el producto todavía no está disponible (por ejemplo, si la API no cargó)
  if (!producto) {
    return (
      <section className={styles.detalle}>
        <h2 className={styles.titulo}>Cargando detalle...</h2>
        <p>O el producto no existe 🧐</p>
      </section>
    );
  }
 // Si encontramos el producto, mostramos su detalle
  return (
    <section className={styles.detalle}>
      <h2 className={styles.titulo}>{producto.title}</h2>

       {/* Contenedor con la imagen y la información del producto */}
      <div className={styles.contenedor}>
         {/* Imagen del producto */}
        <img
          src={producto.image}
          alt={producto.title}
          className={styles.img}
        />
          {/* Descripción, precio y botón para agregar al carrito */}
        <div>
          <p className={styles.descripcion}>{producto.description}</p>
          <p className={styles.precio}>💵 ${producto.price}</p>

          <button
            onClick={() => agregarAlCarrito(producto)}
            className={styles.btn}
          >
            Agregar al carrito 🛒
          </button>
        </div>
      </div>
    </section>
  );
}

export default DetalleProducto;
