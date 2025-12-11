import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { ProductoContext } from "../context/ProductoContext";
import { CarritoContext } from "../context/CarritoContext";
import styles from "./DetalleProducto.module.css";

export default function DetalleProducto() {
  const { id } = useParams();
  const { productos } = useContext(ProductoContext);
  const { agregarAlCarrito } = useContext(CarritoContext);

  const producto = productos.find((p) => String(p.id) === String(id));

  if (!producto) return <h2>Producto no encontrado</h2>;

  const nombre = producto.nombre || producto.title || "Producto sin nombre";
  const descripcion =
    producto.descripcion || producto.description || "Sin descripción disponible";
  const precio = producto.precio || producto.price || 0;
  const imagen =
    producto.imagen || producto.image || "https://via.placeholder.com/400x400?text=Producto";
  const categoria = producto.categoria || producto.category || "Sin categoría";
  const stock = producto.stock ?? 0;

  return (
    <section className={styles.detallePagina}>
      {/* CHIPS ARRIBA */}
      <div className={styles.categoriasBar}>
        <Link to="/" className={styles.chip}>
          Ver productos
        </Link>
        <span className={`${styles.chip} ${styles.chipCategoria}`}>
          {categoria}
        </span>
      </div>

      {/* PANEL CELESTE */}
      <div className={styles.panelCeleste}>
        <article className={styles.cardDetalle}>
          {/* Imagen */}
          <div className={styles.colImagen}>
            <img src={imagen} alt={nombre} className={styles.imgDetalle} />
          </div>

          {/* Información */}
          <div className={styles.colInfo}>
            <p className={styles.categoriaText}>{categoria.toUpperCase()}</p>

            <h1 className={styles.titulo}>{nombre}</h1>
            <p className={styles.descripcion}>{descripcion}</p>

            <p className={styles.precioLinea}>
              💵 Precio unidad:{" "}
              <span className={styles.precioValor}>${precio}</span>
            </p>

            <p className={styles.envioLinea}>🚚 Envío a todo el país</p>

            <p className={styles.meta}>
              📦 <span className={styles.label}>Stock disponible:</span> {stock}
            </p>

            <button
              className={styles.btnAgregar}
              onClick={() => agregarAlCarrito(producto)}
            >
              Agregar al carrito 🛒
            </button>
          </div>
        </article>
      </div>

      {/*  Enlace fuera del panel celeste */}
      <div className={styles.volverWrapper}>
        <Link to="/" className={styles.volver}>
          ← Volver a productos
        </Link>
      </div>
    </section>
  );
} 
