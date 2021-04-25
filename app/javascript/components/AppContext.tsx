import React, { ReactNode } from "react";
import { GraphQLProvider } from "./providers/GraphQLProvider";
import { AppConstants } from "./AppConstants";

interface AppContextProps {
  constants: AppConstants;
  children: ReactNode;
}

export function AppContext(props: AppContextProps): JSX.Element {
  return <GraphQLProvider graphqlEndpoint={props.constants.paths.graphql}>{props.children}</GraphQLProvider>;
}
