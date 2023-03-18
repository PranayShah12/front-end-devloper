import React from "react";
import ReactDOM from "react-dom/client";
import UncontrolledExample from "./Components/carousel";
import Header from "./Components/Header";
import Main from "./Components/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Main />
  </>
);
