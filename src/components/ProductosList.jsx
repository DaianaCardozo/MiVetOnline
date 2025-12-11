import { Link } from "react-router-dom";
import styles from "../pages/Productos.module.css";

export default function ProductosList({ productos, onAgregarAlCarrito }) {
  if (!productos || productos.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <div className={styles.gridProductos}>
      {productos.map((p) => {
        const id = p.id;
        const nombre = p.nombre || p.title || "Producto sin nombre";
        const descripcion =
          p.descripcion || p.description || "Sin descripción disponible.";
        const precio = p.precio || p.price || 0;
        const imagen =
          p.imagen || p.image || "https://via.placeholder.com/300x300?text=Producto";

        return (
          <Link
            key={id}
            to={`/productos/${id}`}
            className={styles.cardLink}
          >
            <article className={styles.cardProducto}>
              
              {/* ⭐ BADGE / PROMO ⭐ */}
            
              {/* <span className={styles.badge}>30%</span> */}

              {/* DINÁMICO DESDE EL JSON: */}
              {p.badge && (
                <span className={styles.badge}>
                  {p.badge}
                </span>
              )}

              {/* IMAGEN */}
              <div className={styles.cardImgWrapper}>
                <img src={imagen} alt={nombre} className={styles.cardImg} />
              </div>

              {/* NOMBRE */}
              <h3 className={styles.cardTitulo}>{nombre}</h3>

              {/* DESCRIPCIÓN */}
              <p className={styles.cardDescripcion}>{descripcion}</p>

              {/* PRECIO + ENVÍO */}
              <div className={styles.cardPrecioEnvio}>
                <span className={styles.cardPrecio}>${precio}</span>
                <span className={styles.cardEnvio}>🚚 Envío gratis* hoy</span>
              </div>

              {/* BOTÓN: NO ABRE DETALLE */}
              <button
                className={styles.cardBtn}
                onClick={(e) => {
                  e.preventDefault();      
                  e.stopPropagation();     
                  onAgregarAlCarrito(p);   
                }}
              >
                Agregar al carrito
              </button>

            </article>
          </Link>
        );
      })}
    </div>
  );
}
