import { ApolloError } from "@apollo/client";
import * as React from "react";

interface GraphQLErrorMessageProps {
  error: ApolloError;
}

export function GraphQLErrorMessage(props: GraphQLErrorMessageProps) {
  console.error("GraphQLErrorMessage:", props);
  return <div>TODO APOLLOERROR WIDGET</div>;
}
