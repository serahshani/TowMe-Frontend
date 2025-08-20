"use client";

import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white">TowMe</h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Fast, reliable, and professional towing services available 24/7. 
            We are here to get you back on the road safely.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-500">Home</a></li>
            <li><a href="#" className="hover:text-green-500">Services</a></li>
            <li><a href="#" className="hover:text-green-500">Pricing</a></li>
            <li><a href="#" className="hover:text-green-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <Phone size={16} className="text-green-500" />
              <span>+254 700 123 456</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={16} className="text-green-500" />
              <span>support@TowMe.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin size={16} className="text-green-500" />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-500 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-500 transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-green-500 transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TowMe. All rights reserved.
      </div>
    </footer>
  );
}
