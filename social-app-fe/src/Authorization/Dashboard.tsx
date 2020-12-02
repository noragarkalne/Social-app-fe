import { Button } from "reactstrap";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

export const Dashboard = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [mys, setMys] = useState({});
  const [givenUser, setGivenUser] = useState("");

  useEffect(() => {
    //logic for getting a local storage value
    const data = localStorage.getItem("myData");
    let arr = {};
    if (data) {
      arr = JSON.parse(data);
    }
    const array = Object.entries(arr);
    const x = Object.fromEntries(array);
    setMys(x);
    console.log(x);
    console.log("mys: ", x.userName);
    var y = Object.keys(x).map((key) => `${x[key]}`);
    setGivenUser(y[2].toString());

    console.log("givenuser: ", givenUser);
  }, []);

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div className="col-sm-12 btn btn-primary">Dashboard</div>
      <h1>Welcome {givenUser} </h1>
      <Button onClick={() => setIsAuth(false)}>Logout</Button>

      <div>isAuth: {isAuth.toString()}</div>
    </>
  );
};
