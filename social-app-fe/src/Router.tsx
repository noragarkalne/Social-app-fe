import React from "react";
import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { Login as LoginPage } from "./Pages/Authorization/LoginPage";
import { Register as RegisterPage } from "./Pages/Authorization/RegisterPage";
import { Dashboard } from "./Pages/Dashboard";
import { HomePage } from "./Pages/HomePage";

export const Router = () => {
  return (
    <Switch>
      <Route path="/login">
        <Box>
          <LoginPage />
        </Box>
      </Route>
      <Route path="/register">
        <Box>
          <RegisterPage />
        </Box>
      </Route>
      <Route path="/dashboard">
        <Box>
          <Dashboard />
        </Box>
      </Route>
      <Route path="/">
        <Box>
          <HomePage />
        </Box>
      </Route>
    </Switch>
  );
};
