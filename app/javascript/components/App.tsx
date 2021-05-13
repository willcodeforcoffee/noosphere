import { CssBaseline } from "@material-ui/core";
import React from "react";
import { AppConstants } from "./AppConstants";
import { AppContext } from "./AppContext";
import { Router } from "./Router";

interface AppProps {
  constants: AppConstants;
}

function App(props: AppProps): JSX.Element {
  console.log("[App]");
  return (
    <div id="App">
      <CssBaseline />
      <AppContext constants={props.constants}>
        <Router
          authDetails={props.constants.authDetails}
          paths={props.constants.paths}
        />
      </AppContext>
    </div>
  );
}

export { App, AppProps };
