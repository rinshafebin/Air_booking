import React from "react";
import AdminNavbar from "../../Components/AdminNavbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-white">
      <AdminNavbar />
      <div className="max-w-7xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Pending Registrations</h2>
            <p className="text-2xl font-bold text-orange-600 mt-2">8 Users</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Active Flights</h2>
            <p className="text-2xl font-bold text-orange-600 mt-2">24 Flights</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Total Bookings</h2>
            <p className="text-2xl font-bold text-orange-600 mt-2">1,204</p>
          </div>
        </div>
      </div>
    </div>
  );
}
