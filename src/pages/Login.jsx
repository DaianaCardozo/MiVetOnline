// src/pages/Login.jsx
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();


  const [email, setEmail] = useState("admin@vet.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const ok = login(email, password); 

    if (ok) {
      setError("");
      navigate("/admin/productos"); 
    } else {
      setError("Credenciales incorrectas.");
    }
  };

  return (
    <section style={{ maxWidth: "400px", margin: "0 auto", padding: "2rem" }}>
      <h2>Iniciar Sesión</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
            required
          />
        </div>

        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
            required
          />
        </div>

        {error && (
          <p style={{ color: "red", marginTop: "-0.5rem" }}>{error}</p>
        )}

        <button
          type="submit"
          style={{
            padding: "0.7rem",
            backgroundColor: "#3e7bd9",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "8px",
          }}
        >
          Ingresar
        </button>
      </form>

      <p style={{ marginTop: "1rem", fontSize: "0.85rem", opacity: 0.8 }}>
        <b>Admin:</b> admin@vet.com / admin123 <br />
        <b>Cliente:</b> demo@vet.com / 123456
      </p>
    </section>
  );
}
