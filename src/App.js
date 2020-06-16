import React from 'react';
import { useState } from 'react';
import './App.css';
import Message from './message.js';

function App() {

  let [count, setCount] = useState(0);
  let [isDay, setIsDay] = useState(false);

  return (
    <div className={`box ${isDay ? 'day' : ''}`}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click to count</button>
      <button onClick={() => setIsDay(!isDay)}> Change theme </button>
      <Message time={`${isDay ? 'morning' : 'evening'}`}></Message>
    </div>
  );
}

export default App;
