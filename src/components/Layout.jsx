// ============================
// Layout.jsx
// Estructura que comparten TODAS las páginas
// ============================

import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <>
      <Header />
      <NavBar />

      {/* Esto cambia según la ruta actual */}
      <main style={{ padding: "20px", minHeight: "70vh" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
