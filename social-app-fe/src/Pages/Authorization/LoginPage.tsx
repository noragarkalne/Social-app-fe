import { Container } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";
import "./styles/LoginPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Login: React.FC = () => {
  const [givenData, setGivenData] = useState({
    email: "",
    password: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loginUser = () => {
    axios
      .post("http://localhost:7070/api/post/login", givenData)
      .then((response) => {
        var obj = {
          id: "",
          name: "",
          surname: "",
          email: "",
          birthdate: "",
        };
        obj.id = response.data.id;
        obj.email = response.data.email;
        obj.name = response.data.name;
        obj.surname = response.data.surname;
        obj.birthdate = response.data.birthDate;
        const serializedState = JSON.stringify(obj);
        localStorage.setItem("myData", serializedState);
        console.log("aaa", serializedState);

        if (response.status === 200) {
          setLoggedIn(true);
          return <Redirect to="/dashboard" />;
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
              className="Input-login"
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
              className="Input-login"
              type="password"
              id="password"
              onChange={(e) =>
                setGivenData({ ...givenData, password: e.target.value })
              }
              placeholder="enter your password"
            />

            <div className="btn-row">
              <Button
                color="warning"
                onClick={loginUser.bind(this)}
                className="Reg-button"
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
