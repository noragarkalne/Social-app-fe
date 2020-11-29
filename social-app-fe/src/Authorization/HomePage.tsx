import React, { Component } from "react";
import logo from "../assets/original.gif";

export class HomePage extends Component {
  render() {
    return (
      <div className="App-container">
        <h1>CatLOOK</h1>
        <img src={logo} alt="loading..." />
      </div>
    );
  }
}
