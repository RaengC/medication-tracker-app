import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Container } from 'reactstrap'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Navigation from './Navigation/Navigation'
import Login from './Account/Login'
import Register from './Account/Register'
import Medication from './Medication/Medication'
import MedicationNew from './Medication/MedicationNew'
import MedicationEditList from './Medication/MedicationEditList'
import LandingPage from './LandingPage/LandingPage'
import Edit from './Medication/Edit'
import Add from './Medication/Add'

export const isLoggedIn = () => {
  //need to add if refresh so loggedin checks
  //see notes from Callan in slack (code backend)
  //need an api call to check status in backend
}

function App() {

  const [loggedIn, setLoggedIn] = React.useState(isLoggedIn)

  return (

    <BrowserRouter>
      <Navigation />

      <div className="App">
        <Container>

          <Switch>
            <Route path="/login"><Login setLoggin={setLoggedIn} /></Route>
            <Route path="/register"><Register /></Route>
            <Route path="/profile">{loggedIn ? <Medication /> : <Redirect to={'/login'} />} </Route>

            <Route path="/add">{loggedIn ? <Add /> : <Redirect to={'/login'} />}</Route>
            <Route path="/editList">{loggedIn ? <MedicationEditList /> : <Redirect to={'/login'} />}</Route>
            <Route path="/edit/:id"><Edit /></Route>

            <Route path="/"><LandingPage /></Route>
          </Switch>

        </Container>
      </div>

    </BrowserRouter>
  );
}

export default App;
