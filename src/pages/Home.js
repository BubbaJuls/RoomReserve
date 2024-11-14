import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to the Room Reservation App</h1>
    <p>Please log in or register to continue.</p>
    <Link to="/login">
      <button>Login</button>
    </Link>
    <Link to="/register" style={{ marginLeft: '10px' }}>
      <button>Register</button>
    </Link>
  </div>
);

export default Home;
