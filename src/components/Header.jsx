import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/LogoVetOnline.png";

export default function Header() {
  return (
    <Link 
      to="/" 
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "block"
      }}
    >
      <header className={styles.header}>
        <div className={styles.hero}>

          {/* LOGO */}
          <img src={logo} alt="logo" className={styles.logo} />

          {/* TEXTO CENTRADO */}
          <div className={styles.textCenter}>
            <h1 className={styles.titulo}>Mi Vet Online</h1>
            <p className={styles.subtitulo}>Tu tienda veterinaria de confianza.</p>
          </div>

          {/* LOGIN a la derecha */}
          <div className={styles.loginBox}>
            <Link
              to="/login"
              className={styles.loginBtn}
              onClick={(e) => e.stopPropagation()} 
            >
              Iniciar sesión
            </Link>
          </div>

        </div>
      </header>
    </Link>
  );
}
