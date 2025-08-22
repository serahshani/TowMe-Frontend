"use client"; 
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (
    storedUser &&
    storedUser.email === email &&
    storedUser.password === password
  ) {
    setUser(storedUser);
    localStorage.setItem("user", JSON.stringify(storedUser)); 
    return true;
  }
  return false;
};

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
