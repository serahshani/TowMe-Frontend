"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Save user in localStorage (demo only)
      const newUser = { name, email, phone, password };
      localStorage.setItem("user", JSON.stringify(newUser));

      // Show a success toast instead of an alert
      toast.success("Account created! Redirecting to login...", {
        position: "bottom-center",
        duration: 3000,
      });

      // Redirect after a slight delay to allow the toast to be seen
      setTimeout(() => {
        router.push("/auth/login");
      }, 1500);

    } catch (error) {
      // Show an error toast
      toast.error("Failed to create account. Please try again.", {
        position: "bottom-center",
      });
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      // --- START OF PLACEHOLDER FOR AUTHENTICATION LIBRARY ---
      // Replace this with your actual Google sign-up logic
      // e.g., using NextAuth.js or Firebase Auth.
      // await signIn("google", { redirect: false });
      // const user = await someAuthFunction();
      console.log("Attempting to sign up with Google...");
      
      // Simulate a successful sign-up
      await new Promise(resolve => setTimeout(resolve, 1000));
      // --- END OF PLACEHOLDER ---

      toast.success("Signed up with Google successfully! Redirecting...", {
        position: "bottom-center",
      });
      setTimeout(() => {
        router.push("/dashboard"); // Redirect to the dashboard or a success page
      }, 1500);

    } catch (error) {
      console.error("Google sign-up failed:", error);
      toast.error("Failed to sign up with Google. Please try again.", {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Toaster />
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <h2 className="text-3xl font-extrabold text-gray-800 mt-4">
            Create Your Account
          </h2>
          <p className="text-gray-500 mt-2">
            Join us and start your journey today.
          </p>
        </div>

        {/* Social Sign-Up Buttons */}
        <div className="space-y-4 mb-6">
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google logo" className="h-5 w-5" />
            Sign up with Google
          </button>
        </div>

        <div className="relative flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Form Fields */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors duration-300"
              placeholder="e.g., Jane Doe"
              required
            />
          </div>

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

          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors duration-300"
              placeholder="e.g., +1 234 567 8900"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors duration-300"
              placeholder="Must be at least 8 characters"
              minLength={8}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-green-600 font-semibold hover:text-green-700 transition">
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}