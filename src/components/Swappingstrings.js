import React, { useState } from "react";
import "./programe.css";
const Swappingstrings =() => {
  const [string, setString] = useState('');
  const [isDisplay, setDisplay] = useState(true);
        
    const handleChange = (e) =>{
         setDisplay(false);
         setString(e.target.value);
    }
    const Swappingstring = () =>{
         setDisplay(true);
         let array=string.split(' ');
         let str1=array[0];
         let str2=array[array.length-1];
         array[0]=str2;
         array[array.length-1]=str1;
         let temp=array.join(" ");
         setString(temp);
    }
  return (
    <div>
      <h1>Swapping of words</h1>
      <input type="text" placeholder="Enter the strings..."onChange={handleChange}/><br/>
      <button  onClick={Swappingstring}>Answer</button>
      <h2>{isDisplay && string}</h2>
    </div> 
  );
}


  export default Swappingstrings;