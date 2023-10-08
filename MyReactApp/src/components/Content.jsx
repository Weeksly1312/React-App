import React, { useState } from "react";
import { showAlert, checkAge, showMessage } from "../assets/js/content.js"; // Update the import
import "../assets/styles/body.css";

export const Content = () => {
  const [age, setAge] = useState(20);
  const [message, setMessage] = useState(checkAge(age));

  return (
    <>
      <button onClick={showAlert}>Click me</button>
      <button onClick={() => showMessage(setMessage)}>Show Message</button>
      <div className="test">{message}</div>
    </>
  );
};
