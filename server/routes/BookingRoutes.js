const express = require('express');
const { createBooking, getAllBookings, updateBooking, deleteBooking } = require('../controllers/BookingController');

const router = express.Router();

router.post('/', createBooking);
router.get('/', getAllBookings);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);

module.exports = router;
