require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const BookingRoutes = require('./routes/BookingRoutes');
const UserRoutes = require('./routes/UserRoutes');
const RoomRoutes = require('./routes/RoomRoutes'); // Import RoomRoutes
const winston = require('winston');

const app = express();
const port = process.env.PORT || 8888;

// Logger setup with Winston
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  transports: [new winston.transports.Console()],
});

app.use(cors());
app.use(express.json());
app.use('/bookings', BookingRoutes);
app.use('/users', UserRoutes);
app.use('/rooms', RoomRoutes); // Use RoomRoutes

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.info('MongoDB connected'))
  .catch(err => logger.error(err));

app.listen(port, () => logger.info(`Server running on port ${port}`));
