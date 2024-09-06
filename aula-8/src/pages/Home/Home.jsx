// Home.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import { usersData } from '../data'; // Supondo que os dados estejam em data.js

function Home() {
  const theme = useContext(ThemeContext);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredUsers, setFilteredUsers] = useState(usersData);

  useEffect(() => {
    let filtered = usersData.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sortOrder === 'asc') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredUsers(filtered);
  }, [search, sortOrder]);

  return (
    <div className={`home ${theme}`}>
      <h1>Lista de Usuários</h1>
      <input
        type="text"
        placeholder="Buscar por nome"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Ordenar A-Z</option>
        <option value="desc">Ordenar Z-A</option>
      </select>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name}
            <Link to={`/details/${user.id}`}>Ver detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
