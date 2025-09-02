"use client";
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Your towing request is pending approval." },
    { id: 2, message: "Driver has accepted your request." },
    { id: 3, message: "Driver is on the way." },
  ]);

  return (
    <Card className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-500">No new notifications.</p>
      ) : (
        <ul className="list-disc pl-5 space-y-1">
          {notifications.map((note) => (
            <li key={note.id}>{note.message}</li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Notifications;
