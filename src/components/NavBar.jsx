import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { AuthContext } from "../context/AuthContext.jsx";

export default function NavBar() {
  const { carrito } = useContext(CarritoContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-mivet shadow-sm">
      <div className="container">
        {/* BOTÓN HAMBURGUESA */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* CONTENIDO DE LA NAV */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex align-items-center w-100">
            {/* IZQUIERDA: LINKS */}
            <ul className="navbar-nav">
              {/* TIENDA (home real) */}
              <li className="nav-item">
                <Link className="nav-link" to="/productos">
                  Tienda
                </Link>
              </li>

              {/* SERVICIOS */}
              <li className="nav-item">
                <Link className="nav-link" to="/servicios">
                  Servicios
                </Link>
              </li>

              {/* LINK ADMIN SOLO SI ES ADMIN */}
              {user?.rol === "admin" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/productos">
                    Admin productos
                  </Link>
                </li>
              )}
            </ul>

            {/* CENTRO: BUSCADOR */}
            <form className="d-flex mx-auto nav-search" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar producto..."
              />
              <button className="btn btn-primary" type="submit">
                Buscar
              </button>
            </form>

            {/* DERECHA: ENVIOS + CARRITO + LOGIN/USER */}
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              {/* ENVÍOS GRATIS */}
              <li className="nav-item">
                <span className="nav-link">Envíos gratis</span>
              </li>

              {/* CARRITO */}
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center justify-content-center position-relative"
                  to="/carrito"
                  style={{
                    width: "48px",
                    height: "38px",
                    padding: "0",
                    borderRadius: "8px",
                    border: "1px solid var(--c-primario)",
                    backgroundColor: "#fff",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                  </svg>

                  {carrito.length > 0 && (
                    <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                      {carrito.length}
                    </span>
                  )}
                </Link>
              </li>

              {/* LOGIN / USER */}
              <li className="nav-item d-flex align-items-center">
                {user ? (
                  <>
                    <span className="nav-link" style={{ fontSize: "0.85rem" }}>
                      Hola, <b>{user.nombre}</b>
                    </span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={logout}
                    >
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <Link className="btn btn-primary btn-sm" to="/login">
                    Iniciar sesión
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
