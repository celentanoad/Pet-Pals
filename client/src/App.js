import React, { useState } from 'react';
import { Grommet, Clock } from 'grommet';
import './App.css';
import NavBar from './components/NavBar';
import theme from './theme';

function App() {
  const [user, setUser] = useState("Butter");
  const [darkMode, setDarkMode] = useState("dark");

  const toggleDarkMode = () => {
    if (darkMode === "dark") setDarkMode("light");
    else setDarkMode("dark");
  }

  return (
    <Grommet theme={theme} themeMode={darkMode}>
    <NavBar user={user} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    <div>Welcome to Pet Pals</div>
    </Grommet>
  );
}

export default App;
