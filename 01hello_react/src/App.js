import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloComponent from './components/hello_comp';
import FirstClass from './components/class_comp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HelloComponent name="Anas" company="Google"/>
      <FirstClass name="Ahmed" company="Amazon"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
