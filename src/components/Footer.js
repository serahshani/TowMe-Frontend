"use client";

import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" }
  ]
  const sociaLink = [
    { name: "Facebook", href: "#", icon: <Facebook size={18} /> },
    { name: "Twitter", href: "#", icon: <Twitter size={18} /> },
    { name: "Instagram", href: "#", icon: <Instagram size={18} /> }
  ]

  const contactInfo = [
    { type: "phone", value: "+254 700 123 456", icon: <Phone size={16} className="text-green-500" /> },
    { type: "email", value: "support@TowMe.com", icon: <Mail size={16} className="text-green-500" /> },
    { type: "address", value: "Nairobi, Kenya", icon: <MapPin size={16} className="text-green-500" /> }

  ]

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
            {navLinks.map((links) => {
              return (
                <li key={links.name}>
                  <a href={links.href} className="hover:text-green-500">{links.name}</a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">

            {contactInfo.map((contact) => {
              return (
                <li className="flex items-center space-x-2" key={contact.type}>
                  {/* {icon} */}
                  <span>

                    {contact.icon}
                  </span>
                  <span>{contact.value}</span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">

            {sociaLink.map((link) => {
              return (
                <a key={link.name} href={link.href} className="p-2 rounded-full bg-gray-800 hover:bg-green-500 transition">
                  {link.icon}
                </a>
              )
            })}
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
