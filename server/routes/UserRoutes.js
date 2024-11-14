const express = require('express');
const { body } = require('express-validator');
const { createUser, getAllUsers, updateUser, deleteUser, loginUser } = require('../controllers/UserController');

const router = express.Router();

// Registration route (POST /users)
router.post('/', [body('username').isString(), body('password').isString(), body('role').optional().isString()], createUser);

// Get all users (GET /users) - Admin route
router.get('/', getAllUsers);

// Update user details (PUT /users/:id)
router.put('/:id', [body('username').optional().isString(), body('password').optional().isString()], updateUser);

// Delete user (DELETE /users/:id)
router.delete('/:id', deleteUser);

// Login route (POST /users/login)
router.post('/login', [
  body('username').isString().withMessage('Username must be a string'),
  body('password').isString().withMessage('Password must be a string'),
], loginUser);

module.exports = router;
