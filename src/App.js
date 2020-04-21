import React, {Component} from 'react';
//import React, {useState} from 'react'; --> when using hooks
import './App.css';
import Person from "./Person/Person"

export default class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 14},
      {name: "Bob", age: 12},
      {name: "Richy", age: 124}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        ...this.state.persons, {name: "roger", age: 14}
      ]
    })
  }

  render() {
    return (
    <div className="App">
      <h1>some text</h1>
      <button onClick={this.switchNameHandler}>SwitchName</button>
      <Person name="Mas"  age="28"/>
      <Person name="Bob"  age="142"> Some hobbies</Person>
      <Person name="Richy"  age="42"/>
    </div>
  )}
  //return React.createElement("div", {className: "App"}, React.createElement("h1", null, "some text"));
}

// with hooks

// const App = props => {
//   const [ initialState, setPersonsState ] = useState({
//     persons: [
//       {name: "Max", age: 14},
//       {name: "Bob", age: 12},
//       {name: "Richy", age: 124}
//     ]}
//   );
//   const someHandler =() => {
    
//   }
// }