import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  }; 
  const handleClick2 = () => {
    setCounter(counter - 1);
  };
  const handleClick3 = () => {
    setCounter(0);
  };
  return (
    <div className="App"></div>
    <h1>Counter App</h1>