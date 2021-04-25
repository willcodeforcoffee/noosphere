import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./navigation/NavBar";
import { Home } from "./pages/Home";
import { Test } from "./pages/Test";
import { NotFound404 } from "./pages/NotFound404";
import { AppPaths, AuthDetails } from "./AppConstants";
import { SignIn } from "./pages/user_credentials/SignIn";

export const Routes = {
  Home: "/",
  Test: "/test",
  UserCredentials: {
    SignIn: "/user_credentials/sign_in",
  },
};

interface RouterProps {
  authDetails: AuthDetails;
  paths: AppPaths;
}

export function Router(props: RouterProps): JSX.Element {
  return (
    <BrowserRouter>
      <NavBar {...props}></NavBar>
      <div className="p-1">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={Routes.Test} component={Test} />
          <Route path={Routes.UserCredentials.SignIn} component={SignIn} />
          <Route path="*">
            <NotFound404 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
