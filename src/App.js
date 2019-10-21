import React from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './components/Number';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Number />
      </header>
    </div>
  );
}

export default App;
