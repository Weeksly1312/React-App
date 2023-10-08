import React from "react";
// import ReactDOM from "react-dom"; //standard way to render React applications for a long time
import { createRoot } from "react-dom/client"; // new API introduced in React 18 that provides a more flexible and concurrent rendering model
import { NavBar } from "./components/navBar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Content } from "./components/Content.jsx";

import "./index.css";

// ReactDOM.render(
//   <>
//     <NavBar />
//     <Content />
//     <Footer />
//   </>,
//   document.getElementById('root')
// );

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <NavBar />
    <Content />
    <Footer />
  </>
);