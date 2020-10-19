import React, { useState, useEffect } from 'react';
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
import * as userAPI from './services/user-api';
import * as profileAPI from './services/profile-api';

//Combines react and redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [darkMode, setDarkMode] = useState("dark");
  const [profiles, setProfiles] = useState([]);

  const toggleDarkMode = () => {
    if (darkMode === "dark") setDarkMode("light");
    else setDarkMode("dark");
  }

  const handleSignUpOrLogin = async () => {
    const user = await userAPI.getUser();
    setUser(user);
    handleGetProfile(user._id);
  }

  const handleLogOut = () => {
      userAPI.logout();
      setUser(null);
  }
  
  const handleGetProfile = async (id) => {
    const userProfile = await profileAPI.getProfile(id);
    setProfile(userProfile);
  }

  const addOrUpdateProfile = async (data) => {
    try {
      const newProfile = await profileAPI.createOrEditProfile(data);
      setProfile(newProfile);
  } catch (err) {
      console.error(err)
  }
}
  
  
  useEffect(() => {
    fetch("http://localhost:3001/api/profiles")
      .then(res => res.json())
      .then(
        (result) => {
          setProfiles(result);
        },
        (error) => {
          console.error(error)
        }
      )
  }, [])

  return (
    <Provider store={store}>
    <Router>
      <Grommet theme={theme} themeMode={darkMode} >
        <NavBar user={user} toggleDarkMode={toggleDarkMode} darkMode={darkMode} handleLogOut={handleLogOut}/>
        {user ?
        <Route exact path="/"
           render={({ history}) => (
             <Dashboard history={history}/>
           )} />
        :
        <Route exact path="/" component={LandingPage} />
        }
        <Switch>
          {!user ?
          <>
          <Route 
            exact path="/signup"
            render={({ history }) => (
              <SignUpPage history={history} handleSignUpOrLogin={handleSignUpOrLogin} />
            )}
          />
          <Route exact path="/login" 
            render={({ history}) => (
              <LogInPage history={history} handleSignUpOrLogin={handleSignUpOrLogin} />
            )}
          />
          </>
          : <Redirect to="/" />}
        </Switch>
        <Switch>
          {user ?
          <>
            <Route exact path="/myprofile" 
              render={({ history}) => (
                <ProfilePage history={history} profile={profile} user={user} addOrUpdateProfile={addOrUpdateProfile}/>
              )}
            />
            <Route exact path="/friends" 
              render={({ history }) => (
                <FriendsListPage history={history} profile={profile} />
              )}
            />
          </>
          : <Redirect to="/login" />}
          </Switch>
          <Switch>
          <Route 
            exact path="/profiles" 
            render={() => (
              <ProfileListPage profiles={profiles} user={user} />
            )} 
          />
        </Switch>
        <PageFooter />
      </Grommet>
    </Router>
    </Provider>
  );
}

export default App;
