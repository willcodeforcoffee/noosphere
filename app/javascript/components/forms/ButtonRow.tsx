import * as React from "react";

interface ButtonRowProps {
  children: JSX.Element | JSX.Element[];
}

function ButtonRow(props: ButtonRowProps): JSX.Element {
  return <div className="buttonRow">{props.children}</div>;
}

export { ButtonRow };
