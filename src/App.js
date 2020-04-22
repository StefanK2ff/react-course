import React, { Component } from "react";
//import React, {useState} from 'react'; --> when using hooks
import "./App.css";
import Person from "./Person/Person";

export default class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 14 },
      { name: "Bob", age: 12 },
      { name: "Richy", age: 124 },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [...this.state.persons, { name: newName, age: 14 }],
    });
  };
  newNameHandler = (e) => {
    this.setState({
      persons: [...this.state.persons, { name: e.target.value, age: 50 }],
    });
  };

  render() {
    const style = {
      backgroundColor: "blue",
      border: "1px solid red",
    };

    return (
      <div className="App">
        <h1>some text</h1>
        {/* may inefficient */}
        <button
          onClick={() => this.switchNameHandler.bind("BOBOB")}
          style={style}
        >
          SwitchName
        </button>
        <Person
          name="Max"
          age="28"
          change={this.newNameHandler}
          click={this.switchNameHandler.bind(this, "MAXX")}
        />
        <Person name="Bob" age="142">
          {" "}
          Some hobbies
        </Person>
        <Person name="Richy" age="42" />
      </div>
    );
  }
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
