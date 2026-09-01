import { useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const questionArr = [
  {
    question: "Capital of india ?",
    options: ["Gujarat", "Kashmir", "Delhi", "Goa"],
    correctAns: "Delhi",
  },

  {
    question: "Which one is a fruit ?",
    options: ["Onion", "Cucumber", "Tomato", "Potato"],
    correctAns: "Tomato",
  },

];

  return (
    <>
      {/* <h1>hello</h1>
       <Navbar name = {'monitor'} price = {5478566} inStock = {true} />
       <Navbar name = {'mobile'} price = {48795655} inStock = {false}/>
        <Navbar name = {'laptop'} price = {4455} inStock = {true}/>
        <Navbar/> */}

      {questionArr.map(( obj, i) => ( 
        <Navbar key={i} name={obj.question} price={obj.correctAns}/>
      ))}
    </>
  );
}

export default App
