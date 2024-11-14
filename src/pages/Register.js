import React, { useState } from 'react';
import { api } from '../api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role] = useState('user');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users', { username, password, role });
      console.log('User created successfully:', response.data);
    } catch (err) {
      console.error('Error registering user:', err);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
