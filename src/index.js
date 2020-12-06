import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const process = (data) => {
  console.log(data);
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App processForm={process} />
  </React.StrictMode>,
  rootElement
);
