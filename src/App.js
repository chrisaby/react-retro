import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DisplayMatrix } from './DisplayMatrix';

class App extends Component {
  render() {
    // map
    return (
      <div className="App">
        Retro Matrix Display 
        <DisplayMatrix/>
      </div>
    );
  }
}

export default App;
