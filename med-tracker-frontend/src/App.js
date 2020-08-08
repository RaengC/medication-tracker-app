import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './Account/Login'
import Register from './Account/Register'
import Medication from './Medication/Medication'
import MedicationNew from './Medication/MedicationNew'
import LandingPage from './LandingPage/LandingPage'


function App() {

  return (

    <BrowserRouter>
      <Navigation />

      <div className="App">
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register /></Route>
          <Route path="/profile"><Medication /></Route>
          <Route path="/addMedication"><MedicationNew /></Route>

          <Route path="/"><LandingPage /></Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
