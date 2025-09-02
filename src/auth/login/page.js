"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      toast.success("Login successful 🎉", {
        style: {
          borderRadius: "10px",
          background: "#166534", // dark green
          color: "#fff",
        },
      });
      setTimeout(() => {
        router.push("/dashboard"); // ✅ redirect to user dashboard
      }, 1500); // wait 1.5s to let user see toast
    } else {
      toast.error("Invalid email or password ❌", {
        style: {
          borderRadius: "10px",
          background: "#fef2f2", // soft red background
          color: "#dc2626", // red text
        },
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // --- START OF PLACEHOLDER FOR AUTHENTICATION LIBRARY ---
      // Replace this with your actual Google login logic
      // e.g., using NextAuth.js or Firebase Auth.
      console.log("Attempting to log in with Google...");
      await new Promise(resolve => setTimeout(resolve, 1000));
      // --- END OF PLACEHOLDER ---

      toast.success("Logged in with Google successfully!", {
        position: "bottom-center",
      });
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);

    } catch (error) {
      console.error("Google login failed:", error);
      toast.error("Failed to log in with Google. Please try again.", {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Toaster position="bottom-center" reverseOrder={false} />

      <motion.div
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 md:p-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="text-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          <h2 className="text-3xl font-extrabold text-gray-800 mt-4">
            Welcome Back
          </h2>
          <p className="text-gray-500 mt-2">
            Log in to access your account.
          </p>
        </div>

        {/* Social Login Button */}
        <div className="space-y-4 mb-6">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google logo" className="h-5 w-5" />
            Login with Google
          </button>
        </div>

        <div className="relative flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors duration-300"
              placeholder="e.g., jane.doe@example.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors duration-300"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link
              href="/auth/forgot-password"
              className="text-sm font-medium text-green-600 hover:text-green-700 transition"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            Log In
          </button>
        </form>

        {/* Redirect to Sign Up */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-green-600 font-semibold hover:text-green-700 transition"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}