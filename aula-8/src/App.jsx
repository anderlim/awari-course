import './App.css';
import React, { useState, createContext } from 'react';
import { Router } from './components';

// Criação do contexto de tema
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`app ${theme}`}>
        <header>
          <button onClick={toggleTheme}>
            Alternar para {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
          </button>
        </header>
        <Router />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
