import React from "react";
import AdminNavbar from "../../Components/AdminNavbar";

export default function FlightManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-white">
      <AdminNavbar />
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Flight Management</h1>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Add / Edit Flight</h2>
          <form className="grid md:grid-cols-2 gap-4">
            <input className="border border-gray-300 rounded-lg px-4 py-2" placeholder="Flight Number" />
            <input className="border border-gray-300 rounded-lg px-4 py-2" placeholder="Destination" />
            <input className="border border-gray-300 rounded-lg px-4 py-2" placeholder="Departure Time" />
            <input className="border border-gray-300 rounded-lg px-4 py-2" placeholder="Status (On-time / Delayed)" />
            <button className="col-span-2 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg mt-2">
              Save Flight
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
