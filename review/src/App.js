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
const {firstname: theFirstOne, last, age, ...other} = obj
console.log(theFirstOne, last, age)
console.log(other)
// React
const Person = (props) => {

  return(
    <div>
      <h2>{props.firstname}</h2>
      <h2>{props.last}</h2>
      <h2>{props.age}</h2>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandBox</h1>
      <Person firstname="Warren" last="Longmire" age={33}/>
      <p>Start editing to see some magic happen!</p>
    </div>
  );
}

export default App;
