import React from "react";
import ReactDOM from "react-dom";
import { Catalog } from "./Catalog";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: catalog</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Catalog />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
