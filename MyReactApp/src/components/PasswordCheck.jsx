import React, { useState } from "react";

export const PasswordCheck = () => {
  const [input, setPassword] = useState("password");
  const [color, setColor] = useState("");
  const [message, setMessage] = useState("");

  const checkPass = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);

    // if (inputValue.length < 5) {
    //   setColor("red");
    //   setMessage("d3iiif");
    // } else if (inputValue.length < 8) {
    //   setColor("orange");
    //   setMessage("pas mal");
    // } else {
    //   setColor("green");
    //   setMessage("nadee");
    // }

    const color =
      inputValue.length < 5
        ? "red"
        : inputValue.length < 8
        ? "orange"
        : "green";
    const message =
      inputValue.length < 5
        ? "d3iiif"
        : inputValue.length < 8
        ? "pas mal"
        : "nadee";

    setColor(color);
    setMessage(message);
  };

  return (
    <>
      <input
        onChange={checkPass}
        type="password"
        placeholder="Enter Your Password"
      ></input>
      <br />
      {/* <h1>Input value: {input}</h1> */}
      <p style={{ color: color }}>{message}</p>
    </>
  );
};
