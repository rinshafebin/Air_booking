import React from "react";
import Navbar from '../../Components/Navbar'

export default function BookingsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-orange-50 py-12 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Your Bookings
          </h1>
          <p className="text-gray-600">
            Here you can view and manage all your flight bookings.
          </p>

          {/* Placeholder for bookings list */}
          <div className="mt-8 text-gray-500 italic">
            No bookings yet. Start by searching for flights.
          </div>
        </div>
      </div>
    </>
  );
}
