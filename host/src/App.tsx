import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Header } from "header/Header";
import { Catalog } from "catalog/Catalog";
import reactLogo from "./react-logo.svg";

const App = () => (
  <div className="container">
    <div>
      Host React only <img src={reactLogo} />
    </div>
    <Header />
    <Catalog />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
