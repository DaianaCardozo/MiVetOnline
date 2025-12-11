import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import HeroCarousel from "./components/HeroCarousel.jsx";

import Inicio from "./pages/Inicio.jsx";
import DetalleProducto from "./pages/DetalleProducto.jsx";
import Carrito from "./pages/Carrito.jsx";
import Servicios from "./pages/Servicios.jsx";
import Login from "./pages/Login.jsx";
import AdminProductos from "./pages/AdminProductos.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";

function App() {
  return (
    <>
      {/* 🟦 Panel celeste de bienvenida */}
      <Header />

      {/*  Navbar */}
      <NavBar />

      {/*  Carousel debajo del navbar */}
      <HeroCarousel />

      {/*  Contenido según la ruta */}
      <main>
        <Routes>
          {/*  Login público */}
          <Route path="/login" element={<Login />} />

          {/*  Rutas protegidas */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Inicio />
              </ProtectedRoute>
            }
          />

          <Route
            path="/productos"
            element={
              <ProtectedRoute>
                <Inicio />
              </ProtectedRoute>
            }
          />

          <Route
            path="/productos/:id"
            element={
              <ProtectedRoute>
                <DetalleProducto />
              </ProtectedRoute>
            }
          />

          <Route
            path="/carrito"
            element={
              <ProtectedRoute>
                <Carrito />
              </ProtectedRoute>
            }
          />

          <Route
            path="/servicios"
            element={
              <ProtectedRoute>
                <Servicios />
              </ProtectedRoute>
            }
          />

          {/*  Ruta SOLO para admin */}
          <Route
            path="/admin/productos"
            element={
              <AdminRoute>
                <AdminProductos />
              </AdminRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
