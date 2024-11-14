const express = require('express');
const router = express.Router();
const { getRooms } = require('../controllers/RoomController'); // Import controller

// Route for fetching rooms
router.get('/', getRooms);

module.exports = router;
