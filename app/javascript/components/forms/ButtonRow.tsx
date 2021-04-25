import * as React from "react";

interface ButtonRowProps {
  children: JSX.Element | JSX.Element[];
}

function ButtonRow(props: ButtonRowProps): JSX.Element {
  return <div className="block pt-2">{props.children}</div>;
}

export { ButtonRow };
