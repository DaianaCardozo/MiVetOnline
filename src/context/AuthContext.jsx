// ========================================
// CONTEXTO: AuthContext (usuarios fake con rol)
// - user: null | { id, nombre, email, rol }
// - login(email, password): boolean
// - logout()
// - persiste en localStorage ("userVet")
// ========================================

import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// Usuarios fake para el login 
const FAKE_USERS = [
  {
    id: 1,
    nombre: "Admin Vet",
    email: "admin@vet.com",
    password: "admin123",
    rol: "admin",
  },
  {
    id: 2,
    nombre: "Cliente Demo",
    email: "demo@vet.com",
    password: "123456",
    rol: "cliente",
  },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const guardado = localStorage.getItem("userVet");
    return guardado ? JSON.parse(guardado) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("userVet", JSON.stringify(user));
    } else {
      localStorage.removeItem("userVet");
    }
  }, [user]);

  const login = (email, password) => {
    const encontrado = FAKE_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (encontrado) {
      const { password: _omit, ...userSinPassword } = encontrado;
      setUser(userSinPassword);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
