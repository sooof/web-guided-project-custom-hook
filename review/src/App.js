import React, { useState, useEffect } from "react";
import "./styles.scss";

const func = () => {
  return "here";
}
// const array = [func,2,3,4,5]
const array = [1,2,3,4,5]
const [first, second, third, ...rest] = array;
console.log(first, second, third)
console.log(rest)
// console.log(first())

// object 
const obj = {
  firstname: "warren",
  last: "Longmire",
  job: "teacher",
  age: 33
}
const {firstname, last, age, ...other} = obj
console.log(firstname, last, age)
console.log(other)
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandBox</h1>
      <p>Start editing to see some magic happen!</p>
    </div>
  );
}

export default App;
