// import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';



function App() {
  let count = 0;
  
  
  function increment() {
    
    let countEl = document.getElementById("count-el");
    count = count + 1; 
    countEl.innerText = count;
  }
  function decrement() {
    
    let countEl = document.getElementById("count-el");
    count = count - 1; 
    countEl.innerText = count;
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* /* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a> */}
        <h1>COUNTER</h1> 
        <btn class="btn" onClick={() => increment()}>INCREMENT</btn>
        <h2 id="count-el">0</h2>   
        <btn class="btn" onClick={() => decrement()}>DECREMENT</btn>
      
        
      </header>
    </div>
  );
}

export default App;
