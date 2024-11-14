import React from 'react';

const BookingList = ({ bookings, onEdit, onDelete }) => (
  <div>
    <h2>Bookings</h2>
    <ul>
      {bookings.map((booking) => (
        <li key={booking._id}>
          Room: {booking.roomNumber}, Check-In: {new Date(booking.checkInDate).toDateString()}, Check-Out: {new Date(booking.checkOutDate).toDateString()}
          <button onClick={() => onEdit(booking)}>Edit</button>
          <button onClick={() => onDelete(booking._id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default BookingList;
