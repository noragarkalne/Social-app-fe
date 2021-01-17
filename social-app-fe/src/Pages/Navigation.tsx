import { Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./style/Navigation.css";

export const Navigation = () => {
  return (
    <div className="container-wrapper">
      <nav className="navbar navbar-light nav-link-buttons ">
        <Link to="/" className="nav-btn mr-3">
          Home
        </Link>
        <Link to="/register" className="nav-btn mr-3">
          Register
        </Link>
        <Link to="/login" className="nav-btn">
          Login
        </Link>
      </nav>
    </div>
  );
};
