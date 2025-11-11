import React, { useState } from 'react';
import { Plane } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ChangePasswordWithOTP() {
  const navigate =useNavigate()
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    // Verify OTP with backend
    console.log('Verifying OTP:', otp);
    const otpIsValid = true; 
    if (otpIsValid) {
      setStep(2); 
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleChangePasswordSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Changing password:', formData);
    alert('Password updated successfully!');
    navigate("/login")
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-full mb-4 shadow-inner">
            <Plane className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Change Password</h1>
          <p className="text-gray-500">
            {step === 1
              ? 'Enter the OTP sent to your email'
              : 'Enter your new password'}
          </p>
        </div>

        {/* Step 1: OTP */}
        {step === 1 && (
          <form onSubmit={handleOtpSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                placeholder="Enter OTP"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-md hover:shadow-lg"
            >
              Verify OTP
            </button>
          </form>
        )}

        {/* Step 2: New Password */}
        {step === 2 && (
          <form onSubmit={handleChangePasswordSubmit} className="space-y-5">
            <div>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                placeholder="enter new password"
                required
              />
            </div>

            <div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                placeholder="confirm your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-md hover:shadow-lg"
            >
              Update Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
