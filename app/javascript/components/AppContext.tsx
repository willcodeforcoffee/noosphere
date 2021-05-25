import React, { ReactNode } from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { GraphQLProvider } from "./providers/GraphQLProvider";
import { AppConstants } from "./AppConstants";

interface AppContextProps {
  constants: AppConstants;
  children: ReactNode;
}

export function AppContext(props: AppContextProps): JSX.Element {
  return (
    <AuthProvider>
      <GraphQLProvider graphqlEndpoint={props.constants.paths.graphql}>
        {props.children}
      </GraphQLProvider>
    </AuthProvider>
  );
}
