import React, { Component } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import "./Loginpage.css";
import { useHistory } from "react-router-dom";

export class LoginPage extends Component {
  state = {
    newUserData: {
      email: "",
      password: "",
    },
    username: "",
  };

  addUrl() {
    axios
      .post("http://localhost:7070/api/post/login", this.state.newUserData)
      .then((response) => {
        console.log(response);
        this.setState({ username: response.data.name });
        console.log(response.data);
        var obj = {
          email: "",
          password: "",
        };
        obj.email = response.data.email;
        obj.password = response.data.password;
        const serializedState = JSON.stringify(obj);
        var a = localStorage.setItem("myData", serializedState);
        console.log("A:", a);
        // const user = response.data.data.name;
        // console.log("message: ", response.data.message, "user: ", user);
        let history = useHistory();
        if (response.data.status === "200") {
          console.log("iekšā");
          history.push("/dashboard");
        } else alert("Invalid User");
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            username: "Please enter valid username or password!",
          });
        }
      });
  }
  render() {
    return (
      <div className="App-container">
        <FormGroup>
          <div className="Label">
            <Label> Your email: </Label>
          </div>

          <Input
            className="Input"
            type="email"
            id="email"
            value={this.state.newUserData.email}
            onChange={(e) => {
              let { newUserData } = this.state;

              newUserData.email = e.target.value;

              this.setState({ newUserData });
            }}
            placeholder="enter your email"
          />
          <div className="Label">
            <Label> Your password: </Label>
          </div>

          <Input
            className="Input"
            type="password"
            id="password"
            value={this.state.newUserData.password}
            onChange={(e) => {
              let { newUserData } = this.state;

              newUserData.password = e.target.value;

              this.setState({ newUserData });
            }}
            placeholder="enter your password"
          />
          <div className="Button">
            <Button onClick={this.addUrl.bind(this)} className="App-button">
              Login
            </Button>
          </div>
        </FormGroup>

        <p itemType="text">UserInfo: {this.state.username}</p>
      </div>
    );
  }
}
