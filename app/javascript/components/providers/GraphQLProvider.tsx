import React, { ReactNode } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

interface GraphQLProviderProps {
  graphqlEndpoint: string;
  children: ReactNode | ReactNode[];
}

function getCsrfToken(): string {
  return document
    .querySelector("meta[name=csrf-token]")
    .getAttribute("content");
}

function buildApolloHttpLink(graphqlUri: string): ApolloLink {
  const csrfToken = getCsrfToken();
  return createHttpLink({
    uri: graphqlUri,
    credentials: "same-origin",
    headers: {
      "X-CSRF-Token": csrfToken,
    },
  });
}

function GraphQLProvider(props: GraphQLProviderProps): JSX.Element {
  const client = new ApolloClient({
    link: buildApolloHttpLink(props.graphqlEndpoint),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}

export { GraphQLProvider };
