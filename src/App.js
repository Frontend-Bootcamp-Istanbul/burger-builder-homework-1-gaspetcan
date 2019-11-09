import React from 'react';
import './App.css';
import {Hamburger, TotalPrice, Ingredients} from "./components";


function App() {
  return (
      <div>
        <Hamburger />
        <TotalPrice />
        <Ingredients />
      </div>
  );
}

export default App;
