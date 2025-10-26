// ============================
// Archivo principal: main.jsx
// Se encarga de renderizar toda la aplicación en el navegador.
// Aca se envuelven los contextos, el router y el componente principal (App).
// ============================


import { StrictMode } from "react"; // Ayuda a detectar posibles errores en desarrollo
import { createRoot } from "react-dom/client"; // Crea la raíz donde se monta la app
import { BrowserRouter } from "react-router-dom"; // Permite la navegación entre páginas

// Componentes principales
import App from "./App.jsx";

// Contextos globales
import { ProductoProvider } from "./context/ProductoContext.jsx";
import { CarritoProvider } from "./context/CarritoContext.jsx";

// Estilos globales
import "./index.css";


// Renderizo la aplicación dentro del elemento con id:root
createRoot(document.getElementById("root")).render(
  <StrictMode>
      {/* BrowserRouter permite usar rutas en toda la app */}
    <BrowserRouter>
      {/* ProductoProvider y CarritoProvider comparten datos globales */}
      <ProductoProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </ProductoProvider>
    </BrowserRouter>
  </StrictMode>
);
