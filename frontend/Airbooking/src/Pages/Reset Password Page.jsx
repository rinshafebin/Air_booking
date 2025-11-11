import React, { useState } from 'react';
import { Plane } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset password request for:', email);
    alert('If this email exists, a reset link will be sent.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-full mb-4 shadow-inner">
            <Plane className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
          <p className="text-gray-500">Enter your email to receive a password reset link</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              required
              placeholder='Enter your email '
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-md hover:shadow-lg"
            onClick={()=>navigate("/change-password")}
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Remembered your password? 
          <a href="/login" className="text-emerald-600 hover:text-emerald-700 font-semibold ml-1">Sign In</a>
        </p>
      </div>
    </div>
  );
}
