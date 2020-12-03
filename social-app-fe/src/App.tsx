import React from "react";
import "./App.css";
import { LoginPage } from "./Authorization/LoginPage";
import { Register } from "./Authorization/RegisterPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dashboard } from "./Authorization/Dashboard";
import { HomePage } from "./Authorization/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <nav className="navbar">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </nav>{" "}
          <br />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" >
            <LoginPage />
            </Route>
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

