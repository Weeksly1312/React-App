import React from "react";
import "../assets/styles/body.css";
import { showAlert } from "../assets/js/content";

export const Content = () => {
  return (
    <>
      <button onClick={showAlert}>Click me</button>
    </>
  );
};




