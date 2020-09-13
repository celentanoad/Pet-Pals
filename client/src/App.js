import React, { useState } from 'react';
import { Grommet, Main } from 'grommet';
import './App.css';
import NavBar from './components/NavBar';
import theme from './theme';
import LandingPage from './components/pages/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageFooter from './components/PageFooter';

function App() {
  const [user, setUser] = useState("Butter");
  const [darkMode, setDarkMode] = useState("dark");

  const toggleDarkMode = () => {
    if (darkMode === "dark") setDarkMode("light");
    else setDarkMode("dark");
  }

  return (
    <Router>
      <Grommet theme={theme} themeMode={darkMode} >
        <NavBar user={user} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Route exact path="/" component={ LandingPage } />
        <PageFooter />
      </Grommet>
    </Router>
  );
}

export default App;
