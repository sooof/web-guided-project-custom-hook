import React, { useState, useEffect } from "react";
import "./styles.scss";

const func = () => {
  return "here";
}
const array = [1,2,3,4,5]
const [first, second, third] = array;
console.log(first, second, third)

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandBox</h1>
      <p>Start editing to see some magic happen!</p>
    </div>
  );
}

export default App;
