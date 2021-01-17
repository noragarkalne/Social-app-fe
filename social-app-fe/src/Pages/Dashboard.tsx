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

      const array = Object.entries(arr);
      const x = Object.fromEntries(array);
      var y = Object.keys(x).map((key) => `${x[key]}`);
      setGivenUser(y[2].toString());
    } else {
      <Redirect to="/login" />;
    }

    console.log("givenuser: ", givenUser);
  }, []);

  const Logout = () => {
    setIsAuth(false);
    localStorage.clear();
  };

  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div className="col-sm-12 btn btn-primary">Dashboard</div>
      <h1>Welcome {givenUser} </h1>
      <Button onClick={Logout}>Logout</Button>

      <div>isAuth: {isAuth.toString()}</div>
    </>
  );
};
