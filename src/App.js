import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  const user = null;
  return (
    <div className="app">

      <Router>

        {!user ? (
          <LoginScreen />
        ) : [
          <Switch>

            <Route path="/about">
              <h1>Wow whats up</h1>
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        ]

        }

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}


      </Router>
    </div>
  );
}

export default App;
