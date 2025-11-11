import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import UserHomePage from './Pages/user/UserHomePage';
import LoginPage from './Pages/auth/LoginPage';
import RegisterPage from './Pages/auth/RegisterPage';
import ResetPasswordPage from './Pages/auth/ResetPasswordPage';
import ChangePasswordPage from './Pages/auth/ChangePasswordPage';
import BookingsPage from './Pages/user/BookingsPage';
import MyTripsPage from './Pages/user/MyTripsPage';
import FlightStatusPage from './Pages/user/FlightStatusPage';
import AccountPage from './Pages/user/AccountPage';

import UserManagement from './Pages/admin/UserManagement';
import BookingStats from './Pages/admin/BookingStats';
import Dashboard from './Pages/admin/Dashboard';
import FlightManagement from './Pages/admin/FlightManagement';


import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        <Route path="/user/home" element={<UserHomePage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/my-trips" element={<MyTripsPage />} />
        <Route path="/flight-status" element={<FlightStatusPage />} />
        <Route path="/account" element={<AccountPage />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/flights" element={<FlightManagement />} />
        <Route path="/admin/stats" element={<BookingStats />} />

        <Route
          path="*"
          element={<div className="text-center mt-20 text-2xl">Page Not Found</div>}
        />
      </Routes>
    </Router>
  );
};

export default App;
