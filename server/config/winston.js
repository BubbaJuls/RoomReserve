const winston = require('winston');

// Set up the log level from environment variables, default to 'debug' if not set
const logLevel = process.env.LOG_LEVEL || 'debug';

// Create a logger instance
const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console({ format: winston.format.combine(winston.format.colorize(), winston.format.simple()) }),
  ],
});

module.exports = logger;
