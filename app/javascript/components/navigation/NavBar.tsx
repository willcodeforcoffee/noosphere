import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AppPaths, AuthDetails } from "components/AppConstants";
import React from "react";
import { useStyles } from "./NavBar.style";

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
        <Typography className={classes.heading} variant="h6" component="p">
          Noösphere
        </Typography>
        {!props.authDetails.isSignedIn && (
          <Button color="inherit" onClick={onLoginClick}>
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export { NavBar, NavBarProps };
