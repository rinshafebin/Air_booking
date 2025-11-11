import React from "react";
import Navbar from '../../Components/Navbar'

export default function MyTripsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-orange-50 py-12 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">My Trips</h1>
          <p className="text-gray-600">
            View all your past and upcoming trips in one place.
          </p>

          {/* Trips Placeholder */}
          <div className="mt-8 text-gray-500 italic">
            You have no trips yet. Book a flight to see it here.
          </div>
        </div>
      </div>
    </>
  );
}
