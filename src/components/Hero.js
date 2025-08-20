"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606312619344-7f58c6714bb7"
          alt="Tow Truck"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Fast & Reliable <span className="text-green-400">Towing Services</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Stuck on the road? Request a tow anytime, anywhere. We’ve got you
          covered.
        </p>
        <Link
          href="/request"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
        >
          Request Assistance
        </Link>
      </motion.div>
    </section>
  );
}
