import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { state } = useContext(GlobalContext);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (state.isLoggedIn) {
          return children;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
