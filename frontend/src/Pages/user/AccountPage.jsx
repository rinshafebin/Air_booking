import React from "react";
import Navbar from "../../Components/Navbar";

export default function AccountPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-orange-50 py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Account Settings
          </h1>
          <p className="text-gray-600 mb-6">
            Manage your account details, password, and preferences.
          </p>

          {/* Placeholder account form */}
          <form className="grid gap-4 max-w-md">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
