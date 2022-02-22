import React from "react";
import "./index.css";
import reactLogo from "./react-logo.svg";

export const Header = () => {
  return (
    <div className="header">
      <div>
        Header <img src={reactLogo} />
      </div>
    </div>
  );
};
