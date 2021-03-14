import { Button } from "reactstrap";
import React, { useEffect, useImperativeHandle, useState } from "react";
import { Redirect } from "react-router-dom";
import { Input } from "reactstrap";
import Loader from "../Components/Loader";
import "./styles/Dashboard.css";
import logo from "../assets/original.gif";
import ReactDOM from "react-dom";
import { BiRightArrow } from "react-icons/bi";
import axios from "axios";

interface Person {
  id: number;
  name: string;
  surname: string;
  email: string;
  birthdate: string;
}

interface Post {
  userId: Number;
  dateCreated: string;
  picture: string;
  text: string;
  likes: Number;
  dislikes: Number;
}

export const Dashboard = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [myPosts, setMyPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<Post>({
    userId: 0,
    dateCreated: "",
    picture: "",
    text: "",
    likes: 0,
    dislikes: 0,
  });
  const [givenUser, setGivenUser] = useState<Person>({
    id: 0,
    name: "",
    surname: "",
    email: "",
    birthdate: "",
  });

  useEffect(() => {
    //logic for getting a local storage value
    const data = localStorage.getItem("myData");
    let arr = {};
    if (data) {
      arr = JSON.parse(data);

      const array = Object.entries(arr);
      console.log("array", array);
      const user = Object.fromEntries(array);
      console.log("USER", user);
      var userData = Object.keys(user).map((key) => `${user[key]}`);
      setGivenUser({
        id: Number(userData[0]),
        name: userData[1].toString(),
        surname: userData[2].toString(),
        email: userData[3].toString(),
        birthdate: userData[4].toString(),
      });
      setIsAuth(true);
    } else {
      // <Redirect to="/login" />;
      // setIsAuth(false);
      // localStorage.clear();
    }

    console.log("givenuser: ", givenUser);
  }, []);

  useEffect(() => {
    if (isAuth == true) {
      axios
        .get(`http://localhost:7070/api/posts/?userId=${givenUser.id}`)
        .then((response) => setMyPosts(response.data));
    }
    console.log("my posts", myPosts);
  }, [isAuth]);

  const Logout = () => {
    setIsAuth(false);
    localStorage.clear();
  };

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  const handleClick = () => {
    axios
      .post("http://localhost:7070/api/posts/post", newPost)
      .then((resp) => console.log("response", resp.data));
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="row dashboard-row">
          <div className="col-4 col-sm-3 left-panel">
            <div className="d-flex justify-content-center">
              <h5>Welcome {givenUser.name} </h5>
            </div>
          </div>
          <div className="col-4 col-sm-7 body-panel">Posts</div>
          <div className="col-4 col-sm-2 right-panel">NEWS</div>
        </div>
        <div className="row dashboard-row">
          <div className="col-4 col-sm-3 left-panel">
            {" "}
            <div className="d-flex justify-content-center">
              {" "}
              <img
                className="catlook-profile-pic mt-15"
                src={logo}
                alt="loading..."
              />
            </div>
          </div>
          <div className="col-4 col-sm-7 body-panel">
            <div className="post-add-input-wrapper">
              <Input
                className="add-post-input"
                placeholder="Pievienot jaunu ierakstu"
                onChange={(e) =>
                  setNewPost({
                    ...newPost,
                    text: e.target.value,
                    userId: givenUser.id,
                  })
                }
              ></Input>
              <BiRightArrow
                className="right-arrow-send"
                size="20"
                onClick={() => handleClick()}
              />
            </div>
          </div>
          <div className="col-4 col-sm-2 right-panel">.col-2 .col-md-4</div>
        </div>

        {/* <div className="col-sm-12 btn btn-primary">Dashboard</div>
      <h1>Welcome {givenUser} </h1>
      <Button onClick={Logout}>Logout</Button>

      <div>isAuth: {isAuth.toString()}</div> */}
      </div>
      <Button onClick={Logout}>Logout</Button>
    </>
  );
};
