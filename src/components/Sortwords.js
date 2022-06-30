import React, { useState } from "react";
import "./programe.css";
const Sortwords =() => {
  const [string, setString] = useState('');
        
    const handleChange = (e) =>{
         setString(e.target.value);
    }
    const Sortword = () =>{ 
         let temp=string.split(" ");
         const Arr = Array.from(temp)
         const temp1=Arr.sort();
         document.getElementById("result").innerHTML=temp1;
    }
  return (
    <div>
      <h1>Sortwords</h1>
      <input type="text" placeholder="Enter the words..."onChange={handleChange}/><br/>
      <button  onClick={Sortword}>Answer</button>
      <h2 id="result">-</h2>
    </div> 
  );
}


  export default Sortwords;