import React, { useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { Container } from "@material-ui/core";
import "./styles/RegisterPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

type User = {
  name: string;
  surname: string;
  birthdate: string;
  email: string;
  password: string;
  interests: string;
  image: string;
  friendRequest: boolean;
  online: boolean;
};

export const Register = () => {
  const [newUser, setNewUser] = useState<User>({
    name: "",
    surname: "",
    birthdate: "",
    email: "",
    password: "",
    interests: "",
    image: "",
    friendRequest: false,
    online: false,
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);

  const registerNewUser = () => {
    axios
      .post("http://localhost:7070/api/post/register", newUser)
      .then((response) => {
        console.log(response);

        if (response.status === 201) {
          setErrorMessage("");
          setIsRegisterSuccess(true);
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
          <div className="alert alert-danger register-alerts" role="alert">
            {errorMessage}
          </div>
        )}
        {isRegisterSuccess === false ? (
          <FormGroup>
            <div className="Label-text">
              <Label> Name: </Label>
            </div>
            <Input
              className="Input"
              type="text"
              id="name"
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              placeholder="First Name"
            />

            <div className="Label-text">
              <Label> Surname: </Label>
            </div>
            <Input
              className="Input"
              type="text"
              id="surname"
              onChange={(e) =>
                setNewUser({ ...newUser, surname: e.target.value })
              }
              placeholder="Last Name"
            />

            <div className="Label-text">
              <Label> E-mail: </Label>
            </div>
            <Input
              className="Input"
              type="email"
              id="e-mail"
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              placeholder="Last Name"
            />

            <div className="Label-text">
              <Label> Birthday: </Label>
            </div>
            <Input
              className="Input"
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
              onChange={(e) =>
                setNewUser({ ...newUser, birthdate: e.target.value })
              }
            />

            <div className="Label-text">
              <Label> Your password: </Label>
            </div>
            <Input
              className="Input"
              type="password"
              id="password"
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              placeholder="Enter your password"
            />

            <div className="Label-text">
              <Label> Repeat your password: </Label>
            </div>
            <Input
              className="Input"
              type="password"
              id="password2"
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              placeholder="Repeat your password"
            />

            <div className="Label-text">
              <Label> Your interests: </Label>
            </div>
            <Input
              className="Input"
              type="text"
              id="interests"
              onChange={(e) =>
                setNewUser({ ...newUser, interests: e.target.value })
              }
              placeholder="Write down some your interests"
            />

            <div className="Label-text">
              <Label for="exampleFile">File</Label>
            </div>
            <Input type="file" name="file" id="exampleFile" />

            <div>
              <Button
                className="Reg-button"
                onClick={registerNewUser.bind(this)}
              >
                Register
              </Button>
            </div>
          </FormGroup>
        ) : (
          <div>Registration was successful, go to login page!</div>
        )}
      </Container>
    </div>
  );
};
