import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";

const App = () => (
  <div className="container">
    <Header />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
