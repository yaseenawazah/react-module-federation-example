import React from "react";
import "./index.css";
import reactLogo from "./react-logo.svg";

export const Catalog = () => {
  return (
    <div className="catalog">
      <p>
        Catalog <img src={reactLogo} />
      </p>
      <div className="product-list">
        <div className="product-card">product 1</div>
        <div className="product-card">product 2</div>
        <div className="product-card">product 3</div>
        <div className="product-card">product 4</div>
        <div className="product-card">product 5</div>
        <div className="product-card">product 6</div>
      </div>
    </div>
  );
};
