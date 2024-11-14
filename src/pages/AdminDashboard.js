import React, { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { api } from '../api';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUsers = async () => {
    const response = await api.get('/users');
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserSubmit = async (userData) => {
    if (currentUser) {
      await api.put(`/users/${currentUser._id}`, userData);
    } else {
      await api.post('/users', userData);
    }
    setCurrentUser(null);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
  };

  const handleDelete = async (id) => {
    await api.delete(`/users/${id}`);
    fetchUsers();
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <UserForm onSubmit={handleUserSubmit} initialData={currentUser} />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default AdminDashboard;
