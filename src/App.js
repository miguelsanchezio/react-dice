import React from 'react';
import './App.css';
import RollDice from './RollDice';

function App() {
  return (
    <div className="App">
      <h1>React Dice</h1>
      <RollDice/>
      <p>Made by <a href="https://miguelthedev.com" target="_blank">Miguelthedev.com</a></p>
    </div>
  );
}

export default App;
