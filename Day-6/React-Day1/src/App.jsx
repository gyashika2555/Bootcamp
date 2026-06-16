import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import FormHandling from './FormHandling';
import MultiForm from './MultiForm';
import Demo from './Demo';
import UserForm from './UserForm';
// import Demo from "./Demo";

const App = () => {
  return (
    <div>
      <Navbar/>
      <div>App</div> 
      <h1>This is heading tag</h1>
      <Home/>
      {/* <Demo/> */}

      {/* <FormHandling></FormHandling>
      <MultiForm></MultiForm>
      <Demo></Demo>
      <UserForm></UserForm> */}
    </div>
  );
};

export default App;

    