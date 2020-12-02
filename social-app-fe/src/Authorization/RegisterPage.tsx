import React, { useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { Container } from "@material-ui/core";

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

  return (
    <>
      <Container component="div">
        <FormGroup>
          <div className="Label">
            <Label> Your email: </Label>
          </div>

          <Input
            className="Input"
            type="email"
            id="email"
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
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
              setNewUser({ ...newUser, password: e.target.value })
            }
            placeholder="enter your password"
          />

          <div className="Button">
            <Button onClick={} className="App-button">
              Register
            </Button>
          </div>
        </FormGroup>
      </Container>
    </>
  );
};
