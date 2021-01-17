import React from "react";
import logo from "../assets/original.gif";
import "./style/HomePage.css";

export const HomePage = () => {
  return (
    <div className="app-container">
      <div className="general-heading">CatLOOK</div>
      <img className="catlook-logo mt-15" src={logo} alt="loading..." />
    </div>
  );
};
