import React from "react";
import { Box } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Router } from "./Router";
import { Navigation } from "./Pages/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="nav-wrapper">
        <Navigation />
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
