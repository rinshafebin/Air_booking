import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />


        <Route path="*" element={<div className="text-center mt-20 text-2xl">Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
