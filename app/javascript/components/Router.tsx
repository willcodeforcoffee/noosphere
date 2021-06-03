import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar, SideDrawer } from "./navigation";
import { Home, Test } from "./pages";
import { Home as AdminHome } from "./pages/admin";
import { NotFound404 } from "./pages/NotFound404";
import { AppPaths, AuthDetails } from "./AppConstants";
import { makeStyles } from "@material-ui/core/styles";

export const Routes = {
  Home: "/",
  Test: "/test",
  Auth: {
    SignIn: "/auth/sign_in",
  },
  Admin: {
    Home: "/admin",
  },
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
  },
}));

interface RouterProps {
  authDetails: AuthDetails;
  paths: AppPaths;
}

export function Router(props: RouterProps): JSX.Element {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  function toggleDrawerOpenState() {
    setDrawerOpen(!isDrawerOpen);
  }

  function closeDrawer() {
    setDrawerOpen(false);
  }

  return (
    <BrowserRouter>
      <NavBar onMenuIconClick={toggleDrawerOpenState} {...props} />
      <SideDrawer isOpen={isDrawerOpen} onCloseDrawer={closeDrawer} />
      <div className={classes.container} onClick={closeDrawer}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={Routes.Test} component={Test} />
          <Route path={Routes.Admin.Home} component={AdminHome} />
          <Route path="*">
            <NotFound404 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
