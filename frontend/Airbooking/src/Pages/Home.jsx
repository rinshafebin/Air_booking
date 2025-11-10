import { Search, CreditCard, Clock, Users, Globe } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              Your Journey
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"> Begins Here</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Book flights to anywhere in the world with ease. Experience seamless travel planning with AirBooking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setCurrentPage('search')} className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                Search Flights
              </button>
              <button onClick={() => setCurrentPage('register')} className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all border-2 border-blue-600">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Easy Search</h3>
            <p className="text-slate-600">Find the perfect flight with our advanced search filters and real-time availability.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <CreditCard className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Secure Booking</h3>
            <p className="text-slate-600">Book with confidence using our secure payment system and instant confirmation.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Real-time Updates</h3>
            <p className="text-slate-600">Stay informed with live flight status updates and instant notifications.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Search Flights</h3>
              <p className="text-slate-600">Enter your destination, dates, and preferences to find the best options.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Select & Book</h3>
              <p className="text-slate-600">Choose your flight, review options, and confirm your booking in seconds.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Enjoy Travel</h3>
              <p className="text-slate-600">Get real-time updates, boarding reminders, and seamless travel experience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-slate-600 mb-6">"AirBooking made my trip planning effortless! I found the perfect flights and everything went smoothly."</p>
            <h3 className="text-lg font-bold text-slate-900">- Sarah L.</h3>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-slate-600 mb-6">"The real-time updates are a game-changer. I always knew my flight status instantly."</p>
            <h3 className="text-lg font-bold text-slate-900">- James P.</h3>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-slate-600 mb-6">"Booking was quick and secure. I highly recommend AirBooking for anyone who travels frequently."</p>
            <h3 className="text-lg font-bold text-slate-900">- Maria K.</h3>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} AirBooking. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
            <a href="#" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
