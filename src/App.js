import React, { Component } from "react";
//import React, {useState} from 'react'; --> when using hooks
import "./App.css";
import UserInput from "./Components/UserInput"
import UserOutput from "./Components/UserOutput"

export default class App extends Component {
  state = {
    userName: "Bob"
  };

  nameChanger = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>some text</h1>
        <UserInput change={this.nameChanger} userName={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
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
