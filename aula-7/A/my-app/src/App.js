// src/App.js
import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulando a obtenção de dados de usuários
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>Lista de Usuários</h1>
      <UserList users={users} />
    </div>
  );
};

export default App;
