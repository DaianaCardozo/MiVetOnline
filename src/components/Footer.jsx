// ============================
// Componente: Footer.jsx
// Muestra el pie de página del sitio con el nombre y año.
// ============================

import styles from "./Footer.module.css";  // Importo los estilos del footer

function Footer() {
  return (
    <footer className={styles.footer}>
       {/* Texto del footer con el nombre de la página */}
      <p>
        © 2025 <span>Mi Vet Online</span> 🐾
      </p>
    </footer>
  );
}

export default Footer;
