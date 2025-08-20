"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
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
          <Link href="#contact" className="text-gray-700 hover:text-green-700">
            Contact
          </Link>
        </div>

        {/* Call to Action */}
        <Link
          href="/request"
          className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
        >
          Request Tow
        </Link>
      </div>
    </motion.nav>
  );
}
