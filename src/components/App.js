
import React,{useState} from "react";
import './../styles/App.css';


const App = () => {
  let [count, setcount] =useState(0);
  return (
   
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={()=>setcount(count+1)}>Click me</button>

    </div>
  )
}

export default App
