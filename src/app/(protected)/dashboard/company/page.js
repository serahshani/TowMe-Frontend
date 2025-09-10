"use client";

import { useState } from "react";
import { Card } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function CompanyDashboard() {
  const [vehicles, setVehicles] = useState([
    { id: 1, operator: "Peter Mwangi", vehicle: "Isuzu Tow Truck - KDC 789C" },
  ]);

  // Add new vehicle/operator
  const addVehicle = () => {
    const newVehicle = {
      id: vehicles.length + 1,
      operator: "New Operator",
      vehicle: "New Tow Truck - KXX 000X",
    };
    setVehicles([...vehicles, newVehicle]);
    toast.success("New vehicle/operator added");
  };

  return (
    <motion.div
      className="p-6 max-w-7xl mx-auto min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Company Dashboard – TowMe
      </h1>

      {/* Vehicles Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Tow Vehicles & Operators</h2>
        <div className="space-y-4">
          {vehicles.map((veh) => (
            <Card key={veh.id} className="p-4 shadow-sm">
              <p className="font-semibold">{veh.operator}</p>
              <p className="text-gray-600 text-sm">{veh.vehicle}</p>
            </Card>
          ))}
        </div>
        <Button
          onClick={addVehicle}
          className="mt-4 bg-green-700 hover:bg-green-800 text-white"
        >
          + Add Vehicle
        </Button>
      </section>
    </motion.div>
  );
}
