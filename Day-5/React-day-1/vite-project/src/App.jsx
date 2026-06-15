import React, { useState } from 'react';
import Home from './Home';
import Navbar from './Navbar';

const App = () => {
  const [state, setState] = useState(0);

  const handlerClick = () => {
    setState(state + 1);
  
  };
   const Decrement = () => {
    
    setState(state - 1);
  };

  return (
    <>
      <div>APP</div>
      <h1>{state}</h1>
      <button onClick={handlerClick}>Increment</button>
      <button onClick={Decrement}>Drecrement</button>
    </>
  );
};

export default App;

