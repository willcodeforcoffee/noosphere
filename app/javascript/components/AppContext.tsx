import React, { ReactNode } from "react";
import { GraphQLProvider } from "./providers/GraphQLProvider";
import { AppConstants } from "./AppConstants";
import { AuthProvider } from "./providers/AuthProvider";

interface AppContextProps {
  constants: AppConstants;
  children: ReactNode;
}

export function AppContext(props: AppContextProps): JSX.Element {
  return (
    <AuthProvider authDetails={props.constants.authDetails}>
      <GraphQLProvider graphqlEndpoint={props.constants.paths.graphql}>
        {props.children}
      </GraphQLProvider>
    </AuthProvider>
  );
}
