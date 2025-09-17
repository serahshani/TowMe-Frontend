"use client";
import { Bell, UserCircle } from "lucide-react";
import { useAuth } from "../../app/auth/context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header className="w-full bg-white shadow flex items-center justify-between px-6 py-3">
      <h2 className="text-lg font-semibold">Towing Dashboard</h2>

      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-100 rounded-full">
          <Bell className="w-6 h-6 text-gray-700" />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <UserCircle className="w-8 h-8 text-gray-700" />
          <span className="font-medium">{user?.email || "Guest"}</span>
        </div>
      </div>
    </header>
  );
}
