// src/components/Navbar.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useAuth } from "../../src/app/auth/context/AuthContext";
// import { useAuth } from "../auth/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full fixed top-0 left-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-700">
          TowMe
        </Link>

        {/* Links */}
        <div className="space-x-6 hidden md:flex">
          <Link href="#services" className="text-gray-700 hover:text-green-700">
            Services
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-green-700">
            About
          </Link>
          <Link href="#contact" className="text-700 hover:text-green-700">
            Contact
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {/* If user is logged in, show a link to the Request Tow page */}
              <Link
                href="/request-tow" // The dedicated page for logged-in users
                className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
              >
                Request Tow
              </Link>
              <button
                onClick={logout}
                className="text-gray-700 font-medium hover:text-green-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* If no user is logged in, show a link that redirects to login */}
              <Link
                href="/auth/login"
                className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
              >
                Request Tow
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
