// src/UserItem.js
import React from 'react';

const UserItem = ({ user }) => {
  return (
    <div className="user-item">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserItem;
