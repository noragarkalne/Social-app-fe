import React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { NonAuthRoutes } from "./AuthAndNonAuthConstants";

interface Props {
  Component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
}

export const AuthRoute = ({
  Component,
  path,
  exact = false,
}: Props): JSX.Element => {
  const isAuthed = !!localStorage.getItem("myData");
  const message = "Please log in to view this page";
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) =>
        isAuthed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: NonAuthRoutes.login,
              state: {
                message,
                requestedPath: path,
              },
            }}
          />
        )
      }
    />
  );
};
