import React, { Component } from "react";
//import React, {useState} from 'react'; --> when using hooks
import "./App.css";
import Person from "./Person/Person";

export default class App extends Component {
  state = {
    persons: [
      { id: "eaeofisebf", name: "Max", age: 14 },
      { id: "eofifssebf", name: "Bob", age: 12 },
      { id: "eofi12sebf", name: "Richy", age: 124 },
    ],
    listVisble: false,
  };

  nameChangeHandler = (e, id) => {
    const resultIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    })

    const updatePerson = {...this.state.persons[resultIndex]}
    updatePerson.name = e.target.value

    const personList = [...this.state.persons];
    personList[resultIndex] = updatePerson
    
    this.setState({
      persons: personList
    });
  };

  newNameHandler = (e) => {
    this.setState({
      persons: [...this.state.persons, { name: e.target.value, age: 50 }],
    });
  };

  toggleList = () => {
    this.setState({ listVisble: !this.state.listVisble });
  };

  deletePos = (posIndex) => {
    const newList = [...this.state.persons]; // or .slice () makes a true copy / or spread operator
    newList.splice(posIndex, 1);
    this.setState({ persons: newList });
  };

  render() {
    const style = {
      backgroundColor: "blue",
      border: "1px solid red",
    };

    let persons = null;

    if (this.state.listVisble) {
      persons = (
        <div className="list">
          {/* may inefficient */}
          <button
            onClick={() => this.switchNameHandler.bind("BOBOB")}
            style={style}
          >
            SwitchName
          </button>
          {/* Generates a List */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePos(index)}
                key={person.id}
                change={(e) => this.nameChangeHandler(e, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>some text</h1>
        <button onClick={this.toggleList}>toggle List</button>
        {/* {this.state.listVisble ? ( */}
        {persons}
        {/* ) : null} */}
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
