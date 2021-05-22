import {
  AppBar,
  Link,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AppPaths, AuthDetails } from "components/AppConstants";
import React from "react";
import { useStyles } from "./NavBar.style";
import { Routes } from "components/Router";

interface NavBarProps {
  authDetails: AuthDetails;
  paths: AppPaths;
}

function NavBar(props: NavBarProps): JSX.Element {
  console.log("[NavBar]", props);
  const classes = useStyles();

  function onLoginClick() {
    window.location.pathname = props.paths.signIn;
  }

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.heading} variant="h6">
          Noösphere
        </Typography>
        {!props.authDetails.isSignedIn && (
          <Link color="inherit" href={Routes.Auth.SignIn}>
            Sign In
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}

export { NavBar, NavBarProps };
