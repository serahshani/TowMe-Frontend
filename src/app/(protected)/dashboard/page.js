"use client";

import React from "react";
import Card from "@/components/ui/card";
import { motion } from "framer-motion";
import RequestForm from "@/components/RequestForm";
import RequestsList from "@/components/RequestsList";
import ReviewForm from "@/components/ReviewForm";
import Notifications from "@/components/Notifications";
import Profile from "@/components/Profile";
// import { useAuth } from "../../../auth/context/AuthContext";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/auth/context/AuthContext";

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

  return (
    <motion.div
      className="p-6 max-w-7xl mx-auto min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Personalized Header Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {user?.name}!
        </h1>
        <p className="text-gray-500 mt-1">
          Here you can manage your requests, reviews, and profile.
        </p>
      </header>

      {/* Main Grid Layout for Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content Area (2/3 width on desktop) */}
        <section className="md:col-span-2 space-y-6">
          {/* Requests Section Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Make a Service Request</h2>
              <RequestForm />
            </Card>
          </motion.div>

          {/* Requests List Section Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Your Recent Requests</h2>
              <RequestsList />
            </Card>
          </motion.div>

          {/* Review Form Section Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Leave a Review</h2>
              <ReviewForm />
            </Card>
          </motion.div>
        </section>

        {/* Sidebar Area (1/3 width on desktop) */}
        <aside className="md:col-span-1 space-y-6">
          {/* Profile Section Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Profile</h2>
              <Profile user={user} />
            </Card>
          </motion.div>

          {/* Notifications Section Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Notifications</h2>
              <Notifications />
            </Card>
          </motion.div>
        </aside>
      </div>
    </motion.div>
  );
}
