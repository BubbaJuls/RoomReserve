import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useUser from './hooks/useUser'; // Import useUser hook
import useRooms from './hooks/useRooms'; // Import useRooms hook
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home';
import BookingForm from './components/BookingForm';

const App = () => {
  const { user, handleLogin } = useUser(); // Using the useUser hook
  const { roomData, loading, error } = useRooms(); // Using the useRooms hook

  return (
    <div>
      {loading && <p>Loading rooms...</p>}  {/* Display loading message */}
      {error && <p>{error}</p>}            {/* Display error message */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes based on role */}
        <Route
          path="/user-dashboard"
          element={user?.role === 'user' ? <UserDashboard user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin-dashboard"
          element={user?.role === 'admin' ? <AdminDashboard user={user} /> : <Navigate to="/login" />}
        />
        
        {/* Booking Form Route */}
        <Route
          path="/booking"
          element={<BookingForm initialData={roomData} onSubmit={handleBookingSubmit} />}
        />
      </Routes>
    </div>
  );

  function handleBookingSubmit(data) {
    console.log('Booking data submitted:', data);
  }
};

export default App;
