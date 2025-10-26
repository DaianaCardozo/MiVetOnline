
// ============================
// Componente: NavBar.jsx
// Muestra la barra de navegación principal del sitio,
// con enlaces a las distintas secciones y el contador del carrito.
// ============================

import { NavLink } from "react-router-dom"; // Para los enlaces con estado activo
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext"; // Traigo el contexto del carrito
import styles from "./NavBar.module.css"; // Estilos del componente

function NavBar() {
   // Accedo al carrito para mostrar la cantidad de productos
  const { carrito } = useContext(CarritoContext);

  return (
    <nav className={styles.navbar}>
      {/* Lista de enlaces del menú */}
      <ul className={styles.navList}>
        {/* Enlace a la página de inicio */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Inicio
          </NavLink>
        </li>
        {/* Enlace a productos */}
        <li>
          <NavLink
            to="/productos"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Productos
          </NavLink>
        </li>
            {/* Enlace a servicios */}
        <li>
          <NavLink
            to="/servicios"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Servicios
          </NavLink>
        </li>
      {/* Enlace al carrito con la cantidad de productos */}
        <li>
          <NavLink
            to="/carrito"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Carrito ({carrito.length})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

