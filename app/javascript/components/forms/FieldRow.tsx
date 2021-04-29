import * as React from "react";

interface FormRowProps {
  children: JSX.Element | JSX.Element[];
}

function FieldRow(props: FormRowProps): JSX.Element {
  return <div className="field">{props.children}</div>;
}

export { FieldRow };
