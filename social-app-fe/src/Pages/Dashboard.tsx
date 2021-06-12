import { Button } from "reactstrap";
import { useEffect, useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import { Input } from "reactstrap";
import "./styles/Dashboard.css";
import logo from "../assets/original.gif";
import { BiRightArrow } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import axios from "axios";

interface Person {
  id: number;
  name: string;
  surname: string;
  email: string;
  birthdate: string;
}

interface Post {
  id?: number;
  userId: number;
  dateCreated: string;
  picture: string;
  text: string;
  like: number;
  dislike: number;
}

export const Dashboard = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [myPosts, setMyPosts] = useState<Post[]>([]);
  const [isLiked, setIsLiked] = useState<Post>();
  const [count, setCount] = useState(0);
  const [post, setPost] = useState<Post>({
    userId: 0,
    dateCreated: "",
    picture: "",
    text: "",
    like: 0,
    dislike: 0,
  });
  const [givenUser, setGivenUser] = useState<Person>({
    id: 0,
    name: "",
    surname: "",
    email: "",
    birthdate: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("myData");
    let arr = {};
    if (data) {
      arr = JSON.parse(data);

      const array = Object.entries(arr);
      console.log("array", array);
      const user = Object.fromEntries(array);
      console.log("USER", user);
      var userData = Object.keys(user).map((key) => `${user[key]}`);
      console.log("USERdata", userData);
      setGivenUser({
        id: parseInt(userData[0]),
        name: userData[1],
        surname: userData[2],
        email: userData[3],
        birthdate: userData[4],
      });
      setIsAuth(true);
      console.log(givenUser);
    } else {
      <Redirect to="/login" />;
      setIsAuth(false);
      localStorage.clear();
    }

    // console.log("givenuser: ", givenUser);
  }, [isAuth]);

  useEffect(() => {
    console.log("kjsjjsij");
    if (isAuth === true) {
      axios
        .get(`http://localhost:7070/api/posts/?userId=${givenUser.id}`)
        .then((response) => setMyPosts(response.data));
    } else {
      <Redirect to="/login" />;
    }
  }, [isAuth]);

  console.log("my posts", myPosts);

  const Logout = () => {
    setIsAuth(false);
    localStorage.clear();
    window.location.reload();
  };

  const updateLikecount = (post: Post) => {
    let dataForUpdate: Post = {
      id: post.id,
      userId: post.userId,
      dateCreated: post.dateCreated,
      picture: post.picture,
      like: post.like ? post.like + 1 : 1,
      dislike: post.dislike,
      text: post.text,
    };
    console.log("dataforupdate", dataForUpdate);
    setCount(dataForUpdate.like);
    console.log();
    axios
      .put(`http://localhost:7070/api/posts/put`, dataForUpdate)
      .then((response) => setIsLiked(response.data));
    console.log("likes", isLiked);
  };

  // if (!isAuth) {
  //   return <Redirect to="/login" />;
  // }

  const handleClick = () => {
    if (post.text || post.picture) {
      axios
        .post("http://localhost:7070/api/posts/post", post)
        .then((resp) => setMyPosts([...myPosts, resp.data]));
    }
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
                  setPost({
                    ...post,
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
        <div className="row dashboard-row">
          <div className="col-4 col-sm-3 left-panel"></div>
          <div className="col-4 col-sm-7 body-panel">
            {myPosts.map((post, index) => (
              <div key={index} className="post-container-wrapper">
                <div>{post.text}</div>
                <div>
                  {post.like}
                  <BsHeartFill
                    className="like-icon"
                    onClick={() => updateLikecount(post)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="col-4 col-sm-2 right-panel"></div>
        </div>
      </div>
      {isAuth ? <Button onClick={() => Logout()}>Logout</Button> : <></>}
    </>
  );
};
