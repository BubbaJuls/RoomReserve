const Booking = require('../models/Booking');

// Create a booking
exports.createBooking = async (req, res) => {
  const { userId, roomNumber, checkInDate, checkOutDate } = req.body;
  try {
    const booking = await Booking.create({ userId, roomNumber, checkInDate, checkOutDate });
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Booking creation failed' });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userId', 'username');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve bookings' });
  }
};

// Update booking
exports.updateBooking = async (req, res) => {
  const { roomNumber, checkInDate, checkOutDate } = req.body;
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { roomNumber, checkInDate, checkOutDate }, { new: true });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Booking update failed' });
  }
};

// Delete booking
exports.deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Booking deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Booking deletion failed' });
  }
};
