// ============================
// Componente: Productos.jsx
// Muestra todos los productos disponibles.
// Permite agregarlos al carrito y acceder al detalle de cada uno.
// ============================

import { useContext } from "react";
import { ProductoContext } from "../context/ProductoContext";  // Contexto que maneja la lista de productos
import { CarritoContext } from "../context/CarritoContext";  // Contexto del carrito
import { Link } from "react-router-dom";  // Para navegar a la página de detalle
import styles from "./Productos.module.css";  // Estilos del componente

function Productos() {
   // Traigo los datos del contexto de productos
  const { productos, loading, error } = useContext(ProductoContext);
   // Traigo la función para agregar productos al carrito
  const { agregarAlCarrito } = useContext(CarritoContext);


  // Si los productos todavía se están cargando, muestro un mensaje
  if (loading) return <p>Cargando productos...</p>;
    // Si hubo un error al traer los datos, lo muestro
  if (error) return <p>Error: {error}</p>;

  return (
    <section className={styles.seccion}>
       {/* Título principal de la sección */}
      <h2 className={styles.titulo}>Productos</h2>

       {/* Contenedor que muestra todas las tarjetas de productos */}
      <div className={styles.contenedor}>
        {productos.map((p) => (
          <article key={p.id} className={styles.card}>
             {/* Imagen del producto */}
            <img src={p.image} alt={p.title} className={styles.img} />
            {/* Título y precio */}
            <h4>{p.title}</h4>
            <p className={styles.precio}>${p.price}</p>
            
               {/* Botón para agregar el producto al carrito */}
            <button
              onClick={() => agregarAlCarrito(p)}
              className={styles.btnAgregar}
            >
              Agregar al carrito 🛒
            </button>
               {/* Enlace que lleva al detalle del producto */}
            <div>
              <Link to={`/productos/${p.id}`} className={styles.linkDetalle}>
                Ver detalle
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Productos;
