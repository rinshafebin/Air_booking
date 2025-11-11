import React from "react";
import AdminNavbar from "../../Components/AdminNavbar";

export default function BookingStats() {
  const stats = [
    { flight: "AI-202", bookings: 120, status: "On-time" },
    { flight: "EK-411", bookings: 85, status: "Delayed" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-white">
      <AdminNavbar />
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Booking Statistics</h1>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-2">Flight</th>
                <th>Bookings</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((s, index) => (
                <tr key={index} className="border-b text-gray-700">
                  <td className="py-2">{s.flight}</td>
                  <td>{s.bookings}</td>
                  <td
                    className={`font-semibold ${
                      s.status === "Delayed" ? "text-red-500" : "text-green-600"
                    }`}
                  >
                    {s.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
