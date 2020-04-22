import React from "react";
import "./Person.css";

export default function Person(props) {
  const { name, age } = props;
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {name} and {age}
      </p>
      
      <p >
          {props.children}
      </p>
      <input type="text" onChange={props.change} value={props.name}/>
    </div>
  );
}
