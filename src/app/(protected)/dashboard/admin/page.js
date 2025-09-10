"use client";

import { useState } from "react";
import { Card } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { motion } from "framer-motion";
import { Pencil, Trash, PlusCircle } from "lucide-react";

export default function SuperAdminDashboard() {
  // Mock state data
  const [companies, setCompanies] = useState([
    { id: 1, name: "TowMe Nairobi", operator: "Peter Mwangi" },
    { id: 2, name: "TowMe Thika", operator: "Jane Njeri" },
    { id: 3, name: "TowMe Nakuru", operator: "Samuel Kariuki" },
  ]);

  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", phone: "+254700000001" },
    { id: 2, name: "Mary Wambui", phone: "+254700000002" },
    { id: 3, name: "Brian Otieno", phone: "+254700000003" },
  ]);

  const [activeTab, setActiveTab] = useState("companies");

  // CRUD Handlers
  const addCompany = () => {
    const newCompany = {
      id: companies.length + 1,
      name: `TowMe New ${companies.length + 1}`,
      operator: "New Operator",
    };
    setCompanies([...companies, newCompany]);
  };

  const editCompany = (id) => {
    setCompanies(
      companies.map((c) =>
        c.id === id ? { ...c, name: c.name + " (Edited)" } : c
      )
    );
  };

  const removeCompany = (id) => {
    setCompanies(companies.filter((c) => c.id !== id));
  };

  const addCustomer = () => {
    const newCustomer = {
      id: customers.length + 1,
      name: `Customer ${customers.length + 1}`,
      phone: "+254700000000",
    };
    setCustomers([...customers, newCustomer]);
  };

  const editCustomer = (id) => {
    setCustomers(
      customers.map((u) =>
        u.id === id ? { ...u, name: u.name + " (Edited)" } : u
      )
    );
  };

  const removeCustomer = (id) => {
    setCustomers(customers.filter((u) => u.id !== id));
  };

  return (
    <motion.div
      className="p-6 max-w-7xl mx-auto min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Super Admin Dashboard – Manage System
      </h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <Button
          onClick={() => setActiveTab("companies")}
          className={`${
            activeTab === "companies"
              ? "bg-green-700 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Companies
        </Button>
        <Button
          onClick={() => setActiveTab("customers")}
          className={`${
            activeTab === "customers"
              ? "bg-green-700 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Customers
        </Button>
      </div>

      {/* Companies Management */}
      {activeTab === "companies" && (
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Companies & Operators</h2>
            <Button
              onClick={addCompany}
              className="bg-green-700 hover:bg-green-800 text-white flex items-center"
            >
              <PlusCircle className="w-5 h-5 mr-2" /> Add Company
            </Button>
          </div>

          <div className="space-y-4">
            {companies.map((company) => (
              <Card key={company.id} className="p-4 shadow-sm flex justify-between">
                <div>
                  <p className="font-semibold">{company.name}</p>
                  <p className="text-gray-600 text-sm">Operator: {company.operator}</p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    onClick={() => editCompany(company.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
                  >
                    <Pencil className="w-4 h-4 mr-1" /> Edit
                  </Button>
                  <Button
                    onClick={() => removeCompany(company.id)}
                    className="bg-red-600 hover:bg-red-700 text-white flex items-center"
                  >
                    <Trash className="w-4 h-4 mr-1" /> Remove
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Customers Management */}
      {activeTab === "customers" && (
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Customers</h2>
            <Button
              onClick={addCustomer}
              className="bg-green-700 hover:bg-green-800 text-white flex items-center"
            >
              <PlusCircle className="w-5 h-5 mr-2" /> Add Customer
            </Button>
          </div>

          <div className="space-y-4">
            {customers.map((customer) => (
              <Card key={customer.id} className="p-4 shadow-sm flex justify-between">
                <div>
                  <p className="font-semibold">{customer.name}</p>
                  <p className="text-gray-600 text-sm">{customer.phone}</p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    onClick={() => editCustomer(customer.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white flex items-center"
                  >
                    <Pencil className="w-4 h-4 mr-1" /> Edit
                  </Button>
                  <Button
                    onClick={() => removeCustomer(customer.id)}
                    className="bg-red-600 hover:bg-red-700 text-white flex items-center"
                  >
                    <Trash className="w-4 h-4 mr-1" /> Remove
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
}
