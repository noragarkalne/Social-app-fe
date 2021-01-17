import React, { useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { Container } from "@material-ui/core";
import "./RegisterPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="wrapper">
      <Container component="div">
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
            <Label> Birthday: </Label>
          </div>

          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
            onChange={(e) =>
              setNewUser({ ...newUser, surname: e.target.value })
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
            placeholder="enter your password"
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
            placeholder="repeat your password"
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
            placeholder="write down some your interests"
          />

          <div className="Label-text">
            <Label for="exampleFile">File</Label>
          </div>
          <Input type="file" name="file" id="exampleFile" />

          <div>
            <Button color="warning" className="Reg-button">
              Register
            </Button>
          </div>
        </FormGroup>
      </Container>
    </div>
  );
};
