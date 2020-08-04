import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation'

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
