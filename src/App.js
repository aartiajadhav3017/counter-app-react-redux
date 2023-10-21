import { useState } from 'react';
import './App.css';
import { Counter } from './features/Counter/Counter';
import { Coin } from './features/Coin/Coin';

function App() {

  return (
    <div className="App">
      <Counter/>
      <Coin/>
    </div>
  );
}

export default App;
