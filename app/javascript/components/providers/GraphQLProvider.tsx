import React, { ReactNode } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";

interface GraphQLProviderProps {
  graphqlEndpoint: string;
  children: ReactNode | ReactNode[];
}

function GraphQLProvider(props: GraphQLProviderProps): JSX.Element {
  const client = new ApolloClient({
    uri: props.graphqlEndpoint,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}

export { GraphQLProvider };
