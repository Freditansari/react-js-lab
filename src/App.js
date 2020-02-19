import React, { useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Patients from './Components/Patients';
import { Header } from './Components/Header';
import Timer from './Components/Timer';


function App() {

  const didMountRef = useRef(false);
  const [count, setCount] = useState(0);
  useEffect(()=>{
    //alert triggered on load

    if (didMountRef.current) {
      alert("data changed");
      
    } else {

      didMountRef.current=true;
      
    }
   
  },[count]);


  const [todos, setTodos]= useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data =>{
      setTodos(data);
    })
  }, []);

  return (
    <div className="App"> 
      <h1> Hello world </h1>
      <h1> You got <Timer /> - seconds</h1>
      <p>You have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>add to count</button>
     
      <p>

      </p>
    </div>
  );
}

// use CTRL + ~ to open terminal 

export default App;
