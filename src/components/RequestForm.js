"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Car, 
  Phone, 
  User, 
  AlertTriangle, 
  Clock,
  Navigation,
  CheckCircle
} from "lucide-react";

export default function RequestPage() {
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: "",
    phoneNumber: "",
    email: "",
    
    // Vehicle Details
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleColor: "",
    licensePlate: "",
    
    // Issue Details
    issueType: "",
    issueDescription: "",
    
    // Location
    currentLocation: "",
    destinationLocation: "",
    
    // Additional Info
    urgencyLevel: "normal",
    additionalNotes: ""
  });

  const [locationLoading, setLocationLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const issueTypes = [
    { value: "breakdown", label: "Vehicle Breakdown", icon: "🔧" },
    { value: "accident", label: "Accident", icon: "🚗" },
    { value: "flat-tire", label: "Flat Tire", icon: "🛞" },
    { value: "battery", label: "Dead Battery", icon: "🔋" },
    { value: "fuel", label: "Out of Fuel", icon: "⛽" },
    { value: "locked-out", label: "Locked Out", icon: "🔐" },
    { value: "other", label: "Other", icon: "❓" }
  ];

  const urgencyLevels = [
    { value: "low", label: "Low Priority", color: "bg-green-100 text-green-800" },
    { value: "normal", label: "Normal", color: "bg-blue-100 text-blue-800" },
    { value: "urgent", label: "Urgent", color: "bg-orange-100 text-orange-800" },
    { value: "emergency", label: "Emergency", color: "bg-red-100 text-red-800" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getCurrentLocation = () => {
    setLocationLoading(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData(prev => ({
            ...prev,
            currentLocation: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
          }));
          setLocationLoading(false);
        },
        (error) => {
          setLocationLoading(false);
          alert("Could not get your location. Please enter manually.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      setLocationLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-black mb-4">Request Submitted!</h2>
          <p className="text-gray-800 mb-6">
            We've received your towing request. Our team will contact you within 5-10 minutes 
            with an estimated arrival time.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-green-800">
              <strong>Request ID:</strong> #TOW{Date.now().toString().slice(-6)}
            </p>
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-black mb-4">Request Towing Service</h1>
          <p className="text-xl text-gray-800">
            Fill out the form below and we'll dispatch help immediately
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-8"
        >
          {/* Personal Information */}
          <section>
            <div className="flex items-center mb-6">
              <User className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-black">Personal Information</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-black"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-black"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-black"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
          </section>

          {/* Vehicle Information */}
          <section>
            <div className="flex items-center mb-6">
              <Car className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-black">Vehicle Information</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Make *
                </label>
                <input
                  type="text"
                  name="vehicleMake"
                  value={formData.vehicleMake}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-black"
                  placeholder="e.g., Toyota, Ford, Honda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Model *
                </label>
                <input
                  type="text"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-black"
                  placeholder="e.g., Camry, F-150, Civic"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Year *
                </label>
                <input
                  type="number"
                  name="vehicleYear"
                  value={formData.vehicleYear}
                  onChange={handleInputChange}
                  required
                  min="1900"
                  max="2025"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-black"
                  placeholder="2020"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Color
                </label>
                <input
                  type="text"
                  name="vehicleColor"
                  value={formData.vehicleColor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-black"
                  placeholder="e.g., Red, Blue, Silver"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-black mb-2">
                  License Plate Number
                </label>
                <input
                  type="text"
                  name="licensePlate"
                  value={formData.licensePlate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-black"
                  placeholder="ABC-1234"
                />
              </div>
            </div>
          </section>

          {/* Issue Details */}
          <section>
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-black">Issue Details</h2>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-black mb-3">
                What's the issue? *
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {issueTypes.map((issue) => (
                  <label
                    key={issue.value}
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition ${
                      formData.issueType === issue.value
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-300 hover:border-green-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="issueType"
                      value={issue.value}
                      checked={formData.issueType === issue.value}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <span className="text-2xl mr-3">{issue.icon}</span>
                    <span className="font-medium text-black">{issue.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-black mb-2">
                Describe the issue in detail
              </label>
              <textarea
                name="issueDescription"
                value={formData.issueDescription}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-black"
                placeholder="Please provide more details about what happened..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-3">
                Urgency Level *
              </label>
              <div className="grid md:grid-cols-4 gap-3">
                {urgencyLevels.map((level) => (
                  <label
                    key={level.value}
                    className={`flex items-center justify-center p-3 border rounded-lg cursor-pointer transition ${
                      formData.urgencyLevel === level.value
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-300 hover:border-green-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="urgencyLevel"
                      value={level.value}
                      checked={formData.urgencyLevel === level.value}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${level.color}`}>
                      {level.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Location Information */}
          <section>
            <div className="flex items-center mb-6">
              <MapPin className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-black">Location Information</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Current Location *
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    name="currentLocation"
                    value={formData.currentLocation}
                    onChange={handleInputChange}
                    required
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-black"
                    placeholder="Enter your current address or location"
                  />
                  <button
                    type="button"
                    onClick={getCurrentLocation}
                    disabled={locationLoading}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-3 rounded-lg transition flex items-center"
                  >
                    <Navigation className={`w-5 h-5 ${locationLoading ? 'animate-spin' : ''}`} />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Click the location button to auto-detect your current position
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Where should we tow your vehicle?
                </label>
                <input
                  type="text"
                  name="destinationLocation"
                  value={formData.destinationLocation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-black"
                  placeholder="Destination address (garage, home, etc.)"
                />
              </div>
            </div>
          </section>

          {/* Additional Notes */}
          <section>
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-black">Additional Information</h2>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Additional Notes
              </label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-black"
                placeholder="Any other details we should know? (e.g., parking restrictions, special instructions)"
              />
            </div>
          </section>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-xl text-xl font-semibold transition shadow-lg hover:shadow-green-500/30"
            >
              Request Towing Service
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

