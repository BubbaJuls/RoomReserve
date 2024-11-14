import React, { useState } from 'react';

const UserForm = ({ onSubmit, initialData = {} }) => {
  const [username, setUsername] = useState(initialData.username || '');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(initialData.role || 'user');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password, role });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
