import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
import Component1 from './Component1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
        <Helmet>
        <title>Turbo Todo</title>
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <Component1 />
      </div>
    );
  }
}

export default App;
