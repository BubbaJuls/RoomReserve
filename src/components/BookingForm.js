import React, { useState } from 'react';

const BookingForm = ({ onSubmit, initialData = {} }) => {
  // Destructure initialData and set defaults to avoid null or undefined values
  const { roomNumber = '', checkInDate = '', checkOutDate = '' } = initialData;

  const [roomNumberState, setRoomNumber] = useState(roomNumber);
  const [checkInDateState, setCheckInDate] = useState(checkInDate);
  const [checkOutDateState, setCheckOutDate] = useState(checkOutDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      roomNumber: roomNumberState,
      checkInDate: checkInDateState,
      checkOutDate: checkOutDateState,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="number"
          placeholder="Room Number"
          value={roomNumberState}
          onChange={(e) => setRoomNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="date"
          value={checkInDateState}
          onChange={(e) => setCheckInDate(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="date"
          value={checkOutDateState}
          onChange={(e) => setCheckOutDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
