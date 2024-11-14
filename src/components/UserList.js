import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => (
  <div>
    <h2>Users</h2>
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          Username: {user.username}, Role: {user.role}
          <button onClick={() => onEdit(user)}>Edit</button>
          <button onClick={() => onDelete(user._id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default UserList;
