import React, { useState } from 'react';
import { Grommet, Main } from 'grommet';
import './App.css';
import NavBar from './components/NavBar';
import theme from './theme';
import LandingPage from './components/pages/LandingPage';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PageFooter from './components/PageFooter';
import SignUpPage from './components/pages/SignUpPage';
import LogInPage from './components/pages/LogInPage';
import ProfilePage from './components/pages/ProfilePage';
import FriendsListPage from './components/pages/FriendsListPage';
import ProfileListPage from './components/pages/ProfileListPage';
import Dashboard from './components/pages/Dashboard';

//Combines react and redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState("dark");

  const toggleDarkMode = () => {
    if (darkMode === "dark") setDarkMode("light");
    else setDarkMode("dark");
  }

  return (
    <Provider store={store}>
    <Router>
      <Grommet theme={theme} themeMode={darkMode} >
        <NavBar user={user} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        {user ?
        <Route exact path="/" component={Dashboard} />
        :
        <Route exact path="/" component={LandingPage} />
        }
        <Switch>
          {!user ?
          <>
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={LogInPage} />
          </>
          : <Redirect to="/" />}
        </Switch>
        <Switch>
          {user ?
          <>
            <Route exact path="/myprofile" component={ProfilePage} />
            <Route exact path="/friends" component={FriendsListPage} />
          </>
          : <Redirect to="/login" />}
          </Switch>
          <Switch>
          <Route exact path="/profiles" component={ProfileListPage} />
        </Switch>
        <PageFooter />
      </Grommet>
    </Router>
    </Provider>
  );
}

export default App;
