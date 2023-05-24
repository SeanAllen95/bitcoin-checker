import logo from './logo.svg';
import './App.css';
import BitCoinContainer from './containers/BitCoinContainer'
import React from 'react';

function App() {
  return (
    <div className="App">
    <h1 id='page-title'>Find BitCoin Value!!!</h1>
    <BitCoinContainer/>

    </div>
  );
}

export default App;
