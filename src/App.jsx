// ============================
// Componente principal: App.jsx
// Es el núcleo de la aplicación. 
// Define la estructura general y las rutas del sitio.
// ============================


import { Routes, Route } from "react-router-dom";  // Maneja la navegación entre páginas

// Componentes de la interfaz
import Header from "./components/Header.jsx"; 
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

// Páginas y secciones principales
import Inicio from "./pages/Inicio.jsx";
import Productos from "./components/Productos.jsx";
import DetalleProducto from "./pages/DetalleProducto.jsx";
import Carrito from "./components/Carrito.jsx";
import Servicios from "./pages/Servicios.jsx";


function App() {
  return (
    <>
       {/* Encabezado con el logo y el título */}
      <Header />
       {/* Barra de navegación con los enlaces principales */}
      <NavBar />
          {/* Contenedor principal de las rutas */}
      <main>
        <Routes>
             {/* Página de inicio */}
          <Route path="/" element={<Inicio />} />
               {/* Página de productos */}
          <Route path="/productos" element={<Productos />} />
           {/* Página de detalle individual de producto */}
          <Route path="/productos/:id" element={<DetalleProducto />} />
              {/* Página del carrito */}
          <Route path="/carrito" element={<Carrito />} />
           {/* Página de servicios */}
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </main>
      {/* Pie de página */}
      <Footer />
    </>
  );
}

export default App;
