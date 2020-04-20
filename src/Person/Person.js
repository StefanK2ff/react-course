import React from "react";

export default function Person(props) {
  const { name, age } = props;
  return (
    <div>
      <p>
        I'm {name} and {age}
      </p>
      <p>
          {props.children}
      </p>
    </div>
  );
}
