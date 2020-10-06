import React from 'react';
import Ball from './Ball'
import Lottery from './Lottery';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Lottery />
        <Lottery title='Mini Lotto' MaxBalls={4} Maxnum={10}/>
  
      </div>
    );

  }
  
}

export default App;
