const Room = require('../models/Room');

// Get all rooms
exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find(); // Fetch all rooms from the database
    res.status(200).json(rooms); // Send rooms as response
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve rooms' });
  }
};
