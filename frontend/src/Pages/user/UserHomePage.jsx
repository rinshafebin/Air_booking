import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plane, ClipboardList, Briefcase, Activity, Calendar, MapPin } from "lucide-react";
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

export default function UserHomePage() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    date: "",
  });

  const handleChange = (e) =>
    setSearchData({ ...searchData, [e.target.name]: e.target.value });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching flights:", searchData);
    navigate("/flights/search-results");
  };

  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-10 px-6">
        {/* Welcome Section */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-gray-600 text-lg">
            Plan your next journey with <span className="text-orange-500 font-semibold">AirEase</span>.
          </p>
        </div>

        {/* Flight Search Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12 border border-orange-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2 justify-center">
            <Plane className="text-orange-500 w-6 h-6" /> Search for Flights
          </h2>

          <form onSubmit={handleSearch} className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600 mb-1 block">
                From
              </label>
              <div className="flex items-center border border-gray-200 rounded-xl px-3">
                <MapPin className="text-orange-400 w-4 h-4" />
                <input
                  type="text"
                  name="from"
                  value={searchData.from}
                  onChange={handleChange}
                  placeholder="Enter departure city"
                  className="w-full px-2 py-3 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600 mb-1 block">
                To
              </label>
              <div className="flex items-center border border-gray-200 rounded-xl px-3">
                <MapPin className="text-orange-400 w-4 h-4" />
                <input
                  type="text"
                  name="to"
                  value={searchData.to}
                  onChange={handleChange}
                  placeholder="Enter destination city"
                  className="w-full px-2 py-3 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600 mb-1 block">
                Date
              </label>
              <div className="flex items-center border border-gray-200 rounded-xl px-3">
                <Calendar className="text-orange-400 w-4 h-4" />
                <input
                  type="date"
                  name="date"
                  value={searchData.date}
                  onChange={handleChange}
                  className="w-full px-2 py-3 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl shadow-md transition duration-200"
              >
                Search Flights
              </button>
            </div>
          </form>
        </div>

        {/* Quick Actions Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div
            onClick={() => navigate("/bookings")}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition cursor-pointer border border-orange-100"
          >
            <ClipboardList className="text-orange-500 w-8 h-8 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">My Bookings</h3>
            <p className="text-gray-500 text-sm mt-1">
              View or manage your active reservations.
            </p>
          </div>

          <div
            onClick={() => navigate("/my-trips")}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition cursor-pointer border border-orange-100"
          >
            <Briefcase className="text-orange-500 w-8 h-8 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">My Trips</h3>
            <p className="text-gray-500 text-sm mt-1">
              Check your upcoming and past trips.
            </p>
          </div>

          <div
            onClick={() => navigate("/flight-status")}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition cursor-pointer border border-orange-100"
          >
            <Activity className="text-orange-500 w-8 h-8 mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              Flight Status
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Track your flight in real-time.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
