import { Button } from "reactstrap";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export const Dashboard = () => {

//     const [isAuth, setIsAuth] = useState(true);

//     if(!isAuth){
//         return <Redirect to="/login"/>
//     }

//   const getUser = () => {
//     var a = localStorage.getItem("myData");
//     console.log(a);
//   };

  return (
    <>
      <div className="col-sm-12 btn btn-primary">Dashboard</div>
      {/* <h1>Welcome {getUser()} </h1>
      <Button onClick={() => setIsAuth(false)}>Logout</Button>

  <div>isAuth: {isAuth.toString()}</div> */}
    </>
  );
};
