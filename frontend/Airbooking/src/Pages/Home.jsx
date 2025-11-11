import React, { useState } from 'react';
import { Plane, User, LogOut, MapPin, Clock, Calendar, CreditCard, Ticket, Filter, X } from 'lucide-react';

export default function EnhancedFlightBooker() {
  const [flights] = useState([
    { id: 1, from: 'New York', to: 'London', date: '2024-12-15', time: '10:00 AM', price: 500, seatsAvailable: 5, airline: 'SkyWings', duration: '7h 30m' },
    { id: 2, from: 'Paris', to: 'Tokyo', date: '2024-12-18', time: '3:00 PM', price: 650, seatsAvailable: 2, airline: 'AirGlobal', duration: '12h 15m' },
    { id: 3, from: 'Berlin', to: 'Dubai', date: '2024-12-20', time: '8:30 AM', price: 450, seatsAvailable: 0, airline: 'Emirates Plus', duration: '6h 45m' },
    { id: 4, from: 'London', to: 'New York', date: '2024-12-22', time: '6:00 PM', price: 520, seatsAvailable: 8, airline: 'SkyWings', duration: '8h 00m' },
    { id: 5, from: 'Tokyo', to: 'Singapore', date: '2024-12-25', time: '11:30 AM', price: 380, seatsAvailable: 3, airline: 'Asia Air', duration: '5h 20m' },
    { id: 6, from: 'Dubai', to: 'Mumbai', date: '2024-12-28', time: '2:15 PM', price: 290, seatsAvailable: 12, airline: 'Indigo Wings', duration: '3h 10m' },
  ]);

  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [priceFilter, setPriceFilter] = useState('all');
  const [selectedBooking, setSelectedBooking] = useState(null);
  
  const [userProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    memberSince: 'January 2023',
    totalFlights: bookings.length,
    loyaltyPoints: 2450
  });

  const handleBookFlight = (flight) => {
    if (flight.seatsAvailable > 0) {
      const booking = {
        ...flight,
        bookingId: `BK${Math.floor(Math.random() * 900000) + 100000}`,
        status: 'Confirmed',
        bookingDate: new Date().toLocaleDateString(),
        passengerName: userProfile.name
      };
      setBookings([...bookings, booking]);
      setSelectedBooking(booking);
    }
  };

  const handleCancelBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      setBookings(bookings.map(b => 
        b.bookingId === bookingId ? { ...b, status: 'Cancelled' } : b
      ));
    }
  };

  const filteredFlights = flights.filter(f => {
    const matchesSearch = f.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         f.to.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceFilter === 'all' || 
                        (priceFilter === 'low' && f.price < 400) ||
                        (priceFilter === 'medium' && f.price >= 400 && f.price < 600) ||
                        (priceFilter === 'high' && f.price >= 600);
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl shadow-lg">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SkyBooker</h1>
                <p className="text-xs text-gray-500">Your journey begins here</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition"
              >
                <User className="w-5 h-5 text-gray-700" />
                <span className="hidden sm:inline text-gray-700 font-medium">{userProfile.name.split(' ')[0]}</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl transition">
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Section */}
        {showProfile && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-emerald-100">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold">
                  {userProfile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{userProfile.name}</h2>
                  <p className="text-gray-500">{userProfile.email}</p>
                  <p className="text-sm text-gray-400">Member since {userProfile.memberSince}</p>
                </div>
              </div>
              <button onClick={() => setShowProfile(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-emerald-50 rounded-xl p-4">
                <p className="text-emerald-600 text-sm font-medium mb-1">Total Flights</p>
                <p className="text-3xl font-bold text-emerald-900">{bookings.length}</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-blue-600 text-sm font-medium mb-1">Loyalty Points</p>
                <p className="text-3xl font-bold text-blue-900">{userProfile.loyaltyPoints}</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-purple-600 text-sm font-medium mb-1">Phone</p>
                <p className="text-lg font-semibold text-purple-900">{userProfile.phone}</p>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by departure or destination city"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select 
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              >
                <option value="all">All Prices</option>
                <option value="low">Under $400</option>
                <option value="medium">$400 - $600</option>
                <option value="high">Above $600</option>
              </select>
            </div>
          </div>
        </div>

        {/* Available Flights */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Available Flights</h2>
            <span className="text-sm text-gray-500">{filteredFlights.length} flights found</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredFlights.map(flight => (
              <div key={flight.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3 text-white">
                  <p className="text-sm font-medium">{flight.airline}</p>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{flight.from}</p>
                      <p className="text-xs text-gray-500">Departure</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Plane className="w-5 h-5 text-emerald-500 mb-1" />
                      <p className="text-xs text-gray-400">{flight.duration}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{flight.to}</p>
                      <p className="text-xs text-gray-500">Arrival</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-emerald-500" />
                      {flight.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-emerald-500" />
                      {flight.time}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${flight.seatsAvailable === 0 ? 'text-red-500' : flight.seatsAvailable < 5 ? 'text-orange-500' : 'text-emerald-600'}`}>
                        {flight.seatsAvailable === 0 ? 'Sold Out' : `${flight.seatsAvailable} seats left`}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">From</p>
                      <p className="text-2xl font-bold text-gray-900">${flight.price}</p>
                    </div>
                    <button
                      onClick={() => handleBookFlight(flight)}
                      disabled={flight.seatsAvailable === 0}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        flight.seatsAvailable === 0
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {flight.seatsAvailable === 0 ? 'Sold Out' : 'Book Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Confirmation Modal */}
        {selectedBooking && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-scale">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ticket className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                <p className="text-gray-600">Your flight has been successfully booked</p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-4 mb-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking ID:</span>
                  <span className="font-bold text-gray-900">{selectedBooking.bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Route:</span>
                  <span className="font-semibold text-gray-900">{selectedBooking.from} → {selectedBooking.to}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold text-gray-900">{selectedBooking.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-bold text-emerald-600">${selectedBooking.price}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedBooking(null)}
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all shadow-lg"
              >
                Done
              </button>
            </div>
          </div>
        )}

        {/* My Trips */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Trips</h2>
          {bookings.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-md p-12 text-center">
              <Ticket className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No bookings yet</p>
              <p className="text-gray-400 text-sm mt-2">Start exploring flights above to book your next adventure!</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {bookings.map(booking => (
                <div key={booking.bookingId} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className={`px-5 py-3 ${booking.status === 'Confirmed' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' : 'bg-gradient-to-r from-gray-400 to-gray-500'} text-white`}>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{booking.airline}</p>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        booking.status === 'Confirmed' ? 'bg-white bg-opacity-30' : 'bg-white bg-opacity-30'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-900">{booking.from}</p>
                      </div>
                      <Plane className="w-5 h-5 text-emerald-500" />
                      <div className="text-center">
                        <p className="text-xl font-bold text-gray-900">{booking.to}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Booking ID:</span>
                        <span className="font-semibold text-gray-900">{booking.bookingId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Date:</span>
                        <span className="font-semibold text-gray-900">{booking.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Time:</span>
                        <span className="font-semibold text-gray-900">{booking.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Passenger:</span>
                        <span className="font-semibold text-gray-900">{booking.passengerName}</span>
                      </div>
                    </div>

                    {booking.status === 'Confirmed' && (
                      <button
                        onClick={() => handleCancelBooking(booking.bookingId)}
                        className="w-full py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-medium transition"
                      >
                        Cancel Booking
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}