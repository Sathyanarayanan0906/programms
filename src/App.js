import React from "react";
import { Link } from "react-router-dom";
import './App.css'
function App() {
  return (
    <div className="App">
           <h1 style={{  textAlign:"center", paddingBottom: "1rem",}} >PROGRAMMES</h1>
      <nav>
      <ol className="list">
        <li><Link to="/removevowels">Remove vowels</Link></li>
        <li><Link to="/countvowels">Count Vowels</Link></li>
        <li><Link to="/armstrong">Armstrong Number</Link></li>
        <li><Link to="/palindrome">Palindrome Number</Link></li>
        <li><Link to="/numberofwords">Number of words </Link></li>
        <li><Link to="/primenumber">Prime Number</Link></li>
        <li><Link to="/fibonacci">Fibonacci Series</Link></li>
        <li><Link to="/sortwords">Sort words </Link></li>
        <li><Link to="/countcharacter">character frequency</Link></li>
        <li><Link to="/swappingstrings">Swapping of words</Link></li>
        <li><Link to="/anagram">Anagram</Link></li>
        <li><Link to="/factors">Find Factors </Link></li>
        <li><Link to="/amicable">Amicable Numbers</Link></li> 
        <li><Link to="/lcm">LCM</Link></li>
        <li><Link to="/hcf">HCF</Link></li>
        <li><Link to="/interest">Simple and Compound Interest</Link></li>
        <li><Link to="/matrix">Matrix Transpose</Link></li>
        <li><Link to="/matrixmultiplication">Matrix Multiplication</Link></li>
        <li><Link to="/mostoccuring">Most Occuring Elements</Link></li>
        <li><Link to="/print">possible combinations</Link></li> 
        <li><Link to="/bubblesort">Bubble Sort</Link></li> 
      </ol>
    </nav> 
    </div>
  );
}

export default App;
