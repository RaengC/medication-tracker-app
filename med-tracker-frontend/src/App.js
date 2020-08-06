import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './Account/Login'
import Register from './Account/Register'

function App() {

  return (

    <BrowserRouter>
      <Navigation />
      <div className="App">

        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register /></Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
