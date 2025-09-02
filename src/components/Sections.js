"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Car, Wrench, Clock } from "lucide-react";

// ---------------- Services Section ----------------
export function Services() {

  const serviceDetails = [

    {
      icon: <Car className="w-10 h-10 text-green-600" />,
      title: "24/7 Towing",
      desc: "Reliable and fast towing services available anytime, anywhere."
    },
    {
      icon: <Wrench className="w-10 h-10 text-green-600" />,
      title: "Roadside Assistance",
      desc: "Battery jump-starts, tire changes, and emergency support."
    },
    {
      icon: <Clock className="w-10 h-10 text-green-600" />,
      title: "Quick Response",
      desc: "We guarantee fast arrival times to get you back on the road quickly."
    }
  ]


  return (
    <section className="bg-gray-50 py-20" id="services">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-black md:text-4xl font-bold mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid text-black grid-cols-1 md:grid-cols-3 gap-10">
          {serviceDetails.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-black">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- About Section ----------------
export function About() {
  return (
    <section className="bg-white py-20" id="about">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/Tow-truck.jpeg"
            alt="Tow truck helping a car"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl text-black md:text-4xl font-bold mb-6">
            About <span className="text-green-600">TowMe</span>
          </h2>
          <p className="text-black mb-6 leading-relaxed">
            TowMe is your trusted roadside partner. Whether it’s an accident,
            breakdown, or just a flat tire, our professional team is always
            ready to provide quick and safe towing services. Our mission is to
            make your road emergencies stress-free with reliable 24/7 support.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------- Contact Section ----------------
export function Contact() {
  return (
    <section className="bg-gray-100 text-black py-20" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-black font-bold text-center mb-12"
        >
          Contact Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-green-600" />
              <span className="text-black">+254 700 123 456</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-green-600" />
              <span className="text-black">support@TowMe.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-green-600" />
              <span className="text-black">Nairobi, Kenya</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-md rounded-xl p-8 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition w-full"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
