import React, { useState } from 'react';
import { Grommet, Main } from 'grommet';
import './App.css';
import NavBar from './components/NavBar';
import theme from './theme';
import LandingPage from './components/pages/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageFooter from './components/PageFooter';
import SignUpPage from './components/pages/SignUpPage';
import LogInPage from './components/pages/LogInPage';

function App() {
  const [user, setUser] = useState(null);
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
        <Switch>
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={LogInPage} />
        </Switch>
        <PageFooter />
      </Grommet>
    </Router>
  );
}

export default App;
