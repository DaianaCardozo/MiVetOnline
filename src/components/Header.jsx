// ============================
// Componente: Header.jsx
// Muestra el encabezado del sitio con el logo y el título principal.
// ============================


import logo from "../assets/logo.png";   // Importo la imagen del logo
import styles from "./Header.module.css";  // Importo los estilos del header

function Header() {
  return (
    <header className={styles.header}>
       {/* Imagen del logo del sitio */}
      <img
        src={logo}
        alt="Logo de Mi Vet Online"
        className={styles.logo}
      />
       {/* Título principal del sitio */}
      <h1 className={styles.title}>Mi Vet Online</h1>
    </header>
  );
}

export default Header;
