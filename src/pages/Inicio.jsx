// ============================
// Página de Inicio
// Filtros por categoría + productos
// ============================

import { useContext, useState } from "react";
import { ProductoContext } from "../context/ProductoContext.jsx";
import { CarritoContext } from "../context/CarritoContext.jsx";

import styles from "./Productos.module.css";   
import ProductosList from "../components/ProductosList.jsx";

export default function Inicio() {
  const { productos, loading, error } = useContext(ProductoContext);
  const { agregarAlCarrito } = useContext(CarritoContext);

  // 👉 solo filtramos por categoría
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos: {error}</p>;
  if (!productos || productos.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  const categoriasUnicas = [
    "todos",
    ...new Set(
      productos
        .map((p) => (p.categoria || p.category || "").trim().toLowerCase())
        .filter(Boolean)
    ),
  ];

  const filtrados = productos.filter((p) => {
    const categoria = (p.categoria || p.category || "").toLowerCase();

    const coincideCategoria =
      categoriaSeleccionada === "todos"
        ? true
        : categoria === categoriaSeleccionada.toLowerCase();

    return coincideCategoria;
  });

  return (
    <section className={styles.seccion}>
      {/* 🏷 FILTROS – ahora van arriba de todo */}
      <div className={styles.filtros}>
        {categoriasUnicas.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSeleccionada(cat)}
            className={`${styles.filtroBtn} ${
              categoriaSeleccionada === cat ? styles.activeFiltro : ""
            }`}
          >
            {cat === "todos"
              ? "Ver todo"
              : cat[0].toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* 🛍 LISTA DE PRODUCTOS */}
      <ProductosList
        productos={filtrados}
        onAgregarAlCarrito={agregarAlCarrito}
      />
    </section>
  );
}
