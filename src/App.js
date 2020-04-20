import React from 'react';
import './App.css';
import Person from "./Person/Person"

function App() {
  return (
    <div className="App">
      <h1>some text</h1>
      <Person name="Mas"  age="28"/>
      <Person name="Bob"  age="142"> Some hobbies</Person>
      <Person name="Richy"  age="42"/>
    </div>
  )
  //return React.createElement("div", {className: "App"}, React.createElement("h1", null, "some text"));
}

export default App;
