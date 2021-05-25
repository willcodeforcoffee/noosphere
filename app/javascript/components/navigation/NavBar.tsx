import {
  AppBar,
  Link,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AppPaths } from "components/AppConstants";
import React from "react";
import { useStyles } from "./NavBar.style";
import { Routes } from "components/Router";
import { useAuthInfo } from "components/providers/AuthProvider";

interface NavBarProps {
  paths: AppPaths;
}

function NavBar(props: NavBarProps): JSX.Element {
  console.log("[NavBar]", props);
  const classes = useStyles();
  const authInfo = useAuthInfo();
  const isLoggedIn = authInfo.token !== undefined;
  console.log("[NavBar]  authInfo", authInfo);

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
        <Typography className={classes.heading} variant="h6" component="p">
          Noösphere
        </Typography>
        {!isLoggedIn && (
          <Link color="inherit" href={Routes.Auth.SignIn}>
            Sign In
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}

export { NavBar, NavBarProps };
