import React, { useState } from 'react';
import { Grommet, Clock } from 'grommet';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState("Butter");
  const [darkMode, setDarkMode] = useState("dark");

  const toggleDarkMode = () => {
    if (darkMode === "dark") setDarkMode("light");
    else setDarkMode("dark");
  }

  return (
    <Grommet themeMode={darkMode}>
    <NavBar user={user} toggleDarkMode={toggleDarkMode} />
    <div>Welcome to Pet Pals</div>
    {darkMode === "dark" ?
    <div>Dark Mode is ON</div>
      :
      <div>Dark Mode is OFF</div>
  }
    </Grommet>
  );
}

export default App;
