import React, { useState } from "react";
import { showAlert, checkAge, showMessage, me } from "../assets/js/content.js"; // Update the import
import "../assets/styles/body.css";

export const Content = () => {
  const [age, setAge] = useState(20);
  const [message, setMessage] = useState(checkAge(age));

  const people = ["Rowe", "Prevost", "Gare"];
  const peopleList = people.map((person, i) => (
    // expression goes here:
    // <li>{`${i}  ${person}`}</li>
    // key
    <li key={'person_' + i}>{person}</li>
  ));

  return (
    <>
      <button onClick={showAlert}>Click me</button>
      <br/>
      <br/>
      <button onClick={() => showMessage(setMessage)}>Show Message</button>
      <br/>
      <br/>
      <div className="test">{message}</div>
      <br/>
      <div>
        <h2>List</h2>
          <ul>{peopleList}</ul>
      </div>
      <br/>
      <h1>{me(2)}</h1>
    </>
  );
};
