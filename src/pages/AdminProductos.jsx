// src/pages/AdminProductos.jsx

import { useContext, useState } from "react";
import { ProductoContext, API_URL } from "../context/ProductoContext.jsx";

export default function AdminProductos() {
  const { productos, loading, error, recargarProductos } =
    useContext(ProductoContext);

  const [modo, setModo] = useState("crear"); // "crear" | "editar"
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
    stock: "",
  });
  const [mensaje, setMensaje] = useState("");

  const limpiarForm = () => {
    setFormData({
      id: "",
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
      stock: "",
    });
    setModo("crear");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");

    try {
      if (modo === "crear") {
        //  CREATE
        const nuevoProducto = {
          title: formData.title,
          price: Number(formData.price),
          description: formData.description,
          image: formData.image,
          category: formData.category,
          stock: Number(formData.stock),
        };

        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nuevoProducto),
        });

        if (!res.ok) throw new Error("Error al crear producto");

        setMensaje("Producto creado correctamente ");
      } else {
        //  UPDATE
        const id = formData.id;
        const productoActualizado = {
          title: formData.title,
          price: Number(formData.price),
          description: formData.description,
          image: formData.image,
          category: formData.category,
          stock: Number(formData.stock),
        };

        const res = await fetch(`${API_URL}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productoActualizado),
        });

        if (!res.ok) throw new Error("Error al actualizar producto");

        setMensaje("Producto actualizado correctamente ✏️");
      }

      await recargarProductos();
      limpiarForm();
    } catch (err) {
      setMensaje(`⚠️ ${err.message}`);
    }
  };

  const handleEditar = (p) => {
    setModo("editar");
    setFormData({
      id: p.id,
      title: p.title,
      price: p.price,
      description: p.description,
      image: p.image,
      category: p.category,
      stock: p.stock,
    });
    setMensaje("");
  };

  const handleEliminar = async (id) => {
    if (!window.confirm("¿Seguro que querés eliminar este producto?")) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error al eliminar producto");

      setMensaje("Producto eliminado correctamente 🗑️");
      await recargarProductos();
    } catch (err) {
      setMensaje(`⚠️ ${err.message}`);
    }
  };

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Panel de administración de productos</h2>

      {/* FORMULARIO CREAR / EDITAR */}
      <div
        style={{
          marginTop: "1.5rem",
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          maxWidth: "600px",
        }}
      >
        <h3>{modo === "crear" ? "Crear producto" : "Editar producto"}</h3>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
        >
          <div>
            <label>Título</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.4rem" }}
            />
          </div>

          <div>
            <label>Precio</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
              style={{ width: "100%", padding: "0.4rem" }}
            />
          </div>

          <div>
            <label>Descripción</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.4rem" }}
            />
          </div>

          <div>
            <label>Imagen (URL)</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "0.4rem" }}
            />
          </div>

          <div>
            <label>Categoría</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              placeholder="Ej: Higiene, juguetes y snacks..."
              style={{ width: "100%", padding: "0.4rem" }}
            />
          </div>

          <div>
            <label>Stock</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              required
              min="0"
              style={{ width: "100%", padding: "0.4rem" }}
            />
          </div>

          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
            <button
              type="submit"
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#2d7dd2",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              {modo === "crear" ? "Crear" : "Guardar cambios"}
            </button>

            {modo === "editar" && (
              <button
                type="button"
                onClick={limpiarForm}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#aaa",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Cancelar
              </button>
            )}
          </div>
        </form>

        {mensaje && (
          <p style={{ marginTop: "0.8rem", fontWeight: "bold" }}>{mensaje}</p>
        )}
      </div>

      {/* LISTADO DE PRODUCTOS */}
      <h3>Listado de productos</h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "1rem",
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>
              ID
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>
              Título
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>
              Precio
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>
              Categoría
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>
              Stock
            </th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "0.5rem" }}>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td style={{ borderBottom: "1px solid #eee", padding: "0.4rem" }}>
                {p.id}
              </td>
              <td style={{ borderBottom: "1px solid #eee", padding: "0.4rem" }}>
                {p.title}
              </td>
              <td style={{ borderBottom: "1px solid #eee", padding: "0.4rem" }}>
                ${p.price}
              </td>
              <td style={{ borderBottom: "1px solid #eee", padding: "0.4rem" }}>
                {p.category}
              </td>
              <td style={{ borderBottom: "1px solid #eee", padding: "0.4rem" }}>
                {p.stock}
              </td>
              <td style={{ borderBottom: "1px solid #eee", padding: "0.4rem" }}>
                <button
                  onClick={() => handleEditar(p)}
                  style={{
                    marginRight: "0.5rem",
                    padding: "0.3rem 0.6rem",
                    cursor: "pointer",
                  }}
                >
                  Editar
                </button>
                <button
                  onClick={() => handleEliminar(p.id)}
                  style={{
                    padding: "0.3rem 0.6rem",
                    cursor: "pointer",
                    backgroundColor: "#d9534f",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

          {productos.length === 0 && (
            <tr>
              <td colSpan="6" style={{ padding: "1rem", textAlign: "center" }}>
                No hay productos cargados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
