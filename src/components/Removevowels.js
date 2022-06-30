import React, { useState } from "react";
import "./programe.css";
const Removevowels =() => {
  
  const [string, setString] = useState('');
  const [isDisplay, setDisplay] = useState(true);
        
    const handleChange = (e) =>{
         setDisplay(false);
         setString(e.target.value);
    }
    const Removevowel = () =>{
         setDisplay(true);
         let temp=string;
         temp=temp.replace(/[aeiou]/gi,'');
         setString(temp);
    }
  return (
    <div>
      <h1>Removing Vowels</h1>
      <input type="text" placeholder="Enter a string..."onChange={handleChange}/><br/>
      <button  onClick={Removevowel}>Answer</button>
      <h2>{isDisplay && string}</h2>
    </div> 
  );
}


  export default Removevowels;