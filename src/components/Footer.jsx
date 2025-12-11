// Footer.jsx
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* BARRA NEWSLETTER */}
      <section className={styles.newsletter}>
        <p className={styles.newsletterTitle}>
          ¡Quiero recibir ofertas para mi mascota!
        </p>

        <form
          className={styles.newsletterForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <label className={styles.checkbox}>
            <input type="checkbox" /> Perros
          </label>
          <label className={styles.checkbox}>
            <input type="checkbox" /> Gatos
          </label>

          <input
            type="email"
            className={styles.emailInput}
            placeholder="Ingresá tu email"
          />
          <button type="submit" className={styles.newsletterBtn}>
            Recibir ofertas
          </button>
        </form>
      </section>

      {/* COLUMNA DE LINKS */}
      <section className={styles.linksSection}>
        <div className={styles.linksColumn}>
          <h4>Nosotros</h4>
          <ul>
            <li><Link to="/nosotros">Quiénes somos</Link></li>
            <li><Link to="/preguntas-frecuentes">Preguntas frecuentes</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className={styles.linksColumn}>
          <h4>Productos</h4>
          <ul>
            <li><Link to="/productos?cat=alimento">Alimento balanceado</Link></li>
            <li><Link to="/productos?cat=higiene">Higiene y cuidado</Link></li>
            <li><Link to="/productos?cat=accesorios">Accesorios</Link></li>
            <li><Link to="/productos?cat=medicados">Productos medicados</Link></li>
          </ul>
        </div>

        <div className={styles.linksColumn}>
          <h4>Envios & Pago</h4>
          <ul>
            <li><Link to="/envios">Zonas de entrega</Link></li>
            <li><Link to="/pagos">Formas de pago</Link></li>
            <li><Link to="/compra-segura">Compra segura</Link></li>
          </ul>
        </div>

        <div className={styles.linksColumn}>
          <h4>Legales</h4>
          <ul>
            <li><Link to="/terminos">Términos y condiciones</Link></li>
            <li><Link to="/privacidad">Política de privacidad</Link></li>
          </ul>
        </div>

        <div className={styles.linksColumn}>
          <h4>Pet shop online</h4>
          <ul>
            <li><Link to="/como-funciona">Cómo funciona</Link></li>
            <li><Link to="/mi-cuenta">Mi cuenta</Link></li>
          </ul>
        </div>
      </section>

      {/* BARRA INFERIOR */}
      <section className={styles.bottomBar}>
        <div className={styles.badges}>
          <span className={styles.paymentBadge}>💳 Pagos seguros</span>
          <span className={styles.paymentBadge}>🚚 Envíos a domicilio</span>
        </div>

        <p className={styles.copy}>
          © {year} <span>Mi Vet Online</span> — Cuidado para tus mascotas.
        </p>

        <div className={styles.social}>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="WhatsApp">WA</a>
        </div>
      </section>
    </footer>
  );
}
