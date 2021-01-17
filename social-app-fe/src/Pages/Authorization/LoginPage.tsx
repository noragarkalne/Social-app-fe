import { Container } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";
import "./LoginPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Login: React.FC = () => {
  const [givenData, setGivenData] = useState({
    email: "",
    password: "",
  });

  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loginUser = () => {
    axios
      .post("http://localhost:7070/api/post/login", givenData)
      .then((response) => {
        console.log(response);

        setUsername(response.data.name);
        console.log(response.data);
        var obj = {
          email: "",
          password: "",
          userName: "",
        };
        obj.email = response.data.email;
        obj.password = response.data.password;
        obj.userName = response.data.name;
        const serializedState = JSON.stringify(obj);
        var a = localStorage.setItem("myData", serializedState);

        if (response.status === 200) {
          setLoggedIn(true);
        } else alert("Invalid User");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <div className="wrapper">
      <Container component="div">
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        {loggedIn === false ? (
          <FormGroup>
            <div className="Label-text">
              <Label> Your email: </Label>
            </div>

            <Input
              className="Input"
              type="email"
              id="email"
              onChange={(e) =>
                setGivenData({ ...givenData, email: e.target.value })
              }
              placeholder="enter your email"
            />
            <div className="Label-text">
              <Label> Your password: </Label>
            </div>

            <Input
              className="Input"
              type="password"
              id="password"
              onChange={(e) =>
                setGivenData({ ...givenData, password: e.target.value })
              }
              placeholder="enter your password"
            />

            <div className="Button">
              <Button
                color="warning"
                onClick={loginUser.bind(this)}
                className="App-button"
              >
                Login
              </Button>
            </div>
          </FormGroup>
        ) : (
          <Redirect to="/dashboard" />
        )}
      </Container>
    </div>
  );
};
