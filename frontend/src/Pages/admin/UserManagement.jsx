import React, { useEffect, useState } from "react";
import AdminNavbar from "../../Components/AdminNavbar";
import axios from "axios";

export default function UserManagement() {
  const [pendingUsers, setPendingUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPendingUsers = async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/api/admin/users/pending/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        setPendingUsers(res.data); 
      } catch (err) {
        console.error("Error fetching pending users:", err);
        alert("Failed to load pending users.");
      } finally {
        setLoading(false);
      }
    };

    fetchPendingUsers();
  }, []);

  // Approve or Reject user
  const handleAction = async (userId, action) => {
    try {
      await axios.post(
        `http://127.0.0.1:8000/admin/users/${userId}/approve//`,
        { action },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      // Remove the user from pending list
      setPendingUsers((prev) => prev.filter((user) => user.id !== userId));
      alert(`User ${action}d successfully!`);
    } catch (err) {
      console.error(`Error ${action}ing user:`, err);
      alert(`Failed to ${action} user.`);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-white">
      <AdminNavbar />
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Management</h1>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Pending Registrations</h2>

          {pendingUsers.length === 0 ? (
            <p className="text-gray-500">No pending users at the moment.</p>
          ) : (
            pendingUsers.map((user) => (
              <div
                key={user.id}
                className="flex justify-between items-center border-b border-gray-100 py-3"
              >
                <div>
                  <p className="font-medium text-gray-800">{user.username}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <p className="text-sm text-gray-400">
                    Registered: {new Date(user.created_at).toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleAction(user.id, "approve")}
                    className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleAction(user.id, "reject")}
                    className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
