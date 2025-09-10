"use client";

import React from "react";
import Card from "../../../../components/ui/card";
import { motion } from "framer-motion";
import RequestForm from "../../../../components/RequestForm";
import RequestsList from "../../../../components/RequestsList";
import ReviewForm from "../../../../components/ReviewForm";
import Notifications from "../../../../components/Notifications";
import Profile from "../../../../components/Profile";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../../app/auth/context/AuthContext";
import {
  FaUserCircle,
  FaBell,
  FaClipboardList,
  FaFileSignature,
  FaPlusCircle,
} from "react-icons/fa";

// Import reusable layout
import Sidebar from "../../../../components/layout/Sidebar";
import Navbar from "../../../../components/layout/Navbar";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  // Redirect if not logged in
  if (!user) {
    if (typeof window !== "undefined") {
      router.push("/auth/login");
    }
    return null;
  }

  // A simple color palette
  const primaryColor = "text-green-600";
  const secondaryColor = "text-gray-500";
  const cardBg = "bg-white";
  const pageBg = "bg-gray-50";
  const shadow = "shadow-lg";

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <motion.div
          className={`p-6 md:p-10 max-w-7xl mx-auto w-full ${pageBg}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Personalized Header Section */}
          <header className="mb-12 flex items-center">
            <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-3xl font-bold text-white mr-4">
              <FaUserCircle />
            </div>
            <div>
              <h1 className={`text-4xl font-extrabold ${primaryColor}`}>
                Welcome back, {user?.name}! 👋
              </h1>
              <p className={`mt-2 text-lg ${secondaryColor}`}>
                Here's a summary of your activities and service management
                options.
              </p>
            </div>
          </header>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <section className="md:col-span-2 space-y-8">
              {/* Requests Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className={`p-8 rounded-xl ${cardBg} ${shadow}`}>
                  <div className="flex items-center mb-4">
                    <FaPlusCircle
                      className={`text-2xl ${primaryColor} mr-3`}
                    />
                    <h2 className="text-2xl font-bold text-gray-800">
                      Make a Service Request
                    </h2>
                  </div>
                  <RequestForm />
                </Card>
              </motion.div>

              {/* Requests List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className={`p-8 rounded-xl ${cardBg} ${shadow}`}>
                  <div className="flex items-center mb-4">
                    <FaClipboardList
                      className={`text-2xl ${primaryColor} mr-3`}
                    />
                    <h2 className="text-2xl font-bold text-gray-800">
                      Your Recent Requests
                    </h2>
                  </div>
                  <RequestsList />
                </Card>
              </motion.div>

              {/* Review Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className={`p-8 rounded-xl ${cardBg} ${shadow}`}>
                  <div className="flex items-center mb-4">
                    <FaFileSignature
                      className={`text-2xl ${primaryColor} mr-3`}
                    />
                    <h2 className="text-2xl font-bold text-gray-800">
                      Leave a Review
                    </h2>
                  </div>
                  <ReviewForm />
                </Card>
              </motion.div>
            </section>

            {/* Sidebar Widgets */}
            <aside className="md:col-span-1 space-y-8">
              {/* Profile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Card className={`p-8 rounded-xl ${cardBg} ${shadow}`}>
                  <div className="flex items-center mb-4">
                    <FaUserCircle
                      className={`text-2xl ${primaryColor} mr-3`}
                    />
                    <h2 className="text-2xl font-bold text-gray-800">
                      Profile
                    </h2>
                  </div>
                  <Profile user={user} />
                </Card>
              </motion.div>

              {/* Notifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <Card className={`p-8 rounded-xl ${cardBg} ${shadow}`}>
                  <div className="flex items-center mb-4">
                    <FaBell className={`text-2xl ${primaryColor} mr-3`} />
                    <h2 className="text-2xl font-bold text-gray-800">
                      Notifications
                    </h2>
                  </div>
                  <Notifications />
                </Card>
              </motion.div>
            </aside>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
