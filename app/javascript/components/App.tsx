import React from "react";
import { AppConstants } from "./AppConstants";
import { AppContext } from "./AppContext";
import { Router } from "./Router";

interface AppProps {
  constants: AppConstants;
}

function App(props: AppProps): JSX.Element {
  return (
    <div id="App" className="container w-screen">
      <AppContext constants={props.constants}>
        <Router authDetails={props.constants.authDetails} paths={props.constants.paths} />
      </AppContext>
    </div>
  );
}

export { App, AppProps };
