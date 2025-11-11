import React from "react";
import Navbar from "../../Components/Navbar";

export default function FlightStatusPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-orange-50 py-12 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Real-Time Flight Status
          </h1>
          <p className="text-gray-600 mb-6">
            Track live flight status powered by AirLabs / OpenSky Network.
          </p>

          {/* Search input */}
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="Enter Flight Number"
              className="border border-gray-300 rounded-lg px-4 py-2 flex-grow focus:outline-none focus:border-orange-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-2 rounded-lg transition">
              Track
            </button>
          </div>

          {/* Placeholder for results */}
          <div className="text-gray-500 italic">
            Enter a flight number to see real-time status updates.
          </div>
        </div>
      </div>
    </>
  );
}
