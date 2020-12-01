import React, { useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import "./Loginpage.css";
import { Container } from "@material-ui/core";

export const LoginPage = (): JSX.Element => {
  const [givenData, setGivenData] = useState({
    email: "",
    password: "",
  });

  const [username, setUsername] = useState("");

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
        console.log("data:", a);
        // const user = response.data.data.name;
        // console.log("message: ", response.data.message, "user: ", user);

        if (response.status === 200) {
          console.log("iekšā");
        } else alert("Invalid User");
      })
      .catch((error) => {
        if (error.response) {
          return <div> "Please enter valid username or password!"</div>;
        }
      });
  };

  return (
    <Container component="div">
      <FormGroup>
        <div className="Label">
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
        <div className="Label">
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
          <Button onClick={loginUser.bind(this)} className="App-button">
            Login
          </Button>
        </div>
      </FormGroup>

      <p itemType="text">UserInfo: {username}</p>
    </Container>
  );
};
