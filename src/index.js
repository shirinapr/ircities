import React from "react";
import ReactDOM from "react-dom";
import IrCities from "./components/IrCities.jsx";
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <IrCities className label/>
  </React.StrictMode>,
  document.getElementById("root")
);
