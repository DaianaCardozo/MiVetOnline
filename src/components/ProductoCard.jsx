import { Link } from "react-router-dom";
import styles from "../pages/Productos.module.css";

function ProductoCard({ producto, onAgregarAlCarrito }) {
  const titulo = producto.nombre || producto.title;
  const descripcion = producto.descripcion || producto.description;
  const imagen = producto.imagen || producto.image;
  const precio = producto.precio || producto.price;

  console.log("Render card de:", titulo); 
  return (
    <article className={styles.cardProducto}>
      {/* BADGE FIJO CON ESTILO INLINE */}
      <span
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          background: "red",
          color: "white",
          padding: "4px 12px",
          fontWeight: "bold",
          zIndex: 9999,
        }}
      >
        30%
      </span>

      {/* Imagen */}
      <div className={styles.cardImgWrapper}>
        <img src={imagen} alt={titulo} className={styles.cardImg} />
      </div>

      {/* Título y descripción */}
      <h4 className={styles.cardTitulo}>{titulo}</h4>
      <p className={styles.cardDescripcion}>{descripcion}</p>

      {/* Precio */}
      <div className={styles.cardPrecioEnvio}>
        <span className={styles.cardPrecio}>${precio}</span>
      </div>

      {/* Botón agregar */}
      <button
        onClick={() => onAgregarAlCarrito(producto)}
        className={styles.cardBtn}
      >
        Agregar al carrito 🛒
      </button>

      {/* Link a detalle */}
      <Link to={`/productos/${producto.id}`} className={styles.cardLink}>
        Ver detalle
      </Link>
    </article>
  );
}

export default ProductoCard;
