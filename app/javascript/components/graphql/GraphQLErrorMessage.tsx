import * as React from "react";

interface GraphQLErrorMessageProps {
  source: string;
  error: any;
}

function GraphQLErrorMessage(props: GraphQLErrorMessageProps): JSX.Element {
  console.error(`A GraphQL fetch error in ${props.source}`, props.error);
  return (
    <div>
      <h1>An Application Error Occurred</h1>
      <pre>{props.error}</pre>
    </div>
  );
}

export { GraphQLErrorMessage };
