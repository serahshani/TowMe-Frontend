// src/app/auth/context/AuthContext.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for user in cookies when the component mounts
    const cookieUser = Cookies.get("user");
    if (cookieUser) {
      try {
        setUser(JSON.parse(cookieUser));
      } catch (err) {
        console.error("Invalid cookie data", err);
        Cookies.remove("user");
      }
    }
  }, []);

  const login = (email, password) => {
    // ✅ Demo: Replace with real backend auth
    // For now, allow any non-empty email & password
    if (email && password) {
      const newUser = {
        email,
        name: email.split("@")[0], // take part before @ as username
        token: "dummy_token_" + Date.now(), // simple session token
      };

      setUser(newUser);
      Cookies.set("user", JSON.stringify(newUser), { expires: 7 }); // Store for 7 days
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
