import React from "react";
import "../assets/styles/body.css";
import { showAlert, checkAge } from "../assets/js/content";



export const Content = () => {
  const age = 20; // Set the age here
  const message = checkAge(age);
  return (
    <>
      <button onClick={showAlert}>Click me</button>
      <button>{message}</button>
    </>
  );
};