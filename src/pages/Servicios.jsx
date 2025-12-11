// src/pages/Servicios.jsx
import { Link } from "react-router-dom";
import styles from "./Servicios.module.css";

export default function Servicios() {
  const servicios = [
    {
      id: 1,
      nombre: "Consulta clínica general",
      desc: "Atención médica para perros y gatos. Diagnóstico, evaluación y tratamiento.",
      icon: "🩺",
    },
    {
      id: 2,
      nombre: "Vacunación",
      desc: "Vacunas obligatorias y opcionales. Certificados de salud al día.",
      icon: "💉",
    },
    {
      id: 3,
      nombre: "Desparasitación",
      desc: "Prevención antiparasitaria interna y externa. Pipetas, tabletas y controles.",
      icon: "🪳",
    },
    {
      id: 4,
      nombre: "Cirugía programada",
      desc: "Castración, limpieza dental, cirugías menores y mayores.",
      icon: "🔪",
    },
    {
      id: 5,
      nombre: "Urgencias 24hs",
      desc: "Atención inmediata para emergencias veterinarias.",
      icon: "🚨",
    },
    {
      id: 6,
      nombre: "Peluquería y baño",
      desc: "Baño, corte higiénico, trimming, spa para mascotas.",
      icon: "💈",
    },
  ];

  return (
    <section className={styles.contenedor}>
      <header className={styles.header}>
        <span className={styles.kicker}>Servicios veterinarios</span>
        <h1 className={styles.titulo}>Cuidamos la salud de tus mascotas</h1>
        <p className={styles.subtitulo}>
          Contamos con un equipo profesional para acompañar a tu mascota en
          controles, prevención, urgencias y bienestar general.
        </p>
      </header>

      <div className={styles.grid}>
        {servicios.map((serv) => (
          <article key={serv.id} className={styles.card}>
            <span className={styles.icono}>{serv.icon}</span>
            <h3 className={styles.nombre}>{serv.nombre}</h3>
            <p className={styles.descripcion}>{serv.desc}</p>
            <Link to="/turnos" className={styles.botonTurno}>
              Solicitar turno 📅
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
