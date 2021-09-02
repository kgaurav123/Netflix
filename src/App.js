import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { auth } from "./firebase";
const Email = createContext();

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (userAuth) => {
        setUser(userAuth);
      }
    )
    return unsubscribe;
  }, []);
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {

        console.log(userAuth);
      }
      else {
        console.log("Logged out")
      }
    })
    return unsub;
  }, []);
  return (
    <div className="app">

      <Router>

        {user ? (
          [
            (<Email.Provider value={user.email}>
              <Switch>
                <Route exact path='/profile'>
                  <ProfileScreen />
                </Route>
                <Route exact path='/'>
                  <HomeScreen />
                </Route>
              </Switch>
            </Email.Provider>)

          ]
        ) :
          <LoginScreen />

        }

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}


      </Router>
    </div>
  );
}

export default App;
export { Email };
