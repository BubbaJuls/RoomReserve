import React, { useEffect, useState } from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
import { api } from '../api';

const UserDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(null);

  const fetchBookings = async () => {
    const response = await api.get('/bookings');
    setBookings(response.data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleBookingSubmit = async (bookingData) => {
    if (currentBooking) {
      await api.put(`/bookings/${currentBooking._id}`, bookingData);
    } else {
      await api.post('/bookings', bookingData);
    }
    setCurrentBooking(null);
    fetchBookings();
  };

  const handleEdit = (booking) => {
    setCurrentBooking(booking);
  };

  const handleDelete = async (id) => {
    await api.delete(`/bookings/${id}`);
    fetchBookings();
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <BookingForm onSubmit={handleBookingSubmit} initialData={currentBooking} />
      <BookingList bookings={bookings} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default UserDashboard;
