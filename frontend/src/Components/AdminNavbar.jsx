import React from "react";
import { Plane, Users, ClipboardList, BarChart3, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: <Plane size={18} />, path: "/admin/dashboard" },
    { label: "User Management", icon: <Users size={18} />, path: "/admin/users" },
    { label: "Flight Management", icon: <ClipboardList size={18} />, path: "/admin/flights" },
    { label: "Booking Stats", icon: <BarChart3 size={18} />, path: "/admin/stats" },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/admin/dashboard")}
        >
          <div className="w-9 h-9 bg-orange-100 rounded-full flex items-center justify-center shadow-inner">
            <Plane className="text-orange-500 w-5 h-5" />
          </div>
          <span className="text-lg font-bold text-gray-900 tracking-wide">
            AirEase Admin
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition ${
                location.pathname === item.path
                  ? "text-orange-600 bg-orange-50"
                  : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleLogout}
          className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </nav>
  );
}
