"use client";
import React from "react";
import Button from "./ui/button";
import Card from "./ui/card";
import { useRouter } from "next/navigation";

const Profile = ({ user }) => {
  const router = useRouter();

  const handleLogout = () => {
    // clear auth data (mock: localStorage or cookie)
    localStorage.removeItem("user");
    // redirect to landing page
    router.push("/");
  };

  return (
    <Card className="mt-6 flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">Profile</h2>
        <p className="text-gray-600">Welcome, {user?.name || "Guest"} 👋</p>
      </div>
      <Button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
        Logout
      </Button>
    </Card>
  );
};

export default Profile;
